import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StateProductsComponent from "./StateProductsComponent"
import { useNavigate, useParams } from "react-router-dom";
import Layout from '../Layout/Layout';

const Allproducts = () => {

  const [products, setProducts] = useState([]);
  const params = useParams();

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8065/api/products/productsByState?state=${params.name}`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div>
        <StateProductsComponent state={params.name} />
        <div className="d-flex flex-wrap">
          {products?.map((p) => (
            <div className="card m-3" style={{ width: "21rem" }}>
              <img
                src={`data:image/png;base64,${p.image}`}
                className="card-img-top"
                alt={p.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">
                  {p.description.substring(0, 200)}...
                </p>
                <p className="card-text"> Rs. {p.price}</p>
                <button className="btn btn-danger"
                >
                  ADD TO CART
                </button>
                <button class="btn btn-secondary ms-1">BUYNOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Allproducts

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import StateProductsComponent from "./StateProductsComponent"
// import { useNavigate, useParams, Link } from "react-router-dom";
// import Layout from '../Layout/Layout';


// const Allproducts = () => {
//   const storedAuth = localStorage.getItem("auth");
//   const user = storedAuth ? JSON.parse(storedAuth) : null;
 
//   const [products, setProducts] = useState([]);
//   const params = useParams();
//   const navigate = useNavigate();
//   const [userid, setuserid] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [photo, setPhoto] = useState("");

//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios.get(http://localhost:8065/api/products/productsByState?state=${params.name});
//       setProducts(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   const addToCart = async () => {
   
//     try {
//       console.log(userid)
//       const { data } = axios.post(
//         "http://127.0.0.1:5400/api/cart/additem",{
//           userid:userid,title,price,description,category,photo
//         }
       
//       );
//       if (data?.success) {
//         toast.error(data?.message);
//       } else {
//         toast.success("Added to cart");
//        // navigate("/dashboard/admin/game");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("something went wrong");
//     }
//   };

//   const handleCart=async(p)=>{
 
//     const stitle=p.title;
//     const sdescription=p.description;
//     const suserid=auth.user.email;
//     const scategory=p.category;
//     const sprice=p.price;
//     const sphoto=p.photo;
//     setTitle(${stitle});
//     setDescription(${sdescription});
//     setuserid(${suserid});
//     setCategory(${scategory});
//     setPhoto(${sphoto});
//     setPrice(${sprice});
//     console.log(title)
//     console.log(photo)
//      addToCart()
//   }

//   return (
//     <Layout>
//       <div>
//         <StateProductsComponent state={params.name} />
//         <div className="d-flex flex-wrap">
//           {products?.map((p) => (
//             <div className="card m-3" style={{ width: "21rem" }} key={p.id}>
//               <img
//                 src={data:image/png;base64,${p.image}}
//                 className="card-img-top"
//                 alt={p.name}
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{p.name}</h5>
//                 <p className="card-text">
//                   {p.description.substring(0, 200)}...
//                 </p>
//                 <p className="card-text"> Rs. {p.price}</p>
//                 <button  className="btn btn-danger" onClick={()=>{
//                       if(!user){navigate("/login")} else{handleCart(p)}}}>
//                   ADD TO CART
//                 </button> 
//                 <button className="btn btn-secondary ms-1">BUYNOW</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default Allproducts;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Paper, Button, TextField } from '@mui/material';
import Layout from '../../Layout/Layout';

const ViewSellerDetails = () => {
  const { sId } = useParams();
  const [sellerData, setSellerData] = useState({});

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        const response = await axios.get(`http://localhost:8065/api/sellers/${sId}`);
        console.log('Response:', response.data);
        setSellerData(response.data);
      } catch (error) {
        console.error('Error fetching seller data:', error);
      }
    };

    if (sId) {
      fetchSellerData();
    }
  }, [sId]);

  if (!sId) {
    return (
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Invalid Seller ID
        </Typography>
      </Paper>
    );
  }

  const handleReject = async () => {
    try {
      await axios.delete(`http://localhost:8065/api/sellers/${sId}`);
      // Redirect or handle rejection as needed
    } catch (error) {
      console.error('Error rejecting seller:', error);
    }
  };

  return (
    <Layout>
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom style={{ color: 'dark' }}>
        Seller Details
      </Typography>

      <TextField
        label="GST Number"
        fullWidth
        value={sellerData?.gstNo || ''}
       
        style={{ marginBottom: '16px', color: 'dark' }}
      />
      <TextField
        label="Username"
        fullWidth
        value={sellerData?.username || ''}
        
        style={{ marginBottom: '16px', color: 'dark' }}
      />
      <TextField
        label="Password"
        fullWidth
        value={sellerData?.password || ''}
        
        style={{ marginBottom: '16px', color: 'dark' }}
      />
      <TextField
        label="Company Name"
        fullWidth
        value={sellerData?.companyName || ''}
       
        style={{ marginBottom: '16px', color: 'dark' }}
      />
      <TextField
        label="Owner Name"
        fullWidth
        value={sellerData?.ownerName || ''}
       
        style={{ marginBottom: '16px', color: 'dark' }}
      />
      <TextField
        label="City"
        fullWidth
        value={sellerData?.city || ''}
        
        style={{ marginBottom: '16px', color: 'dark' }}
      />
      <TextField
        label="State"
        fullWidth
        value={sellerData?.state || ''}
       
        style={{ marginBottom: '16px', color: 'dark' }}
      />
      <TextField
        label="Category"
        fullWidth
        value={sellerData?.category || ''}
        
        style={{ marginBottom: '16px', color: 'dark' }}
      />
      <TextField
        label="Account Number"
        fullWidth
        value={sellerData?.accountNo || ''}
       
        style={{ marginBottom: '16px', color: 'dark' }}
      />
      <TextField
        label="Bank Name"
        fullWidth
        value={sellerData?.bankName || ''}
        
        style={{ marginBottom: '16px', color: 'dark' }}
      />
      <TextField
        label="IFSC Code"
        fullWidth
        value={sellerData?.ifscCode || ''}
       
        style={{ marginBottom: '16px', color: 'dark' }}
      />

      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: '20px' }}
        onClick={handleReject}
      >
        Delete
      </Button>
    </Paper>
    </Layout>
  );
};

export default ViewSellerDetails;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Typography, Paper, Button, TextField } from '@mui/material';

// const ViewSellerDetails = () => {
//   const { sId } = useParams();
//   const [sellerData, setSellerData] = useState({});

//   useEffect(() => {
//     const fetchSellerData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8065/api/sellers/${sId}`);
//         console.log('Response:', response.data);
//         setSellerData(response.data);
//       } catch (error) {
//         console.error('Error fetching seller data:', error);
//       }
//     };

//     if (sId) {
//       fetchSellerData();
//     }
//   }, [sId]);

//   if (!sId) {
//     return (
//       <Paper elevation={3} style={{ padding: '20px' }}>
//         <Typography variant="h5" gutterBottom>
//           Invalid Seller ID
//         </Typography>
//       </Paper>
//     );
//   }

//   const handleReject = async () => {
//     try {
//       await axios.delete(`http://localhost:8065/api/sellers/${sId}`);
//       // Redirect or handle rejection as needed
//     } catch (error) {
//       console.error('Error rejecting seller:', error);
//     }
//   };

//   return (
//     <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: '20px' }}>
//       <Typography variant="h5" gutterBottom style={{ color: 'black' }}>
//         Seller Details
//       </Typography>

//       <TextField
//         label="GST Number"
//         fullWidth
//         value={sellerData?.gstNo || ''}
//         disabled
//         InputProps={{ style: { color: 'black' } }}
//         style={{ marginBottom: '16px' }}
//       />
//       <TextField
//         label="Username"
//         fullWidth
//         value={sellerData?.username || ''}
//         disabled
//         InputProps={{ style: { color: 'black' } }}
//         style={{ marginBottom: '16px' }}
//       />
//       <TextField
//         label="Password"
//         fullWidth
//         value={sellerData?.password || ''}
//         disabled
//         InputProps={{ style: { color: 'black' } }}
//         style={{ marginBottom: '16px' }}
//       />
//       <TextField
//         label="Company Name"
//         fullWidth
//         value={sellerData?.companyName || ''}
//         disabled
//         InputProps={{ style: { color: 'black' } }}
//         style={{ marginBottom: '16px' }}
//       />
//       <TextField
//         label="Owner Name"
//         fullWidth
//         value={sellerData?.ownerName || ''}
//         disabled
//         InputProps={{ style: { color: 'black' } }}
//         style={{ marginBottom: '16px' }}
//       />
//       <TextField
//         label="City"
//         fullWidth
//         value={sellerData?.city || ''}
//         disabled
//         InputProps={{ style: { color: 'black' } }}
//         style={{ marginBottom: '16px' }}
//       />
//       <TextField
//         label="State"
//         fullWidth
//         value={sellerData?.state || ''}
//         disabled
//         InputProps={{ style: { color: 'black' } }}
//         style={{ marginBottom: '16px' }}
//       />
//       <TextField
//         label="Category"
//         fullWidth
//         value={sellerData?.category || ''}
//         disabled
//         InputProps={{ style: { color: 'black' } }}
//         style={{ marginBottom: '16px' }}
//       />
//       <TextField
//         label="Account Number"
//         fullWidth
//         value={sellerData?.accountNo || ''}
//         disabled
//         InputProps={{ style: { color: 'black' } }}
//         style={{ marginBottom: '16px' }}
//       />
//       <TextField
//         label="Bank Name"
//         fullWidth
//         value={sellerData?.bankName || ''}
//         disabled
//         InputProps={{ style: { color: 'black' } }}
//         style={{ marginBottom: '16px' }}
//       />
//       <TextField
//         label="IFSC Code"
//         fullWidth
//         value={sellerData?.ifscCode || ''}
//         disabled
//         InputProps={{ style: { color: 'black' } }}
//         style={{ marginBottom: '16px' }}
//       />

//       <Button
//         variant="contained"
//         color="secondary"
//         style={{ marginTop: '20px' }}
//         onClick={handleReject}
//       >
//         Delete
//       </Button>
//     </Paper>
//   );
// };

// export default ViewSellerDetails;

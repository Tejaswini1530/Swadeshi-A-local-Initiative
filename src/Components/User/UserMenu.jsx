import React from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  const user = JSON.parse(localStorage.getItem("auth")); // Assuming auth is a JSON string

  console.log(user.Id);
  return (
    <div>
      <h1>UserMenu</h1>
      <ul className="list-group mt-3">
        <NavLink to={`/dashboard/User/Profile/${user.Id}`} className="list-group-item" aria-current="true">
          UserProfile
        </NavLink>
        <NavLink to={`/dashboard/User/Cart/${user.Id}`} className="list-group-item" aria-current="true">
          Cart
        </NavLink>
        {/* <NavLink to={/dashboard/User/orders/${user.Id}}  className="list-group-item" aria-current="true">
          Orders
        </NavLink> */}
      </ul>
    </div>
  );
};

export default UserMenu;
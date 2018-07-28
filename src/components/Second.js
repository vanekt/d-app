import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div>
    Second page
    <NavLink
      to="/first"
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
      To first link
    </NavLink>
  </div>
);

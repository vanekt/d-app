import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div>
    First page
    <NavLink
      to="/second"
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
      To second link
    </NavLink>
  </div>
);

import React from "react";
import styled from "styled-components";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const HeaderContainer = styled.div`
  display: flex;
  flex: 2 1 auto;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>Logo</div>
      <div>About</div>
      <div>Products</div>
      <div>For Teams</div>
      <div>SearchBar</div>
      <div>Login</div>
      <div>SignUp</div>
    </HeaderContainer>
  );
};

export default Header;

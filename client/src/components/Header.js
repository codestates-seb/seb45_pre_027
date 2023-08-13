import React from "react";
import styled from "styled-components";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const StyledHeader = styled.div`
  min-width: auto;
  width: 100%;
  background-color: white;
  height: 56px;
  display: flex;
  border-top: 3px solid orange;
  border-bottom: 1px solid gray;
  position: relative;
  align-items: center;
`;

const HeaderContainer = styled.div`
  width: 1264px;
  max-width: 100%;
  height: 100%;
  gap: 10px;
  display: flex;
  align-items: center;
`;

const HeaderLogoA = styled.a`
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const HeaderLogo = styled.img`
  width: 150px;
  height: 30px;
`;

const HeaderNavi = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const HeaderNaviTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
`;

const HeaderSearchBar = styled.div`
  display: flex;
  margin-left: 10px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const HeaderSearchBarIcon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 30px;
`;

const HeaderSearchBarInput = styled.input`
  flex-direction: row;
  flex-wrap: wrap;
  width: 670px;
  min-width: 200px;
  max-width: 670px;
  display: flex;
  list-style: none;
  border-style: none;
  margin: 0;
`;

const HeaderToolBar = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;
  gap: 10px;
  display: flex;
  list-style: none;
  margin: 0;
`;

const HeaderToolBarLoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
  background-color: #e1ecf4;
  border: 1px solid rgb(122, 167, 199);
  border-radius: 5px;
  cursor: pointer;
`;

const HeaderToolBarLogin = styled.div`
  font-size: 13px;
`;

const HeaderToolBarSignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
  background-color: rgb(10, 149, 255);
  border-radius: 5px;
`;

const HeaderToolBarSignUp = styled.div`
  color: white;
  font-size: 13px;
`;

const HeaderNavigator = ({ title1, href1, title2, href2, title3, href3 }) => {
  return (
    <HeaderNavi>
      <HeaderNaviTitle href={href1}>{title1}</HeaderNaviTitle>
      <HeaderNaviTitle href={href2}>{title2}</HeaderNaviTitle>
      <HeaderNaviTitle href={href3}>{title3}</HeaderNaviTitle>
    </HeaderNavi>
  );
};

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderLogoA>
          <HeaderLogo
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
            alt="Logo"
          />
        </HeaderLogoA>
        <HeaderNavigator title1={"About"} href1={""} />
        <HeaderNavigator title2={"Products"} href2={""} />
        <HeaderNavigator title3={"For Teams"} href3={""} />
        <HeaderSearchBar>
          <HeaderSearchBarIcon
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
            alt="Icon"
          />
          <HeaderSearchBarInput
            name="q"
            type="text"
            role="combobox"
            placeholder="Search…"
            value=""
            autocomplete="off"
            maxlength="240"
            class="s-input s-input__search js-search-field "
            aria-label="Search"
            aria-controls="top-search"
            data-controller="s-popover"
            data-action="focus->s-popover#show"
            data-s-popover-placement="bottom-start"
            aria-expanded="false"
          ></HeaderSearchBarInput>
        </HeaderSearchBar>
        <HeaderToolBar>
          <HeaderToolBarLoginContainer>
            <HeaderToolBarLogin href="/login">Log in</HeaderToolBarLogin>
          </HeaderToolBarLoginContainer>
          <HeaderToolBarSignUpContainer>
            <HeaderToolBarSignUp href="/signup">Sign Up</HeaderToolBarSignUp>
          </HeaderToolBarSignUpContainer>
        </HeaderToolBar>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;

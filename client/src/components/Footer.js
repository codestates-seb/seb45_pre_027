import React from 'react';
import styled from 'styled-components';

// CSS 코드입니다.

const StyledFooter = styled.footer`
  background-color: #222;
  color: #999;
  padding: 2rem 0;
`;

const FooterContainer = styled.div`
  margin-left: 30px;
  max-width: 1264px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 0px;
`;

const FooterLogo = styled.img`
  height: 40px;
  margin-right: 20px;
`;

const FooterNav = styled.nav`
  display: flex;
  flex: 2 1 auto;
  flex-wrap: wrap;
  margin: 10px auto;
`;

const FooterCol = styled.nav`
  flex: 1 0 auto;
  padding: 0;
`;

const FooterHeader = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0 auto;
  color: white;
  font-size: 13px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 5px;
  font-size: 11px;
`;

const FooterAPI = styled.div`
  margin-top: 20px;
`;

const FooterCopyright = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  justify-content: space-between;
  margin-top: -10px;
`;

const FooterCopyrighterList = styled.li`
  list-style-type: none;
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin: 0 20 auto;
`;

const FooterCopyrighterP = styled.p`
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  text-decoration: none;
`;

// js 부분입니다.

const FooterNavi = ({
  title1,
  href1_1,
  content1_1,
  href1_2,
  content1_2,
  title2,
  href2_1,
  content2_1,
  href2_2,
  content2_2,
  href2_3,
  content2_3,
  href2_4,
  content2_4,
  title3,
  href3_1,
  content3_1,
  href3_2,
  content3_2,
  href3_3,
  content3_3,
  href3_4,
  content3_4,
  href3_5,
  content3_5,
  href3_6,
  content3_6,
  href3_7,
  content3_7,
  href3_8,
  content3_8,
  href3_9,
  content3_9,
  title4,
  href4_1,
  content4_1,
  href4_2,
  content4_2,
  href4_3,
  content4_3,
  href4_4,
  content4_4,
  href4_5,
  content4_5,
  href4_6,
  content4_6,
  href4_7,
  content4_7,
  href4_8,
  content4_8,
}) => {
  return (
    <FooterNav>
      <FooterCol>
        <FooterHeader>{title1}</FooterHeader>
        <FooterContent href={href1_1}>{content1_1}</FooterContent>
        <FooterContent href={href1_2}>{content1_2}</FooterContent>
      </FooterCol>
      <FooterCol>
        <FooterHeader>{title2}</FooterHeader>
        <FooterContent href={href2_1}>{content2_1}</FooterContent>
        <FooterContent href={href2_2}>{content2_2}</FooterContent>
        <FooterContent href={href2_3}>{content2_3}</FooterContent>
        <FooterContent href={href2_4}>{content2_4}</FooterContent>
      </FooterCol>
      <FooterCol>
        <FooterHeader>{title3}</FooterHeader>
        <FooterContent href={href3_1}>{content3_1}</FooterContent>
        <FooterContent href={href3_2}>{content3_2}</FooterContent>
        <FooterContent href={href3_3}>{content3_3}</FooterContent>
        <FooterContent href={href3_4}>{content3_4}</FooterContent>
        <FooterContent href={href3_5}>{content3_5}</FooterContent>
        <FooterContent href={href3_6}>{content3_6}</FooterContent>
        <FooterContent href={href3_7}>{content3_7}</FooterContent>
        <FooterContent href={href3_8}>{content3_8}</FooterContent>
        <FooterContent href={href3_9}>{content3_9}</FooterContent>
      </FooterCol>
      <FooterCol>
        <FooterHeader>{title4}</FooterHeader>
        <FooterContent href={href4_1}>{content4_1}</FooterContent>
        <FooterContent href={href4_2}>{content4_2}</FooterContent>
        <FooterContent href={href4_3}>{content4_3}</FooterContent>
        <FooterContent href={href4_4}>{content4_4}</FooterContent>
        <FooterContent href={href4_5}>{content4_5}</FooterContent>
        <FooterContent href={href4_6}>{content4_6}</FooterContent>
        <FooterContent href={href4_7}>
          <FooterAPI>{content4_7}</FooterAPI>
        </FooterContent>
        <FooterContent href={href4_8}>{content4_8}</FooterContent>
      </FooterCol>
    </FooterNav>
  );
};

const FooterCopyrighter = () => {
  return (
    <FooterCopyright>
      <FooterCopyrighterList>
        <li>Blog</li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Linkedin</li>
        <li>Instagram</li>
      </FooterCopyrighterList>
      <FooterCopyrighterP>
        <div>Site design / logo © 2023 Stack Exchange Inc;</div>
        <div>
          user contributions licensed under
          <a href="https://stackoverflow.com/help/licensing"> CC BY-SA</a>
          <span id="svnrev">rev&nbsp;2023.8.9.43572</span>
        </div>
      </FooterCopyrighterP>
    </FooterCopyright>
  );
};

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterLogo
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
          alt="Logo"
        />
        <FooterNavi
          title1="STACK OVERFLOW"
          content1_1="Questions"
          href1_1="https://stackoverflow.com/questions"
          content1_2="Help"
          href1_2="https://stackoverflow.com/help"
        />
        <FooterNavi
          title2="PRODUCTS"
          content2_1="Teams"
          href2_1="https://stackoverflow.com/teams"
          content2_2="Advertising"
          href2_2="https://stackoverflow.com/advertising"
          content2_3="Collectives"
          href2_3="https://stackoverflow.com/collectives"
          content2_4="Talent"
          href2_4="https://stackoverflow.com/talent"
        />
        <FooterNavi
          title3="PRODUCTS"
          content3_1="About"
          href3_1="https://stackoverflow.co/"
          content3_2="Press"
          href3_2="https://stackoverflow.com/company/press"
          content3_3="Work Here"
          href3_3="https://stackoverflow.co/company/work-here/"
          content3_4="Legal"
          href3_4="https://stackoverflow.com/legal/terms-of-service"
          content3_5="Privacy Policy"
          href3_5="https://stackoverflow.com/legal/privacy-policy"
          content3_6="Terms of Service"
          href3_6="https://stackoverflow.com/legal/terms-of-service"
          content3_7="Contact Us"
          href3_7="https://stackoverflow.co/company/contact/"
          content3_8="Cookie Settings"
          href3_8="https://stackoverflow.com/#"
          content3_9="Cookie Policy"
          href3_9="https://stackoverflow.com/legal/cookie-policy"
        />
        <FooterNavi
          title4="STACK EXCHAGE NETWORK"
          content4_1="Technology"
          href4_1="https://stackexchange.com/sites#technology"
          content4_2="Culture & recreation"
          href4_2="https://stackexchange.com/sites#culturerecreation"
          content4_3="Life & arts"
          href4_3="https://stackexchange.com/sites#lifearts"
          content4_4="Science"
          href4_4="https://stackexchange.com/sites#science"
          content4_5="Professional"
          href4_5="https://stackexchange.com/sites#professional"
          content4_6="Business"
          href4_6="https://stackexchange.com/sites#business"
          content4_7="API"
          href4_7="https://api.stackexchange.com/"
          content4_8="Data"
          href4_8="https://data.stackexchange.com/"
        />
        <FooterCopyrighter />
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;

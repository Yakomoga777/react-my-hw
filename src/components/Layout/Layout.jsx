import React from "react";
import {
  StyledFooter,
  StyledHeader,
  StyledSection,
  StyledContainer,
} from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <StyledContainer>
      <StyledHeader>Header</StyledHeader>
      <StyledSection>{children}</StyledSection>
      <StyledFooter>Footer</StyledFooter>
    </StyledContainer>
  );
};

export default Layout;

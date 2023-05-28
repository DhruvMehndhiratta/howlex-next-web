import React from "react";
import {
  Icon,
  PrimaryButton,
  HeaderContainer,
  WrapperContainer,
} from "./Header.styled.ts";
import Container from "@mui/material/Container";
import Image from "next/image";
import Logo from '../../../../../public/static/assets/logo.jpg';

const Header = () => {
  return (
    <WrapperContainer>
      <Container maxWidth="lg">
        <HeaderContainer>
          <Image
            height={36}
            width={36}
            src={Logo}
          />
          <PrimaryButton variant="contained">Connect Wallet</PrimaryButton>
        </HeaderContainer>
      </Container>
    </WrapperContainer>
  );
};

export default Header;

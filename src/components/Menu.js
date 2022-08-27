import React from "react";
import styled from "styled-components";

import WebTube from "../img/logo.png";

import HomeIcon from "@mui/icons-material/Home";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  color: white;
  height: 100vh;
  font-size: 14px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 0.5rem;
`;

const Img = styled.img`
  height: 1.5rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

function Menu() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={WebTube} />
          WebTube
        </Logo>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <YouTubeIcon color="error" />
        </Item>
      </Wrapper>
    </Container>
  );
}

export default Menu;

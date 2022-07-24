import React from "react";
import styled from "styled-components";
import main from "../asset/main.JPG";
import { MdArrowForwardIos } from "react-icons/md";

export default function Home() {
  return (
    <Container>
      <img src={main} alt="" />
      <MdArrowForwardIos />
      <TextBox>
        <Date>22.10.02</Date>
        <Who>
          <div style={{ fontSize: "1.5rem" }}>Hwang Min Hwan</div>
          <div>and</div>
          <div style={{ fontSize: "1.5rem" }}>Jang Sera</div>
        </Who>
      </TextBox>
      <Comments>
        <Wedding style={{ marginLeft: `-30px` }}>wedding</Wedding>
        <div>invitation</div>
      </Comments>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: calc(100%);
  position: relative;
  overflow: hidden;
  /* background-repeat: none;
  background-size: cover;
  background-position: center; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  > svg {
    cursor: pointer;
    position: absolute;
    top: 30%;
    right: 5%;
    font-size: 2rem;
    opacity: 0.5;
  }
`;

const TextBox = styled.div`
  position: absolute;
  top: 3%;
  width: 100%;
  font-family: "Satisfy", cursive;
`;

const Date = styled.div`
  text-align: center;
  font-size: 6rem;
  font-weight: 600;
  color: #222;
`;

const Who = styled.div`
  margin-left: 20px;
  font-size: 1.2rem;
  color: #222;
  margin-bottom: 10px;
`;

const Comments = styled.div`
  position: absolute;
  bottom: 5%;
  right: 6%;
  margin-left: 20px;
  text-align: start;
  font-size: 3rem;
  color: #fff;
  font-family: "Satisfy", cursive;
`;

const Wedding = styled.div`
  position: absolute;
  top: -90%;
  left: 0%;
`;

import React from "react";
import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";

export default function Home() {
  return (
    <Container>
      <Wedding>Wedding</Wedding>
      <img
        src={
          "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FI8WC6%2FbtrH0SAb5mU%2FQGUhlFTsStvcaksNG5J8jk%2Fimg.jpg"
        }
        alt=""
      />
      {/* <MdArrowForwardIos /> */}
      <TextBox>
        <Date>22.10.02</Date>
        <Who>
          <div style={{ fontSize: "1.5rem" }}>Hwang Min Hwan</div>
          <div>and</div>
          <div style={{ fontSize: "1.5rem" }}>Jang Sera</div>
        </Who>
      </TextBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
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
    font-size: 3rem;
    opacity: 0.5;
  }
`;

const TextBox = styled.div`
  position: absolute;
  top: 4%;
  width: 100%;
`;

const Date = styled.div`
  text-align: center;
  font-size: 6rem;
  font-weight: 600;
  color: #fff;
  opacity: 0.5;
  font-family: "Cormorant SC", serif;
  position: relative;

  /* ::before {
    opacity: 1;
    position: absolute;
    top: 10%;
    font-size: 1rem;
    content: "Wedding";
  } */
`;

const Who = styled.div`
  text-align: end;
  margin-top: 200px;
  margin-right: 20px;
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 20px;
  font-family: "Bebas Neue", cursive;
  opacity: 0.6;
`;

const Wedding = styled.div`
  opacity: 0.8;
  position: absolute;
  top: 6%;
  left: 10%;
  font-size: 1rem;
  font-family: "Cormorant SC", serif;
  color: #fff;
`;

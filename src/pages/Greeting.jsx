import React from "react";
import styled from "styled-components";

export default function Greeting() {
  const url = [
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbZ6TmC%2FbtrH32VZ56j%2FQvKKvwUjMEfyHkq5Zxg0uK%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcZ1IjU%2FbtrH32aCZEE%2FjHM2k00ttafiZu044Cdbw0%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F8OpbZ%2FbtrH2g1yDmV%2FiYnteRp9NyC4BgEQPHKqJK%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcHHpU3%2FbtrH32Pdeg3%2FAOcrVqRorB1c6I4GUCucJ0%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbfMAk5%2FbtrH6HqiKz5%2FmBlO9mpLcfCYKY8hboTcQ1%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHuUzO%2FbtrH0Rg5Reo%2Fe7K9oTovHY8AQmKOtdinj1%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fl6V4P%2FbtrH3bMq5mb%2FMLpH2hs0lVWUY3L62JsQJk%2Fimg.jpg",
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGzWps%2FbtrH9Ivr8Xg%2FBVmd1tg99Ca6G34XoyP0Yk%2Fimg.jpg",
  ];
  return (
    <Container>
      <LeftImgBox>
        {url.map((el) => (
          <div key={el}>
            <img src={el} alt="" />
          </div>
        ))}
      </LeftImgBox>
      <Poem>
        <p>내가 당신을 사랑하는 것은</p>
        <br />
        <p style={{ textAlign: "end" }}>심성보 시인</p>
        <br />
        <p>내가 당신을 사랑하는 것은</p>
        <p>당신의 가슴속에 들어가</p>
        <p>살겠다는 것입니다</p>
        <br />
        <p>당신의 춥고 어두운 곳에</p>
        <p>작은 불 하나를 켜고</p>
        <p>당신을 사랑하겠다는 것입니다</p>
        <br />
        <p>내가 당신을 그리워하는 것은</p>
        <p>이 한밤 지새도록</p>
        <p>당신을 갖겠다는 것입니다</p>
        <p>당신의 가난하고 약한 부분까지</p>
        <p>내가 다 어루만져 주겠다는 것입니다</p>
        <br />
        <p>고독하고 외로운 내가</p>
        <p>당신을 가짐으로써</p>
        <p>즐겁고 환한 불이 되어</p>
        <p>이 추운 세상 속에</p>
        <p>가장 따뜻한 불길 하나</p>
        <p>지피겠다는 것입니다</p>
        <br />
        <p>내가 당신을 사랑하는 것은</p>
        <p>당신과 나의 사랑으로 인해</p>
        <p>가장 낮은 곳에서</p>
        <p>가장 높은 세상을</p>
        <p>우리 함게 보겠다는 것입니다</p>
      </Poem>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  /* height: calc(var(--vh, 1vh) * 100); */
  /* height: 100vh; */
  display: flex;
`;

const LeftImgBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    height: calc(100vh / 8);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;

const Poem = styled.div`
  p {
    margin-left: 5px;
  }
`;

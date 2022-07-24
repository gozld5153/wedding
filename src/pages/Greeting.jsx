import React from "react";
import styled from "styled-components";

export default function Greeting() {
  return (
    <Container>
      <ImgBox>
        <img
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGzWps%2FbtrH9Ivr8Xg%2FBVmd1tg99Ca6G34XoyP0Yk%2Fimg.jpg"
          alt=""
        />
      </ImgBox>
      <Invite>
        <p>서로가 마주보며 다져온 사랑을</p>
        <p>이제 함께 한 곳을 바라보며 걸어갈 수 있는</p>
        <p>큰 사랑으로 키우고자 합니다.</p>
        <p>저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게 </p>
        <p>앞날을 축복해 주시면 감사하겠습니다.</p>
      </Invite>
      <FamilyBox>
        <Family>황운하 &middot; 조석순의 장남 황민환</Family>
        <Family>장성모 &middot; 김금자의 장녀 장세라</Family>
      </FamilyBox>
      <AccountBox>
        <p>마음 보내실 곳</p>
        <p>농협 601131-56-111803 예금주: 황민환</p>
        <p>하나은행 37391122546807 예금주: 장세라</p>
      </AccountBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  /* height: 100vh; */
  font-family: "Song Myung", serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImgBox = styled.div`
  width: 60%;
  height: 40%;
  margin: 20px auto;

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }
`;

const Invite = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
  }
`;

const FamilyBox = styled.div`
  margin: 20px 0;
  font-weight: bold;
`;
const Family = styled.div`
  text-align: center;
`;

const AccountBox = styled.div`
  opacity: 0.6;
  padding: 10px;
`;

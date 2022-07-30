import React from "react";
import styled from "styled-components";

export default function Greeting() {
  return (
    <Container>
      <ImgBox>
        <img
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FV56A0%2FbtrIzE1cyns%2FuxtPWqGMZKTFasNiAszYrK%2Fimg.jpg"
          alt=""
        />
      </ImgBox>

      <Border>
        <VoidBox />
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
      </Border>

      <AccountBox>
        <p>마음 보내실 곳</p>
        <p>농협 601131-56-111803 예금주: 황민환</p>
        <p>하나은행 37391122546807 예금주: 장세라</p>
      </AccountBox>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  /* height: 100vh; */
  font-family: "Do Hyeon", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
`;

const ImgBox = styled.div`
  position: absolute;
  width: 100%;
  height: calc(var(--vh, 1vh) * 40);
  margin: 40px auto;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Border = styled.div`
  border: 2px solid #ffe4e1;
  width: 90%;
  margin: 20px auto;
`;

const VoidBox = styled.div`
  height: calc(var(--vh, 1vh) * 40 + 40px);
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
  background-color: #ffe4e1;
`;

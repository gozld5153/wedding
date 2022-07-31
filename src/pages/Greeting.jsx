import React, { useState } from "react";
import styled from "styled-components";
import { BiCopy } from "react-icons/bi";
import Modal from "../Modal";

export default function Greeting() {
  const [modalOnOff, setModalOnOff] = useState(false);
  const handleCopy = (account) => {
    if (navigator.clipboard) {
      console.log("clipboard");
      // (IE는 사용 못하고, 크롬은 66버전 이상일때 사용 가능합니다.)
      navigator.clipboard
        .writeText(account)
        .then(() => {
          setModalOnOff(true);
          setTimeout(() => {
            setModalOnOff(false);
          }, 500);
        })
        .catch(() => {
          alert("복사를 다시 시도해주세요.");
        });
    } else {
      // 흐름 2.
      if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      }

      // 흐름 3.
      const textarea = document.createElement("textarea");
      textarea.value = account;
      textarea.style.top = 0;
      textarea.style.left = 0;
      textarea.style.position = "fixed";

      // 흐름 4.
      document.body.appendChild(textarea);
      // focus() -> 사파리 브라우저 서포팅
      textarea.focus();
      // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
      textarea.select();
      // 흐름 5.
      document.execCommand("copy");
      // 흐름 6.
      document.body.removeChild(textarea);
      setModalOnOff(true);
      setTimeout(setModalOnOff(false), 500);
    }
  };

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
        <CopyBox>
          <p>
            농협 <span>601131-56-111803</span> 예금주: 황민환
          </p>{" "}
          <div onClick={() => handleCopy("601131-56-111803")}>
            <BiCopy />
          </div>
        </CopyBox>

        <CopyBox>
          <p>
            하나은행 <span>37391122546807</span> 예금주: 장세라
          </p>{" "}
          <div onClick={() => handleCopy("37391122546807")}>
            <BiCopy />
          </div>
        </CopyBox>
      </AccountBox>
      {modalOnOff && <Modal />}
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

const CopyBox = styled.div`
  display: flex;

  div {
    display: flex;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
  }
`;

import React from "react";
import styled from "styled-components";
import { GoVerified } from "react-icons/go";

export default function Modal() {
  return (
    <Container>
      <div>
        <GoVerified />
      </div>
      복사되었습니다.
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  padding: 10px;
  width: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: green;
  color: #fff;
  border: 1px solid green;
  border-radius: 5px;
  text-align: center;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

import styled from "styled-components";
import Map from "./Map";
import img from "../asset/jpgdownload.jpg";
import { IoIosWalk, IoIosSubway, IoIosBus, IoIosCar } from "react-icons/io";
import { MdOutlineLocalParking } from "react-icons/md";
import { GiPhone } from "react-icons/gi";

export default function Calendar() {
  return (
    <Container>
      <MiniCalendar>
        <thead>
          <tr>
            <th colSpan={7}>10</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>01</td>
          </tr>
          <tr>
            <td>
              <div>02</div>
            </td>
            <td style={{ color: "#cd5c5c" }}>03</td>
            <td>04</td>
            <td>05</td>
            <td>06</td>
            <td>07</td>
            <td>08</td>
          </tr>
          <tr>
            <td>09</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
          </tr>
          <tr>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
          </tr>
          <tr>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
          </tr>
          <tr>
            <td>30</td>
            <td>31</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </MiniCalendar>

      <Navigation>
        <img src={img} alt="" />
        <ImgBox style={{ display: "flex" }}>
          <Background>
            <IoIosWalk />
          </Background>
          <span>도 보</span>
        </ImgBox>
        <Contents>충무로역 1번 출구에서 약 5분 / 약 615m</Contents>

        <ImgBox style={{ display: "flex" }}>
          <Background>
            <IoIosSubway />
          </Background>
          <span>지하철</span>
        </ImgBox>
        <Contents>
          {" "}
          지하철 3,4호선 충무로역 1번{" "}
          <span>출구 앞 셔틀버스 이용 (3분 간격 운행)</span>
          <p style={{ color: "#cd5c5c" }}>
            셔틀버스는 예식 1시간 전부터 예식 시작 시간까지 운행됩니다.
          </p>
        </Contents>

        <ImgBox style={{ display: "flex" }}>
          <Background>
            <IoIosBus />
          </Background>
          <span>버 스</span>
        </ImgBox>
        <Contents>
          <span>104, 421, 463, 507 / 남산순환버스 2,5</span>
        </Contents>

        <ImgBox style={{ display: "flex" }}>
          <Background>
            <MdOutlineLocalParking />
          </Background>
          <span>주 차</span>
        </ImgBox>
        <Contents>
          <span>라비두스 주차장</span>
        </Contents>

        <ImgBox style={{ display: "flex" }}>
          <Background>
            <IoIosCar />
          </Background>
          <span>주 소</span>
        </ImgBox>
        <Contents>
          <span>서울특벽시 중구 필동로 5길 7(필동3가 62-11번지)</span>
        </Contents>

        <ImgBox style={{ display: "flex" }}>
          <Background>
            <GiPhone />
          </Background>
          <span>문 의</span>
        </ImgBox>
        <Contents>
          <span> 02 - 2265 - 7000</span>
        </Contents>
      </Navigation>
    </Container>
  );
}

const Container = styled.div`
  /* height: calc(var(--vh, 1vh) * 100); */
`;

const MiniCalendar = styled.table`
  /* border: 1px solid black; */
  border-collapse: collapse;
  width: 60%;
  height: 30%;
  margin: 40px auto 10px auto;

  td {
    height: 30px;
    width: 30px;
    text-align: center;
    div {
      width: 30px;
      height: 30px;
      line-height: 30px;
      border: 2px solid red;
      border-radius: 100%;
      margin: 0 auto;
    }
    :first-child {
      color: #cd5c5c;
    }
    :last-child {
      color: #cd5c5c;
    }
    /* border: 1px solid black; */
  }
`;

const Navigation = styled.div`
  width: 90%;
  height: 40%;
  margin: 0 auto;
  font-family: "Do Hyeon", sans-serif;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  p {
    font-size: 0.9rem;
  }
`;

const Background = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* line-height: 25px; */
  background-color: #ea8e99;
  color: #fff;
  svg {
    font-size: 23px;
  }
`;

const Contents = styled.div`
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const ImgBox = styled.div`
  display: flex;
  gap: 10px;
`;

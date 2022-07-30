import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function Calendar() {
  return (
    <Container>
      <MiniCalendar>
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
      </MiniCalendar>
    </Container>
  );
}

const Container = styled.div`
  height: calc(var(--vh, 1vh) * 100);
`;

const MiniCalendar = styled.table`
  /* border: 1px solid black; */
  border-collapse: collapse;
  width: 60%;
  height: 40%;
  margin: 10px auto;

  th,
  td {
    height: 30px;
    width: 30px;
    div {
      width: 30px;
      height: 30px;
      /* line-height: 25px; */
      border: 2px solid red;
      border-radius: 100%;
    }
    :first-child {
      color: #cd5c5c;
    }
    :last-child {
      color: #cd5c5c;
    }
    text-align: center;
    /* border: 1px solid black; */
  }
`;

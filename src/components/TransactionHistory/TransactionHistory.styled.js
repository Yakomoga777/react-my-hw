import styled from "styled-components";

export const TableStyled = styled.table`
  border-collapse: collapse;

  width: 500px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  /* border: 2px solid white; */
  border-radius: 20px;
  box-shadow: 0px -5px 10px white;

  text-align: center;
  font-size: 10px;
`;
export const TheadStyled = styled.thead`
  background-color: gray;
  border-radius: 20px !important;

  tr :first-child {
    border-radius: 20px 0 0 0;
  }
  tr :last-child {
    border-radius: 0 20px 0 0;
  }
  /* background-color: gray;
  border: 1px solid yellow;
  border-radius: 20px !important; */

  /* tr:first-child() {
    border-radius: 20px 0 0 0;
  } */
`;

// export const TheadStyled = styled.thead`
//   background-color: gray;
//   /* border: 5px solid yellow; */
//   border-radius: 20px;

//   tr :first-child {
//     border-radius: 20px 0 0 0;
//   }

//   tr :last-child {
//     border-radius: 0 20px 0 0;
//   }
// `;

export const TrStyled = styled.tr`
  height: 20px;
`;

export const TbodyStyled = styled.tbody`
  tr :nth-child(2) {
    border-right: 1px solid #505050;
    border-left: 1px solid #505050;
  }

  tr:nth-child(2n + 1) {
    background-color: #ababab;
  }
`;

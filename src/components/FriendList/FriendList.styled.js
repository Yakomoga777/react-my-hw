import styled from "styled-components";

// export
export const ListStyled = styled.ul`
  width: 300px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  border: 2px solid white;
  border-radius: 20px;
  box-shadow: 0px -5px 10px white;

  li:first-child {
    border-radius: 20px 20px 0 0;
  }
  li:last-child {
    border-radius: 0 0 20px 20px;
  }
`;

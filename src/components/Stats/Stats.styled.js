import styled from "styled-components";

export const ListStyled = styled.ul`
  display: flex;
  border-top: 2px solid white;

  border-radius: 0px 0px 20px 20px;

  width: 100%;
  margin-top: 50px;
`;

export const ItemStyled = styled.li`
  display: -moz-box;
  flex-grow: 1;
  max-width: 33.33%;
  padding-top: 15px;
  padding-bottom: 15px;

  /* border: 2px solid white; */

  font-size: 15px;
  text-align: center;
`;

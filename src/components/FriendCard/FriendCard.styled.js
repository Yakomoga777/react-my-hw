import styled from "styled-components";

export const FriendItemStyled = styled.li`
  display: flex;

  height: 50px;
  padding: 10px;
  gap: 10px;
  align-items: center;

  box-shadow: 0px 2px 4px white;
`;

export const IndicatorStyled = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color: ${(p) => {
    return p.color;
  }};
`;

export const FotoStyled = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

export const NameStyled = styled.p``;

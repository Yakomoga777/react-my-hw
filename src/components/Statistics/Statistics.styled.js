import styled from "styled-components";

import data from "../../data.json";

// switch (backgroundColor);
export const StatsCardStyled = styled.div`
  width: 300px;
  /* height: 500px; */
  /* padding: 10px; */
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid white;

  border-radius: 20px;
  box-shadow: 0px -5px 10px white;
`;

export const TitleStyled = styled.h2`
  text-align: center;
  font-size: 20px;
`;

export const ListStyled = styled.ul`
  display: flex;
  /* flex-grow: 1; */

  margin-top: 20px;
`;

export const ItemStyled = styled.li`
  flex-grow: 1;
  text-align: center;
  background-color: ${(p) => {
    return p.color;
  }};
`;

export const LadelStyled = styled.p``;
export const PercentageStyled = styled.p``;

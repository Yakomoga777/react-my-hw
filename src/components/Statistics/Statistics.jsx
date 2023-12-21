import React from "react";

import {
  StatsCardStyled,
  ListStyled,
  TitleStyled,
  ItemStyled,
} from "components/Statistics/Statistics.styled";

const Statistics = ({ statistics, title }) => {
  const { id, label, percentage } = statistics;

  // const backgroundColor =
  const getColor = (label) => {
    switch (label) {
      case ".docx":
        return "#c12f2f";

      case ".pdf":
        return "#538f29";

      case ".mp3":
        return "#2f73c1";

      case ".psd":
        return "#cdcd13";

      case ".mp4":
        return "#c12fc1";

      default:
        break;
    }
  };

  // console.log(getColor(".docx"));

  return (
    <StatsCardStyled>
      {title && <TitleStyled>{title.toUpperCase()}</TitleStyled>}
      <ListStyled>
        {statistics.map((i) => {
          // console.log(i.label);
          return (
            <ItemStyled key={i.id} color={getColor(i.label)}>
              <p>{i.label}</p>
              <p>{i.percentage}%</p>
            </ItemStyled>
          );
        })}
      </ListStyled>
    </StatsCardStyled>
  );
};
export default Statistics;

import React from "react";
import { ItemStyled, ListStyled } from "./Stats.styled";

const Stats = ({ stats }) => {
  const { followers, views, likes } = stats;
  return (
    <ListStyled>
      <ItemStyled>
        <p>Followers</p>
        <span>{followers}</span>
      </ItemStyled>
      <ItemStyled>
        <p>Views</p>
        <span>{views}</span>
      </ItemStyled>
      <ItemStyled>
        <p>Likes</p>
        <p>{likes}</p>
      </ItemStyled>
    </ListStyled>
  );
};

export default Stats;

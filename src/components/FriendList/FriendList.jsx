import React from "react";

import FriendCard from "components/FriendCard/FriendCard";
import { ListStyled } from "./FriendList.styled";

const FriendList = ({ friends }) => {
  return (
    <ListStyled>
      {friends.map((i) => {
        return (
          <FriendCard
            key={i.number}
            foto={i.foto}
            name={i.name}
            isOnline={i.isOnline}
            number={i.number}
          />
        );
      })}
    </ListStyled>
  );
};

export default FriendList;

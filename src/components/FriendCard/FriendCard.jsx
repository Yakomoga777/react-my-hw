import React from "react";
import {
  FriendItemStyled,
  IndicatorStyled,
  FotoStyled,
  NameStyled,
} from "./FriendCard.styled";

const getColor = (isOnline) => {
  switch (isOnline) {
    case true:
      return "green";
    case false:
      return "red";
    default:
      return "grey";
  }
};
const FriendCard = ({ foto, name, isOnline, number }) => {
  return (
    <FriendItemStyled>
      <IndicatorStyled color={getColor(isOnline)}>{}</IndicatorStyled>
      <FotoStyled src={foto} alt={`foto ${name}`} />
      <NameStyled>{name}</NameStyled>
    </FriendItemStyled>
  );
};

export default FriendCard;

import React from "react";
import {
  StyledAvatar,
  StyledLocation,
  StyledTag,
  StyledUserName,
} from "./Description.styled";

const Description = ({ avatar, username, location, tag }) => {
  return (
    <>
      <StyledAvatar src={avatar} alt="" />
      <StyledUserName>{username}</StyledUserName>
      <StyledLocation>{location}</StyledLocation>
      <StyledTag>{tag}</StyledTag>
    </>
  );
};

export default Description;

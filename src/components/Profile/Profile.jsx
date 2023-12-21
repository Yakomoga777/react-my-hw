import React from "react";
import PropTypes from "prop-types";

import Description from "components/Description/Description";
import Stats from "components/Stats/Stats";
import { StyledCard } from "./Profile.styled";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <StyledCard>
      <Description
        username={username}
        tag={`@${tag}`}
        location={location}
        avatar={avatar}
      />
      <Stats stats={stats} />
    </StyledCard>
  );
};

export default Profile;

import { GlobalStyle } from "GlobalStyle";
import PropTypes from "prop-types";

import Layout from "./Layout/Layout";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";

import user from "../../src/user.json";
import statistics from "../../src/data.json";
import friends from "../../src/friends.json";

function App() {
  const { username, tag, location, avatar, stats } = user;
  const { id, label, percentage } = statistics;
  const { foto, name, isOnline, number } = friends;

  return (
    <Layout>
      <GlobalStyle />
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics
        // id={id}
        // label={label}
        // percentage={percentage}
        statistics={statistics}
        title="Uploud stats"
      />
      <FriendList friends={friends} />
    </Layout>
  );
}
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      foto: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      number: PropTypes.number.isRequired,
    })
  ),
};

export default App;

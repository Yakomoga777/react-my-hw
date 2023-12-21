import { GlobalStyle } from "GlobalStyle";
import PropTypes from "prop-types";

import Layout from "./Layout/Layout";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";

import user from "../../src/user.json";
import statistics from "../../src/data.json";

function App() {
  const { username, tag, location, avatar, stats } = user;
  const { id, label, percentage } = statistics;

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

export default App;

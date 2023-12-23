const ghpages = require("gh-pages");

// Replace `my-created-react-app` with your repository name
ghpages.publish(
  "build",
  {
    branch: "gh-pages",
    repo: "https://github.com/yakomoga777/react-my-hw.git",
    user: {
      name: "Your Name",
      email: "your.email@example.com",
    },
  },
  (err) => {
    if (err) {
      console.error("Error deploying to GitHub Pages");
      console.error(err);
    } else {
      console.log("Deployed to GitHub Pages");
    }
  }
);

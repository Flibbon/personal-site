import React from "react";

import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="main">
        <h2>welcome to personal site v4.2</h2>
        <p>hi. i’m frankie libbon.</p>
        <p>i’m a <a href="https://www.linkedin.com/in/frankielibbon/" target="_blank" rel="noopener noreferrer">senior software engineer</a> and the tech lead of Mailchimp’s new email editor.</p>
        <p>before that, i was a leader of growth & experimentation engineering best practices at Mailchimp.</p>
        <p>and before <strong>that</strong>, i created web games for companies you might know, including Nickelodeon, Disney, and Nintendo.</p>
        <p>if you’d like to talk to me, i’m right over here: <a href="mailto:frankielibbon@gmail.com">frankielibbon@gmail.com</a></p>
      </div>
    </Layout>
  );
};

export default Home;

import React from "react";

import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="main">
        <h2>welcome to personal site v37.265.43</h2>
        <p>hi. i'm frankie libbon.</p>
        <p>i'm a senior software engineer and the tech lead of <a href="https://mailchimp.com/" target="_blank" rel="noopener noreferrer">Mailchimp</a>'s new email editor.</p>
        <p>before that, i was a leader of growth & experimentation engineering best practices at Mailchimp.</p>
        <p>and before <strong>that</strong>, i created web games for companies you might know, including Nickelodeon, Disney, and Nintendo.</p>
        <p>if you'd like to talk to me, i'm right over here: <a href="mailto:frankielibbon@gmail.com">frankielibbon@gmail.com</a></p>
      </div>
    </Layout>
  );
};

export default Home;

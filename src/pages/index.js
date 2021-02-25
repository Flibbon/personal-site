import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <Layout>
      <SEO title="home" />
      <div className="main">
        <h2>hi.</h2>
        <p>i'm a senior software engineer, the tech lead of <a href="https://mailchimp.com/" target="_blank">Mailchimp</a>'s new email editor, and leader of experimentation & growth best practices at Mailchimp.</p>
        <p>i also used to be a game developer! i created web games from the ground up for companies such as Nickelodeon, Disney, and Nintendo.</p>
        <p>if you want to say hi, i'm always open to chat <a href="mailto:frankielibbon@gmail.com">frankielibbon@gmail.com</a></p>
      </div>
    </Layout>
  );
};

export default Home;

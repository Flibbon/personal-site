import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <Layout>
    <SEO title="no" />
    <h1>no.</h1>
    <p>this doesn't exist.</p>
  </Layout>
);

export default NotFoundPage;

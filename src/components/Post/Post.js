import React from "react";
import Helmet from "react-helmet";
import { graphql } from 'gatsby'

import Layout from "../Layout";

import "./Post.less";

export default function Template({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Helmet title={`flibbon - ${post.frontmatter.title}`} />
      <div>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

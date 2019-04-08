import React from "react";
import { graphql } from 'gatsby'
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Home = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="home" />
      <div className="main">
        <h2>hi.</h2>
        <p>this is a work in progress. but what isn't.</p>
        <Link to="/libbon-life/">see where i libb</Link>
      </div>
      <div>
        <h2>posts.</h2>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <Link to={post.frontmatter.path} key={post.id} className="post">
                <div className="post_header">
                  <h3 className="post_title">{post.frontmatter.title}</h3>
                  <p className="post_date">{post.frontmatter.date}</p>
                </div>
                <p className="post_excerpt">{post.excerpt}</p>
              </Link>
            );
          })}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 120)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

export default Home;

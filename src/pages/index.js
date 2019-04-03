import React from "react";
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
        <p>personal website. it's a work in progress. but whose isn't.</p>
        <Link to="/contact/">contact me</Link>
      </div>
      <div>
        <h2>posts.</h2>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <Link to={post.frontmatter.path} key={post.id} className="postLink">
                <div className="postContainer">
                  <div className="postHeader">
                    <h3 className="postTitle">
                        {post.frontmatter.title}
                    </h3>
                    <p className="postDate">{post.frontmatter.date}</p>
                  </div>
                  <p className="postExcerpt">{post.excerpt}</p>
                </div>
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

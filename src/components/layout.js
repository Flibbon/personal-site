import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Header from "./Header/Header";
import "./Normalize.css";
import "./Layout.less";

const Layout = ({ children }) => (
    <Fragment>
      <Header siteTitle="flibbon" />
      <div className="content">
        <main>{children}</main>
      </div>
    </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

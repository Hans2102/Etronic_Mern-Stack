import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout>
      <div className="pnf">
        <h1 className="pnf-title">not found</h1>
        <h2 className="pnf-title"></h2>
        <Link to="/" className="pnf-btn">
          Go back</Link>

      </div>
    </Layout>
  );
};

export default Pagenotfound;

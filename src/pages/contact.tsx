import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 className="cover-heading">Contact</h1>
    <p className="lead">
      This single page application aims to be the fastest, most cost effective way to get your retail store online. Square is the glue between your new website, your physical stores, and your bank account.
    </p>
    <p className="lead">
      <a href="mailto:idaho@tridentprofessionalservices.com" className="btn btn-lg btn-secondary">Learn more</a>
    </p>
  </Layout>
);

export default ContactPage;

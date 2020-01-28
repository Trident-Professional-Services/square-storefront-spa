import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="about" />
    <h1 className="cover-heading">About</h1>
    <p>
    Trident Professional Services was contacted by a client about integrating Square with an existing Wordpress site. Wordpress is great, but we believe that the JAMStack offers advantages that Wordpress can't achieve.
That's why we are building an open source Square Storefront.
As we build, we will give away the source with instructions to any and all who are interested.
We want this to be the leanest way to get your retail operation on the web.
    </p>
    <p className="lead">
      <a href="mailto:idaho@tridentprofessionalservices.com" className="btn btn-lg btn-secondary">Learn more</a>
    </p>
  </Layout>
);

export default AboutPage;

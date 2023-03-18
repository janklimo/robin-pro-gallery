import { FC } from "react";

import Layout from "../components/Layout";

export const About: FC = () => {
  return (
    <Layout
      customMeta={{
        title: "What's New - Robin PRO Image Gallery",
      }}
    >
      <h1>About Page</h1>
      <p>Welcome to the about page</p>
    </Layout>
  );
};

export default About;

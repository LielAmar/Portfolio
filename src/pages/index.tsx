import Layout from "../components/Layout";
import Introduction from "../components/Introduction/Introduction";
import Skills from "../components/Skills/Skills";
import Works from "../components/Work/Works";

import { __project__ } from "../config/global";

const IndexPage = () => {
  return (
    <Layout title={ `Home - ${__project__}` }>
      <Introduction />

      <Skills />

      <Works />

    </Layout>
  );
}

export default IndexPage;
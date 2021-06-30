import { NextPageContext } from "next";

import { useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "@components/Layout";

import { __name__ } from "@config/global";

import styles from "../styles/error.module.css";

const Error = ({ statusCode }: { statusCode: Number }) => {
  const router = useRouter();

  // Redirecting to home page after 10 seconds
  useEffect(() => {
    setTimeout(() => router.push("/", undefined, { scroll: false }), 10000);
  });

  return (
    <Layout title={ `${__name__} | An Error Occured` } description={ `` }>
      
      <div className={ styles.error }>
        <h4>{ statusCode ? statusCode : `Client Error` }</h4>
        <p>{ statusCode ? `An error has occurred on the server` : `An error has occurred on the client` }</p>
      </div>

    </Layout>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error;
import Layout from "../../components/layout";
import Head from "next/head";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Posts</h1>
    </Layout>
  );
}

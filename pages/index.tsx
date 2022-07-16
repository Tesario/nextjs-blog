import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/images/notes.jpg"
        width={600}
        height={100}
        layout="responsive"
        priority
        objectFit="cover"
        alt="Notes"
      />
      <h1 className="text-5xl font-bold my-5">Hello world!</h1>
      <p className="text-justify my-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
        perspiciatis, praesentium quidem dolorem repellat molestias aut officiis
        aspernatur. Dolores facilis officiis ratione ullam accusamus eos porro
        suscipit quaerat nesciunt doloribus? Laudantium consectetur asperiores
        perferendis cupiditate quia delectus architecto quod unde mollitia
        fugiat aut exercitationem quibusdam id odio minima maxime ex blanditiis,
        ullam aliquid doloremque ducimus. Similique placeat totam laudantium
        sapiente. Perspiciatis, sapiente nobis commodi voluptas molestiae
        laboriosam sed aut! Rerum laudantium eos, nostrum, blanditiis aspernatur
        officia incidunt dignissimos fugiat delectus corporis earum quos,
        repudiandae fuga aut consequuntur non quod. Consectetur?
      </p>
    </Layout>
  );
}

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Delivery Pizza</title>
        <meta
          name="description"
          content="Generated by Mohamed Elyes Ben khoud"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
    </div>
  );
}

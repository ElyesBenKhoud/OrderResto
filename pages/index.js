import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Delivery Pizza</title>
        <meta
          name="description"
          content="Generated by Mohamed Elyes Ben khoud"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      home page
      <Footer />
    </div>
  );
}

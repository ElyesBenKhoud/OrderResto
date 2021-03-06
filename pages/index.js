import Head from "next/head";
import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import axios from "axios";
export default function Home({ pizzaList }) {
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
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  //500 request error fixed
  const response = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: response.data,
    },
  };
};

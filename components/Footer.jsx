import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div> */}
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>Delivery</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR Restaurant</h1>
          <p className={styles.text}>
            Falaise Souani .
            <br /> Monastir, 5000
            <br /> (216) 52 779 617
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

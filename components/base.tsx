import Head from "next/head";
import styles from "../styles/index.module.css";

const Base = ({children}) => {
  return (
    <div>
      <Head>
        <title>Coding Test ( FlexiSource )</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.container} ${styles.fullHeight} hero`}>
        <div className="hero-body">
          <div className="row u-center">
            <div className="col-md-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;

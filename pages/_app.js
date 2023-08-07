import Layout from "../components/layout";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";
const App = ({ Component, pageProps }) => {
  return (
    <div className={styles.section}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default App;

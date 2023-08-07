import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const NotFound = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000);
  }, [])
  
  return (
    <>
      <Head>
        <title>Living_Logos | 404 </title>
        <link rel="icon" href="/vercel.png" />
      </Head>

      <div className={styles.centerContainer}>
        <div className={styles.error}>
          <h1>404 - Page Not Found</h1>
          <h2>That page cannot be Found.</h2>

          <p>
            Go back to the <Link href="/"> Homepage </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;

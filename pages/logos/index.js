import Head from "next/head";
import Styles from "../../styles/Home.module.css";
import Link from "next/link";


export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { data },
    revalidate: 3600, // Time in seconds for revalidation (e.g., 1 hour)
  };
};

const Contact = ({ data }) => {
  return (
    <>
      <Head>
        <title>Living_Logos | Logos </title>
        <link rel="icon" href="/vercel.png" />
      </Head>
      <div className={Styles.logosContainer}>
        <h1> Minister's Contact </h1>
           {data.map((list) => {
              const { id, name } = list;
              return (
                <Link href={`./logos/${id}`} key={id}>
                  <div className={Styles.contactList}>
                    <h4>{name}</h4>
                  </div>
                </Link>
              );
            })}

     </div>
        </>
  );
};

export default Contact;

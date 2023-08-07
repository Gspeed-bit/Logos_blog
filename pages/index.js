import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      {" "}
      <Head>
        <title>Living_Logos</title>
        <link rel="icon" href="/vercel.png" />
      </Head>
      <div className={styles.home_section}>
        <div className={styles.section}>
          <Header />

          <p className={styles.description}>
            At Living Logos, we believe in the power of the Word to transform
            lives. Our church is a community where faith comes alive, and
            individuals grow together in their spiritual journey. We invite you
            to join us on this path of discovery, fellowship, and service.
          </p>

          <div className={styles.grid}>
            <a
              href="https://www.instagram.com/living_logos/"
              className={styles.card}
            >
              <h3> Upcoming Events: &rarr;</h3>
              <p>
                Stay connected with our vibrant community by checking out our
                upcoming eventsFrom inspiring sermons to engaging workshops...
              </p>
            </a>

            <a
              href="https://www.instagram.com/living_logos/"
              className={styles.card}
            >
              <h3> Worship Services: &rarr;</h3>
              <p>
                Experience the presence of God through our heartfelt worship
                services. Join us as we gather to lift our...
              </p>
            </a>
            <a
              href={"./logos/"}
              className={styles.card}
            >
              <h3> Connect Groups: &rarr;</h3>
              <p>
                Building strong relationships is a cornerstone of our church.
                Our Connect Groups provide a space for deeper connections...
              </p>
            </a>
            <a
              href="https://www.instagram.com/living_logos/"
              className={styles.card}
            >
              <h3> Children and Youth:&rarr;</h3>
              <p>
                Our younger members are the future of our church. We offer
                engaging programs that nurture their spiritual growth...
              </p>
            </a>
          </div>
          <p className={styles.description}>
            Join us at Living Logos and become a part of our dynamic faith
            community. Together, we're discovering the richness of God's Word
            and living it out in our daily lives.
          </p>
        </div>
      </div>
    </>
  );
}

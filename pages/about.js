import Link from "next/link";
import Styles from "../styles/Home.module.css";
import Head from "next/head";
const About = () => {
  return (
    <>
      <Head>
        <title>Living_Logos | About </title>
        <link rel="icon" href="/vercel.png" />
      </Head>
      <div className={Styles.section}>
          <h2>About Living Logos Church</h2>
      <p>
        Living Logos Church is more than just a place of worship – it's a vibrant community of individuals united by a shared faith and a deep commitment to embodying the teachings of Jesus Christ. Our journey began with a humble aspiration: to create a welcoming sanctuary where people from all walks of life could gather, discover, and contribute to a greater purpose.
      </p>

      <h3>Our Mission:</h3>
      <p>
        At the core of our mission is a burning desire to illuminate the world with the love and message of Jesus Christ. Our actions, our words, and our active engagement in the community all reflect this unyielding commitment. We aim to foster an environment that encourages spiritual growth, cultivates meaningful relationships, and ignites a fire for positive change in the world.
      </p>

      <h3>Our Values:</h3>
      <p>
        Our values define the essence of Living Logos Church. Authenticity is the cornerstone of our interactions – we encourage genuine connections where individuals can be their true selves. Compassion guides our hearts as we extend empathy and support to one another and to those in need. Inclusivity is woven into the fabric of our community, celebrating diversity and embracing all who seek a deeper understanding of faith. We are perpetual learners, constantly seeking wisdom, insight, and growth in our journey of faith.
      </p>

      <h3>Our Leadership:</h3>
      <p>
        Meet the visionary leaders who guide Living Logos Church with unwavering dedication. Rooted in humility and deep faith, they lead with compassion, wisdom, and a genuine desire to serve the congregation and the world. Their guidance paves the way for an atmosphere of acceptance, understanding, and transformation.
      </p>

      <p>
        Join us on this profound journey of faith where the message of God's love is not only spoken but lived out in every facet of our lives. We invite you to experience the warmth of our community, the richness of our teachings, and the joy of serving others.
      </p>

      <p>
        As you consider becoming a part of Living Logos Church, we extend a heartfelt welcome. Here, you'll find a spiritual home where your journey can find its purpose and your faith can find its wings. Together, let's explore, learn, and grow, empowered by the boundless love of God.
      </p>
    </div>
    </>
  );
};

export default About;

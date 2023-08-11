import React, { useState } from "react";
import Head from "next/head"; // Import the Head component for setting document head properties
import Styles from "../../styles/Home.module.css"; // Import your CSS styles
import Link from "next/link"; // Import the Link component for navigation

// Fetch the data from the API during build time using getStaticProps
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { data },
    revalidate: 3600, // Time in seconds for revalidation (e.g., 1 hour)
  };
};

// Define the Contact component
const Contact = ({ data }) => {
  // State to keep track of the selected contact's ID
  const [selectedContact, setSelectedContact] = useState(null);

  // Function to handle contact click and set the selected contact's ID
  const handleContactClick = (id) => {
    // Toggle the selected contact if it's already open, otherwise set the new one
    setSelectedContact((prevSelected) => (prevSelected === id ? null : id));
  };

  // JSX markup
  return (
    <>

      <Head>
        <title>Living_Logos | Logos </title>
        <link rel="icon" href="/vercel.png" />
      </Head>
      {/* Container for the contact list */}
      <div className={Styles.logosContainer}>
        <h1> Minister's Contact </h1>
        {/* Map through the data and display each contact */}
        {data.map((contact) => {
          const { id, name, email, phone, website } = contact;
          return (
            <div className={Styles.contactList} key={id}>
              {/* Display the contact's name and attach a click handler */}
              <h4
                onClick={() => handleContactClick(id)}
                className={Styles.contactList}
              >
                {name}
              </h4>
              {/* Display additional details if the contact is selected */}
              {selectedContact === id && (
                <div className={Styles.contactDetails}>
                  <p>Email: {email}</p>
                  <p>Phone: {phone}</p>
                  <p>Website: {website}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contact; // Export the Contact component as the default export

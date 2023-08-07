import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomBibleVerses = () => {
  const [randomVerses, setRandomVerses] = useState([]);

  useEffect(() => {
    async function fetchRandomVerses() {
      try {
        const response = await axios.get("https://bible-api.com/verses/random");
        setRandomVerses(response.data);
      } catch (error) {
        console.error("Error fetching Bible verses:", error);
      }
    }

    fetchRandomVerses();
  }, []);

  return (
    <div>
      <h3>Random Bible Verses</h3>
      <ul>
        {randomVerses.map((verse) => (
          <li key={verse.id}>
            <strong>{verse.reference}</strong>: {verse.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomBibleVerses;

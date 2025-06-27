import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../../API.js";

function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchTopics() {
      const { topics } = await getTopics();
      setTopics(topics);
    }

    fetchTopics();
  }, []);

  return (
    <>
      <h2>Topics</h2>
      <ul className="topic-card">
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link to={`/?topic=${topic.slug}`}>
              <p>
                <strong>{topic.slug}</strong>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Topics;

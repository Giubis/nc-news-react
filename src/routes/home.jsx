import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { getArticles } from "../../API.js";

function Home() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const { articles } = await getArticles();

      if (topic) {
        const articlesByTopic = articles.filter(
          (article) => article.topic === topic
        );

        setArticles(articlesByTopic);
      } else setArticles(articles);
    }

    fetchArticles();
  }, [topic]);

  return (
    <>
      <h2>Home</h2>
      <ul className="article-card">
        {articles.map((article) => (
          <li key={article.article_id}>
            <Link to={`/${article.article_id}`}>
              <img src={article.article_img_url} alt={article.title} />
              <h3>{article.title}</h3>
              <p>
                <strong>Author</strong>: {article.author}
              </p>
              <p>
                <strong>Votes</strong>: {article.votes}
              </p>
              <p>
                <strong>Comments</strong>: {article.comment_count}
              </p>
              <p>
                <strong>Published on</strong>:{" "}
                {new Date(article.created_at).toLocaleDateString()}
              </p>
              <p>
                <strong>Topic</strong>: {article.topic}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;

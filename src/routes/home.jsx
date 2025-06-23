import { useState, useEffect } from "react";

import { getArticles } from "../../API.js";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const { articles } = await getArticles();
      setArticles(articles);
      console.dir(articles);
    }

    fetchArticles();
  }, []);

  return (
    <>
      <h2>Home</h2>
      <ul className="article-card">
        {articles.map((article) => (
          <li key={article.id}>
            <img src={article.article_img_url} alt={article.title} />
            <h3>{article.title}</h3>
            <p>
              <strong>Author:</strong> {article.author}
            </p>
            <p>
              <strong>Votes:</strong> {article.votes}
            </p>
            <p>
              <strong>Comments:</strong> {article.comment_count}
            </p>
            <p>
              <strong>Published on:</strong>
              {new Date(article.created_at).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;

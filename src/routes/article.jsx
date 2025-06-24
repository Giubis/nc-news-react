import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getArticleByID } from "../../API.js";

function Article() {
  const { articleID } = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    async function fetchArticle() {
      const { article } = await getArticleByID(articleID);
      setArticle(article);
    }

    fetchArticle();
  }, [articleID]);

  return (
    <>
      <h2>{article.title}</h2>
      <ul className="article-card--single">
        <li>
          <img src={article.article_img_url} alt={article.title} />
          <p>{article.body}</p>
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
        </li>
      </ul>
    </>
  );
}

export default Article;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getArticleByID, patchArticleVotes } from "../../API.js";
import Comments from "../components/comments.jsx";

function Article() {
  const [article, setArticle] = useState({});
  const [votes, setVotes] = useState(0);

  const { articleID } = useParams();

  useEffect(() => {
    async function fetchArticle() {
      const { article } = await getArticleByID(articleID);
      setArticle(article);
      setVotes(article.votes);
    }

    fetchArticle();
  }, [articleID]);

  async function upVote() {
    const currentVotes = votes;
    const vote = 1;
    setVotes(votes + vote);

    try {
      await patchArticleVotes(articleID, vote);
    } catch (error) {
      console.error(error);
      setVotes(currentVotes);
      alert(
        "Sorry, we could not update update with your vote. Please try again in a few seconds."
      );
    }
  }

  async function downVote() {
    const currentVotes = votes;
    const vote = -1;
    setVotes(votes + vote);

    try {
      await patchArticleVotes(articleID, vote);
    } catch (error) {
      console.error(error);
      setVotes(currentVotes);
      alert(
        "Sorry, we could not update update with your vote. Please try again in a few seconds."
      );
    }
  }

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
            <strong>Votes</strong>: {votes}
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
          <button onClick={upVote}>👍🏻</button>
          <button onClick={downVote}>👎🏻</button>
        </li>
      </ul>
      <Comments articleID={articleID} />
    </>
  );
}

export default Article;

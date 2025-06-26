import { useState, useEffect } from "react";
import { getComments } from "../../API";

function Comments({ articleID }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { comments } = await getComments(articleID);

        setComments(comments);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [articleID]);

  return (
    <section className="comment-card">
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>
              <strong>Author</strong>: {comment.author}
            </p>
            <p>
              <strong>Published on</strong>:{" "}
              {new Date(comment.created_at).toLocaleDateString()}
            </p>
            <p>
              <strong>Votes</strong>: {comment.votes}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Comments;

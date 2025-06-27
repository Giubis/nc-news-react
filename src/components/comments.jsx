import { useContext, useEffect } from "react";
import UserContext from "../contexts/userContext";
import { getComments, deleteCommentOnArticle } from "../../API";
import Swal from "sweetalert2";

function Comments({ articleID, comments, setComments }) {
  const [user] = useContext(UserContext);

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
  }, [articleID, setComments]);

  async function handleOnClick(commentID) {
    const commentToDelete = comments.filter(
      (comment) => comment.comment_id === commentID
    )[0];
    const updatedComments = comments.filter(
      (comment) => comment.comment_id !== commentID
    );
    setComments(updatedComments);

    Swal.fire({
      title: "Success",
      text: "Comment deleted",
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
    });

    try {
      await deleteCommentOnArticle(commentID);
    } catch (error) {
      console.error(error);
      setComments((previousComments) => [commentToDelete, ...previousComments]);

      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  }

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
            {user.username === comment.author && (
              <button onClick={() => handleOnClick(comment.comment_id)}>
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Comments;

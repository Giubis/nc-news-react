import { useContext, useState } from "react";
import UserContext from "../contexts/userContext";
import { postCommentOnArticle } from "../../API";
import Swal from "sweetalert2";

function CommentInput({ articleID, setComments }) {
  const [user] = useContext(UserContext);
  const [newComment, setNewComment] = useState("");

  function handleOnChange(event) {
    setNewComment(event.target.value);
  }

  async function handleOnSubmit(event) {
    event.preventDefault();

    if (!user) {
      Swal.fire({
        title: "Error",
        text: "Please login with your username",
        icon: "error",
        confirmButtonText: "Okay",
      });
    } else if (!newComment) {
      Swal.fire({
        title: "Error",
        text: "Please insert a valid message",
        icon: "error",
        confirmButtonText: "Okay",
      });
    } else {
      try {
        const { comment } = await postCommentOnArticle(
          articleID,
          user.username,
          newComment
        );

        setComments((existingComments) => [comment, ...existingComments]);

        setNewComment("");

        Swal.fire({
          title: "Success",
          text: "Comment posted",
          icon: "success",
          timer: 3000,
          timerProgressBar: true,
        });
      } catch (error) {
        console.error(error);

        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      }
    }
  }

  return (
    <section className="comment-form">
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="query">Insert your comment here:</label>
        <textarea
          name="query"
          rows="5"
          cols="50"
          value={newComment}
          onChange={handleOnChange}
        />
        <button type="submit">Post</button>
      </form>
    </section>
  );
}

export default CommentInput;

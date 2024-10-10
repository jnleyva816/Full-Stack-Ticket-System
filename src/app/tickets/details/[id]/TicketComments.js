"use client";
import { useRef } from "react";
import classes from "./TicketDetails.module.css";
const comments = [
  {
    author: "John Doe",
    content: "This is a comment",
    date: "2021-01-01",
  },
  {
    author: "Jane Doe",
    content: "This is another comment",
    date: "2021-01-02",
  },
  {
    author: "John Doe",
    content: "This is a comment",
    date: "2021-01-01",
  },
];

export default function TicketComments() {
  const commentRef = useRef(null);
  return (
    <footer>
      <h3>Comments</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("TODO: Add comment");
        }}
      >
        <textarea ref={commentRef} placeholder="Add a comment" />
        <button type="submit">Add comment</button>
      </form>
      <section>
        {comments.map((comment) => (
          <article key="{comment.date}" className={classes.comment}>
            <strong>{comment.author}</strong>
            <time>{comment.date}</time>
            <p>{comment.content}</p>
          </article>
        ))}
      </section>
    </footer>
  );
}

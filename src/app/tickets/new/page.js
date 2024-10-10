"use client";
import { useRef } from "react";
export default function CreateTicket() {
  const ticketTitleRef = useRef(null);
  const ticketDescriptionRef = useRef(null);
  return (
    <article>
      <h3>Create a ticket</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("TODO:Add a new ticket");
        }}
      >
        <input type="text" placeholder="Add a Title" ref={ticketTitleRef} />
        <textarea placeholder="Add a Comment" ref={ticketDescriptionRef} />
        <button type="submit">Create Ticket</button>
      </form>
    </article>
  );
}

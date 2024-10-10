import classes from "./TicketDetails.module.css";
import TicketComments from "./TicketComments";
export default function TicketDetailsPage({ params }) {
  return (
    <article className={classes.ticketDetails}>
      <header>
        <strong># {params.id}</strong> -{" "}
        <strong className={classes.ticketStatus}>Open</strong>
        <br />
        <small className={classes.authorAndDate}>
          Created by <strong>AuthorName</strong> at <time>2021-09-15</time>
        </small>
        <h2> Ticket Title</h2>
      </header>
      <section>Some details about the ticket should be here</section>
      <TicketComments />
    </article>
  );
}

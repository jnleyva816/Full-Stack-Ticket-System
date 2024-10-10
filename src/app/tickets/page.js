import TicketList from "./TicketList";
const dummyTickets = [
        {
            id: 1,
            title: "First Ticket",
            status: "Open",
            author: "Alice",
        },
        {
            id: 2,
            title: "Second Ticket",
            status: "Closed",
            author: "Bob",
        },
        {
            id: 3,
            title: "Third Ticket",
            status: "Open",
            author: "Alice",
        },
    ];
export default function TicketsListPage() {  
    return (
   <TicketList tickets={dummyTickets} />
  );
}

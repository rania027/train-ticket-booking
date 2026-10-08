import { useState } from "react";
import { supabase } from "../supabase";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fetched, setFetched] = useState(false);

  const fetchBookings = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    setLoading(false);

    if (error) {
      setError("Could not fetch bookings: " + error.message);
      return;
    }

    setBookings(data || []);
    setFetched(true);
  };

  return (
    <section>
      <h2 className="page-title">Booking History</h2>
      <button className="btn btn-primary" onClick={fetchBookings} disabled={loading}>
        {loading ? "Loading..." : "Fetch Bookings"}
      </button>

      {error && <p className="message error">{error}</p>}

      {fetched && bookings.length === 0 && !error && (
        <p className="empty">No bookings found.</p>
      )}

      {bookings.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Tickets</th>
              <th>Class</th>
              <th>Route / Venue</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td data-label="Name">{b.name}</td>
                <td data-label="Tickets">{b.tickets}</td>
                <td data-label="Class">{b.stand}</td>
                <td data-label="Route / Venue">{b.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default BookingHistory;

import { useNavigate } from "react-router-dom";

// Reusable card component
// Props: team1 (from), team2 (to), venue (station/route), date
function MatchCard({ team1, team2, venue, date }) {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/booking", { state: { venue: `${team1} → ${team2}` } });
  };

  return (
    <div className="card">
      <h3 className="card-title">
        {team1} <span className="arrow">→</span> {team2}
      </h3>
      <p>
        <strong>Station:</strong> {venue}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <button className="btn btn-primary" onClick={handleBook}>
        Book Ticket
      </button>
    </div>
  );
}

function Matches() {
  const routes = [
    { team1: "Bengaluru", team2: "Mumbai", venue: "KSR Bengaluru Junction", date: "2026-11-05" },
    { team1: "Delhi", team2: "Chennai", venue: "New Delhi Railway Station", date: "2026-11-07" },
    { team1: "Kolkata", team2: "Hyderabad", venue: "Howrah Junction", date: "2026-11-09" },
    { team1: "Pune", team2: "Jaipur", venue: "Pune Junction", date: "2026-11-12" },
    { team1: "Chennai", team2: "Bengaluru", venue: "MGR Chennai Central", date: "2026-11-14" },
    { team1: "Mumbai", team2: "Delhi", venue: "Mumbai Central", date: "2026-11-16" },
  ];

  return (
    <section>
      <h2 className="page-title">Available Train Routes</h2>
      <div className="card-grid">
        {routes.map((r, index) => (
          <MatchCard
            key={index}
            team1={r.team1}
            team2={r.team2}
            venue={r.venue}
            date={r.date}
          />
        ))}
      </div>
    </section>
  );
}

export default Matches;

import "./Footer.css";

interface FooterProps {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
}

function Footer({
  totalTasks,
  completedTasks,
  pendingTasks,
}: FooterProps) {
  return (
    <footer className="footer">

      <div className="footer-card">
        <h3>Total</h3>
        <p>{totalTasks}</p>
      </div>

      <div className="footer-card">
        <h3>Completed</h3>
        <p>{completedTasks}</p>
      </div>

      <div className="footer-card">
        <h3>Pending</h3>
        <p>{pendingTasks}</p>
      </div>

    </footer>
  );
}

export default Footer;
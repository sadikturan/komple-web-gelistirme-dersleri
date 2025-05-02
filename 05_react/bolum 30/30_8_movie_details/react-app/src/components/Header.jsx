export default function Header({ children }) {
  return (
    <div id="header">
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">{children}</div>
      </nav>
    </div>
  );
}

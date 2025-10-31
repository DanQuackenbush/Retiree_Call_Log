import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">
        Dan's Homepage!
      </h1>
      <nav>
        <ul className="nav-list">
          <li><a href='https://github.com/DanQuackenbush' className="nav-link">Home</a></li>
          <li><a href="#" className="nav-link">About</a></li>
          <li><a href="#" className="nav-link">Services</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header
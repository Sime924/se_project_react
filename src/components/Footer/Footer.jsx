import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Developed by Simon Gebord</p>
      <p className="footer__date">{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;

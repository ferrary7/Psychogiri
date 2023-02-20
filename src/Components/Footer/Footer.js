import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <section>
        <div className="share">
          <a href="/" className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="/" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="/" className="fab fa-youtube"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
        <div className="credit">
          &copy; {new Date().getFullYear()} <span>Psychoshala</span> | Where you can learn Mental Health!
        </div>
      </section>
    </footer>
  );
}

export default Footer;

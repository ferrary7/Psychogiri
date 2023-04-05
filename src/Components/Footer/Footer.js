import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <section>
        <div className="share">
          {/* <a
            href="https://www.linkedin.com/company/storygiri/"
            target="_blank"
            rel="noreferrer"
            className="fab fa-linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a> */}
          <a
            href="https://www.instagram.com/_psychoshala_/"
            target="_blank"
            rel="noreferrer"
            className="fab fa-instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="whatsapp://send?phone=916280603379&text=Hi%2C%20I%20want%20to%20join%20the%20club%21%20Please%20share%20the%20details/"
            target="_blank"
            rel="noreferrer"
            className="fab fa-whatsapp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <div className="credit">
          &copy; {new Date().getFullYear()} <span>Psychoshala</span> |
          Psychology Club For All The Practitioners!
        </div>
      </section>
    </footer>
  );
}

export default Footer;

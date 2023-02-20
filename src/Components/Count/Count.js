import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUserGraduate,
  faChalkboardTeacher,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import "./Count.css";

const Count = () => {
  return (
    <section className="count">
      <div className="box-container">
        <div className="box">
          <FontAwesomeIcon icon={faGraduationCap} size="5x" color="#BF40BF" />
          <div className="content">
            <h3>3</h3>
            <p>Courses</p>
          </div>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faUserGraduate} size="5x" color="#BF40BF" />
          <div className="content">
            <h3>1000</h3>
            <p>Students</p>
          </div>
        </div>

        <div className="box">
          <FontAwesomeIcon
            icon={faChalkboardTeacher}
            size="5x"
            color="#BF40BF"
          />
          <div className="content">
            <h3>20+</h3>
            <p>Coaches</p>
          </div>
        </div>

        <div className="box">
          <FontAwesomeIcon icon={faSmile} size="5x" color="#BF40BF" />
          <div className="content">
            <h3>100%</h3>
            <p>Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;

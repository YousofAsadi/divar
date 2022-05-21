import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { Col, Row } from "react-bootstrap";
import "./card.scss";
import image from "./../../assets/images/react-bootstrap.png";

const Cardd = () => {
  return (
    <div className="border card p-3 d-flex flex-row justify-content-between mb-2 me-2">
      <div className="d-flex flex-column justify-content-between">
        <h5>ری اکت</h5>
        <div>
          <span>1000 تومن</span>
          <p className="m-0">دیروز در شیراز</p>
        </div>
      </div>

      <img src={image} alt="test" className="image"></img>
    </div>
  );
};

export default Cardd;

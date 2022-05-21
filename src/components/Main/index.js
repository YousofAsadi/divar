import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../Sidebar";
import Cardd from "../Card";

const Main = () => {
  return (
    <Container className="d-flex">
      <Sidebar />
      <div className="w-100 d-flex flex-wrap  mt-5">
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
      </div>
    </Container>
  );
};

export default Main;

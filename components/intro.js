import { Row, Col, Image } from "react-bootstrap";

export default () => (
  <Row className="mb-4 admin-intro align-items-center">
    <Col xs="auto">
      <Image
        roundedCircle
        width={64}
        height={64}
        src="logo.jpg"
        alt="Generic placeholder"
      />
    </Col>
    <Col>
      <h5 className="font-weight-bold mb-0">1234.mn - Онлайн видео сургалт</h5>
      <p className="welcome-text">
        Бид програмчлалын технолгийн чиглэлээр төрөл бүрийн сонирхолтой
        мэдээллүүдийг энэхүү блогоор хүргэж байна.
      </p>
    </Col>
  </Row>
);
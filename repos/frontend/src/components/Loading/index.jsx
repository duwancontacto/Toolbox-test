import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <div style={{minHeight: "600px"}}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

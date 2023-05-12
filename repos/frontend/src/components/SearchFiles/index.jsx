import {useState} from "react";
import Form from "react-bootstrap/Form";
import {getAllFiles} from "../../store/slices/Files";
import {useDispatch} from "react-redux";
export default function SearchFiles() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [timeoutId, setTimeoutId] = useState(0);

  const handleChange = (e) => {
    const {value} = e.target;
    setSearch(value);
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => {
      dispatch(getAllFiles(value));
    }, 500);
    setTimeoutId(timeout);
  };

  return (
    <div className="mb-5  ">
      <Form.Label htmlFor="inputPassword5">Buscador</Form.Label>
      <Form.Control
        type="text"
        placeholder="Buscar por nombre"
        id="inputPassword5"
        onChange={handleChange}
        value={search}
        aria-describedby="passwordHelpBlock"
      />
    </div>
  );
}

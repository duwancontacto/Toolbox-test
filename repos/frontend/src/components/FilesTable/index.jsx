import Table from "react-bootstrap/Table";
import {useSelector} from "react-redux";
import Loading from "../Loading";
import Empty from "../Empty";
function FilesTable() {
  const {files, loading} = useSelector((state) => state.files);

  if (loading) return <Loading />;

  if (!files?.length)
    return <Empty title="Lo siento, no hay nada para mostrarte" />;

  return (
    <div style={{minHeight: "650px"}}>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {files?.map((file) =>
            file?.lines.map((line, index) => (
              <tr key={index}>
                <td>{file.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.text}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default FilesTable;

import {useEffect} from "react";
import FilesTable from "./components/FilesTable";
import SearchFiles from "./components/SearchFiles";
import {useDispatch} from "react-redux";
import "./App.css";
import {getAllFiles} from "./store/slices/Files";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => dispatch(getAllFiles()), []);

    return () => clearTimeout(timeoutId);
    //eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <section className="App-header">
        <div className="container">
          <SearchFiles />
          <FilesTable />
        </div>
      </section>
    </div>
  );
}

export default App;

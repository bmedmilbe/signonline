import "./App.css";
import Document from "./components/Document";
import NewSignForm from "./components/NewSignForm";

function App() {
  return (
    <>
      <div className="container">
        <div
          className="section"
          style={{ maxHeight: "80vh", overflow: "auto" }}
        >
          <Document />
        </div>
        <div className="section">
          <NewSignForm />
        </div>
      </div>
    </>
  );
}

export default App;

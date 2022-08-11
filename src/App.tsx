import logo from "./logo.svg";
import "./App.css";
import ResponseComponent from "./Components/ResourseComponent";
import ResourseListComponent from "./Components/ResourseListComponent";

function App() {
  return (
    <div >
      <header>
        <ResponseComponent></ResponseComponent>
        <ResourseListComponent></ResourseListComponent>
      </header>
    </div>
  );
}

export default App;

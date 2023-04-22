import "./App.css";
import SearchPhoto from "./component/SearchPhoto";

function App() {
  return (
    <div className="App">
      <div className="contaner">
        <h1>Photo Finder App - Using Unsplash API</h1>
        <SearchPhoto />
      </div>
    </div>
  );
}

export default App;

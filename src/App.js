import "./App.css";
import SlideShow from "./components/SliceShow/SlideShow";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
function App() {
  return (
    <div className="App">
      <SlideShow colors={colors}></SlideShow>
    </div>
  );
}

export default App;

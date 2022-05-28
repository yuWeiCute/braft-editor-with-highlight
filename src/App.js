import "./styles.css";
import BraftEditor from "./components/BraftEditor";

export default function App() {
  const html = "<p>lets begin....</p>";
  const onChange = (value) => {
    console.log(value);
  };
  return (
    <div className="App">
      <BraftEditor value={html} type="html" onChange={onChange} />
    </div>
  );
}

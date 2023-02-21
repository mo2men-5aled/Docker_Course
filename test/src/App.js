import logo from "./logo.svg";

function App() {
  console.log(process.env.REACT_APP_COLOR);
  return (
    <div
      className="App"
      style={{ backgroundColor: process.env.REACT_APP_COLOR }}
    >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

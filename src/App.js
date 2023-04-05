import "./App.css";
import MyRoutes from "./routes/MyRoutes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MyRoutes />
      </header>
    </div>
  );
}

export default App;

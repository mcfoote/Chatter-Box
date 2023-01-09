import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import MessengerPage from "./Pages/MessengerPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={MessengerPage} />
    </div>
  );
}

export default App;

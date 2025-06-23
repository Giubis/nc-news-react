import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./routes/home";
import Topics from "./routes/topics";
import User from "./routes/user";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;

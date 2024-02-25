import { Routes, Route, Navigate } from "react-router-dom";
import { Chat, Login, Register } from "./pages";
import { Navbar } from "./layout";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;

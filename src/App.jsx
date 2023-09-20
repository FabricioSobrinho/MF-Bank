// import react functions

// import elements and icos
import NavBar from "./Layouts/Components/NavBar";
// import extras dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import InitialScreen from "./Pages/InitialScreen";
import LoginScreen from "./Pages/LoginScreen";

// import container
import Container from "./Layouts/Components/Container";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Container>
          <Routes>
            <Route exact element={<InitialScreen />} path="/" />
            <Route exact element={<LoginScreen />} path="/login" />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;

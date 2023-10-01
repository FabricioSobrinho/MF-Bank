// import react functions
import { useState } from "react";
// import elements and icos
import NavBar from "./Layouts/Components/NavBar";
import LoggedNavBar from "./Layouts/Components/LoggedNavBar";

// import extras dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import container
import Container from "./Layouts/Components/Container";

// Import pages
import InitialScreen from "./Pages/InitialScreen";
import LoginScreen from "./Pages/LoginScreen";
import CreateAccountScreen from "./Pages/CreateAccountScreen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <Router>
        {isLoggedIn ? <LoggedNavBar />:<NavBar /> } 
        <Container>
          <Routes>
            <Route exact element={<InitialScreen />} path="/" />
            <Route exact element={<LoginScreen />} path="/login" />
            <Route exact element={<CreateAccountScreen />} path="/create-acc" />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;

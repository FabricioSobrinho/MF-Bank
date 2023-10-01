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
import InitialScreen from "./Pages/InitialPage";
import LoginScreen from "./Pages/LoginPage";
import CreateAccountScreen from "./Pages/CreateAccountPage";
import ViewAccountPage from "./Pages/ViewAccountPage";

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
            <Route exact element={<ViewAccountPage />} path="/view-account" />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;

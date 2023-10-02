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
import InitialPage from "./Pages/InitialPage";
import LoginPage from "./Pages/LoginPage";
import CreateAccountPage from "./Pages/CreateAccountPage";
import ViewAccountPage from "./Pages/ViewAccountPage";
import WithdrawPage from "./Pages/WithdrawPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  setIsLoggedIn(true);
  return (
    <>
      <Router>
        {isLoggedIn ? <LoggedNavBar />:<NavBar /> } 
        <Container>
          <Routes>
            <Route exact element={<InitialPage />} path="/" />
            <Route exact element={<LoginPage />} path="/login" />
            <Route exact element={<CreateAccountPage />} path="/create-acc" />
            <Route exact element={<ViewAccountPage />} path="/view-account" />
            <Route exact element={<WithdrawPage />} path="/withdraw" />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;

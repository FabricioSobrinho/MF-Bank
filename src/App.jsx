// import hooks
import { LoggedProvider, useLoggedIn } from "./hooks/LoggedProvider";
import { UserProvider } from "./hooks/UserProvider";

// import dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import layout components
import NavBar from "./Layouts/Components/NavBar";
import LoggedNavBar from "./Layouts/Components/LoggedNavBar";
import Container from "./Layouts/Components/Container";

// import pages
import InitialPage from "./Pages/InitialPage";
import LoginPage from "./Pages/LoginPage";
import CreateAccountPage from "./Pages/CreateAccountPage";
import ViewAccountPage from "./Pages/ViewAccountPage";
import WithdrawPage from "./Pages/WithdrawPage";
import DepositPage from "./Pages/DepositPage";
import TransferPage from "./Pages/TransferPage";
import ExtractPage from "./Pages/ExtractPage";
import EditAccountPage from "./Pages/EditAccountPage";
import CloseAccountPage from "./Pages/CloseAccountPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <Router>
      <UserProvider>
        <LoggedProvider>
          <MainNavigation />
          <MainContent />
        </LoggedProvider>
      </UserProvider>
    </Router>
  );
}

function MainNavigation() {
  const { isLoggedIn } = useLoggedIn();

  return <div>{isLoggedIn ? <LoggedNavBar /> : <NavBar />}</div>;
}

function MainContent() {
  const { isLoggedIn } = useLoggedIn();
  return (
    <Container>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-acc" element={<CreateAccountPage />} />

        {isLoggedIn && (
          <>
            <Route path="/view-account" element={<ViewAccountPage />} />
            <Route path="/withdraw" element={<WithdrawPage />} />
            <Route path="/deposit" element={<DepositPage />} />
            <Route path="/transfer" element={<TransferPage />} />
            <Route path="/extract" element={<ExtractPage />} />
            <Route path="/edit" element={<EditAccountPage />} />
            <Route path="/close-account" element={<CloseAccountPage />} />
          </>
        )}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}

export default App;

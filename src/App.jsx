// import react functions

// import elements and icos
import NavBar from "./Layouts/Components/NavBar";
// import extras dependencies

// Import pages
import InitialScreen from "./Pages/InitialScreen";

// import container
import Container from "./Layouts/Components/Container";

function App() {
  return (
    <>
      <NavBar />
      
      <Container>
        <InitialScreen />
      </Container>
    </>
  );
}

export default App;

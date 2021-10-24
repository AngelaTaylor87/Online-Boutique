//import { div } from "prelude-ls";
import React from "react";
import { Container } from 'react-bootstrap'
//import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Header from "./components/Header";
import Footer from "./components/Footer";

// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <> 
    <Header />
    <main>
      <Container>
   <h1> Welcome to Aston Jeremiah's online boutique </h1>
   </Container>
   </main>
   <Footer />
    </>
  )
}

export default App;

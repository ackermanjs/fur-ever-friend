import "./App.css";
// import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./components/TopNav";
import Header from "./components/Header";
import HeroSection from "./pages/HeroSection";
import BodyMid from "./pages/BodyMid";
import Body from "./pages/Body";
import Footer from "./components/Footer";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import LoggedIn from "./pages/LoggedIn";
import InitialLoad from "./pages/InitialLoad";
import About from "./pages/About";
import NewUser from "./pages/NewUser";
import ReturnUser from "./pages/ReturnUser";
import LunaDogCardOpened from "./pages/LunaDogCardOpened";
import LokiDogCardOpened from "./pages/LokiDogCardOpened";
import CharlieDogCardOpened from "./pages/CharlieDogCardOpened";
import MiloCatCardOpened from "./pages/MiloCatCardOpened";
import OliverCatCardOpened from "./pages/OliverCatCardOpened";
import WhiskeyCatCardOpened from "./pages/WhiskeyCatCardOpened";
import AdoptForm from "./pages/AdoptForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

// // import {
// //   ApolloClient,
// //   InMemoryCache,
// //   ApolloProvider,
// //   createHttpLink,
// // } from '@apollo/client';

// // import { setContext } from '@apollo/client/link/context';

// // import LoggedInHero from "./pages/LoggedInHero";
// // const httpLink = createHttpLink({
// //   uri: '/graphql',
// // });

// // import Footer from './components/Footer';

// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
// //   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });
// /* <ApolloProvider client={client}> */
// /* </ApolloProvider> */
      
const App = () => {
  return (
    // <ApolloProvider client={ client }>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/returnuser" element={<ReturnUser />} />
          <Route path="/lunadog" element={<LunaDogCardOpened />} />
          <Route path="/lokidog" element={<LokiDogCardOpened />} />
          <Route path="/charliedog" element={<CharlieDogCardOpened />} />
          <Route path="/whiskeycat" element={<WhiskeyCatCardOpened />} />
          <Route path="/milocat" element={<MiloCatCardOpened />} />
          <Route path="/olivercat" element={<OliverCatCardOpened />} />
          <Route path="/adoptform" element={<AdoptForm />} />
          <Route path="/loggedin" element={<LoggedIn />} />
          <Route path="/" element={<InitialLoad />} />
        </Routes>
        <BodyMid />
        <Body />
        <Footer />
      </BrowserRouter>
    // </ApolloProvider>
  );
};

export default App;

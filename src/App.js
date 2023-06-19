import "./App.css";
import Homepage from "./components/Homepage";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// create Router
const myRouter = createBrowserRouter(
  // create routes from elements
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Homepage />}>
        <Route path="/" element={<Countries />} />
      </Route>
      <Route path="/country-details/:countryName" element={<CountryDetails />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;

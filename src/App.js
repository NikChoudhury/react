import DemoPropTypes from "./components/propsType/DemoPropTypes";
import Navbar from "./components/Navbar.js";
import Profile from "./components/propsType/Profile.js";
import Person from "./components/propsType/Person";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="Mininik" aboutUsText="About Mininik" />

      <Routes>
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/about"
          element={<About />}
        />


        <Route
          path="/profile"
          element={
            <Profile
              name="Nikumani Choudhury"
              age={25}
              gender="Male"
              address="Sorbhog, Barpeta, Assam"
              mobile={[1234567890, 9876543210, 78946601348]}
              render={<DemoPropTypes />}
            />
          }
        />

        <Route
          path="/person"
          element={
            <Person   //send props within an object
              data={
                {
                  name: "Nik",
                  age: 25,
                  gender: "Male",
                  address: "Sorbhog, Barpeta, Assam"
                }
              }
            />
          }
        />


      </Routes>
    </>

  );
}

export default App;

import DemoPropTypes from "./pages/propsType/DemoPropTypes";
import Navbar from "./components/Navbar.js";
import Profile from "./pages/propsType/Profile.js";
import Person from "./pages/propsType/Person";
import {
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ReactPropsTypes from "./pages/propsType/ReactPropsTypes";
import PropsLayout from "./pages/propsType/PropsLayout";
import ReactState from "./pages/states/ReactState";
import WordCounter from "./pages/states/WordCounter";
import HookLayout from "./pages/reactHooks/HookLayout";
import UseStateHook from "./pages/reactHooks/UseStateHook";
import HooksNavigation from "./pages/reactHooks/HooksNavigation";

function App() {
  return (
    <>
      <div id="page-container">
        <Navbar title="Mininik" aboutUsText="About Mininik" />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />

          <Route path="/props" element={<PropsLayout />}>
            <Route index element={<ReactPropsTypes />} />
            <Route path="demopropstype" element={<DemoPropTypes />} />
            <Route
              path="profile"
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
              path="person"
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
          </Route>

          <Route
            path="*"
            element={
              <div className="container">
                <h1 style={{ 'color': "red" }} > 404 Error !!!</h1>
                <hr />
                <h3> Page Not Found !</h3>
              </div>
            }
          />
          <Route path="/react-state" element={<ReactState />} />
          <Route path="/react-state/word-counter" element={<WordCounter />} />

          <Route path="/react-hooks" element={<HookLayout />}>
            <Route index element={<HooksNavigation />} />
            <Route path="use-state" element={<UseStateHook />} />
          </Route>
        </Routes >
        <Footer />
      </div >
    </>

  );
}

export default App;

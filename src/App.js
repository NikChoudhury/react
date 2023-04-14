import DemoPropTypes from "./components/propsType/DemoPropTypes";
import Navbar from "./components/Navbar.js";
import Profile from "./components/propsType/Profile.js";
import Person from "./components/propsType/Person";

function App() {
  return (
    <>

      {/* Props and PropsTypes */}
      <Navbar title="Mininik" aboutUsText="About Mininik" />
      <Profile
        name="Nikumani Choudhury"
        age={25}
        gender="Male"
        address="Sorbhog, Barpeta, Assam"
        mobile={[1234567890, 9876543210, 78946601348]}
        render={<DemoPropTypes />}
      />

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
    </>

  );
}

export default App;

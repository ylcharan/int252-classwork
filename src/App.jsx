import "./App.css";
import Car from "./Car";
import Pract from "./Map";
import Details from "./practicat";
import Info from "./practicat";
import Student from "./Student";
import UserCard from "./UserCard";
import UserProfile from "./UserProfile";

function App() {
  // const greetUser = () => alert("Hello from Parent Component.");
  return (
    <>
      {/* <Car model="XUV" brand="Mahindra" />
      <Car model="X1" brand="BMW" /> */}
      {/* <UserCard email={"test@test.com"} username={"test"} country={"india"} /> */}
      {/* <UserProfile
        address={{ city: "akp", country: "india" }}
        age={19}
        hobbies={["gaming", "coding"]}
        name={"Charan"}
        greetUser={greetUser}
      >
        <p>Hello world</p>
      </UserProfile> */}
      {/* <Info title={"Vizag"} /> */}
      {/* <Details name={"Charan"} age={"20"} country={"IND"} /> */}
      {/* <Pract /> */}
      {/* <UserProfile /> */}
      <Student name={"Charan"} marks={"100"} />
    </>
  );
}

export default App;

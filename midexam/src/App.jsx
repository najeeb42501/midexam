import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const sampleData = [
    {
      id: 1,
      name: "John Doe",
      age: 25,
      city: "New York",
      occupation: "Engineer",
    },

    {
      id: 2,
      name: "Jane Smith",
      age: 30,
      city: "San Francisco",
      occupation: "Designer",
    },

    {
      id: 3,
      name: "Bob Johnson",
      age: 28,
      city: "Chicago",
      occupation: "Accountant",
    },

    {
      id: 4,
      name: "Alice Brown",
      age: 35,
      city: "Los Angeles",
      occupation: "Teacher",
    },

    {
      id: 5,
      name: "Charlie Wilson",
      age: 40,
      city: "Houston",
      occupation: "Doctor",
    },

    { id: 6, name: "Eva Davis", age: 22, city: "Miami", occupation: "Artist" },

    {
      id: 7,
      name: "Frank Miller",
      age: 32,
      city: "Seattle",
      occupation: "Software Engineer",
    },

    {
      id: 8,
      name: "Grace Taylor",
      age: 45,
      city: "Boston",
      occupation: "Lawyer",
    },

    {
      id: 9,
      name: "Henry Clark",
      age: 28,
      city: "Denver",
      occupation: "Marketing Manager",
    },

    {
      id: 10,
      name: "Ivy Adams",
      age: 33,
      city: "Atlanta",
      occupation: "Entrepreneur",
    },
  ];

  const [data, setData] = useState(sampleData);
  const [person, setPerson] = useState({
    name: "",
    age: 0,
    location: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    //console.log(name, value);

    setPerson({ [name]: value });
    //console.log("state data : ", person.city);
  }

  function filterData(event) {
    console.log(person.name);

    const filtered = sampleData.filter((data) => {
      console.log(data.city, person.city);
      return (
        data.name == person.name ||
        data.age == person.age ||
        data.city == person.city ||
        data.occupation == person.occupation
      );
    });
    //console.log(filtered);

    setData(filtered);
  }

  function resetData() {
    //console.log("Reset Function");
    setData(sampleData);
  }

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">City</th>
            <th scope="col">Occupation</th>
          </tr>
        </thead>

        {data.map((items, index) => (
          <tbody>
            <tr>
              <th>{items.id}</th>
              <td>{items.name}</td>
              <td>{items.age}</td>
              <td>{items.city}</td>
              <td>{items.occupation}</td>
            </tr>
          </tbody>
        ))}
      </table>

      <div>
        <label>Name : </label>
        <input type="text" name="name" onChange={handleChange} />
        <label> Age : </label>
        <input type="text" name="age" onChange={handleChange} />

        <br />
        <div>
          <span>
            <label>City :</label>
            <select name="city" onChange={handleChange}>
              <option value="New York">New York</option>
              <option value="San Fransico">San Fransico</option>
              <option value="Chicago">Chicago</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Houston">Houston</option>
              <option value="Miami">Miami</option>
              <option value="Seattle">Seattle</option>
              <option value="Boston">Boston</option>
              <option value="Denver">Denver</option>
              <option value="Atlanta">Atlanta</option>
            </select>
          </span>

          <span>
            <label> Occupation :</label>
            <select name="occupation" onChange={handleChange}>
              <option value="Engineer">Engineer</option>
              <option value="Designer">Designer</option>
              <option value="Accountant">Accountant</option>
              <option value="Teacher">Teacher</option>
              <option value="Doctor">Doctor</option>
              <option value="Artist">Artist</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Lawyer">Lawyer</option>
              <option value="Marketing Manager">Marketing Manager</option>
              <option value="Entrepreneur">Entrepreneur</option>
            </select>
          </span>
        </div>

        <br />

        <div>
          <button onClick={filterData}>Filter </button>
        </div>
        <div>
          <button onClick={resetData}>Reset Data</button>
        </div>
      </div>
    </>
  );
}

export default App;

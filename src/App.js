import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Employee from "./components/Employee";
import "./index.css";

function App() {
  // const [role, setRole] = useState();
  const [employees, setEmployees] = useState([
    {
      name: "Max",
      role: "Full stack intern",
      img: "https://images.unsplash.com/photo-1566513783358-9b483cfc7042?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Clayton",
      role: "Manager",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Edie",
      role: "Scrum Master",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Beck",
      role: "DevOps Engineer",
      img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Rosa",
      role: "Senior full stack",
      img: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Ruth",
      role: "UI/UX",
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Beck",
      role: "DevOps Engineer",
      img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Rosa",
      role: "Senior full stack",
      img: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
  ]);
  const showEmployees = true;
  return (
    <div className='App'>
      {showEmployees ? (
        <div className='h-screen bg-trueGray-900 p-2 text-center'>
          <input
            className='m-2 rounded-2xl bg-trueGray-700 p-2 text-slate-200 outline-none'
            type='text'
            placeholder='Search'
          />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className='flex h-screen items-center justify-center'>
          <p className='text-2xl font-semibold'>Access denied.</p>
        </div>
      )}
    </div>
  );
}

export default App;

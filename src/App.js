import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import Employee from "./components/Employee";
import "./index.css";

function App() {
  // const [role, setRole] = useState();
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Max",
      role: "Senior backend engineer",
      img: "./Max.png",
    },
    {
      id: 2,
      name: "Clayton",
      role: "Manager",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Edie",
      role: "Scrum Master",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      id: 4,
      name: "Beck",
      role: "DevOps Engineer",
      img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      id: 5,
      name: "Rosa",
      role: "Senior full stack",
      img: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id)
        return { ...employee, name: newName, role: newRole };
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  const showEmployees = true;
  return (
    <div className='App'>
      {showEmployees ? (
        <div className='p-2 text-center'>
          <input
            className='m-2 rounded-2xl bg-trueGray-700 px-3 py-1 text-slate-200 outline-none'
            type='text'
            placeholder='Search'
          />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
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

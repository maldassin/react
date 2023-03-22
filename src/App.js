import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState();
  const showEmployees = true;
  return (
    <div className='App flex h-screen flex-col justify-center items-center'>
      {showEmployees ?
        <>
          <input className='p-2' type='text' placeholder='Search' onChange={(e) => {
            setRole(e.target.value);
          }} />
          <Employee name='Maen' role='Intern' />
          <Employee name='Abby' role={role}/>
          <Employee name='John' role={role}/>
        </>
        :
        <p>Access denied.</p>
      }
    </div>
  );
}

export default App;
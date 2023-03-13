import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState();
  const showEmployees = true;
  return (
    <div className='App bg-red-300'>
      {showEmployees ?
        <>
          <input type='text' onChange={(e) => {
            console.log(e.target.value);
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

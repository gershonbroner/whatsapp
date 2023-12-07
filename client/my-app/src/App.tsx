import React  from 'react';
import Login from './components/login';
import useLocalStorage from './hooks/useLocalStorage';
 import Dashboard from './components/Dashboard';
  
function App() {
  const [id,setId] =useLocalStorage({ key: 'id', initialValue:0})

  return  (
    <> 
    {id !==0 ?<Dashboard id={[id]}/>:<Login onIdSubmit = {setId}/>
    }
  </>
  )
}

export default App;

import React from 'react';
import NavBar from './Components/NavBar.jsx'
import Scratchy from './Components/Scratchy.jsx'

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Scratchy />
      </div>
      <div style={{"display":"flex","justifyContent":"center"}}>
      <div style={{"display":"flex","justifyContent":"center","height":"30%", "width":"87.5%", "backgroundColor":"red"}}>
      </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import NavBar from './Components/NavigationBar/NavigationBar.jsx'
import Scratchy from './Components/Scratchy/Scratchy.jsx'

function App() {
  return (
    <div>
    <div style={{"display":"flex", "flexDirection":"column", "justifyContent": "space-between", "height":"98vh"}}>
        <NavBar />
        <div style={{"display":"flex","height":"4%", "color":"white", "justifyContent":"center", "alignItems":"center"}}>
        <div style={{"display":"flex", "alignItems":"center","fontFamily":"Apercu,Lucida Grande,sans-serif", "fontSize":"100%", "width":"40%", "justifyContent": "Space-between"}}>
          <div>Scratcheum Contract</div>
          <div>Discord</div>
          <div>GitHub</div>
          <div>Medium</div>
          <div>Twitter</div>
      </div>
        </div>
    </div>
    <Scratchy />
    </div>
  );
}

export default App;

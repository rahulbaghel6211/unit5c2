import { useState } from 'react';

import { AddStudent } from './components/AddStudent';
import { ShowStudents } from './components/ShowStudents';

function App() {
  const[part,setPart]=useState(true)
  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>
      part?setPart(false):setPart(true)
      }>
        {part?"Show Student":"AddStudent"}
      </button>
      {part?<AddStudent/>:<ShowStudents/>}
    </div>
  );
}
export default App;
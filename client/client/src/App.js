import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const App2 = () => {
    const [value, setValue] = useState();
    const [repos, setRepos] = useState();
    const fetched = null;
  
    const KEY = "";
const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

    const handleClick = async () => {
      // fetching data
        return new Promise(function(resolve, reject) {
         const fetched = axios.get(`https://www.googleapis.com/youtube/v3`,baseParams).then(response => {
            resolve(response);
          });
        }
        
        
      
      );
      setRepos(fetched.data);
      console.log(fetched.data);

    };
      
  

    
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
    const handleInputChange = (e) => {
      setValue(e.target.value);
    }
 
    return (
        
    <div className="App">
    <header className="App-header">
      <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleInputChange} /><br></br>
        <button variant="primary" onClick={handleClick} className="mt-3 mb-3">Submit</button>
      </form>
    </header>
    <main className="App-main">
    <div class="App-lead">
        <div class="App-header">{repos   && repos.map(r => <div key={r.id}><label>{r.name} : </label><bouton variant="primary" className="mt-3 mb-3"><a href={r.html_url}>{r.html_url}</a></bouton></div>)}</div>
    </div> 
    
      
    </main>
</div>      
    )
  }
  export default App2;
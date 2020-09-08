import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import HomePage from './HomePage.jsx';




function App() {
  const [build, setBuild] = useState([]);

  
  useEffect(() => {
    
    // const airURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Build?Grid%20View`
    const airURL = `https://api.airtable.com/v0/appT8SRRw9eOl8WmR/Build?Grid%20View`;
    const getInfo = async () => {

      const res = await axios.get(airURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        }
      });
      
      console.log(res.data);
      setBuild(res.data.records);
    }
    getInfo();
    console.log("mounted successfully");
  }, [])



  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

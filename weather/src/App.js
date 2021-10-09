//jshint esversion:6
import React,{useState} from 'react';

const App = () => {

  const [city,setCity]=useState("");
  const [res,setres]=useState("");
  const Getcity= e =>{
    setCity(e.target.value);
  };
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e8ff37d2504eea171aca23fa988d3e5`).
    then(
      response=> response.json()).
      then( data =>{
        const kelvin=data.main.temp;
        const celcius=kelvin-273.15;
        setres("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
      }
    ).catch(error => console.log(error))
    setCity("");
  };
  return (
    <div className="main">
      <center>
          <div className="card">
                <h1 id="heading">Weather App</h1>
                <form onSubmit={submitHandler}>
                  <input type="text" name="city" value={city} onChange={Getcity}/><br/><br/>
                  <input type="submit" value="Get the Temperature"/>
                </form>
                <h1>{res}</h1>
          </div>
          </center>
    </div>
  )
}

export default App

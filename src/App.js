import React from 'react'
import { BrowserRouter as Router, Link , Route,Switch } from 'react-router-dom';

import NavbarHeader from './Components/Navbar'
import Home from './Components/Home'
import Profile from './Components/Profile'
import CarDetails from './Components/CarDetails'
import './App.css';

function App() {
  const [data,setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  // const getData = () => {
   
  // using useEffect for updating data
  React.useEffect(() => {
    fetch("./Vehical.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        setLoading(true);
        return response.json();
      })
      .then((data) => setData(data), setLoading(false));
     console.log(data);
  }, []);
  return (
    <div>
      <Router>
      <NavbarHeader/>
       
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Dashboard">
       <Profile data={data}/>
        </Route>
        {/* <Route path="/Dashboard/:productId">
          <Car />
        </Route> */}
        <Route path="/dashboard/:{carId}">
          <CarDetails data={data} />
        </Route>
      </Switch>
     </Router>   
    </div>
  );
}

export default App;

import React from 'react'
import { Link} from 'react-router-dom'
import {Tab, Tabs } from 'react-bootstrap'
export default function Profile({data}) {
    const [key, setKey] = React.useState('home');
    
    const sedan = data.map(car => {
         return car.type == "sedan" ?  <div key={car.id}>
         <h3>
           <Link to={`/dashboard/${car.id}`}>{car.name}</Link>
         </h3>
         <p>Price: ${car.price}</p>
         <hr />
       </div> : null;

    });
    // const sports = data.map(car => {
    //     return (
    //          car.type === "sports" ?  
    //       <div key={car.id}>
    //         <h3>
    //           <Link to={`/dashboard/${car.id}`}>{car.name}</Link>
    //         </h3>
    //         <p>Price: ${car.price}</p>
    //         <hr />
    //       </div> : null
    //     )
    // });
    // const suvs = data.map(car => {
    //     return (
    //       <div key={car.id}>
    //         <h3>
    //           <Link to={`/dashboard/${car.id}`}>{car.name}</Link>
    //         </h3>
    //         <p>Price: ${car.price}</p>
    //         <hr />
    //       </div>
    //     )
    // });
    // const hatchback = data.map(car => {
    //     return (
    //       <div key={car.id}>
    //         <h3>
    //           <Link to={`/dashboard/${car.id}`}>{car.name}</Link>
    //         </h3>
    //         <p>Price: ${car.price}</p>
    //         <hr />
    //       </div>
    //     )
    // });
    return (
        <div>  
            
            <Tabs
            
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
  <Tab eventKey="home" title="Sedan">
 {sedan}
  </Tab>
  <Tab eventKey="profile" title="Honda">
   Sedan
  </Tab>
  <Tab eventKey="contact" title="Convertable" >
  Convertable
  </Tab>
  <Tab eventKey="sports" title="Sports">
      Cards
  </Tab>
</Tabs>
        </div>
    )
}

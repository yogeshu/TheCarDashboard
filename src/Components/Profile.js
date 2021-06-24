import React from 'react'
import { Link} from 'react-router-dom'
import {Tab, Tabs, Card } from 'react-bootstrap'
export default function Profile({data}) {
    const [key, setKey] = React.useState(localStorage.getItem("tabIndex"));
    console.log(key)
    const tabValue = localStorage.setItem("tabIndex", key);
    const getTabValue = localStorage.getItem("tabIndex")
   const numberimg = Math.floor(Math.random()* 10 - 1)
    const sedan = data.map(car => {
         return car.type == "sedan" ?  
         <div className="card py-4" style={{flexDirection: 'row'}}> 
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`https://picsum.photos/${numberimg + car.id}`} />
  <Card.Body>
    <Card.Title>{car.name}</Card.Title>
    <Card.Text>
    
    </Card.Text>
  </Card.Body>
 
  <Card.Body>
  <Link to={`/dashboard/${car.id}`}> Go to Page</Link>

  </Card.Body>
</Card>
     </div>
         
          : null;

    });
    const sports = data.map(car => {
        return (
             car.type === "sports" ?  
          <div key={car.id}>
            <h3>
              <Link to={`/dashboard/${car.id}`}>{car.name}</Link>
            </h3>
            <p>Price: ${car.price}</p>
            <hr />
          </div> : null
        )
    });
    const suvs = data.map(car => {
        return (
            car.type === 'SUVs' ?
          <div key={car.id}>
            <h3>
              <Link to={`/dashboard/${car.id}`}>{car.name}</Link>
            </h3>
            <p>Price: ${car.price}</p>
            <hr />
          </div> : null
        )
    });
    const hatchback = data.map(car => {
        return (
             car.type === "hatchback" ?
          <div key={car.id}>
            <h3>
              <Link to={`/dashboard/${car.id}`}>{car.name}</Link>
            </h3>
            <p>Price: ${car.price}</p>
            <hr />
          </div> : null
        )
    });
    const currentTab = () => {
        let path = window.location.pathname
        if (path === "/sedan") return 1
        else if (path === "/") return 2
        else if (path === "/Contact") return 3
      }
    
    return (
        <div>  
            
            <Tabs
            unmountOnExit={false}
            id="controlled-tab-example"
            activeKey={key }
            onSelect={(getTabValue) => setKey(getTabValue)}
          >
  <Tab eventKey="home" title="Sedan" className="text-center">
      {sedan}
  </Tab>
  <Tab eventKey="profile" title="Honda">
   {suvs}
  </Tab>
  <Tab eventKey="contact" title="Convertable" >
 {hatchback}
  </Tab>
  <Tab eventKey="sports" title="Sports">
      {sports}
  </Tab>
</Tabs>
        </div>
    )
}

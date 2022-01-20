import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import flash from './img/usb-flash.jpg';
import office from './img/office_soft.jpg';
import speakers from './img/speakers_lt.jpg';
import cellphone from './img/redmi_note.jpg';
import gadapter from './img/GTX-980-Ti.png';
import comp from './img/acer_desktop.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActualItems from './Components/ActualItems';
import AddNewItem from './Components/AddNewItem';

const dataList = [
  {
      id: 1,
      title: "Atmintine",
      imageUrl: flash,
      description: "256 GB atmintine",
      price: 50,
      quantity: 10
  },
  {
      id: 2,
      title: "Office365 programine iranga",
      imageUrl: office,
      description: "MS-Office365 programine iranga",
      price: 150,
      quantity: 5
  },
  {
      id: 3,
      title: "Koloneles",
      imageUrl: speakers,
      description: "Garso koloneles 2.0",
      price: 250,
      quantity: 2
  },
  {
      id: 4,
      title: "Telefonas RedMi Note",
      imageUrl: cellphone,
      description: "Telefonas Redmi Note XG2201i",
      price: 300,
      quantity: 4
  },
  {
      id: 5,
      title: "Vaizdo plokste GTX-980-Ti",
      imageUrl: gadapter,
      description: "4GB Vaizdo plokste personaliniam kompiuteriui",
      price: 500,
      quantity: 2
  },
  {
      id: 6,
      title: "Stalo kompiuteris Acer",
      imageUrl: comp,
      description: "Personalinis kompiuteris Acer",
      price: 1500,
      quantity: 1
  }
]

function App() {

  const [state, setState] = useState(dataList);

  const handleCallback = (childName) => {
    setState(dataList.push(childName))
    console.log("App.js New item add dataList state: " + state);
  };

  return (
    <div className="container">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link py-2" to="/Shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link py-2 mx-3" to="/New-Product">New Product</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/Shop">
            <ActualItems dataList={dataList} />
          </Route>
          <Route path="/New-Product">
            <AddNewItem dataList={dataList}
              parentCallback={handleCallback} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

    // <div className="App">
    //   <UpperBar />
    //   <ActualItems />
    // </div>
  );
}

export default App;

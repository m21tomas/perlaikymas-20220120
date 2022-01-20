import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import ActualItems from './Components/ActualItems';
import AddNewItem from './Components/AddNewItem';

const trainList = [
  {
    id: 1,
    trainNumber: 119587,
    yearManufacture: 1997,
    manufacturer: "Berkshire",
    wagons: 30,
    departureCity: "Kaunas",
    arrivalCity: "Vilnius",
    imageUrl: "https://www.interrail.eu/content/dam/images/interrail/czech_train_72dpi_1280x853px_e_nr-1097.jpg"
  },
  {
    id: 2,
    trainNumber: 120123,
    yearManufacture: 2001,
    manufacturer: "UnionPacific",
    wagons: 50,
    departureCity: "Klaipeda",
    arrivalCity: "Kaunas",
    imageUrl: "https://wheelieaccessibleadventures.com/wp-content/uploads/2019/07/translink-access-.jpg"
  },

]

function App() {

  const [state, setState] = useState(trainList);

  const handleCallback = (childName) => {
    setState(trainList.push(childName))
    console.log("App.js New item add trainList state: " + state);
  };

  return (
    <div className="container">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link py-2" to="/Trains">Traukiniai</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link py-2 mx-3" to="/New-train">Ideti naują traukini</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/Trains">
            <ActualItems trainList={trainList} />
          </Route>
          <Route path="/New-train">
            <AddNewItem trainList={trainList}
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

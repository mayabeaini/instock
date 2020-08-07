import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Locations from './Components/Locations/Locations';
import WarehouseDetails from './Components/WarehouseDetails/WarehouseDetails';
import Home from './Pages/Home/Home';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';
// import AddNewInventory from './Components/AddNewInventory/AddNewInventory';
import './styles/App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" >
          <Redirect to="/warehouses" />
        </Route>
        <Route path="/warehouses/:id" render={() => <WarehouseDetails />} />
        <Route path="/warehouses" render={() => <Locations />} />
        <Route path="/inventory/:id" render={() => <InventoryDetails />} />
        <Route path="/inventory" render={() => <Home />} />
      </Switch>
    </BrowserRouter>
  )
}

import React, { Component } from 'react'
import {Link, withRouter } from 'react-router-dom';
import image from '../../assets/Icons/SVG/Icon-back-arrow.svg'
import './inventorydetails.scss'
import axios from 'axios';
import InventoryItem from '../../Components/InventoryItem/InventoryItem';

// URL
const apiUrl = "http://localhost:8080"
// GET
const apiInv = "/inventory"

class InventoryDetails extends Component {
    state ={
        inventory:[],
        location:[],
    }
 
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get (`${apiUrl}${apiInv}/`+id)
          .then( res =>{
             const id = res.data.warehouseId
             axios.get (`http://localhost:8080/warehouses/`+id)
               .then (res => {
                 this.setState({
                    location: res.data.contact.name,
                 })
               })
             this.setState({
                inventory: res.data
             })
          })
          .catch(console.error('Oops! My bad!'));
    }
   
    render() {
        return (
            <div className="inventory-details">
                <div className="inventory-details__top">
                    <div className="inventory-details__title">
                        <img src={image} className="inventory-details__back" alt="back arrow"/>
                        <Link to="/inventory" style={{textDecoration : 'none'}}>
                            <h1 className="inventory-details__product">{this.state.inventory.name}</h1>
                        </Link>
                    </div>
                    <button className={`${this.state.isInstock ? "inventory-details__in-stock" : "inventory-details--hidden"}`}>In Stock</button>
                    <button className={`${!this.state.isInstock ? "inventory-details__out-stock" : "inventory-details--hidden"}`}>Out of Stock</button>
                </div>
                <InventoryItem inventory={this.state.inventory} location={this.state.location} />
            </div>
        )
    }
}

export default withRouter(InventoryDetails)
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Kebab from './Kebab'
import AddNewInventory from '../AddNewInventory/AddNewInventory';
import './InventoryList.scss';

class InventoryList extends React.Component {

    state = {
        name: [],
        lastOrdered: [],
        city: [],
        quantity: [],
        isInstock: [],
        id: [],
        displayModal: false
    }

    componentDidMount() {

        let requestUrl = '';

        if (this.props.warehouseId) {
            requestUrl = `http://localhost:8080/inventory?wId=${this.props.warehouseId}`;
        } else {
            requestUrl = `http://localhost:8080/inventory`
        }

        axios.get(requestUrl)
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
    }

    showModal = () => {
        this.setState({ displayModal: !this.state.displayModal })
    }

    deleteHandler = (id) => {
        axios.delete(`http://localhost:8080/inventory/` + id)
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
            .catch(console.error("Oopsie Doopsie!"))
    }

    addNewInventoryItem = (item) => {
        axios.post('http://localhost:8080/inventory' , {
            name: item[0].value,
            lastOrdered: item[3].value,
            city: item[1].value,
            quantity: item[2].value,
            country: item[4].value,
            isInstock: item[5].checked,
            description: item[6].value
        })
        .then( res => {
            const products = res.data;
            this.setState({ 
                name: res.data.name,
                lastOrdered: res.data.lastOrdered,
                city: res.data.city,
                quantity: res.data.quantity,
                isInstock: res.data.isInstock,
                id: res.data.id
            })
        })
        .catch(err => console.error("Couldn't add product! ", err))
    }

    render() {
        if (!this.state.products) {
            return null;
        } else {
            return (
                <div className="inventory-container">
                    { (this.state.displayModal) ? <AddNewInventory addNewInventoryItem={this.addNewInventoryItem}/> : null }
                    <div className="inventory-container__tablet">
                        <h5 className="inventory-container__tablet-titleitem">ITEM</h5>
                        <h5 className="inventory-container__tablet-titlelastordered">LAST ORDERED</h5>
                        <h5 className="inventory-container__tablet-titlelocation">LOCATION</h5>
                        <h5 className="inventory-container__tablet-titlequanity">QUANTITY</h5>
                        <h5 className="inventory-container__tablet-titlestatus">STATUS</h5>
                    </div>

                    {this.state.products.map(product =>
                        <div key={product.id} className="inventory-container__list">
                            <Kebab delete={this.deleteHandler} product={product.id} />
                            <div className="inventory-container__list-item">
                                <h5 className="inventory-container__list-title" >ITEM</h5>
                                <Link to={`/Inventory/${product.id}`} style={{ textDecoration: "none" }} >
                                    <span className="inventory-container__list-name">{product.name}</span>
                                </Link>
                                <span>{product.description}</span>
                            </div>
                            <div className="inventory-container__list-lastordered">
                                <h5 className="inventory-container__list-title">LAST ORDERED</h5>
                                <span className="inventory-container__list-date">{product.lastOrdered}</span>
                            </div>
                            <div className="inventory-container__list-location">
                                <h5 className="inventory-container__list-title">LOCATION</h5>
                                <span className="inventory-container__list-city">{product.city}</span>
                            </div>
                            <div className="inventory-container__list-quantity">
                                <h5 className="inventory-container__list-title">QUANTITY</h5>
                                <span className="inventory-container__list-count">{product.quantity}</span>
                            </div>
                            <div className="inventory-container__list-status">
                                <h5 className="inventory-container__list-title">STATUS</h5>
                                <span className="inventory-container__list-stock">{(product.isInstock) ? 'In Stock' : 'Out of Stock'}</span>
                            </div>
                            <hr />
                        </div>
                    )}

                    <div onClick={this.showModal} className="inventory-container__add-image"></div>
                </div>
            )
        }
    }
}

export default InventoryList;
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import backArrow from '../../assets/Icons/SVG/Icon-back-arrow.svg';
import InventoryList from '../InventoryList/InventoryList';
import './WarehouseDetails.scss';

class WarehouseDetails extends React.Component {

    state = {
        warehouseData: {
            name: '',
            address: {},
            contact: {},
            id: '',

        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/warehouses/${this.props.match.params.id}`)
        .then(res => {
            this.setState({warehouseData: res.data})
        })
        .catch(err => console.error("Unable to fetch warehouse details... ", err));
    }

    render() {
        if (!this.state.warehouseData) {
            return <p className="loading">Loading...</p>;
        } else {
            return (
                <>
                    <section className="warehouse-details">
                        <div className="warehouse-details__title-group">
                            <Link to="/warehouses"><img src={backArrow} alt="Go back to warehouse list" className="backarrow" /></Link>
                            <h1 className="warehouse-details__title">{this.state.warehouseData.name}</h1>
                        </div>
                        <div className="warehouse-details__address-contact-group">
                            <div className="warehouse-details__sub-group">
                                <h4 className="warehouse-details__label">ADDRESS</h4>
                                <div className="warehouse-details__item-group">
                                    <span className="warehouse-details__item">{this.state.warehouseData.address.street}</span>
                                    <span className="warehouse-details__item warehouse-details__item--display-italic">Suite 201</span>
                                </div>
                                <div className="warehouse-details__item-group">
                                    <span className="warehouse-details__item">{this.state.warehouseData.address.location}</span>
                                    <span className="warehouse-details__item warehouse-details__item--display-italic">M6P 3X9</span>
                                </div>
                            </div>
                            <div className="warehouse-details__sub-group">
                                <h4 className="warehouse-details__label">CONTACT</h4>
                                <div className="warehouse-details__item-group">
                                    <span className="warehouse-details__item">{this.state.warehouseData.contact.name}</span>
                                    <span className="warehouse-details__item warehouse-details__item--display-italic">{this.state.warehouseData.contact.position}</span>
                                </div>
                                <div className="warehouse-details__item-group">
                                    <span className="warehouse-details__item">{this.state.warehouseData.contact.phone}</span>
                                    <span className="warehouse-details__item warehouse-details__item--display-italic">{this.state.warehouseData.contact.email}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="warehouse-details__inventory-list">
                        <InventoryList warehouseId={this.props.match.params.id} />
                    </section>
                </>
            )
        }
    }
}

export default withRouter(WarehouseDetails);

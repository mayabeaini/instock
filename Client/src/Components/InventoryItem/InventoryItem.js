import React from 'react'
import {Link} from 'react-router-dom';
import './InventoryItem.scss'

export default function InventoryItem ({inventory, location}) {
    return (
        <div >
            <div className="inventory-details__main">
                <div className="inventory-details--size">
                    <h3 className="inventory-details--decoration">Item Description</h3>
                    <p className="inventory-details__paragraph">{inventory.description}</p>
                </div>
                <div>
                    <div className="inventory-details--placement">
                        <div className="inventory-details--width">
                            <h3 className="inventory-details--decoration">Ordered by</h3>
                            <p className="inventory-details__paragraph">{location}</p>
                        </div>
                        <div className="inventory-details--width">
                            <h3 className="inventory-details--decoration">reference number</h3>
                            <p className="inventory-details__paragraph">{inventory.id}</p>
                        </div>
                    </div>
                    <div className="inventory-details--placement">
                        <div className="inventory-details--width">
                            <h3 className="inventory-details--decoration">last ordered</h3>
                            <p className="inventory-details__paragraph">{inventory.lastOrdered}</p>
                        </div>
                        <div className="inventory-details--width">
                            <h3 className="inventory-details--decoration">Location</h3>
                            <p className="inventory-details__paragraph">{inventory.city}, {inventory.country}</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="inventory-details--decoration">quantity</h3>
                        <p className="inventory-details__paragraph">{inventory.quantity}</p>
                        <h3 className="inventory-details--decoration">Categories</h3>
                        <p className="inventory-details__paragraph">{inventory.categories}</p>
                    </div>
                </div>
            </div>
            <div className="inventory-details__button">
                <Link to={`/inventory/${location.id}/edit`}>
                    <button className="inventory-details__edit">edit</button>
                </Link>
            </div>
        </div>
    )
}

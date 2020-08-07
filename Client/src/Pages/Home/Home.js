import React from 'react'
import InventoryList from '../../Components/InventoryList/InventoryList';
import './Home.scss';

export default function Home() {
    return (
        <div>
        <div className="inventory-container__title-searchbar">
            <h1>Inventory</h1>
            <input type="text" placeholder="Search"/>
        </div>
            <InventoryList />
        </div>
    )
}

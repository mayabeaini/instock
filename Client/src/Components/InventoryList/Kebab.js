import React from 'react';
import KebabIcon from '../../assets/Icons/SVG/Icon-kebab-default.svg';
import './InventoryList.scss';

export default class Kebab extends React.Component {
    state={
        display: false,
    }
    kebab = () => {
        this.setState({display: !this.state.display})
    }
    render() {
        return (
            <div>
                <img src={KebabIcon} alt="kebab" className="inventory-container__list-kebab" onClick={this.kebab} />
                <button className={`${this.state.display ? "inventory-container__list-button" : "inventory-container__list-invisible"}`} onClick={()=>{this.props.delete(this.props.product); this.kebab()}} >Remove</button>
            </div>
        )
    }
}
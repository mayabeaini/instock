import React, { useState, createRef } from 'react';
import Modal from 'react-modal';
import Switch from 'react-switch';
import './AddNewInventory.scss';

const AddNewInventory = ({ addNewInventoryItem }) => {

    const [modalIsOpen, toggleModal] = useState(true);
    const [statusIsChecked, toggleStatus] = useState(false);
    const [visibility, toggleVisibility] = useState(false);
    const newInventoryForm = createRef();

    const validate = (form) => {
        let check = true;
        check = ((form['itemName'].value && form['itemName'].value.trim().length !== 0) && check) ? true : false;
        check = ((form['itemCity'].value && form['itemName'].value.trim().length !== 0) && check) ? true : false;
        check = (form['itemQuantity'].value > 0 && check) ? true : false;
        check = (form['itemOrdered'].value && check) ? true : false;
        check = (form['itemCountry'].value && check) ? true : false;
        check = ((form['itemQuantity'].value > 0 && form['itemStatus'].checked) && check) ? true : false;
        return check;
    }

    const validateAndSubmit = () => {
        let isValid = validate(newInventoryForm.current)
        if ( isValid ) { 
            addNewInventoryItem(newInventoryForm.current);
            toggleModal(false)
        } else {
            toggleVisibility(true);
        }
    }

    return (
        <Modal className="modal" overlayClassName="modal__overlay" isOpen={modalIsOpen}>
            <h2 className="add-new-inventory__title">Create New</h2>
            <span className={`add-new-inventory__warning ${(visibility) ? "add-new-inventory__warning--visible" : "add-new-inventory__warning--hidden" }`}>Please fill out all required form fields properly.</span>
            <form ref={newInventoryForm} className="add-new-inventory__form">
                <div className="add-new-inventory__input-container">
                    <div className="add-new-inventory__column">
                        <div className="add-new-inventory__input-group">
                            <label htmlFor="itemName" className="add-new-inventory__label">PRODUCT</label>
                            <input type="text" name="itemName" className="add-new-inventory__input" placeholder="Item Name" />
                        </div>
                        <div className="add-new-inventory__input-group">
                            <label htmlFor="itemCity" className="add-new-inventory__label">CITY</label>
                            <input type="text" name="itemCity" className="add-new-inventory__input" placeholder="City" />
                        </div>
                        <div className="add-new-inventory__input-group">
                            <label htmlFor="itemQuantity" className="add-new-inventory__label">QUANTITY</label>
                            <input type="number" name="itemQuantity" className="add-new-inventory__input" placeholder="0" />
                        </div>
                    </div>
                    <div className="add-new-inventory__column">
                        <div className="add-new-inventory__input-group">
                            <label htmlFor="itemOrdered" className="add-new-inventory__label">LAST ORDERED</label>
                            <input type="date" name="itemOrdered" className="add-new-inventory__input" />
                        </div>
                        <div className="add-new-inventory__input-group">
                            <label htmlFor="itemCountry" className="add-new-inventory__label">COUNTRY</label>
                            <select name="itemCountry" className="add-new-inventory__input">
                                <option value="Canada">Canada</option>
                                <option value="United States">United States</option>
                                <option value="Mexico">Mexico</option>
                            </select>
                        </div>
                        <div className="add-new-inventory__input-group">
                            <label className="add-new-inventory__label" htmlFor="itemStatus">STATUS</label>
                            <div className="add-new-inventory__instock-group">
                                <span className="add-new-inventory__instock-label">In Stock</span>
                                <Switch name="itemStatus" className="add-new-inventory__toggle" onChange={() => toggleStatus(!statusIsChecked)} checked={statusIsChecked} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-new-inventory__description-group">
                    <label htmlFor="itemDescription" className="add-new-inventory__label">ITEM DESCRIPTION</label>
                    <textarea name="itemDescription" placeholder="(Optional)" className="add-new-inventory__description"></textarea>
                </div>
                <div className="add-new-inventory__button-group">
                    <button type="button" name="itemSave" className="add-new-inventory__save" onClick={() => validateAndSubmit()}>SAVE</button>
                    <button type="button" name="itemCancel" className="add-new-inventory__cancel" onClick={() => toggleModal(false)}>CANCEL</button>
                </div>
            </form>
        </Modal>
    )
}

export default AddNewInventory;
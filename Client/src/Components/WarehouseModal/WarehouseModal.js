import React, { useState} from "react";
import AddIcon from "../../assets/Icons/SVG/Icon-add.svg";
import "./WarehouseModal.scss";
import Modal from "react-modal";

function WarehouseModal({ onSubmitWarehouse }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [warhouseName, setWarhouseName] = useState("");
  const [warhouseAdress, setWarhouseAddress] = useState("");
  const [warhouseContactName, setWarhouseContactName] = useState("");
  const [warhousePosition, setWarhousePosition] = useState("");
  const [warhousePhone, setWarhousePhone] = useState("");
  const [warhouseEmail, setWarhouseEmail] = useState("");
  const [warhouseLocation, setWarhouseLocation] = useState("Toronto, CAN");
  const [warhouseCategories, setWarhouseCategories] = useState("");

  const handleOnSave = () => {
    const warehouseInfo = {
      id: warhouseName,
      name: warhouseName,
      address: {
        street: warhouseAdress,
        location: warhouseLocation,
      },
      contact: {
        name: warhouseContactName,
        position: warhousePosition,
        phone: warhousePhone,
        email: warhouseEmail,
      },
      inventoryCategories: warhouseCategories,
    };
    
    onSubmitWarehouse(warehouseInfo);
    setModalIsOpen(false);
  };
  return (
    <div className="warehouseModal">
      <img
        className="warehouseModal__btn"
        src={AddIcon}
        alt="Add Icon"
        onClick={() => setModalIsOpen(true)}
      />
      <Modal className="modal" isOpen={modalIsOpen}>
        <h2 className="modal__header">Add New</h2>
        <div className="modal__form">
          <div className="modal__form--name">
            <label htmlFor="warehouseName" className="modal__form--name__label">
              WAREHOUSE
            </label>
            <input
              type="text"
              placeholder="Name & ID"
              name="warehouseName"
              className="modal__form--name__text"
              onInput={(e) => setWarhouseName(e.target.value)}
            />
          </div>

          <div className="one">
            <div className="modal__form--name">
              <label
                htmlFor="warehouseName"
                className="modal__form--name__label"
              >
                ADDRESS
              </label>
              <input
                type="text"
                placeholder="Enter Address"
                name="warehouseName"
                className="modal__form--name__text"
                onInput={(e) => setWarhouseAddress(e.target.value)}
              />
            </div>

            <div className="modal__form--name">
              <label htmlFor="itemCountry" className="modal__form--name__label">
                LOCATION
              </label>
              <select
                name="itemCountry"
                className="modal__form--name__text"
                onChange={(e) => setWarhouseLocation(e.target.value)}
              >
                <option value="Toronto, CAN">Toronto, CAN</option>
                <option value="Vancouver, CAN">Vancouver, CAN</option>
              </select>
            </div>
          </div>

          <div className="two">
          <div className="modal__form--name">
            <label htmlFor="warehouseName" className="modal__form--name__label">
              CONTACT NAME
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="warehouseName"
              className="modal__form--name__text"
              onInput={(e) => setWarhouseContactName(e.target.value)}
            />
          </div>

          <div className="modal__form--name">
            <label htmlFor="warehouseName" className="modal__form--name__label">
              POSITION
            </label>
            <input
              type="text"
              placeholder="Enter Position"
              name="warehouseName"
              className="modal__form--name__text"
              onInput={(e) => setWarhousePosition(e.target.value)}
            />
          </div>
          </div>

          <div className="three">
          <div className="modal__form--name">
            <label htmlFor="warehouseName" className="modal__form--name__label">
              PHONE NUMBER
            </label>
            <input
              type="text"
              placeholder="(000) 000 - 0000"
              name="warehouseName"
              className="modal__form--name__text"
              onInput={(e) => setWarhousePhone(e.target.value)}
            />
          </div>

          <div className="modal__form--name">
            <label htmlFor="warehouseName" className="modal__form--name__label">
              EMAIL
            </label>
            <input
              type="text"
              placeholder="email@instock.com"
              name="warehouseName"
              className="modal__form--name__text"
              onInput={(e) => setWarhouseEmail(e.target.value)}
            />
          </div>
          </div>


          <div className="modal__form--name">
            <label htmlFor="warehouseName" className="modal__form--name__label">
              CATEGORIES
            </label>
            <input
              type="text"
              name="warehouseName"
              placeholder="Use commas to separate each category"
              className="modal__form--name__text"
              style={{ height: 80 }}
              onInput={(e) => setWarhouseCategories(e.target.value)}
            />
          </div>
          <div className="add-new-warehouseBtn">
            <button
              className="add-new-warehouseBtn__save"
              onClick={handleOnSave}
            >
              SAVE
            </button>
            <button
              className="add-new-warehouseBtn__cancel"
              onClick={() => setModalIsOpen(false)}
            >
              CANCEL
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default WarehouseModal;

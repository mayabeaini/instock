import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../../assets/Icons/SVG/Icon-arrow-right.svg";
import "./Locations.scss";
import WarehouseModal from "../WarehouseModal/WarehouseModal";
import Axios from "axios";

class Warehouses extends React.Component {
  state = {
    warehouse: [],
  };

  componentDidMount() {
    //api call and set the respoonse in the state
    Axios.get("http://localhost:8080/warehouses").then((res) => {
      this.setState({ warehouse: res.data });
    });
  }

  submitNewWarehouseData = (data) => {

    if (
      !data.name ||
      !data.address.street ||
      !data.address.location ||
      !data.contact.name ||
      !data.contact.position ||
      !data.contact.phone ||
      !data.contact.email ||
      !data.inventoryCategories
    ) {
      alert("Please fill all the entries!");
    } else {
      Axios.post("http://localhost:8080/warehouses", data).then((res) => {
        this.setState({ warehouse: res.data });
      });
    }
  };

  render() {
    if (!this.state.warehouse) {
      return null;
    } else {
      return (
        <div>
          <div className="container">
            <h5>WAREHOUSE</h5>
            <h5>CONTACT</h5>
            <h5 style={{ marginRight: 104 }}>CONTACT INFORMATION</h5>
            <h5 style={{ marginRight: 0 }}>CATEGORIES</h5>
          </div>

          {this.state.warehouse.map((warehouseLocation, i) => {
            return (
              <div key={i} className="warehouses">
                <div className="warehouses__name">
                  <p style={{ fontWeight: "bold" }}>
                    {warehouseLocation.name}
                    <Link to={`/warehouses/${warehouseLocation.id}`}>
                      <img src={RightArrow} alt="Instock Logo" />
                    </Link>
                  </p>
                  <p>
                    {warehouseLocation.address.street},{" "}
                    {warehouseLocation.address.location}
                  </p>
                </div>
                <div className="warehouses__info">
                  <div className="warehouses__info--person">
                    <p>{warehouseLocation.contact.name}</p>
                    <p style={{ fontStyle: "italic" }}>
                      {warehouseLocation.contact.position}
                    </p>
                  </div>
                  <div className="warehouses__info--contact">
                    <p>{warehouseLocation.contact.phone}</p>
                    <p>{warehouseLocation.contact.email}</p>
                  </div>
                  <div className="warehouses__inventory">
                    <p>{warehouseLocation.inventoryCategories}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <WarehouseModal onSubmitWarehouse={this.submitNewWarehouseData} />
        </div>
      );
    }
  }
}

export default Warehouses;

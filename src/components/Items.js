import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { plus, minus } from "../actions";
import Modal from "react-modal";

const Items = () => {
  const itemsReducer = useSelector((state) => state.itemsReducer);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const assignId = (id) => {
    console.log(id);
    const filter = itemsReducer.filter((o) => o.id === id);
    console.log(filter);
    setSelectedImage(filter[0].image);
    setModal(true);
  };

  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {itemsReducer.map((item) => (
          <div>
            <li
              style={{
                backgroundColor: "#ccccff",
                listStyle: "none",
                width: 350,
                height: 445,
                margin: 15,
                padding: 15,
                borderRadius: 20,
                border: "0.5px solid rebeccapurple",
              }}
              key={item.id}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                {item.name}
              </p>
              <img
                style={{ width: "150px", marginLeft: "30%", borderRadius: 20 }}
                src={item.image}
                alt={item.name}
                onClick={() => assignId(item.id)}
              />
              <Modal
                isOpen={modal}
                onRequestClose={() => setModal(false)}
                style={{
                  overlay: {
                    width: 600,
                    height: 600,
                    justifyContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                    flex: 1,
                  },
                }}
              >
                <button onClick={() => setModal(false)}>X</button>
                <img
                  src={selectedImage}
                  alt={selectedImage}
                  style={{
                    width: 400,
                  }}
                />
              </Modal>
              <div style={{ alignSelf: "center", marginLeft: "37%" }}>
                <button
                  style={{
                    marginRight: 10,
                    marginTop: 8,
                    paddingRight: 10,
                    paddingLeft: 10,
                    fontSize: 20,
                    borderRadius: 10,
                  }}
                  onClick={() => dispatch(minus(item.id))}
                >
                  -
                </button>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "purple",
                  }}
                >
                  {item.quantiySelected}
                </span>
                <button
                  style={{
                    marginLeft: 10,
                    marginTop: 8,
                    paddingRight: 10,
                    paddingLeft: 10,
                    fontSize: 20,
                    borderRadius: 10,
                  }}
                  onClick={() => dispatch(plus(item.id))}
                >
                  +
                </button>
              </div>
              <p style={{ fontWeight: "bold" }}> price: {item.price}$</p>
              <p style={{ fontWeight: "bold" }}>
                quantity available: {item.quantityAvailable}
              </p>
              <p style={{ fontWeight: "bold" }}>{item.description}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Items;

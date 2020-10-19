import React from "react";
import { useSelector } from "react-redux";

const Order = () => {
  const itemsReducer = useSelector((state) => state.itemsReducer);
  const totalPriceReducer = itemsReducer.reduce(
    (acc, item) => acc + item.totalPriceSelected,
    0
  );
  return (
    <div>
      <ul
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        {itemsReducer.map((item) => (
          <div>
            {item.quantiySelected > 0 ? (
              <li
                style={{
                  backgroundColor: "#ccccff",
                  listStyle: "none",
                  width: 300,
                  height: 120,
                  margin: 5,
                  paddingLeft: 15,
                  paddingBottom: 15,
                  borderRadius: 20,
                  border: "0.5px solid rebeccapurple",
                }}
                key={item.id}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  {item.name}
                </p>
                <div>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "purple",
                    }}
                  >
                    {item.quantiySelected}
                  </span>
                </div>
                <p style={{ fontWeight: "bold" }}>
                  total per item: {item.totalPriceSelected}$
                </p>
              </li>
            ) : null}
          </div>
        ))}
        <div style={{ fontWeight: "bold", fontSize: 19, marginLeft: 12 }}>
          total price: {totalPriceReducer}$
        </div>
      </ul>
    </div>
  );
};

export default Order;

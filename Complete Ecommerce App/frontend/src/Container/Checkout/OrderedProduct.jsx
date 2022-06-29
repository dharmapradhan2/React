import React, { useEffect, useState } from "react";
import Navbar from "../Header/Navbar";
import { cart } from "../../APi/commonApi";
function OrderedProduct() {
  const [orderList, SetOrderList] = useState([]);
  const localData = JSON.parse(localStorage.getItem("Data"));
  useEffect(() => {
    const test = {
      uid: localData.uid,
    };
    const data = async () => {
      await cart
        .post("/getOrderedDetails", JSON.stringify(test))
        .then((res) => {
          SetOrderList(res.data);
          // console.log(res);
        });
    };
    data();
  }, [localData]);
  let html = "";
  if (orderList.length > 0) {
    html = (
      <>
        <table className="table table-striped table-inverse table-responsive">
          <thead className="thead-inverse">
            <tr>
              <th>
                <small className="">No. of Order</small>
              </th>
              <th>
                <small className="">Order ID</small>
              </th>
              <th>
                <small className="">Ordered Items</small>
              </th>
              <th>
                <small className="">Payees Name</small>
              </th>
              <th>
                <small className="">Email</small>
              </th>
              <th>
                <small className="">Price</small>
              </th>
              <th>
                <small className="">Ordered Date & Time</small>
              </th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((item, i) => {
              return (
                <tr key={i} className="text-center">
                  <td>
                    <div className="p-2 bd-highlight">{++i}</div>
                  </td>
                  <td>
                    <div className="p-2 bd-highlight">{item.orderId}</div>
                  </td>
                  <td>
                    <div className="p-2 bd-highlight">{item.orderedItems}</div>
                  </td>
                  <td>
                    <div className="p-2 bd-highlight">{item.full_name}</div>
                  </td>
                  <td>
                    <div className="p-2 bd-highlight">{item.email}</div>
                  </td>
                  <td>
                    <div className="p-2 bd-highlight">{item.price}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  } else {
    html = (
      <div className="mt-2 p-2 bd-highlight text-center">
        <p>You did not ordered anything..</p>
      </div>
    );
  }
  return (
    <div className="container-fluid m-0 p-0">
      <Navbar />
      <div className="container-md">
        <div className="d-flex flex-column bd-highlight mb-3">{html}</div>
      </div>
    </div>
  );
}

export default OrderedProduct;

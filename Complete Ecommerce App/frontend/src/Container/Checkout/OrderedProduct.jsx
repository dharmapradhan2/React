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
          console.log(res);
        });
    };
    data();
  }, []);
  let html = "";
  if (orderList.length > 0) {
    html = (
      <>
        <table className="table table-sm table-striped table-inverse table-sm-responsive">
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
                    <div className="">{++i}</div>
                  </td>
                  <td>
                    <div className="">{item.orderId}</div>
                  </td>
                  <td>
                    <div className="">{item.orderedItems}</div>
                  </td>
                  <td>
                    <div className="">{item.full_name}</div>
                  </td>
                  <td>
                    <div className="">{item.email}</div>
                  </td>
                  <td>
                    <div className="">{item.price}</div>
                  </td>
                  <td>
                    <div className="">{item.created_at}</div>
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
      <div className="mt-2  text-center">
        <p>You did not ordered anything..</p>
      </div>
    );
  }
  return (
    <div className="container-fluid m-0 p-0">
      <Navbar />
      <div className="container-fluide">{html}</div>
    </div>
  );
}

export default OrderedProduct;

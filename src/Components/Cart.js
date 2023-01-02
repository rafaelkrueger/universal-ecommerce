import React, { useEffect, useState } from "react";
import "../App.css";

function Cart({
  data,
  cart,
  setCart,
  costumer,
  setCostumer,
  filled,
  setFilled,
  valortotal,
  setValorTotal,
}) {
  const freteTotal = () => {
    return 0;
  };

  const valorTotalCart = (cart, frete = 0) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total = total + parseFloat(cart[0].totalPrice);
    }
    total = total + frete;
    return total;
  };

  const optionValue = (list) => {
    let total = 0;
    total = parseFloat(list.value) + total;
    for (let i = 0; i < list.options.length; i++) {
      if (list.options[i].type == list.options.id) {
        total = parseFloat(list.options[i].price) + total;
      }
    }
    list.totalPrice = total;
    return total;
  };

  useEffect(() => {
    setValorTotal(valorTotalCart(cart, 0));
  });

  return (
    <>
      <div className="cart">
        <div className="purchase-table">
          <table class="table table-light table-striped" id="cart-table">
            <thead>
              <tr>
                <th className="purchase-table-title" scope="col">
                  Imagem
                </th>
                <th className="purchase-table-title" scope="col">
                  Produto
                </th>
                <th className="purchase-table-title" scope="col">
                  Categoria
                </th>
                <th className="purchase-table-title" scope="col">
                  Opção
                </th>
                <th className="purchase-table-title" scope="col">
                  Valor
                </th>
                <th className="purchase-table-title" scope="col">
                  Deletar
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0
                ? cart.map((list) => {
                    return (
                      <>
                        <tr>
                          <td className="purchase-table-row">
                            <img
                              src={list.image}
                              className="purchase-table-image"
                            />
                          </td>
                          <td className="purchase-table-row">
                            {list.product.slice(0, 14)}...
                          </td>
                          <td className="purchase-table-row">
                            {list.category}
                          </td>
                          <td className="purchase-table-row">
                            <select
                              className="select-category"
                              style={{
                                border: "0.3px rgba(0,0,0,0.3) solid",
                                padding: "10px",
                              }}
                              onChange={(e) => {
                                list.options.id = e.target.value;
                              }}
                              value={list.options.id}
                            >
                              <option>Categorias</option>
                              {list == undefined
                                ? ""
                                : list.options.map((val) => {
                                    return (
                                      <>
                                        <option
                                          className="select-option-navbar"
                                          value={val.type}
                                        >
                                          {val.type}
                                        </option>
                                      </>
                                    );
                                  })}
                            </select>
                          </td>
                          <td className="purchase-table-row">
                            R${optionValue(list).toFixed(2)}
                          </td>
                          <td className="purchase-table-row">
                            <button
                              onClick={() => {
                                const removeThis = cart.indexOf(list);
                                cart.splice(removeThis, 1);
                              }}
                              className="btn btn-large btn-danger"
                            >
                              Remover
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })
                : ""}
              <tr>
                <td className="purchase-table-row"></td>
                <td className="purchase-table-row"></td>
                <td className="purchase-table-row"></td>
                <td className="purchase-table-row"></td>
                <td className="purchase-table-row"></td>
                <td className="purchase-table-row"></td>
              </tr>
              <tr>
                <td className="purchase-table-row"></td>
                <td className="purchase-table-row">
                  <h6>Valor Entrega:</h6>
                </td>
                <td className="purchase-table-row">
                  R${freteTotal().toFixed(2)}
                </td>
                <td className="purchase-table-row">
                  <h6>Valor Total:</h6>
                </td>
                <td className="purchase-table-row">
                  R${valorTotalCart(cart, 0).toFixed(2)}
                </td>
                <td className="purchase-table-row"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Cart;

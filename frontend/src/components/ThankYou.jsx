import React from 'react';

const ThankYou = ({ total, id, order }) => {
  return (
    <div
      className="modal fade"
      id={id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Orden nro: {id}
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body ">
            <p>Muchas gracias por su compra </p>
            <h2>Detalles de su orden:</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Título</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">
                      <img className="logoTable" alt="articulo" src={item.image} />
                    </th>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.cartQuantity}</td>
                    <td>{item.cartQuantity * item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span>Total compra: </span>
            <span>{total}</span>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

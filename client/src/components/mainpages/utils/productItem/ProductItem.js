import React from "react";
import BtnRender from "./BtnRender";

function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {
  return (
    <div
      className="product_card"
      style={{ borderRadius: "0.5rem", backgroundColor: "#111" }}
    >
      {isAdmin && (
        <input
          type="checkbox"
          checked={product.checked}
          onChange={() => handleCheck(product._id)}
          style={{ margin: "0.7rem" }}
        />
      )}

      <img
        src={product.images.url}
        alt=""
        style={{ boxShadow: "0 0 0.25rem #0003", borderRadius: "0.5rem" }}
      />

      <div className="product_box" style={{ margin: "1rem 0 0 0" }}>
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>

      <BtnRender product={product} deleteProduct={deleteProduct} />
    </div>
  );
}

export default ProductItem;

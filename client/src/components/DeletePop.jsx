import React from "react";
import { useCart } from "react-use-cart";
import "./DeletePop.css";

function DeletePop({ item, onClose }) {
  const { removeItem } = useCart();

  const handleRemove = () => {
    removeItem(item.id);
    onClose();
  };

  return (
    <div className="model-btn">
      <div className="flex-box ">
        <p className="text-xl font-semibold">Delete this wishlist?</p>
        <p className="text-gray-600">
          " This hotel will be{" "}
          <span>
            {" "}
            <br />
            permanently deleted."
          </span>
        </p>
      </div>
      <hr />
      <div className="flex justify-around items-end mt-3">
        <div>
          <button className="no-btn font-semibold" onClick={onClose}>
            Cancel
          </button>
        </div>

        <div className="yes-btn font-semibold ">
          <button onClick={handleRemove}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeletePop;

import React from "react";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      {/* <FaTrashAlt role="button" tabIndex="0" /> */}
      <button onClick={() => handleDelete(item.id)} aria-label={`Delete ${item.item}`}>
        delete
      </button>
    </li>
  );
};

export default LineItem;

import React from "react";

const AddItem = () => {
  return (
    <form className="form">
      <label htmlFor="addItem">Add Item</label>
      <input type="text" autoFocus id="addItem" placeholder="Add Item" required />
    </form>
  );
};

export default AddItem;

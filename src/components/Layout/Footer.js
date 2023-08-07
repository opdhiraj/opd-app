import React from "react";

const Footer = ({ length }) => {
  const today = new Date();
  return (
    <>
      <footer>
        <p>
          {length} List {length === 1 ? "item" : "items"}
        </p>
        Copyright &copy; {today.getFullYear()}
      </footer>
    </>
  );
};

export default Footer;

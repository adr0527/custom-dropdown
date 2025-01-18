import React from "react";

const DropdownList = ({ setCurrentSelection, setText }) => {
  const handleSelection = (id) => {
    setCurrentSelection(id);
    const text = document.getElementById(id).innerText;
    setText(text);
  };

  return (
    <div className="dropdownlist">
      <div className="item-1" onClick={() => handleSelection(1)}>
        <p className="item-text" id="1">
          First Item
        </p>
      </div>
      <div className="item-2" onClick={() => handleSelection(2)}>
        <p className="item-text" id="2">
          Second Item
        </p>
      </div>
      <div className="item-3" onClick={() => handleSelection(3)}>
        <p className="item-text" id="3">
          Third Item
        </p>
      </div>
      <div className="item-4" onClick={() => handleSelection(4)}>
        <p className="item-text" id="4">
          Fourth Item
        </p>
      </div>
      <div className="item-5" onClick={() => handleSelection(5)}>
        <p className="item-text" id="5">
          Fifth Item
        </p>
      </div>
    </div>
  );
};

export default DropdownList;

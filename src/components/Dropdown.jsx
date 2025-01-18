import React, { useState } from "react";
import DropdownList from "./DropdownList";

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentSelectionId, setCurrentSelectionId] = useState(0);
  const [text, setTextState] = useState("Default");

  const setCurrentSelection = (id) => {
    setCurrentSelectionId(id);
  };

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const setText = (text) => {
    setTextState(text);
  };

  return (
    <div className="container" onClick={() => handleClick()}>
      {isOpen !== true ? (
        <p>{text}</p>
      ) : (
        <DropdownList
          setCurrentSelection={setCurrentSelection}
          setText={setText}
        />
      )}
    </div>
  );
};

export default Dropdown;

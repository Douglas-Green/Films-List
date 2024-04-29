/** @format */

import React from "react";
import "./FilmsList.css";

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className='ModalBackground'
      onClick={onClose}>
      <div
        className='ModalContent'
        onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;

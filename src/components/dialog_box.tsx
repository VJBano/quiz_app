
import React, { useState } from 'react';
import Modal from 'react-modal';

type ModalProps = {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    onOk: () => void;
    children: JSX.Element
  };
  

const Dialog_box = ({isOpen, title, onClose, onOk, children}: ModalProps) => {

    // const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        onClose();
    };

    const handleOkClick = () => {
        onOk();
      };
    

   
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={toggleModal}
    contentLabel={title}
    className="Modal"
    overlayClassName="Overlay"
  >
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="mb-4">{children}</div>
      <div className="flex justify-end">
        <button className="mr-2" onClick={toggleModal}>
          Close
        </button>
        <button onClick={handleOkClick}>OK</button>
      </div>
    </div>
  </Modal>
  )
}

export default Dialog_box
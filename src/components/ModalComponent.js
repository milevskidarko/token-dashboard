import React from "react";
import Modal from "react-modal";
import WalletConnect from "./WalletConnect";

Modal.setAppElement("#root");

function ModalComponent({ onConnect }) {
  return (
    <Modal
      isOpen={true}
      onRequestClose={() => {}}
      contentLabel="Connect Wallet Modal"
    >
      <WalletConnect onConnect={onConnect} />
    </Modal>
  );
}

export default ModalComponent;

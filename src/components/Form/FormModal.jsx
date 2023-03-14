import { useState } from "react";
import Modal from "react-modal";
import P from "prop-types";

import { MdClose } from "react-icons/md";
import styles from "./FormModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const FormModal = ({ body, onDeleteAllTodo }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.modal_container}>
      <button onClick={openModal} className={styles.btn_delete}>
        {body}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={body}
      >
        <header className={styles.header_modal}>
          <h2 className={styles.subtitle_modal}>Confirmation</h2>
          <button onClick={closeModal}>
            <MdClose />
          </button>
        </header>
        <div className={styles.content_modal}>
          <p>Are you sure you want to delete all completed tasks?</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <button
              type="button"
              className={styles.btn_close}
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className={styles.btn_delete}
              onClick={onDeleteAllTodo}
            >
              Delete
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

P.propTypes = {
  body: P.string.isRequired,
  onDeleteAllTodo: P.func.isRequired,
};

export default FormModal;

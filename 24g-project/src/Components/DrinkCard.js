import React, { useState, useEffect } from "react";
import ModalInfo from "./ModalInfo";
import Modal from "react-modal";

const DrinkCard = ({ item }) => {
  const [hover, setHover] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  return (
    <div>
      <div
        className="images-front"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onClick={() => setModalOpen(true)}
      >
        <img
          src={hover ? item.images.back : item.images.front}
          alt="drink recipes images"
        />
      </div>
      <div className="modal-box">
        <Modal
          className="mymodal"
          overlayClassName="overlay"
          isOpen={modalOpen}
          ariaHideApp={false}
        >
          <div className="image-logo">
            <img
              onClick={() => setModalOpen(false)}
              src=" https://assets.24g.com/public/2022-frontend-test-project/exit_icon.svg"
              alt="Close Logo"
            />
          </div>
          <div>
            <ModalInfo item={item} />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default DrinkCard;

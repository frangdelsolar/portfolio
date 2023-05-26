import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { Button, Modal } from "antd";

export default function FormDialog() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.ui.showModal);
  const modalData = useSelector((state) => state.ui.modalData);

  const handleClose = () => {
    dispatch(uiActions.closeModal());
  };

  if (modalData.content) {
    return (
      <Modal
        visible={showModal}
        okButtonProps={{
          hidden: true,
        }}
        width={650}
        onCancel={handleClose}
        footer={null}
        maskClosable={true}
      >
        {modalData.content}
      </Modal>
    );
  }

  return (
    <Modal
      title="Loading..."
      visible={showModal}
      onCancel={handleClose}
      footer={null}
      maskClosable={true}
    >
      <p>Loading...</p>
    </Modal>
  );
}

import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import React from "react";

const FormModal = ({
  title,
  show,
  onClose,
  onSubmit = () => {},
  action = "Submit",
  loading = false,
  size = "2xl",
  children,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Modal data-aos="zoom-out"
            data-aos-delay="200"
            data-aos-duration="800" show={show} size={size} onClose={onClose} popup>
      <ModalHeader />
      <ModalBody>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
          {children}
          <div className="flex flex-wrap justify-end gap-3 pt-3">
            <Button color="gray" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Loading..." : action}
            </Button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default FormModal;
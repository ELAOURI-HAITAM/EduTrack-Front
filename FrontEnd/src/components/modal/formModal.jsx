import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import React from "react";

const FormModal = ({
  title,
  show,
  onClose,
  cancel = "Cancel",
  onSubmit = () => {},
  action = "Submit" || null,
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
        <form encType="multipart/form-data" onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
          {children}
          <div className="flex flex-wrap justify-end gap-3 pt-3">
            <Button className="cursor-pointer" color="gray" type="button" onClick={onClose}>
              {cancel}
            </Button>
            {action == null ? ""  :(<Button className="cursor-pointer" type="submit" disabled={loading}>
              {loading ? "Loading..." : action}
            </Button>) }
            
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default FormModal;
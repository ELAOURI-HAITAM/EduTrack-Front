import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import OtpInput from "react-otp-input";

const OtpModal = ({
  title,
  show,
  onClose,
  onSubmit = () => {},
  otp,
  setOtp,
  loading = false,
  action = "Verify",
  children,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Modal show={show} size="md" onClose={onClose} popup>
      <ModalHeader />
      <ModalBody>
        <form onSubmit={handleSubmit} className="text-blue-400 space-y-6">
          <h3 className="text-xl font-medium text-white">
            {title}
          </h3>
          {children}
          <div className="flex justify-center">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className="mx-2 text-gray-400">|</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-12 h-14 text-2xl font-semibold text-center border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all"
                />
              )}
              containerStyle="flex justify-center items-center"
            />
          </div>
          <div className="flex flex-wrap justify-end gap-3 pt-3">
            <Button color="gray" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading || otp?.length < 6}
            >
              {loading ? "Verifying..." : action}
            </Button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default OtpModal;

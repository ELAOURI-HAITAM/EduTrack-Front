import React, { useState } from "react";
import { BadgePlus, Captions } from "lucide-react";
import FormModal from "../../components/modal/formModal";
import SimpleInput from "../../components/inputs/simpleInput";
import { useAddUser } from "../../hooks/useUser";

const createEmail = () => {
  const [email, setEmail] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const openDialog = () => setOpenModal(true);
  const closeDialog = () => setOpenModal(false);
  const { mutate: addnewEmail, isPending: isAdding } = useAddUser();
  const handleAddEmail = () => {
    addnewEmail({ email: email });
    setEmail("")
    closeDialog()
  };
  return (
    <>
    <div data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="800" className="mt-2">

      <a
        className="cursor-pointer"
        onClick={openDialog}
        
      >
First Time ?
      </a>
    </div>
      <FormModal
      action="Create"
        onSubmit={handleAddEmail}
        show={openModal}
        onClose={closeDialog}
      >
        <SimpleInput
          label={"Email"}
          value={email}
          onchange={(event) => setEmail(event.target.value)}
        />
        
      </FormModal>
    </>
  );
};

export default createEmail;

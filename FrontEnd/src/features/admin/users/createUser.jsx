import React, { useState } from "react";
import MainButton from "../../../components/Buttons/main_button";
import { BadgePlus, Captions, UserPlus } from "lucide-react";
import FormModal from "../../../components/modal/formModal";
import SimpleInput from "../../../components/inputs/simpleInput";
import { useCreateUser } from "../../../hooks/useUser";
import SimpleSelect from "../../../components/selects/SimpleSelect";

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState([{value : "Student"},{value : "Professor"}]);
  const [selectedRole , setSelectedRole] = useState();
  const [openModal, setOpenModal] = useState(false);
  const openDialog = () => setOpenModal(true);
  const closeDialog = () => setOpenModal(false);
  const { mutate: addNewUser, isPending: isAdding } = useCreateUser();
  const handleCreateUser = () => {
    addNewUser({ email: email, role: selectedRole });
    setEmail("")
    setSelectedRole("")
    closeDialog()
  };
  return (
    <>
    <div data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="800" className="mt-2">

      <MainButton
        name={"Create New User"}
        onclick={openDialog}
        icon={<UserPlus />}
      />
    </div>
      <FormModal
      action="Create"
        onSubmit={handleCreateUser}
        show={openModal}
        onClose={closeDialog}
      >
        <SimpleInput
          label={"Email"}
          value={email}
          onchange={(event) => setEmail(event.target.value)}
        />
        <SimpleSelect label="Role" text={"Choose User Role"} options={role} value={selectedRole} onchange={(event) => setSelectedRole(event.target.value)}/>
      </FormModal>
    </>
  );
};

export default CreateUser;

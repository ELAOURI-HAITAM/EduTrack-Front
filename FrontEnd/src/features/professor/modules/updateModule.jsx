import React, { useState } from "react";
import SimpleOutLineButton from "../../../components/Buttons/simpleOutLine";
import { Pencil } from "lucide-react";
import { useUpdateModule } from "../../../hooks/useModules";
import FormModal from "../../../components/modal/formModal";
import SimpleInput from "../../../components/inputs/simpleInput";

const UpdateModule = ({ id, oldTitle, oldDescription }) => {
  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);
  const [openModal, setOpenModal] = useState(false);
  const openDialog = () => {
    setOpenModal(true);
  };
  const closeDialog = () => {
    setOpenModal(false);
  };
  const { mutate: UpdatedModule, isPending: isAdding } = useUpdateModule();
  const handleUpdateModule = () => {
    UpdatedModule({
      id,
      updatedData: { title: title, description: description },
    });
    closeDialog();
  };
  return (
    <div>
      <SimpleOutLineButton
        onclick={openDialog}
        icon={<Pencil />}
        name={"Update"}
        hoverBg="hover:bg-green-600"
        textColor="text-green-600"
        borderColor="border-green-600"
      />
      <FormModal
        action="Update"
        title={"Update Module"}
        onSubmit={handleUpdateModule}
        show={openModal}
        onClose={closeDialog}
      >
        <SimpleInput
          label={"Title"}
          value={title}
          onchange={(event) => setTitle(event.target.value)}
        />
        <SimpleInput
          label={"Description"}
          value={description}
          onchange={(event) => setDescription(event.target.value)}
        />
      </FormModal>
    </div>
  );
};

export default UpdateModule;

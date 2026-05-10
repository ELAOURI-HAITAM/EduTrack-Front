import React, { useState } from "react";
import MainButton from "../../../components/Buttons/main_button";
import { BadgePlus, Captions } from "lucide-react";
import { useAddModule } from "../../../hooks/useModules";
import FormModal from "../../../components/modal/formModal";
import SimpleInput from "../../../components/inputs/simpleInput";

const CreateModules = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const openDialog = () => setOpenModal(true);
  const closeDialog = () => setOpenModal(false);
  const { mutate: addNewModule, isPending: isAdding } = useAddModule();
  const handleAddModule = () => {
    addNewModule({ title: title, description: description });
    setTitle("")
    setDescription("")
    closeDialog()
  };
  return (
    <>
    <div data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="800" className="mt-2">

      <MainButton
        name={"Add New Module"}
        onclick={openDialog}
        icon={<BadgePlus />}
      />
    </div>
      <FormModal
      action="Create"
        onSubmit={handleAddModule}
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
    </>
  );
};

export default CreateModules;

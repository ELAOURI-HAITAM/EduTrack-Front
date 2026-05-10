import React, { useState } from "react";
import SimpleOutLineButton from "../../../components/Buttons/simpleOutLine";
import { Pencil, Trash2 } from "lucide-react";
import { useDeleteModule } from "../../../hooks/useModules";
import FormModal from "../../../components/modal/formModal";
import SimpleInput from "../../../components/inputs/simpleInput";
import ConfirmationModal from "../../../components/modal/confirmationModal";

const DeleteModule = ({ id }) => {

  const { mutate: removeModule, isPending: isAdding } = useDeleteModule();
  const handleDeleteModule = async () => {
    const modal = await ConfirmationModal({
      title: "Delete Confirmation",
      message: "Are you sure you want to delete this module ?",
    });
    if(modal.isConfirmed)
    {
        removeModule(id);
       
    }
  };
  return (
    <div>
      <SimpleOutLineButton
        onclick={handleDeleteModule}
        icon={<Trash2 />}
        name={"Delete"}
        hoverBg="hover:bg-red-600"
        textColor="text-red-600"
        borderColor="border-red-600"
      />
      
    </div>
  );
};

export default DeleteModule;

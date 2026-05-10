import React, { useState } from "react";
import SimpleOutLineButton from "../../../components/Buttons/simpleOutLine";
import { Pencil, Trash2 } from "lucide-react";
import { useDeleteModule } from "../../../hooks/useModules";
import FormModal from "../../../components/modal/formModal";
import SimpleInput from "../../../components/inputs/simpleInput";
import ConfirmationModal from "../../../components/modal/confirmationModal";
import { useRemoveTask } from "../../../hooks/useResources";

const DeleteResource = ({ id }) => {


  const { mutate: removeTask, isPending: isAdding } = useRemoveTask();
  const handleRemoveTask = async () => {
    const modal = await ConfirmationModal({
      title: "Remove Confirmation",
      message: "Are you sure you want to delete this Assignment ?",
    });
    if(modal.isConfirmed)
    {
        removeTask(id);
        closeDialog();
    }
  };
  return (
    <div>
      <SimpleOutLineButton
        onclick={handleRemoveTask}
        icon={<Trash2 />}
        name={"Remove"}
        hoverBg="hover:bg-red-600"
        textColor="text-red-600"
        borderColor="border-red-600"
      />
      
    </div>
  );
};

export default DeleteResource;

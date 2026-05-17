import React, { useState } from "react";
import SimpleOutLineButton from "../../../components/Buttons/simpleOutLine";
import { Pencil, Trash2 } from "lucide-react";
import { useDeleteModule } from "../../../hooks/useModules";
import FormModal from "../../../components/modal/formModal";
import SimpleInput from "../../../components/inputs/simpleInput";
import ConfirmationModal from "../../../components/modal/confirmationModal";
import { useDeleteUser } from "../../../hooks/useUser";

const DeleteUser = ({ id }) => {

  const { mutate: removeModule} = useDeleteUser();
  const handleDeleteUser = async () => {
    const modal = await ConfirmationModal({
      title: "Delete Confirmation",
      message: "Are you sure you want to delete this User ?",
    });
    if(modal.isConfirmed)
    {
        removeModule(id);
       
    }
  };
  return (
    <div>
      <SimpleOutLineButton
        onclick={handleDeleteUser}
        icon={<Trash2 />}
        name={"Delete"}
        hoverBg="hover:bg-red-600"
        textColor="text-red-600"
        borderColor="border-red-600"
      />
      
    </div>
  );
};

export default DeleteUser;

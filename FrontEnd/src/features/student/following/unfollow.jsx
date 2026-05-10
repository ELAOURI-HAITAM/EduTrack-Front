import React, { useState } from "react";
import SimpleOutLineButton from "../../../components/Buttons/simpleOutLine";
import { Pencil, Trash2, UserX } from "lucide-react";
import SimpleInput from "../../../components/inputs/simpleInput";
import { useRemoveSubscribe } from "../../../hooks/useSubscribe";
import ConfirmationModal from "../../../components/modal/confirmationModal";
const Unfollow = ({ id }) => {

  const { mutate: removeFollow, isPending: isAdding } = useRemoveSubscribe();
  const handleRemoveFollow = async () => {
    const modal = await ConfirmationModal({
      title: "Unfollow Confirmation",
      message: "Are you sure you want to unfollow ?",
    });
    if(modal.isConfirmed)
    {
        removeFollow(id);
    }
  };
  return (
    <div>
      <SimpleOutLineButton
        onclick={handleRemoveFollow}
        icon={<UserX />}
        name={"Unfollow"}
        hoverBg="hover:bg-red-600"
        textColor="text-red-600"
        borderColor="border-red-600"
      />
      
    </div>
  );
};

export default Unfollow;

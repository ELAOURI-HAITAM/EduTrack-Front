import React, { useState } from "react";
import SimpleOutLineButton from "../../../components/Buttons/simpleOutLine";
import { Pencil } from "lucide-react";
import { useUpdateModule } from "../../../hooks/useModules";
import FormModal from "../../../components/modal/formModal";
import SimpleInput from "../../../components/inputs/simpleInput";
import { useUpdateUser } from "../../../hooks/useUser";
import SimpleSelect from "../../../components/selects/SimpleSelect";

const UpdateUser = ({
  id,
  oldEmail,
  oldRole,
  oldFirstName,
  oldLastName,
  oldGender,
  status,
}) => {
  const [email, setEmail] = useState(oldEmail);
  const [role, setRole] = useState(oldRole);
  const [firstName, setFirstName] = useState(oldFirstName);
  const [lastName, setLastName] = useState(oldLastName);
  const [gender, setGender] = useState(oldGender);
  const [openModal, setOpenModal] = useState(false);
  const roleOptions = [{ value: "Student" }, { value: "Professor" }];
  const genderOptions = [{ value: "Male" }, { value: "Female" }];
  const openDialog = () => {
    setEmail(oldEmail);
    setRole(oldRole);
    setFirstName(oldFirstName);
    setLastName(oldLastName);
    setGender(oldGender);
    setOpenModal(true);
  };
  const closeDialog = () => {
    setOpenModal(false);
  };
  const { mutate: UpdateUser } = useUpdateUser();
  
  const handleUpdateUser = () => {
    let payload = {}; 

    if (status === "Active") {
      payload.first_name = firstName;
      payload.last_name = lastName;
      payload.gender = gender;
    } else {
      payload.email = email;
      payload.role = role;
    }

    UpdateUser({
      id,
      updatedData: payload,
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
        title={"Update User"}
        onSubmit={handleUpdateUser}
        show={openModal}
        onClose={closeDialog}
      >
        {status == "Pending" ? (
          <>
            <SimpleInput
              label={"First Name"}
              disabled={true}
              value={"Not Yet"}
              onchange={(event) => setFirstName(event.target.value)}
            />
            <SimpleInput
              disabled={true}
              label={"Last Name"}
              value={"Not Yet"}
              onchange={(event) => setLastName(event.target.value)}
            />
          </>
        ) : (
          <>
            <SimpleInput
              label={"First Name"}
              value={firstName}
              onchange={(event) => setFirstName(event.target.value)}
            />
            <SimpleInput
              label={"Last Name"}
              value={lastName}
              onchange={(event) => setLastName(event.target.value)}
            />
          </>
        )}

        {status == "Active" ? (
          <SimpleInput
            label={
              "Email (Cannot change email. This account is already Active. )"
            }
            disabled={true}
            read_only={true}
            value={email}
            onchange={(event) => setEmail(event.target.value)}
          />
        ) : (
          <SimpleInput
            label={"Email"}
            value={email}
            onchange={(event) => setEmail(event.target.value)}
          />
        )}
        {status == "Active" ? (
          <SimpleSelect
            options={genderOptions}
            
            label={"Gender"}
            text={"Update User Gender"}
            value={gender}
            onchange={(event) => setGender(event.target.value)}
          />
        ) : (<SimpleSelect
            options={genderOptions}
            label="Gender"
            disabled={true}
            text={"Update User Gender"}
            value={gender}
            onchange={(event) => setGender(event.target.value)}
          />)}

        {status == "Active" ? (
          <SimpleSelect
            options={roleOptions}
            disabled={true}
            label={"Role (Cannot change role. This account is already Active.)"}
            text={"Update User Role"}
            value={role}
            onchange={(event) => setRole(event.target.value)}
          />
        ) : (
          <SimpleSelect
            options={roleOptions}
            label={"Role"}
            text={"Update User Role"}
            value={role}
            onchange={(event) => setRole(event.target.value)}
          />
        )}
      </FormModal>
    </div>
  );
};

export default UpdateUser;

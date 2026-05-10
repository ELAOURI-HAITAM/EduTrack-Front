import React, { useMemo, useState } from "react";
import MainButton from "../../../components/Buttons/main_button";
import { Info, User, UserPlus } from "lucide-react";
import FormModal from "../../../components/modal/formModal";
import { useGetAllProfessors } from "../../../hooks/useProfessors";
import SimpleInput from "../../../components/inputs/simpleInput";
import Loader from "../../../components/loading/loader";
import SimpleAlert from "../../../components/alerts/simpleAlert";
import Male from "../../../assets/auth/Man.png";
import SimpleOutLineButton from "../../../components/Buttons/simpleOutLine";
import { useNewSubscribe } from "../../../hooks/useSubscribe";
const Follow = () => {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const openDialog = () => setOpenModal(true);
  const closeDialog = () => setOpenModal(false);

  const { data: professors, isPending } = useGetAllProfessors();
  console.log(professors);

  const filteredProfessors = useMemo(() => {
    if (!professors || search.trim() === "") return [];

    return professors.filter((prof) =>
      `${prof.first_name} ${prof.last_name}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [search, professors]);

  const { mutate: newFollow } = useNewSubscribe();
  const handleFollow = (id) => {
    newFollow(id);
    closeDialog()
  };

  return (
    <div className="flex justify-self-end mt-2">
      <MainButton
        onclick={openDialog}
        name={"Follow New Professor"}
        icon={<UserPlus />}
      />

      <FormModal
        action={null}
        show={openModal}
        title={"Search For Professor"}
        onClose={closeDialog}
      >
        <SimpleInput
          value={search}
          onchange={(event) => setSearch(event.target.value)}
          label={"Professor Name"}
          icon={<User />}
        />

        <div className="mt-4 space-y-2">
          {isPending ? (
            <Loader />
          ) : filteredProfessors.length > 0 ? (
            filteredProfessors.map((prof) => (
              <div
                key={prof.id}
                className="border p-3 bg-[#437eff] rounded-lg flex justify-between items-center"
              >
                <div className="flex items-center gap-12">
                  <img className="w-12" src={Male} alt="" />
                  <h1 className="font-semibold text-2xl">
                    {prof.first_name.toUpperCase()}{" "}
                    {prof.last_name.toUpperCase()}
                  </h1>
                </div>

                <MainButton
                  onclick={() => handleFollow(prof.id)}
                  bgColor="bg-red-600"
                  name={"Follow"}

                />
              </div>
            ))
          ) : (
            <SimpleAlert
              className={"mt-2"}
              color={"info"}
              icon={Info}
              message={"No Professors Found"}
            />
          )}
        </div>
      </FormModal>
    </div>
  );
};

export default Follow;

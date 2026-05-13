import React, { useMemo, useState } from "react";
import MainButton from "../../../components/Buttons/main_button";
import { Check, Info, User, UserPlus } from "lucide-react";
import FormModal from "../../../components/modal/formModal";
import { useGetAllProfessors } from "../../../hooks/useProfessors";
import SimpleInput from "../../../components/inputs/simpleInput";
import Loader from "../../../components/loading/loader";
import SimpleAlert from "../../../components/alerts/simpleAlert";
import Male from "../../../assets/auth/Man.png";
import SimpleOutLineButton from "../../../components/Buttons/simpleOutLine";
import { useGetFollowing, useNewSubscribe } from "../../../hooks/useSubscribe";
import { UseUser } from "../../../hooks/useUser";
const Follow = () => {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  
  const openDialog = () => setOpenModal(true);
  const closeDialog = () => setOpenModal(false);

  const { data: professors, isPending } = useGetAllProfessors();
  
  const { data: followingList } = useGetFollowing(); 
  console.log(followingList);
  
  const { data: user } = UseUser();
  const { mutate: newFollow } = useNewSubscribe();

  const filteredProfessors = useMemo(() => {
    if (!professors || search.trim() === "") return [];

    return professors.filter((prof) =>
      `${prof.first_name} ${prof.last_name}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [search, professors]);

  const handleFollow = (id) => {
    newFollow(id);
    closeDialog();
  };

  const checkIfFollowed = (profId) => {
    if (!followingList) return false;
    return followingList.some(
      (sub) => sub.professor_id === profId && sub.is_follow === true
    );
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
            filteredProfessors.map((prof) => {
              const isFollowed = checkIfFollowed(prof.id);

              return (
                <div
                  key={prof.id}
                  className="border p-3 bg-purple-50 dark:bg-gray-800 rounded-lg flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <img className="w-12 h-12 rounded-full border-2 border-purple-200" src={Male} alt="prof" />
                    <h1 className="font-semibold text-lg text-gray-800 dark:text-white">
                      {prof.first_name.toUpperCase()} {prof.last_name.toUpperCase()}
                    </h1>
                  </div>

                  {isFollowed ? (
                    <SimpleOutLineButton
                    hoverBg="cursor-not-allowed"
                      name="Followed"
                      icon={<Check size={16} />}
                      
                      disabled={true}
                    />
                  ) : (
                    <MainButton
                      onclick={() => handleFollow(prof.id)}
                      bgColor="bg-purple-600 hover:bg-purple-700"
                      name={"Follow"}
                    />
                  )}
                </div>
              );
            })
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

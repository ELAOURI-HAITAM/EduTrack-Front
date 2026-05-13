import React, { useState } from "react";
import MainButton from "../../../components/Buttons/main_button";
import { BadgePlus, Captions, Clock, File } from "lucide-react";
import { useAddModule, useGetModule } from "../../../hooks/useModules";
import FormModal from "../../../components/modal/formModal";
import SimpleInput from "../../../components/inputs/simpleInput";
import SimpleSelect from "../../../components/selects/SimpleSelect";
import MappingSelect from "../../../components/selects/mappingSelect";
import { useNewTask } from "../../../hooks/useResources";

const CreateAssignment = () => {
  const [title, setTitle] = useState("");
  const [taskType, setTaskType] = useState([
    { value: "Exercice" },
    { value: "Course" },
  ]);
  const [selectedTaskType, setSelectedTaskType] = useState("");
  const [estimedMinutes, setEstimedMinutes] = useState("");
  const [selectedModule, setSelectedModule] = useState();
  const [file, setFile] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const openDialog = () => setOpenModal(true);
  const closeDialog = () => setOpenModal(false);
  const { data: modules, idLoading, isError } = useGetModule();
  const { mutate: newResource, idPending: isAdding } = useNewTask();
  console.log(newResource);
  
  const handleUplaodTask = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("module_id", selectedModule);
    formData.append("task_type", selectedTaskType);
    formData.append("estimated_minutes", estimedMinutes);
    if (file) {
      formData.append("file_url", file);
    }
    newResource(formData, {
      onSuccess: () => {
        setTitle("");
        setFile(null);
        setEstimedMinutes("");
        setSelectedTaskType("");
        closeDialog();
      },
    });
  };
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="800"
        className="mt-2"
      >
        <MainButton
          name={"Add New Assignment"}
          onclick={openDialog}
          icon={<BadgePlus />}
        />
      </div>
      <FormModal
        action={isAdding ? "Uplaoding . . ." : "Assign"}
        onSubmit={handleUplaodTask}
        show={openModal}
        onClose={closeDialog}
      >
        <SimpleInput
          label={"Title"}
          value={title}
          onchange={(event) => setTitle(event.target.value)}
        />
        <MappingSelect
          label={"Modules"}
          text={"Choose Module"}
          onchange={(event) => setSelectedModule(event.target.value)}
          options={modules?.map((module) => (
            <option value={module.id}>{module.title}</option>
          ))}
        />
        <SimpleSelect
        text={"Choose Task Type"}
          label={"Task Type"}
          options={taskType}
          value={selectedTaskType}
          onchange={(event) => setSelectedTaskType(event.target.value)}
        />
        <SimpleInput
          type="file"
          icon={<File />}
          onchange={(event) => setFile(event.target.files[0])}
          label={"File"}
        />
        <SimpleInput
        icon={<Clock />}
        label={"Estimated Minutes"}
          type="number"
          value={estimedMinutes}
          onchange={(event) => setEstimedMinutes(event.target.value)}
        />
      </FormModal>
    </>
  );
};

export default CreateAssignment;

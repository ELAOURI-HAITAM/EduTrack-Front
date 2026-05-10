import React, { useState, useEffect } from "react";
import SimpleOutLineButton from "../../../components/Buttons/simpleOutLine";
import { Pencil, File } from "lucide-react";
import FormModal from "../../../components/modal/formModal";
import SimpleInput from "../../../components/inputs/simpleInput";
import SimpleSelect from "../../../components/selects/SimpleSelect";
import { useGetResourceDetails, useUpdateResource } from "../../../hooks/useResources";


const UpdateResource = ({ id }) => {
  const { data: resource, isLoading } = useGetResourceDetails(id);
  console.log(resource);
  
  const [title, setTitle] = useState("");
  const [taskType, setTaskType] = useState("");
  const [estimatedMinutes, setEstimatedMinutes] = useState("");
  const [file, setFile] = useState(null);
  
  const [openModal, setOpenModal] = useState(false);

  const openDialog = () => setOpenModal(true);
  const closeDialog = () => setOpenModal(false);

  const { mutate: updateResource, isPending: isUpdating } = useUpdateResource();

  useEffect(() => {
    if (resource) {
      setTitle(resource.title || "");
      setTaskType(resource.task_type || "");
      setEstimatedMinutes(resource.estimated_minutes || "");
    }
  }, [resource]);

  const taskTypeOptions = [
    { value: "Exercice" },
    { value: "Course" },
  ];

  const handleUpdateResource = () => {

    const formData = new FormData();
    formData.append("title", title);
    formData.append("task_type", taskType);
    formData.append("estimated_minutes", estimatedMinutes);
    
    if (file) {
      formData.append("file_url", file);
    }

    updateResource(
      { id, formData },
      {
        onSuccess: () => {
          setFile(null); 
          closeDialog();
        },
      }
    );
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
        action={isUpdating ? "Updating..." : "Update"}
        title={"Update Resource"}
        onSubmit={handleUpdateResource}
        show={openModal}
        onClose={closeDialog}
      >
        {isLoading ? (
          <p>Loading details...</p>
        ) : (
          <>
            <SimpleInput
              label={"Title"}
              value={title}
              onchange={(event) => setTitle(event.target.value)}
            />
            
            <SimpleSelect
              label={"Task Type"}
              options={taskTypeOptions}
              value={taskType}
              onchange={(event) => setTaskType(event.target.value)}
            />

            <SimpleInput
              label={"Estimated Minutes"}
              type="number"
              value={estimatedMinutes}
              onchange={(event) => setEstimatedMinutes(event.target.value)}
            />

            <div className="mt-4">
              <span className="text-sm text-gray-500 mb-2 block">
                Update File (Optional - Leave empty to keep current file)
              </span>
              <SimpleInput
                type="file"
                icon={<File />}
                onchange={(event) => setFile(event.target.files[0])}
                label={"File"}
              />
            </div>
          </>
        )}
      </FormModal>
    </div>
  );
};

export default UpdateResource;
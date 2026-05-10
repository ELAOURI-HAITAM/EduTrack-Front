import React, { useState } from "react";
import { useGetResourceDetails } from "../../../hooks/useResources";
import FormModal from "../../../components/modal/formModal";
import SimpleInput from "../../../components/inputs/simpleInput";
import {
  BookOpen,
  BookSearch,
  ClipboardCheck,
  ClipboardList,
  Clock,
  FileText,
} from "lucide-react";

const ResourceDetails = ({ resource_id }) => {
  const {
    data: resource,
    isLoading,
    isError,
  } = useGetResourceDetails(resource_id);
  const baseURL = "http://localhost:8000";
  const [openModal, setOpenModal] = useState(false);
  const openDialog = () => setOpenModal(true);
  const closeDialog = () => setOpenModal(false);
  return (
    <div>
      <p
        onClick={openDialog}
        className="text-blue-500 cursor-pointer hover:text-blue-700 dark:hover:text-blue-400"
      >
        View Details
      </p>
      <FormModal
        cancel="Close"
        action={null}
        show={openModal}
        title={"Task Details"}
        onClose={closeDialog}
      >
        <SimpleInput
          icon={<BookOpen />}
          read_only={true}
          label={"Module"}
          value={resource?.module_title}
        />
        <SimpleInput
          icon={<ClipboardCheck />}
          read_only={true}
          label={"Task"}
          value={resource?.title}
        />
        <SimpleInput
          icon={
            resource?.task_type == "Exercice" ? (
              <ClipboardList size={25} />
            ) : (
              <BookSearch size={25} />
            )
          }
          read_only={true}
          label={"Type"}
          value={resource?.task_type}
        />
        <SimpleInput
          icon={<Clock />}
          read_only={true}
          label={"Estimed Time"}
          value={resource?.estimated_minutes + " Minutes"}
        />
        {resource?.file_url && (
          <div className="mt-4 flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <FileText className="text-red-500" size={28} />
              <span className="font-medium text-gray-700 dark:text-gray-200">
                Attached File
              </span>
            </div>

            <a
              href={`${baseURL}${resource.file_url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              Open PDF
            </a>
          </div>
        )}
      </FormModal>
    </div>
  );
};

export default ResourceDetails;

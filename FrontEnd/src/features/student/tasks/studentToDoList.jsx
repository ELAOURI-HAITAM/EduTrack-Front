import React, { useState } from "react";
import TodoTaskCard from "../../../components/cards/toDoCard";
import { useGetAllTasks, useSubmitTask } from "../../../hooks/useTasks";
import FormModal from "../../../components/modal/formModal";
import {
  CircleCheckBig,
  ClipboardList,
  Clock1,
  ExternalLink,
  Info,
  Timeline,
} from "lucide-react";
import { GiOpenBook } from "react-icons/gi";
import MainButton from "../../../components/Buttons/main_button";
import SimpleInput from "../../../components/inputs/simpleInput";
import SimpleSelect from "../../../components/selects/SimpleSelect";
import SimpleTextArea from "../../../components/inputs/simpleTextArea";
import SimpleAlert from "../../../components/alerts/simpleAlert";

const StudentToDoList = () => {
  const { data: tasks, isPending } = useGetAllTasks();
  console.log(tasks);

  const { mutate: submitNewTask } = useSubmitTask();
  const [selectedTask, setSelectedTask] = useState();
  const [actualMinutes, setActualMinutes] = useState("");
  const [estimatedMinutes, setEstimatedMinutes] = useState();
  const [selectedDifficulty, setSelectedDifficulty] = useState();
  const [difficulty, setDifficulty] = useState([
    { value: "Easy" },
    { value: "Medium" },
    { value: "Hard" },
  ]);
  const [comment, setComment] = useState();
  const [openModal, setOpenModal] = useState(false);
  const openDialog = () => setOpenModal(true);
  const closeDialog = () => setOpenModal(false);

  const handleOpenFile = (url) => {
    window.open(`http://localhost:8000${url}`, "_blank");
  };
  const getSelectedTask = (resourceId) => {
    setSelectedTask(resourceId);
    openDialog();
  };
  const handleSubmit = () => {
    submitNewTask({
      actual_minutes: parseInt(actualMinutes),
      difficulty: selectedDifficulty,
      comment: comment,
      resource_id: selectedTask,
    });
    closeDialog();
   
  };
  return (
    <>
      <div data-aos="fade-down" data-aos-delay="200" data-aos-duration="800">
        {tasks?.length < 1 ? (
          <SimpleAlert
            className={"mt-2"}
            icon={Info}
            color={"info"}
            message={"There No Tasks"}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks?.map((task) => (
              <div key={task.resource_id} >
                <TodoTaskCard
                  task_id={task.resource_id}
                  module_title={task.module_title}
                  icon={
                    task.task_type == "Exercice" ? (
                      <ClipboardList />
                    ) : (
                      <GiOpenBook size={25} />
                    )
                  }
                  task_title={task.title}
                  estimated_minutes={task.estimated_minutes}
                  task_type={task.task_type}
                  task={task}
                  ResourceButton={
                    <MainButton
                      onclick={() => handleOpenFile(task.file_url)}
                      bgColor="white"
                      primaryTextColor="black"
                      name="Open Resource"
                      icon={<ExternalLink size={20} />}
                      className="flex hover:scale-105 items-center justify-center gap-2 w-full py-2 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-lg border border-gray-200 transition-colors"
                      type="button"
                    />
                  }
                  MarkAsDoneButton={
                    <MainButton
                      onclick={() => {
                        getSelectedTask(task.resource_id);
                      }}
                      name="Mark as Done"
                      icon={<CircleCheckBig />}
                      className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all shadow-sm"
                      type="button"
                    />
                  }
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <FormModal
        show={openModal}
        onClose={closeDialog}
        title={"Submiting Task"}
        onSubmit={handleSubmit}
      >
        <SimpleInput
          label={"How many minutes did it take you?"}
          icon={<Clock1 />}
          type="number"
          value={actualMinutes}
          onchange={(event) => setActualMinutes(event.target.value)}
        />
        <SimpleSelect
          label={"Difficulty level"}
          text={"Choose The Difficulty"}
          value={selectedDifficulty}
          onchange={(event) => setSelectedDifficulty(event.target.value)}
          options={difficulty}
        />
        {selectedDifficulty == "Hard" ? (
          <SimpleTextArea
            label={"Why Its Hard ?"}
            onchange={(event) => setComment(event.target.value)}
            value={comment}
          />
        ) : (
          ""
        )}
      </FormModal>
    </>
  );
};

export default StudentToDoList;

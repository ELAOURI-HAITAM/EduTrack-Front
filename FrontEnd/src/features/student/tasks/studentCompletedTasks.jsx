import React from "react";
import { useGetAllCompletedTasks } from "../../../hooks/useCompletedTasks";
import SimpleAlert from "../../../components/alerts/simpleAlert";
import { Info } from "lucide-react";
import CompletedTaskCard from "../../../components/cards/completedTaskCard";
const StudentCompletedTasks = () => {
  const { data: completes = [], isError } = useGetAllCompletedTasks();
  console.log(completes);
  if (isError) {
    console.log(isError);
  }
  return (
    <div>
      {completes?.length == 0 ? (
        <SimpleAlert
          color="info"
          message="There Is No Tasks Completed"
          icon={Info}
        />
      ) : (
        completes?.map((completed_task) => (
          <CompletedTaskCard
            key={completed_task?.id}
            module_title={completed_task?.module_title}
            actual_minutes={completed_task?.actual_minutes}
            difficulty={completed_task?.difficulty}
            comment={completed_task?.comment}
            completed_at={completed_task?.completed_at}
          />
        ))
      )} 
    </div>
  );
};

export default StudentCompletedTasks;

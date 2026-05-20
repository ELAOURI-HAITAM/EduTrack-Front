import React from "react";
import { useGetAllCompletedTasks } from "../../../hooks/useCompletedTasks";
import SimpleAlert from "../../../components/alerts/simpleAlert";
import { Info } from "lucide-react";
import CompletedTaskCard from "../../../components/cards/completedTaskCard";
import Loader from "../../../components/loading/loader";

const StudentCompletedTasks = () => {
  const { data: completes, isError, isLoading } = useGetAllCompletedTasks(); 

  if (isLoading) {
    return <div className="text-white p-4"><Loader/></div>;
  }

  
  if (isError) {
    return <div className="text-red-500 p-4"><SimpleAlert icon={"error"} message={"Something Went Wrong"}/></div>;
  }

  return (
    <div>
      {(!completes || completes.length === 0) ? (
        <SimpleAlert
          color="info"
          message="There Is No Tasks Completed"
          icon={Info}
        />
      ) : (
        completes.map((completed_task) => (
          <CompletedTaskCard
          task_title={completed_task?.task_title}
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
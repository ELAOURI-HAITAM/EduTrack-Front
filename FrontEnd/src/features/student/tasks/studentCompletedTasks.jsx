import React from "react";
import CompletedTaskCard from "../../../components/cards/completedTaskCard";
import { useGetCompletedTasks } from "../../../hooks/useCompletedTasks";
import SimpleAlert from "../../../components/alerts/simpleAlert"
import { Info } from "lucide-react";
const StudentCompletedTasks = () => {
  const { data: completed_tasks } = useGetCompletedTasks();
  console.log(completed_tasks);

  return (
    <div>
      {completed_tasks?.length > 0 ? completed_tasks?.map((completed_task) => (
        <CompletedTaskCard
          module_title={completed_task.module_title}
          actual_minutes={completed_task.actual_minutes}
          difficulty={completed_task.difficulty}
          comment={completed_task.comment}
          completed_at={completed_task.completed_at}
        />
      )) : (<SimpleAlert color="info" message="There Is No Tasks Completed" icon={Info}/>)}
    </div>
  );
};

export default StudentCompletedTasks;

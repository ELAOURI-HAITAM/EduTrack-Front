import React from "react";
import CompletedTaskCard from "../../../components/cards/completedTaskCard";
import { useGetCompletedTasks } from "../../../hooks/useTasks";
import SimpleAlert from "../../../components/alerts/simpleAlert"
import { Info } from "lucide-react";
const StudentCompletedTasks = () => {
  const { data: tasks } = useGetCompletedTasks();
  console.log(tasks);

  return (
    <div>
      {tasks?.length > 0 ? tasks?.map((task) => (
        <CompletedTaskCard
          module_title={task.module_title}
          actual_minutes={task.actual_minutes}
          difficulty={task.difficulty}
          comment={task.comment}
          completed_at={task.completed_at}
        />
      )) : (<SimpleAlert color="info" message="There Is No Tasks Completed" icon={Info}/>)}
    </div>
  );
};

export default StudentCompletedTasks;

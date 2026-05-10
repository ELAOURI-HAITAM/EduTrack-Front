import React from "react";
import CompletedTaskCard from "../../../components/cards/completedTaskCard";
import { useGetCompletedTasks } from "../../../hooks/useTasks";

const StudentCompletedTasks = () => {
  const { data: tasks } = useGetCompletedTasks();
  console.log(tasks);

  return (
    <div>
      {tasks?.map((task) => (
        <CompletedTaskCard
          module_title={task.module_title}
          actual_minutes={task.actual_minutes}
          difficulty={task.difficulty}
          comment={task.comment}
          completed_at={task.completed_at}
        />
      ))}
    </div>
  );
};

export default StudentCompletedTasks;

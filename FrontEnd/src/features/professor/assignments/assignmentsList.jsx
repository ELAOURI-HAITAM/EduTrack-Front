import React from 'react';
import CreateAssignment from './createAssignment';
import { GridCol3 } from '../../../components/grid/gridCol';
import { SimpleCard } from '../../../components/cards/simpleCard';
import { useGetTasks } from '../../../hooks/useTasks';
import DeleteTask from './deleteTask';
import UpdateTask from './updateTask';
import { BookSearch, ClipboardList, User } from 'lucide-react';
import TaskDetails from './taskDetails';

const ProfessorAssignments = () => {
    const {data : tasks , isLaoding , isError} = useGetTasks();
    return (
        <div>
            <CreateAssignment/>
            <GridCol3>
        {tasks?.map((task) => (
          <SimpleCard
          DetailLink={<TaskDetails task_id={task.id}/>}
            icon={task.task_type == "Exercice" ? (<ClipboardList size={25} />) : (<BookSearch size={25} />)}
            key={task.id}
            UpdateButton={
              <UpdateTask
                id={task.id}
                oldTitle={task.title}
                oldDescription={task.description}
              />
            }
            DeleteButton={<DeleteTask id={task.id} />}
            name={task.title}
            description={task.description}
          />
        ))}
      </GridCol3>
        </div>
    );
}

export default ProfessorAssignments;

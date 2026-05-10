import React from 'react';
import CreateAssignment from './createAssignment';
import { GridCol3 } from '../../../components/grid/gridCol';
import { SimpleCard } from '../../../components/cards/simpleCard';
import { useGetResources } from '../../../hooks/useResources';
import DeleteResource from './deleteResource';
import UpdateResource from './updateResource';
import { BookSearch, ClipboardList, User } from 'lucide-react';
import ResourceDetails from './resourceDetails';

const ProfessorAssignments = () => {
    const {data : resources , isLaoding , isError} = useGetResources();
    return (
        <div>
            <CreateAssignment/>
            <GridCol3>
        {resources?.map((resource) => (
          <SimpleCard
          DetailLink={<ResourceDetails resource_id={resource.id}/>}
            icon={resource.task_type == "Exercice" ? (<ClipboardList size={25} />) : (<BookSearch size={25} />)}
            key={resource.id}
            UpdateButton={
              <UpdateResource
                id={resource.id}
                oldTitle={resource.title}
                oldDescription={resource.description}
              />
            }
            DeleteButton={<DeleteResource id={resource.id} />}
            name={resource.title}
            description={resource.description}
          />
        ))}
      </GridCol3>
        </div>
    );
}

export default ProfessorAssignments;

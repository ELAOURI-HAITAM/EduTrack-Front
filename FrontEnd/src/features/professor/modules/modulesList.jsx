import React from "react";
import { SimpleCard } from "../../../components/cards/simpleCard";
import { GridCol3 } from "../../../components/grid/gridCol";
import CreateModules from "./createModules";
import { useGetModule } from "../../../hooks/useModules";
import UpdateModule from "./updateModule";
import DeleteModule from "./deleteModule";

const ProfessorModules = () => {
  const { data: modules, isLoading, isError } = useGetModule();

  return (
    <>
      <CreateModules />
      <GridCol3>
        {modules?.map((module) => (
          <SimpleCard
            
            key={module.id}
            UpdateButton={
              <UpdateModule
                id={module.id}
                oldTitle={module.title}
                oldDescription={module.description}
              />
            }
            DeleteButton={<DeleteModule id={module.id} />}
            name={module.title}
            description={module.description}
          />
        ))}
      </GridCol3>
    </>
  );
};

export default ProfessorModules;

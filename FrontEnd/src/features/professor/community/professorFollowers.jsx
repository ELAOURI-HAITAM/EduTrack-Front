import React from "react";
import SimpleTable from "../../../components/table/simpleTable";
import { useGetFollowers } from "../../../hooks/useSubscribe";
import { TiGroup } from "react-icons/ti";

const ProfessorFollowers = () => {
    const {data : subscriptions , isLoading , isError} = useGetFollowers();
    console.log(subscriptions);
    
  const header = ["Nº","FISRT NAME", "LAST NAME", "EMAIL", "GENDER", "BIRTH DATE"];
  return (
    <div>
        <div data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="800" className="flex justify-center gap-5 items-center ">
        <h1 className="text-3xl text-[#437eff] font-bold ">Students List </h1>
        <TiGroup color="#437eff" size={40}/>

        </div>
      <SimpleTable headers={header} data={subscriptions} />
    </div>
  );
};

export default ProfessorFollowers;

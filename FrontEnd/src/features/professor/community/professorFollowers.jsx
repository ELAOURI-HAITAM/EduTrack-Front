import React from "react";
import SimpleTable from "../../../components/table/simpleTable";
import { useGetFollowers } from "../../../hooks/useSubscribe";
import { TiGroup } from "react-icons/ti";

const ProfessorFollowers = () => {
    const {data : subscriptions , isLoading , isError} = useGetFollowers();
    console.log(subscriptions);
      const rows = subscriptions?.map((sub, index) => ({
    Nº: index + 1,
    "FIRST NAME": sub.first_name,
    "LAST NAME": sub.last_name,
    EMAIL: sub.email,
    GENDER: sub.gender,
    BIRTH_DATE:sub.date 
    
  }));
  const header = ["Nº","FISRT NAME", "LAST NAME", "EMAIL", "GENDER", "BIRTH DATE"];
  return (
    <div>
        <div data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="800" className="flex justify-center gap-5 items-center ">
        <h1 className="text-3xl text-[#437eff] font-bold ">Students List </h1>
        <TiGroup color="#437eff" size={40}/>

        </div>
      <SimpleTable headers={header} data={rows} />
    </div>
  );
};

export default ProfessorFollowers;

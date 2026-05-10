import React from "react";
import SimpleTable from "../../../components/table/simpleTable";
import { useGetFollowing } from "../../../hooks/useSubscribe";
import { TiGroup } from "react-icons/ti";
import Unfollow from "./unfollow";
import SimpleAlert from "../../../components/alerts/simpleAlert";
import { Info } from "lucide-react";
import Follow from "./follow";

const StudentFollowing = () => {
  const { data: subscriptions, isLoading, isError } = useGetFollowing();
  const rows = subscriptions?.map((sub, index) => ({
    Nº: index + 1,
    "FIRST NAME": sub.first_name,
    "LAST NAME": sub.last_name,
    EMAIL: sub.email,
    PHONE: sub.phone,
    ACTION: <Unfollow id={sub.professor_id} />,
  }));

  const header = ["Nº", "FISRT NAME", "LAST NAME", "EMAIL", "PHONE", "ACTION"];
  return (
    <div data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="800">
              <Follow/>
      {rows?.length == 0 ? (
        <>
          <SimpleAlert
            
            className={"mt-2"}
            color={"info"}
            icon={Info}
            message={"You Havn't Follow Any Professor Yet"}
          />
        </>
      ) : (
        <>
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="800"
            className="flex justify-center gap-5 items-center "
          >
            <h1 className="text-3xl text-[#437eff] font-bold ">
              Professors List{" "}
            </h1>
            <TiGroup color="#437eff" size={40} />
          </div>
          <SimpleTable headers={header} data={rows} />
        </>
      )}
    </div>
  );
};

export default StudentFollowing;

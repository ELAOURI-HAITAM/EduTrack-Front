import React, { useState } from "react";
import SimpleTable from "../../../components/table/simpleTable";
import { TiGroup } from "react-icons/ti";
import SimpleAlert from "../../../components/alerts/simpleAlert";
import { Info } from "lucide-react";
import { useGetAllUsers } from "../../../hooks/useUser";
import CreateUser from "./createUser";
import Male from "../../../assets/auth/Man.png";
import Female from "../../../assets/auth/Woman.png";
import StudentMale from "../../../assets/auth/student.png";
import StudentFemale from "../../../assets/auth/student_female.png";
import UpdateUser from "./updateUser";
import DeleteUser from "./deleteUser";
import SimpleSelect from "../../../components/selects/SimpleSelect";
import ImportUsersExcel from "./importUsersExcel";
const UsersList = () => {
  const { data: users, isLoading, isError } = useGetAllUsers();
  const [filtredRole, setFiltredRole] = useState();
  const filtred = filtredRole == "All" || !filtredRole ? users : users?.filter((user) => user.role == filtredRole)
  console.log(users);
  
  const rows = filtred?.map((user, index) => ({
    Nº: index + 1,
    "FIRST NAME": !user.first_name?.[0]?.trim() ? (
      <p className="bg-orange-600 p-1 rounded-full text-center">Not Yet</p>
    ) : (
      user.first_name
    ),
    "LAST NAME": !user.last_name ? (
      <p className="bg-orange-600 p-1 rounded-full text-center">Not Yet</p>
    ) : (
      user.last_name
    ),
    EMAIL: user.email,
    GENDER:
      user?.gender === "Male" && user?.role === "Professor" ? (
        <img className="h-12 w-12" src={Male} alt="Professor Male" />
      ) : user?.role === "Professor" && user?.gender === "Female" ? (
        <img className="h-12 w-12" src={Female} alt="Professor Female" />
      ) : user?.role === "Student" && user?.gender === "Male" ? (
        <img className="h-12 w-12" src={StudentMale} alt="Student Male" />
      ) : user?.role === "Student" && user?.gender === "Female" ? (
        <img className="h-12 w-12" src={StudentFemale} alt="Student Female" />
      ) : (
        <p className="bg-orange-600 p-1 rounded-full text-center">Not Yet</p>
      ),
    ROLE: user.role,
    STATUS:
      user.status == "Active" ? (
        <p className="bg-green-600 p-1 rounded-full text-center">Active</p>
      ) : (
        <p className="bg-orange-600 p-1 rounded-full text-center">Pending</p>
      ),
    ACTIONS: (
      <div className="flex">
        <UpdateUser
          id={user.id}
          status={user.status}
          oldFirstName={user.first_name}
          oldLastName={user.last_name}
          oldGender={user.gender}
          oldEmail={user.email}
          oldRole={user.role}
        />
        <DeleteUser id={user.id} />
      </div>
    ),
  }));




  const header = [
    "Nº",
    "FIRST NAME",
    "LAST NAME",
    "EMAIL",
    "Gender",
    "Role",
    "Status",
    "ACTIONS",
  ];
  return (
    <div
      className=""
      data-aos="fade-down"
      data-aos-delay="200"
      data-aos-duration="800"
    >
      <div className="flex justify-between">
        <div>
        <CreateUser />
        <ImportUsersExcel/>

        </div>
        {/* <select onChange={(event) => setFiltredRole(event.target.value)} className="border w-40 text-white rounded-lg p-2 outline-none dark:bg-gray-700 dark:border-gray-600">
          <option value="">Filter By Role</option>
          <option value="All">All</option>
          <option value="Student">Student</option>
          <option value="Professor">Professor</option>
        </select> */}
      </div>
      {filtred?.length == 0 ? (
        <>
          <SimpleAlert
            className={"mt-2"}
            color={"info"}
            icon={Info}
            message={"There No Users "}
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
            <h1 className="text-3xl text-[#437eff] font-bold ">Users List </h1>
            <TiGroup color="#437eff" size={40} />
          </div>
          <SimpleTable headers={header} data={rows} />
        </>
      )}
    </div>
  );
};

export default UsersList;

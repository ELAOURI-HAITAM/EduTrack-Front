import React, { useState, useRef } from "react";
import MainButton from "../../../components/Buttons/main_button";
import { FileSpreadsheet, Upload } from "lucide-react"; 
import FormModal from "../../../components/modal/formModal";
import { useImportUsers } from "../../../hooks/useUser"; 

const ImportUsersExcel = () => {
  const [file, setFile] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const fileInputRef = useRef(null); 

  const openDialog = () => setOpenModal(true);
  const closeDialog = () => {
    setFile(null); 
    setOpenModal(false);
  };

  const { mutate: uploadExcel, isPending: isImporting } = useImportUsers();

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleImportUsers = () => {
    if (!file) return;

  
    const formData = new FormData();
    formData.append("file", file);

    uploadExcel(formData, {
      onSuccess: () => {
        closeDialog(); 
      }
    });
  };

  return (
    <>
      
      <div
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="800"
        className="mt-2"
      >
        <MainButton
          name={"Import with Excel"}
          onclick={openDialog}
          icon={<FileSpreadsheet />} 
        />
      </div>

      
      <FormModal
        action="Upload"
        onSubmit={handleImportUsers}
        show={openModal}
        onClose={closeDialog}
        isPending={isImporting} 
      >
        <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-600 rounded-lg bg-slate-900/50 hover:border-emerald-500 transition-colors duration-300">
          
          <input
            type="file"
            ref={fileInputRef}
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            className="hidden"
          />
          
          <Upload className="text-slate-400 mb-2 animate-bounce" size={32} />
          
          <button
            type="button"
            className="bg-slate-800 hover:bg-slate-700 text-white text-sm px-4 py-2 rounded border border-slate-600 font-medium mb-2 transition"
            onClick={() => fileInputRef.current.click()} 
          >
            Choose Excel File
          </button>

          <span className="text-xs text-slate-400 text-center">
            {file ? (
              <strong className="text-emerald-400">{file.name}</strong>
            ) : (
              "Only .xlsx or .xls files are allowed"
            )}
          </span>
        </div>
      </FormModal>
    </>
  );
};

export default ImportUsersExcel;
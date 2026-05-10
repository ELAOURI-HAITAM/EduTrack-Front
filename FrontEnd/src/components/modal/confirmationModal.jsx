import React from 'react';
import Swal from 'sweetalert2';

const ConfirmationModal = async ({title , message}) => {
    return await Swal.fire ({
        title: title,
        text: message,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "red",
        cancelButtonColor: "blue",
        confirmButtonText: "Yes , I'm Sure",
        cancelButtonText : "Cancel",
        allowEscapeKey : false,
    }
            
    );
}

export default ConfirmationModal;

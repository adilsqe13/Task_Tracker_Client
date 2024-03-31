import axios from 'axios';
import React from 'react';


export default function deleteTaskModal() {
    const apiUrl = process.env.REACT_APP_API_URL;

    const handleDelete = async () => {
        const taskId = localStorage.getItem('targetEDTaskId');
        try {
            const response = await axios.delete(
                `${apiUrl}/api/delete-task/${taskId}`,
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                });


            if (response.data.success) {
                window.location.reload();
            } else {
                alert('Something went wrong');
            }
        } catch (error) {
            console.log(error);
            alert('Something went wrong');
        }

    }
    return (
        <>
            <div class="modal fade" id="deleteTaskModal" tabindex="-1" aria-labelledby="deleteTaskModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="deleteTaskModalLabel">Do you want to delete ?</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleDelete} type="button" class="btn btn-danger">Delete Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

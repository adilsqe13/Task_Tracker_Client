import React, { useState, useContext } from 'react';
import axios from 'axios';
import Spinner from '../../icons/Spinner';
import taskContext from '../../CONTEXT/context/taskContext';

export default function EditTaskModal() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { taskDetails } = useContext(taskContext);
    const taskId = localStorage.getItem('targetEDTaskId');
    const [processing, setProcessing] = useState(false);
    const [task, setTask] = useState({ title: '', desc: '', team: '', assignees: '', priority: '', status: '' });


    function onChange(event) {
        setTask({ ...taskDetails, [event.target.name]: event.target.value });
    }

    //HANDLE EDIT TASK
    async function handleEditTask() {
        setProcessing(true);
        try {
            const response = await axios.put(
                `${apiUrl}/api/edit-task`,
                {
                    taskId,
                    priority: task.priority,
                    status: task.status
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            );
            if (response.data.success) {
                setProcessing(false);
                window.location.reload();
            } else {
                setProcessing(false);
                alert('Something went wrong');
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="modal fade" id="editTaskModal" tabindex="-1" aria-labelledby="editTaskModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 bold" id="editTaskModalLabel">EDIT TASK</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Title</label>
                                <input disabled={true} type="text" class="form-control" id="exampleFormControlInput1" name="title" value={taskDetails.title} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                <textarea disabled={true} class="form-control" id="exampleFormControlTextarea1" rows="3" name="desc" value={taskDetails.desc}></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Team</label>
                                <input disabled={true} type="text" class="form-control" id="exampleFormControlInput1" name="team" value={taskDetails.team} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Assignees</label>
                                <input disabled={true} type="text" class="form-control" id="exampleFormControlInput1" name="assignees" value={taskDetails.assignees} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Priority</label>
                                <div class="dropdown">
                                    <select onChange={onChange} name='priority' value={task.priority} className="form-select" aria-label="Default select example">
                                        <option name='P0' value="P0">P0</option>
                                        <option name='P1' value="P1">P1</option>
                                        <option name='P2' value="P2">P2</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Status</label>
                                <div class="dropdown">
                                    <select onChange={onChange} name='status' value={task.status} className="form-select" aria-label="Default select example">
                                        {taskDetails.status === 'assign' && <option name='assign' value="assign">Assign</option>}
                                        {(taskDetails.status === 'assign' || taskDetails.status === 'inProgress') && <option name='inProgress' value="inProgress">In Progress</option>}
                                        {(taskDetails.status === 'assign' || taskDetails.status === 'inProgress' || taskDetails.status === 'completed') && <option name='completed' value="completed">Completed</option>}
                                        {(taskDetails.status === 'completed' || taskDetails.status === 'deployed') && <option name='deployed' value="deployed">Deployed</option>}
                                        {(taskDetails.status === 'completed' || taskDetails.status === 'deployed' || taskDetails.status === 'deffered') && <option name='deffered' value="deffered">Deffered</option>}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button disabled={task.priority === '' || task.status === ''} onClick={handleEditTask} type="button" className="btn bg-blue text-dark bold addTaskBtn form-control ">
                                {processing ? <Spinner height={22} width={22} /> : "Submit"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

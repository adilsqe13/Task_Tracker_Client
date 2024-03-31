import React, { useState } from 'react';
import axios from 'axios';
import Spinner from '../../icons/Spinner';

export default function AddTaskModal() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const taskObject = {
        title: '', 
        desc: '', 
        team: '', 
        assignees: '', 
        priority: '' 
    }
    const [processing, setProcessing] = useState(false);
    const [task, setTask] = useState(taskObject);

    function onChange(event) {
        setTask({ ...task, [event.target.name]: event.target.value });
    }

    //HANDLE ADD TASK
    async function handleAddTask() {
        setProcessing(true);
        try {
            const response = await axios.post(
                `${apiUrl}/api/add-task`,
                {
                    ...task
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
            
            setTask(taskObject);

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="modal fade" id="addTaskModal" tabindex="-1" aria-labelledby="addTaskModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 bold" id="addTaskModalLabel">CREATE A TASK</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Title</label>
                                <input onChange={onChange} type="text" class="form-control" id="exampleFormControlInput1" name="title" value={task.title} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                <textarea onChange={onChange} class="form-control" id="exampleFormControlTextarea1" rows="3" name="desc" value={task.desc}></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Team</label>
                                <input onChange={onChange} type="text" class="form-control" id="exampleFormControlInput1" name="team" value={task.team} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Assignees</label>
                                <input onChange={onChange} type="text" class="form-control" id="exampleFormControlInput1" name="assignees" value={task.assignees} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Priority</label>
                                <div class="dropdown">
                                    <select onChange={onChange} name='priority' value={task.priority} className="form-select" aria-label="Default select example">
                                        <option selected>Select Priority</option>
                                        <option name='P0' value="P0">P0</option>
                                        <option name='P1' value="P1">P1</option>
                                        <option name='P2' value="P2">P2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button disabled={task.title === '' ||
                                task.desc === '' ||
                                task.team === '' ||
                                task.assignees === '' ||
                                task.priority === ''
                            } onClick={handleAddTask} type="button" className="btn bg-blue text-dark bold addTaskBtn form-control ">
                                {processing ? <Spinner height={22} width={22} /> : "ADD TASK"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

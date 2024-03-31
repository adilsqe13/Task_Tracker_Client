import React, { useContext } from 'react';
import OptionBtn from '../../icons/OptionBtn';
import taskContext from '../../CONTEXT/context/taskContext';



export default function CompletedTaskCard() {
  const { tasks, setTaskDetails } = useContext(taskContext);

  const handleClickEdit = async (taskId) => {
    localStorage.setItem('targetEDTaskId', taskId);
    const task = tasks.find((el) => el._id === taskId);
    setTaskDetails(task);
  }

  return (
    <>
      <div className="card pb-2" style={{ width: "100%" }}>
        <h5 className="card-title bg-success p-2 text-light rounded-top bold">Completed</h5>
        {tasks && tasks.filter(el => el.status === 'completed').length === 0 && <h6 className='text-danger mt-2 height-230 dfjcac'>No Tasks</h6>}
        {tasks && tasks.filter(el => el.status === 'completed').map((task, index) => {
          return (
          <div key={index} className="mx-2 mb-2 bg-secondary-light">
            <div className="row px-1 py-3">
                <div className="col-6 dfjsac">
                <sub className='text-success bold'>
                  {new Date(task.start_date).getDate()}-
                  {new Date(task.start_date).getMonth()}-
                  {new Date(task.start_date).getFullYear()}
                </sub>
                </div>
                <div className="col-6 dfjeac">
                <sub className='text-success bold'>
                  {new Date(task.end_date).getDate()}-
                  {new Date(task.end_date).getMonth()}-
                  {new Date(task.end_date).getFullYear()}
                </sub>
                </div>
              </div>
            <div className="row p-1">
              <div className="col-8 dfjsac ">Task Id - <span className='text-danger bold'>{task._id.substring(19, 25).toUpperCase()}</span></div>
              <div className="col-4 dfjeac ">
                <span className='p-1 dfjcac task-priority bg-blue'>{task.priority}</span>
              </div>
            </div>
            <h6 className='bold mt-1'>{task.title}</h6>
            <p className='task-description text-color p-1 mt-1'>{task.desc}</p>
            <div className="row p-1">
              <div className="col-8 dfjsac fs-6 ">@{task.assignees}</div>
              <div className="col-4 dfjeac ">
                <span className='p-1 dfjcac task-priority bg-blue' type="button" data-bs-toggle="dropdown" aria-expanded="false"><OptionBtn /></span>
                <div class="dropdown">
                  <ul class="dropdown-menu">
                    <li><button onClick={() => { handleClickEdit(task._id) }} type="button" className="btn" data-bs-toggle="modal" data-bs-target="#editTaskModal">
                      Edit
                    </button></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='row p-2 mt-2'>
              <div className="col dfjsac">
                <span className='w-50 bg-blue text-light card-btn rounded p-1'>Completed</span>
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </>
  )
}

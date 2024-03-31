import React from 'react';
import '../style/style.css';
import PendingTaskCard from '../components/task-cards/PendingTaskCard';
import InProgressTaskCard from '../components/task-cards/InProgressTaskCard';
import CompletedTaskCard from '../components/task-cards/CompletedTaskCard';
import DeployedTaskCard from '../components/task-cards/DeployedTaskCard';
import DefferedTaskCard from '../components/task-cards/DefferedTaskCard';
import Filter from '../components/Filter';




export default function TaskBody() {
  return (
    <>
      <div className="container border border-2 border-light rounded p-2 mt-3 min-width-370">
        <div className="row p-2">
          <div className="col-sm-9"><Filter /></div>
          <div className="col-sm-3 dfjeat addTaskbtn-div">
          <button type="button" className="btn bg-blue text-light bold addTaskBtn" data-bs-toggle="modal" data-bs-target="#addTaskModal">
                Add Task
            </button>
          </div>
        </div>
        <div className="flex-container">
          <div><PendingTaskCard /></div>
          <div><InProgressTaskCard /></div>
          <div><CompletedTaskCard /></div>
          <div><DeployedTaskCard /></div>
          <div><DefferedTaskCard /></div>
        </div>

      </div>
    </>
  )
}

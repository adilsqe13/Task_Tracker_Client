import React, { useState, useContext } from 'react';
import taskContext from '../CONTEXT/context/taskContext';
import filterPage from '../js/filterPage';

export default function Filter() {
    const { tasks, setTasks, getAllTasks } = useContext(taskContext);
    const [filter, setFilter] = useState({ assigneeName: '', priority: '', start_date: '', end_date: '' });

    function onChange(event) {
        setFilter({ ...filter, [event.target.name]: event.target.value });
    }

    const onEnter = async (event) => {
        if (event.key === 'Enter') {
           filterPage(tasks, setTasks, getAllTasks, filter);
        }
    };
    return (
        <>
            <div className="adil row p-1">
                <div className="col-2 dfjsac bold min-width-100">Filter By:</div>
                <div className="col-2 dfjsac">
                    <input onKeyDown={onEnter} onChange={onChange} className='form-control bg-off-white' name='assigneeName' value={filter.assigneeName} type='text' placeholder='Assignee Name' />
                </div>
                <div className="col-2 dfjcac">
                    <div className="dropdown W-100">
                        <select onChange={onChange} onKeyDown={onEnter} name='priority' value={filter.priority} className="form-select" aria-label="Default select example">
                            <option name='priority' value="">Priority</option>
                            <option name='P0' value="P0">P0</option>
                            <option name='P1' value="P1">P1</option>
                            <option name='P2' value="P2">P2</option>
                        </select>
                    </div>
                </div>
                <div className="col-4 dfjsac">
                    <input onChange={onChange} onKeyDown={onEnter} name='start_date' value={filter.start_date} className='form-control' type='date' />
                    <input onChange={onChange} onKeyDown={onEnter} name='end_date' value={filter.end_date} className='form-control' type='date' />
                </div>
            </div>
            <div className="row p-1">
                <div className="col-2 dfjsac bold min-width-100">Sort By:</div>
                <div className="col-2 dfjsac">
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Priority
                        </a>

                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">P0</a></li>
                            <li><a className="dropdown-item" href="#">P1</a></li>
                            <li><a className="dropdown-item" href="#">P2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

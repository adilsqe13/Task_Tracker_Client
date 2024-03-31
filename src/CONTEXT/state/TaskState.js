import React, { useState , useEffect} from 'react';
import taskContext from '../context/taskContext';


export default function TaskState(props) {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [ tasks, setTasks] = useState('');
    const [ taskDetails, setTaskDetails] = useState('');

    const getAllTasks = async() =>{
      try {
        const response = await fetch(`${apiUrl}/api/get-all-tasks`);
        const data = await response.json();
        setTasks(data.tasks.reverse());
      } catch (error) {
        //Error handling
        console.log(error);
      }
    }
    

    useEffect(()=>{
        getAllTasks();
    },[]);
  
  return (
    <>
      <taskContext.Provider value={{ tasks, setTasks, taskDetails, setTaskDetails, getAllTasks }}>
        {props.children}
      </taskContext.Provider>
    </>
  )
}

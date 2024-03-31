import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TaskBody from './components/TaskBody';
import DeleteTaskModal from './components/modals/DeleteTaskModal';
import AddTaskModal from './components/modals/AddTaskModal';
import EditTaskModal from './components/modals/EditTaskModal';

export default function App() {
  return (
    <>
    <Navbar />
    <TaskBody />
    <DeleteTaskModal/>
    <AddTaskModal/>
    <EditTaskModal/>
    </>
  )
}

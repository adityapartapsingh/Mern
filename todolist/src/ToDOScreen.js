import Task from "./components/Task";
import { useContext } from "react";
import TaskContext from "./context/TaskContext";
import { useNavigate } from "react-router-dom";

const ToDOScreen = () => {

    const {taskList} = useContext(TaskContext);
    const navigate = useNavigate();

  
       return(
        <>
            <div>
                <h1 className=" heading center">ToDo List</h1>
                <div>
                    <button 
                    onClick={(e) =>{
                       navigate("/add-task");
                    }} className="button">ADD TASK</button>
                    <p>Total Task: {taskList.length}</p>
                    <div className="task-list">
                    {taskList.map((task,index) => (
                        <Task task={task} key={index} />
                    ))}
                    </div>
                </div>
            </div>
           
        </>
        );
}
    export default ToDOScreen;
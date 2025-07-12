import { useState } from "react";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const AddTask = () => {

    const {addNewTask} = useContext(TaskContext);
    const navigate = useNavigate();

   const [task, setTask] = useState({
        title: "",
        description: "",
    });

    let handleInputChange = (e) => {
    setTask({
        ...task,
        [e.target.name]: e.target.value,})
    }
    
    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        addNewTask(task);
        setTask({});
        navigate("/");
    }

return (
    <div>
        <h1 style={{margin:'auto',textAlign:'center',marginBottom:'20px'}}>ADD TASK</h1>
        <form  onSubmit={onFormSubmit}>
            <div className="title-box">
                <label>Title</label>
                <input 
                    className="title-input" 
                    type="text" 
                    speelcheck={false} 
                    data-ms-editor={true}
                    placeholder="Task Title"
                    name="title"
                    onChange={handleInputChange}
                    value={task.title} />
            </div>
            <div className="description-box">
                <lable>Description</lable>
                <textarea 
                    className="description-input"
                    row="2"
                    spellCheck={false}
                    data-ms-editor={true}
                    placeholder="Task Description"
                    name="description"
                    onChange={handleInputChange}
                    value={task.description}
                    ></textarea>
            </div>
            <button 
            type="submit" 
            className="button"
            >Submit</button>
        </form>
        
    </div>
)
    
};
export default AddTask;
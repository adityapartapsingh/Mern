import { formateDate } from "../utils/DateUtils";

const Task = ({task:{ title,description ,createdDate}}) =>{



 return (
    <div className="task">
        
        <div className="task-title">{title}</div>
        <div className="task-date">{formateDate(createdDate)}</div>
        <div className="task-description">{description}</div>
        <div className="task-buttons">
        <button className=" button">Edit</button>
        <button className=" button">Delete</button>
        </div>
    </div>
    
 )
};

export default Task;
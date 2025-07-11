import AddTask from "./components/AddTask";
import ToDOScreen from "./ToDOScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {TaskProvider} from "./context/TaskContext";

  const router = createBrowserRouter([
  { 
    path: "/",
    element: <ToDOScreen  />,
  },
  {
    path:"/add-task",
    element:<AddTask />,
  },  
]);


const App = () =>{

  return (
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  );
};


export default App;
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import { Link } from "react-router-dom";

export default function Tasks() {
    return (
        <>
            <h1>Task List</h1>
            <TaskForm />
            <TaskList />
            <Link to={'/'}>Home</Link>
        </>
    );
}

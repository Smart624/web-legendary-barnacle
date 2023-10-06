import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Welcome to Our Project</h1>
            <Button type='button' label='Go' />
            <Link to={'/tasks'}>Tasks</Link>
        </>
    );
}

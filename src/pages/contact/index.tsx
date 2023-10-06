import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <form>
                {/* Add your contact form fields here */}
                <Input />
                <Button type='submit' label='Submit' />
            </form>
            <p>For more information, visit my GitHub:</p>
            <a href="https://github.com/Smart624" target="_blank" rel="noopener noreferrer">https://github.com/Smart624</a>
            <Link to={'/'}>Home</Link>
        </>
    );
}
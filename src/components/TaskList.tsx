import { List, ListItem } from "@chakra-ui/react";

export default function TaskList() {
    const tasks = ['Task 1', 'Task 2', 'Task 3'];
    return (
        <List spacing={3}>
            {tasks.map((task, index) => <ListItem key={index}>{task}</ListItem>)}
        </List>
    );
}

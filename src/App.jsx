import {useState} from 'react';
import {Button, Container, Stack, Form, Card} from 'react-bootstrap';

function App() {
    const [taskList, setTaskList] = useState([
        {
            text: "task"
        }
    ]);

    const [task, setTask] = useState("");

    const renderTasks = () => taskList.map((item, index) => {
        return (
            <Card key={index}>
                <Card.Body>{item.text}</Card.Body>
            </Card>
        )
    })

    const addTask = (task) =>{
        setTaskList(prevTaskList => [...prevTaskList, { text : task}]);
        setTask("")
    }

  return (
    <Container className="mt-2 mb-5">
        <Stack gap={3} className="col-md-5 mx-auto">
            <h1>Todo App</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Add task:</Form.Label>
                    <Form.Control placeholder="Enter task name" value={task} onChange={(e) => setTask(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={() => addTask(task)}>
                    Submit
                </Button>
            </Form>
            <Stack gap={3}>
                {renderTasks()}
            </Stack>
        </Stack>

    </Container>
  )
}

export default App

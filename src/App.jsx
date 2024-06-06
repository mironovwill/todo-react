import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Container, Stack, Form, Card } from 'react-bootstrap';

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: uuidv4(),
      text: 'task'
    }
  ]);

  const [task, setTask] = useState('');

  const renderTasks = () =>
    taskList.map((item) => {
      return (
        <Card key={item.id}>
          <Stack>
            <Card.Body className="d-flex justify-content-between align-items-center">
              {item.text}
              <Button variant="danger" onClick={() => deleteTask(item.id)}>
                Delete
              </Button>
            </Card.Body>
          </Stack>
        </Card>
      );
    });

  const addTask = (task) => {
    setTaskList((prevTaskList) => [...prevTaskList, { id: uuidv4(), text: task }]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== id));
  };

  return (
    <Container className="mt-2 mb-5">
      <Stack gap={3} className="col-md-5 mx-auto">
        <h1>Todo App</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Add task:</Form.Label>
            <Form.Control
              placeholder="Enter task name"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </Form.Group>
          <Button onClick={() => addTask(task)}>Submit</Button>
        </Form>
        <Stack gap={3}>{renderTasks()}</Stack>
      </Stack>
    </Container>
  );
}

export default App;

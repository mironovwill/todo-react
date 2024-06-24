import { useEffect, useState } from 'react';
import { Container, Stack, Spinner } from 'react-bootstrap';
import { Card } from './components/Card/Card.jsx';
import { Form } from './components/Form/Form.jsx';
import { getTasks, deleteTask, createTask, completeTask } from './api/requests.js';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTaskList(response);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCreateTask = async (task) => {
    try {
      await createTask(task);
      const tasks = await getTasks();
      setTaskList(tasks);
      setTask('');
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      const tasks = await getTasks();
      setTaskList(tasks);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCompleteTask = async (id) => {
    try {
      await completeTask(id);
      const tasks = await getTasks();
      setTaskList(tasks);
    } catch (e) {
      console.log(e);
    }
  };

  const Loader = () => <Spinner animation="border" variant="primary" />;

  const renderTasks = () =>
    taskList.map((item) => {
      return (
        <Card
          id={item.id}
          title={item.title}
          description={item.description}
          done={item.done}
          key={item.id}
          handleDeleteTask={handleDeleteTask}
          handleCompleteTask={handleCompleteTask}
        />
      );
    });

  return (
    <Container className="mt-2 mb-5">
      <Stack gap={3} className="col-md-7 mx-auto">
        <h1>Todo App</h1>
        <Form handleCreateTask={handleCreateTask} setTask={setTask} task={task} />
        <Stack gap={3}>{loading ? <Loader /> : renderTasks()}</Stack>
      </Stack>
    </Container>
  );
}

export default App;

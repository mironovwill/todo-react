import PropTypes from 'prop-types';
import { Button, Card as BootstrapCard, CardText, Stack } from 'react-bootstrap';

export const Card = ({ title, description, done, handleCompleteTask, handleDeleteTask, id }) => {
  return (
    <BootstrapCard>
      <BootstrapCard.Body className="d-flex align-items-center justify-content-between">
        <Stack className="gap-3">
          <CardText className={`h3 ${done && 'text-decoration-line-through'}`}>{title}</CardText>
          <CardText>{description || 'Нет описания'}</CardText>
        </Stack>
        <Stack className="gap-3" direction="horizontal">
          <Button variant="danger" onClick={() => handleDeleteTask(id)}>
            Delete
          </Button>
          {!done && (
            <Button variant="primary" onClick={() => handleCompleteTask(id)}>
              Complete
            </Button>
          )}
        </Stack>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired
};

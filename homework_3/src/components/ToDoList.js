import { Button, TextField, Card, CardActions, CardContent, Typography, Chip, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

function TodoList() {
  const [inputTask, setInputTask] = useState('');
  const [arr, setArr] = useState([
    { id: 1, text: 'Это первая задача' }
  ]);

  function addTaskHandle() {
    if (!inputTask.trim()) {
      return;
    }

    const newTask = {
      id: arr.length + 1,
      text: inputTask
    }

    setArr([...arr, newTask]);
    setInputTask('');
  };

  const deleteTaskHandle = (id) => {
    setArr(arr.filter(item => item.id !== id));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          onChange={(event) => setInputTask(event.target.value)}
          label='Введите задачу'
          value={inputTask}
        />
      </Grid>

      <Grid item xs={12}>
        <Button
          onClick={addTaskHandle}
          variant='contained'
        >
          Добавить
        </Button>
      </Grid>

      {arr.map((item) => (
        <Grid item xs={12} key={item.id}>
          <Card>
            <CardContent>
              <Typography>{item.text}</Typography>
            </CardContent>

            <CardActions>
              <Chip
                label='Удалить'
                value={item.id}
                onClick={() => deleteTaskHandle(item.id)}
                onDelete={() => deleteTaskHandle(item.id)}

                deleteIcon={<DeleteIcon />}
              />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default TodoList;
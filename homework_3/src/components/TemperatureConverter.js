import { Button, TextField, Grid } from '@mui/material';
import { useState } from 'react';

function TemperatureConverter() {
  const [celsiusTemp, setCelsiusTemp] = useState('');
  const [fahrenheitTemp, setFahrenheitTemp] = useState('');

  const handleInput = () => {
    if (celsiusTemp !== '') {
      setFahrenheitTemp(celsiusTemp * 9 / 5 + 32);
      setCelsiusTemp('');
    } else if (fahrenheitTemp !== '') {
      setCelsiusTemp((fahrenheitTemp - 32) * 5 / 9);
      setFahrenheitTemp('');
    };
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={3}>
        <TextField
          onChange={(t) => setCelsiusTemp(t.target.value)}
          label='Градусы по Цельсию'
          value={celsiusTemp}
        />
      </Grid>

      <Grid item xs={3}>
        <TextField
          onChange={(t) => setFahrenheitTemp(t.target.value)}
          label='Градусы по Фаренгейту'
          value={fahrenheitTemp}
        />
      </Grid>

      <Grid item xs={12}>
        <Button
          onClick={handleInput}
          variant='contained'
        >
          Конвертировать
        </Button>
      </Grid>
    </Grid>
  );
}

export default TemperatureConverter;
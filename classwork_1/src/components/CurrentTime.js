import './CurrentTime.css';

function CurrentTime() {
  const currentTime = new Date;
  return (
    <div className='CurrentTime'>
      <h4>Текущее время: {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h4>
      <h4>Текущая дата: {currentTime.toLocaleDateString('en-GB')}</h4>
    </div>
  );
}

export default CurrentTime;
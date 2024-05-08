import './EventCard.css';

function EventCard({ title, date, location, isRed }) {
  return (
    <div className='EventCard'>
      <p className='EventCard-Title'>Название события: {title}</p>
      <p className='EventCard-Date'>Название события: {date}</p>
      <p className='EventCard-Location'>Название события: <span style={{ color: isRed ? 'red' : 'green' }}>{location}</span></p>
    </div>
  );
}

export default EventCard;
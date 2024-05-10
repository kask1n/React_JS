import { useContext } from 'react';
import { UserContext, ThemeContext } from '../App';
import classes from './Profile.module.css';

function Content() {
  const userName = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <>
      <section
        className={theme ? `${classes.dark}` : `${classes.light}`}
      >
        <h2>Hello, {userName}!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor sem, blandit sit amet maximus ac, dignissim sit amet nulla. Curabitur id sodales enim. Curabitur condimentum turpis ipsum, ut ultricies mauris fermentum sit amet. Ut nec mi tincidunt ante interdum faucibus ac nec est. Praesent venenatis bibendum purus, nec maximus diam faucibus in. Donec nec neque quis tellus tincidunt pharetra sed suscipit urna. Nunc vulputate venenatis dui, et tempor erat malesuada id. Mauris ipsum nibh, pulvinar vel tincidunt in, feugiat in metus. Integer sapien dolor, venenatis rutrum condimentum ultrices, ornare eu sapien. Donec neque dolor, viverra vel sem ac, iaculis.
        </p>
      </section>
    </>
  );
}

export default Content;
import { useDispatch, useSelector } from 'react-redux';
import { fetchToDos } from './ToDosSlice';
import { useEffect } from 'react';

function ToDos() {
  const { entities, status, error } = useSelector((state) => state.toDos.value);
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(fetchToDos());
  }

  useEffect(() => {
    dispatch(fetchToDos());
  }, [dispatch]);

  return (
    <section>
      <h2>ToDos:</h2>
      {status === "loading" && <h3>Loading...</h3>}
      {error && (
        <div>
          <p>{error}</p>
          <button onClick={clickHandler}>Retry</button>
        </div>
      )}
      {status === "success" && (
        <ul style={{ textAlign: "left" }}>
          {entities.map((toDo) => (
            <li key={toDo.id}>
              {`
              ${toDo.title[0].toUpperCase()}
              ${toDo.title.slice(1)}
              `}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ToDos;
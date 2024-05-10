import { NavLink } from "react-router-dom";

function ListPage({ pages }) {
  return (
    <>
      <h1>Навигационное меню</h1>
      <ul>
        {pages.map((page, i) => (
          <NavLink
            key={i}
            style={{
              textAlign: "left",
              fontSize: "20px",
              listStyleType: "none"
            }}
            to={`/detail/${i + 1}`}
          >
            <li>{page.name}</li>
          </NavLink>
        ))}
      </ul>
    </>
  );
}

export default ListPage;
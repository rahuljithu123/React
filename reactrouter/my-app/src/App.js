import logo from "./logo.svg";
import "./App.css";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import BookList from "./Pages/BookList";
import Book from "./Pages/Book";
import NewBook from "./Pages/NewBook";
import NotFound from "./Pages/NotFound";
import BookLayout from "./BookLayout";
import BookRoutes from "./BookRoutes";
import "./styles.css";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <nav>
        <ul>
          {/* <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}

           to="/" >
              {({ isActive }) => {
                return isActive ? "Active Home" : "Home";
              }}
            </NavLink>
          </li> */}
          <li>
            {/* <Link to="/">Home</Link> */}
            <NavLink to="/" state="Hi">
              Home
            </NavLink>
          </li>
          <li>
            {/* <Link to="/books">Books</Link> */}
            <NavLink end to="/books">
              Books
            </NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        {/* <Route  index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} /> */}
        {/* </Route> */}
        {/* <Route path="/books" element={<BookList/>}/>
        <Route path="/books/:id" element={<Book/>} />
        <Route path="/books/new" element={<NewBook/>}/> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

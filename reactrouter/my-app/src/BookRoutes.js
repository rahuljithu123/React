import React from 'react'
import BookList from './Pages/BookList'
import Book from './Pages/Book';
import NewBook from './Pages/NewBook';
import { Route, Routes } from 'react-router-dom';
import BookLayout from './BookLayout';

const BookRoutes = () => {
  return (
    <>
      {/* <BookLayout /> */}
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
}

export default BookRoutes
import React, { useState } from "react";
import axios from "axios";

import Logo from "../components/molecules/Logo";
import Layout from "../components/organisms/Layout";
import SearchBar from "../components/molecules/SearchBar";
import Books from "../components/organisms/Books";
import Header from "../components/organisms/Header";

const MainPage = () => {
  const [BookData, setBookData] = useState({
    docs: [],
    isLoading: false,
    error: "",
  });
  const [BookName, setBookName] = useState("");

  const handleChange = (event) => setBookName(event.target.value);

  const handleSearchBook = async () => {
    try {
      setBookData({
        ...BookData,
        isLoading: true,
      });
      const result = await axios(
        `http://openlibrary.org/search.json?q=${BookName}`
      );
      console.log(result);
      const { docs } = result.data;
      setBookData({
        ...BookData,
        docs,
        isLoading: false,
      });
      console.log(docs);
    } catch ({ message }) {
      setBookData({
        ...BookData,
        isLoading: false,
        error: message,
      });
    }
  };

  const renderBooks = () => {
    const { isLoading, docs, error } = BookData;
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    if (!docs) {
      return <div>No book found!</div>;
    }

    let something = BookData.docs.map((book) => {
      const name = book.title_suggest;
      let isbn = book.isbn;
      if (isbn !== undefined) {
        return {
          name,
          isbn,
        };
      }
    });
    something = something.filter((book) => book !== undefined);
    something = something.map((book) => {
      const name = book.name;
      let isbn = book.isbn.slice(0, 1);
      const img = "http://covers.openlibrary.org/b/isbn/" + isbn + "-M.jpg";
      return {
        name,
        isbn,
        img,
      };
    });
    console.log(something);
    return <Books data={something} error={BookData.error} />;
  };

  return (
    <Layout>
      <Header>
        <Logo />
        <SearchBar
          handleChange={handleChange}
          BookName={BookName}
          handleSearchBook={handleSearchBook}
        />{" "}
      </Header>
      {renderBooks()}
    </Layout>
  );
};

export default MainPage;

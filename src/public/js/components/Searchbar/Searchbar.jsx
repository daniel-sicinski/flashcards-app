import React from "react";
import { withRouter } from "react-router-dom";
import InputField from "../InputField/InputField";

function Searchbar({ formSubmitted = () => {}, history, location }) {
  const onSearchSubmit = e => {
    e.preventDefault();

    formSubmitted();

    const searchTextValue = e.target.searchText.value;
    setTimeout(
      searchTextValue => {
        history.push(`${location.pathname}?s=${searchTextValue}`);
      },
      800,
      searchTextValue
    );
  };

  return (
    <form onSubmit={onSearchSubmit} style={{ padding: "1rem 3rem 0 3rem" }}>
      <InputField type="text" id="searchText" label="Czego szukasz?" />
    </form>
  );
}

export default withRouter(Searchbar);

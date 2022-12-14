import React from "react";


export default function Form() {
    return (
      <form id="search-form" autocomplete="off">
        <input
          class="search_inp"
          type="text"
          placeholder="Search Country"
          id="search-box"
          autofocus="on"
        />
        <input type="submit" value="Search" class="submitBut" />
      </form>
    );
  }
  
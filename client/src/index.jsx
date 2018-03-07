import React from 'react';
import ReactDOM from 'react-dom';
const Header = window.Header;
const Details = window.Details;

ReactDOM.render(
    React.createElement(Header, {data:window.data}),
    document.getElementById('header')
  );
  window.ReactDOM.render(
    React.createElement(Details),
    document.getElementById('details')
  );
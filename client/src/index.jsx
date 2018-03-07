import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
    React.createElement(Header, {data:window.data}),
    document.getElementById('header')
  );
window.ReactDOM.render(
    React.createElement(Details),
    document.getElementById('details')
);
ReactDOM.render(
    React.createElement(Attendees),
    document.getElementById('attendees')
  );
ReactDOM.render(
    React.createElement(Suggestions),
    document.getElementById('suggestions')
);
ReactDOM.render(
    React.createElement(WhereWhen),
    document.getElementById('wherewhen')
);
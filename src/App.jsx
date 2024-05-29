import * as React from "react";

const welcome = {
  greeting: "Hey",
  title: "React",
};

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramoc, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectId: 1,
  },
];

const App = () => {
  //const title = "React";
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List />
      <List />
    </div>
  );
};

const Search = () => {
  const handleChange = (event) => {
    // synthetic event
    console.log(event);
    // value of target (here: input HTML element)
    console.log(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

const List = () => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.objectId}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default App;

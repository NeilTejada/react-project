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

function App() {
  const title = "React";
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search</label>
      <input id="search" type="text" />

      <hr />

      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectId}>
              {item.title}
              <span>
                <a href={item.url}></a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

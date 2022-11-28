import React from 'react';

const App = () => {

  const stories = [

    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },  
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const handleSearch = (event) =>{
    console.log(event.target.value)
  }
  return (
      <div>
        <h1>My Hacker Stories</h1>
        <Search onSearch={handleSearch}/>
        <hr/>
        <List list={stories}/>
      </div>
    );
};

const Search = (props) =>{
  const [searchTerm, setSearchTerm] = React.useState("Nothing in search memory");

  const handleChange = (event) =>{
    setSearchTerm(event.target.value);

    props.onSearch(event)
  };

  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>searching for <strong>{searchTerm}</strong>.</p>

    </div>
  )
};

const List = (props) =>
  props.list.map(listItemContents => (
    <div key={listItemContents.objectID}>
      <span>
        <a href={listItemContents.url}>{listItemContents.title}</a>
      </span>
      <span>{listItemContents.author}</span>
      <span>{listItemContents.num_comments}</span>
      <span>{listItemContents.points}</span>
    </div>
  ));
  


export default App;
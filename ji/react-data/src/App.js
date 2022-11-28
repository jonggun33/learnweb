import './App.css';
import { useState, useEffect } from 'react';

function GitHubUser({ login }) {
  const [data, setData] = useState();
  useEffect(() => {
    if (!login) return;
    console.log({login})
    const url = `https://api.github.com/users/${login}`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);
  if (data)
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return null;
}

function App() {
  return (
    <div className="App">
      return <GitHubUser login="jonggun33" />
    </div>
  );
}

export default App;

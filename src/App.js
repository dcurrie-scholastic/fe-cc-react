import { useEffect, useState } from 'react';
import './App.css';

function useGetPeopleApi() {
  const [people, setPeople] = useState(null);

  const fetchPeople = async () => {
    try {
      const response = await fetch('http://localhost:3000/people/');
      const data = await response.json();
      setPeople(data);
    } catch (error) {
      return error;
    }
  }

  useEffect(() => fetchPeople().catch(error => console.error('error fetching people', error)), []);

  return people;
}

function App() {
  const people = useGetPeopleApi();

  function PeopleList() {
    if (people === null) {
      return <p>Loading</p>
    }

    if (!people.length) {
      return <p>No people have been added to the list</p>
    }

    return (
      <ul>
        {people.map(person => <li key={person.id}>{JSON.stringify(person)}</li>)}
      </ul>
    );
  }

  return (
    <div className="App">
      <header>
        <h1>People App</h1>
      </header>
      <main>
        <h2>People</h2>
        <PeopleList />
      </main>

    </div>
  );
}

export default App;

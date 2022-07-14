import React, { useEffect, useState } from 'react';
import './App.scss';
import Pagination from './components/Pagination';
import PokeList from './components/PokeList';

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pagination, setPagination] = useState({
    next: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20',
    previous: 'null',
  });

  const [requestUrl, setRequestUrl] = useState('https://pokeapi.co/api/v2/pokemon/');

  useEffect(() => {
    async function fetchPokeList() {
      try {
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { results, next, previous } = responseJSON;
        setPokeList(results);
        setPagination({
          ...pagination,
          next,
          previous
        });
      } catch (error: any) {
        console.log("Failt to fetch poke list: ", error.message);
      }
    }

    fetchPokeList();
  }, [requestUrl]);

  function handlePageChange(newPage: any, type: string) {
    if (type === "next") {
      setPagination({
        ...pagination,
        next: newPage
      });
    } else {
      setPagination({
        ...pagination,
        previous: newPage
      });
    }

    setRequestUrl(newPage);
  }

  return (
    <div className="c-poke-list">
      <h1>Pokémon</h1>
      <PokeList pokes={pokeList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;

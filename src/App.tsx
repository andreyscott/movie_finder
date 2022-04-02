import React from 'react';
import { Box } from '@chakra-ui/react';
import { Home } from './components/home';
import { Search } from './components/search';
import { MovieDisplay } from './components/movieDisplay';
import {movie} from './components/sharedInterfaces'


type movies = movie[]

const actionMoviesDB:movies = [
  {name: 'Batman',poster: 'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg', id: 'tt0096895'},
  {name: 'Superman',poster: 'https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg', id: 'tt0078346'},
  {name: 'Justice League',poster: 'https://m.media-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg', id: 'tt0974015'},
  {name: 'Spontaenous',poster: 'https://m.media-amazon.com/images/M/MV5BMWQ0YzI3NTktNjEyNC00MGVhLTlmZjEtN2NkZTcyNmQwYmQ1XkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_SX300.jpg', id: 'tt5774062'},
  {name: 'Dr Strange',poster: 'https://m.media-amazon.com/images/M/MV5BNDlmNjYzNTEtYTkxMC00MWU5LWI0MTQtZGE5MDNmYTRkNWFlXkEyXkFqcGdeQXVyNzIyNzI2NDg@._V1_SX300.jpg', id: 'tt6493198'},
]

const comedyMoviesDB:movies = [
  {name: 'Mr Bean: Funeral',poster: 'https://m.media-amazon.com/images/M/MV5BZDY5YWQ4MDctYjAwYS00YjA5LWJiM2MtY2I4MzI4ZWUzNjUwXkEyXkFqcGdeQXVyNjU1ODU4NDA@._V1_SX300.jpg', id: 'tt4448662'},
  {name: 'Friends',poster: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg', id: 'tt0108778'},
  {name: 'How I Met Your Mother',poster: 'https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_SX300.jpg', id: 'tt0460649'},
  {name: 'Big Bang',poster: 'https://m.media-amazon.com/images/M/MV5BMDFiNTdhN2QtMmZmOS00YjMzLWI2ZjMtYjQ0Njg4YTdkY2FhXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_SX300.jpg', id: 'tt1116217'},
  {name: 'The Office',poster: 'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg', id: 'tt0386676'},
]




const  App:React.FC = () =>  {
  return (
      <Box width={'100vw'} minHeight='100vh' mb={'67px'} >
        <Home />
        <Search />
        {/* <MovieDisplay name='Action' titles={actionMoviesDB}  /> */}
        {/* <MovieDisplay name='Comedy' titles={comedyMoviesDB}/> */}
      </Box>
  );
}

export default App;

import React from 'react';
import { Box } from '@chakra-ui/react';
import { Home } from './components/home';
import { Search } from './components/search';
import { MovieDisplay } from './components/movieDisplay';
import {movie} from './components/sharedInterfaces'


type movies = movie[]

const testHorrorMoviesDB:movies = [
  {name: 'The Nun',poster: '', id: 'tt0078346'},
  {name: 'Fear Street',poster: '', id: 'tt0974015'},
  {name: 'Candy Man',poster: '', id: 'tt5774062'},
  {name: 'Grey',poster: '', id: 'tt6493198'},
]

const testComedyMoviesDB:movies = [
  {name: 'How I Met Your Father',poster: '', id: 'tt4448662'},
  {name: 'Friends',poster: '', id: 'tt0108778'},
  {name: 'How I Met Your Mother',poster: '', id: 'tt0460649'},
  {name: 'Big Bang',poster: '', id: 'tt1116217'},
  {name: 'The Office',poster: '', id: 'tt0386676'},
]




const  App:React.FC = () =>  {
  return (
      <Box width={'100vw'} minHeight='100vh' mb={'67px'} >
        <Home />
        <Search />
        <MovieDisplay name='Comedy' titles={testComedyMoviesDB}/>
        <MovieDisplay name='Horror' titles={testHorrorMoviesDB}  /> 
      </Box>
  );
}

export default App;

import { Box, Flex, Grid, GridItem, Show} from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react";
import { Genre } from "./hooks/UseGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/UsePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string | null;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
 
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
  templateColumns={{
    base: '1fr',
    lg: '200px 1fr'
  }}
  >
    <GridItem area='nav'>
      <NavBar onSearch={(searchText)=> setGameQuery({...gameQuery,searchText})}></NavBar>
    </GridItem>
    <Show above="lg">
      <GridItem area='aside' paddingX={5}>
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}></GenreList>
      </GridItem>
    </Show>
    <GridItem area='main'>
      <Flex paddingLeft={2} marginBottom={5}>
        <Box marginRight={4}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}></PlatformSelector>
        </Box>
        <SortSelector  selectedSort={gameQuery.sort}  onSelectSort={(sort:string) => setGameQuery({...gameQuery,sort})}></SortSelector>
      </Flex>
      <GameGrid gameQuery={gameQuery}/>
    </GridItem>
  </Grid>
}

export default App

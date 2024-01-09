
import { HStack, List, ListItem, Image, Text, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/UseGenres';
import getCroppedImageUrl from '../service/image-url';


const GenreList = () => {
    const {data, isLoading, error} = useGenres();
    if (error) return null;
    if (isLoading) return <Spinner></Spinner>
  return (
    <List>
        {data.map(genre => (
        <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image 
                src={getCroppedImageUrl(genre.image_background)} 
                boxSize="32px" 
                borderRadius={8}
                />
                <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
        </ListItem>))}
    </List>
  )
}

export default GenreList
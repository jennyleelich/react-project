
import { HStack, List, ListItem, Image, Button, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/UseGenres';
import getCroppedImageUrl from '../service/image-url';
import { FaBold } from 'react-icons/fa';
interface Props {
    onSelectGenre: (genre: Genre) => void ;
    selectedGenre: Genre | null;

}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
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
                <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' :'normal' } fontSize='lg' variant='link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
            </HStack>
        </ListItem>))}
    </List>
  )
}

export default GenreList
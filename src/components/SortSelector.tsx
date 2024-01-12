import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
interface Props {
    onSelectSort: (sort: string)=>void;
    selectedSort: string | null;
}
const SortSelector = ({onSelectSort, selectedSort}: Props) => {
    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'}
    ]
 const currentSortOrder = sortOrders.find(order => order.value === selectedSort)
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>Order by: {currentSortOrder?.label || 'Relevance'}</MenuButton>
        <MenuList>
            {sortOrders.map(sort => <MenuItem key={sort.value} onClick={()=> onSelectSort(sort.value)}>{sort.label}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default SortSelector
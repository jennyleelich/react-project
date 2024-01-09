
import useData from "./UseData";
interface Genre {
    id: number;
    name: string;
}

const useGenres = () => useData<Genre>('/genres')
;

export default useGenres;
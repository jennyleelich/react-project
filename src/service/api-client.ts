import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '23312848b67549fcae0593af3e72829a'
    }
})
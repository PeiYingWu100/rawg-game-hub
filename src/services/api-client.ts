import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api", 
    params: {
        // 2023/12/12
        key: "0afe64f47228433583effd0fa49c4761"
    }
})
import { useEffect, useState } from "react";
import "./index.scss";
import { MovieService } from "../../api/MovieService";

const Home = () => {
    const [movies, setMovies] = useState([])

    async function getMovies() {
        const data = await MovieService.getMovies()
        console.log(data.request)
    }

    useEffect(() => {
        getMovies()
    })


    return (
        <section className="Home">
            {

            }
        </section>
    )
}

export default Home
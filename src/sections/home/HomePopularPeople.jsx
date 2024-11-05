import { useContext } from "react";
import PeopleCard from "../../components/PeopleCard";
import "../../styles/PeopleCard.css"
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { ApiContext } from "../../state/context/PopularPeople";

function HomePopularPeople() {

    const apiKey =  "01b2194e0d3126278b4cd10749993496"

    async function fetchPopularPeople() {
        return await axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=${apiKey}&language=en-US`)
            .then((response) => { return response.data.results; })
            .catch((error) => console.log(error));
    }

    const { data: popularPeople, isFetching, error } = useQuery({
        queryKey: "popularPeople",
        queryFn: fetchPopularPeople,
        refetchOnWindowFocus: false

    })

  

    if (isFetching) return <div>data is loading....</div>
    if (error) return <div> there is an error </div>

    return (
        <>
         <h1 className="text-3xl">Famous People for this week </h1>
            <div className="peopleContainer d-flex my-5 ">
                {popularPeople?.slice(0, 8).map(
                    (data) => {
                        return <PeopleCard data={data} />
                    }
                )}
            </div>
        </>

    );
}

export default HomePopularPeople;
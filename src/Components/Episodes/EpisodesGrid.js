import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../ui/Spinner';




const EpisodesGrid = () => {
    const [episodes, setEpisodes] = useState({
        episodes: []
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad`)
            console.log(result.data)
            setEpisodes({ episodes: result.data })
            setIsLoading(false)
        }
        fetchItems()
    }, [])




    return (
        
        <>
            {isLoading ?
                <Spinner />
                :
                <section className="episodes">
                    {
                        episodes.episodes.map(item =>
                        (
                            <div key={item.episode_id}>{item.title}</div>
                        )
                        )
                    }
                </section>
            }
        </>
    )
};

export default EpisodesGrid;

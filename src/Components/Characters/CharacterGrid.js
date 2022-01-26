import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getCharacters } from '../../Actions';
import Search from '../ui/Search';
import Spinner from '../ui/Spinner';
import CharacterItem from './CharacterItem';



const CharacterGrid = () => {
    const [query,setQuery]=React.useState("")
    const[isLoading,setIsLoading]=React.useState(true)

const dispatch=useDispatch();
const characters=useSelector((state)=>state.characters)

    React.useEffect(() => {
        dispatch(getCharacters(query))
        setIsLoading(false)
    }, [query]);
    
    return <>
            <Search setQuery={setQuery}/>
        <div className='centertitle'> Character List </div>
        {isLoading ?
            <Spinner />
            :
            <section className='cards'>
                {
                    !characters.length ? <h1>El personaje {query.toUpperCase()} no  existe ,mano.</h1>:
                    characters.map(char =>
                    (
                        <Link key={char.char_id} to={`/characters/${char.char_id}`}>
                            <CharacterItem
                                key={char.char_id}
                                char={char}
                                id={char.char_id}
                            />
                        </Link>
                    )
                    )
                }
            </section>
        }
    </>


};

export default CharacterGrid;

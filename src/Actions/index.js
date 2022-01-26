export const GET_QUOTE = "GET_QUOTE";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTER_DETAILS = "GET_CHARACTERS_DETAILS";
export const GET_EPISODES = "GET_CHARACTERS";
export const GET_DEATHS = "GET_CHARACTERS";



export function getQuote(){
    return function (dispatch){
        return fetch("https://www.breakingbadapi.com/api/quote/random") 
        .then(res => res.json())
        .then(json => {
            dispatch({type: GET_QUOTE, payload: json[0]}) 
        })
    }
}
export function getCharacters(character){
    return function (dispatch){
        return fetch(`https://www.breakingbadapi.com/api/characters?name=${character}`) 
        .then(res => res.json())
        .then(json => {
            dispatch({type: GET_CHARACTERS, payload: json}) 
        })
    }
}
export function getCharacterDetails(id){
    return function (dispatch){
        return fetch(`https://www.breakingbadapi.com/api/characters/${id}`) 
        .then(res => res.json())
        .then(json => {
            dispatch({type: GET_CHARACTER_DETAILS, payload: json[0]}) 
        })
    }
}

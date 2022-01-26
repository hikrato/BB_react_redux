import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../../Actions';

const Home = ({getQuote,quote}) => {
    // const [quote,setQuote]=useState({
    //     quote:'', autor:""
    // })

    useEffect(() => {
        //action get quote

        // return fetch(`https://www.breakingbadapi.com/api/quote/random`)
        //     .then((response) =>response.json())
        //     .then(quote => {
        //         setQuote({quote: quote[0].quote, autor:quote[0].author})
        //     })
getQuote()
    }, []);


    return (
        <div className="Home">
            <p>{quote.quote} - {quote.author}</p>

        </div>
    )
};
function mapStateToProps(state){
    return{
        ...state
    }
}
const mapDispatchToProps={getQuote}
    
        


export default connect(mapStateToProps, mapDispatchToProps)(Home);

import axios from 'axios';
import React, { Component } from 'react';
import Spinner from '../ui/Spinner';

class Deaths extends Component {
    constructor(props) {
        super(props);
        this.state = {deaths:[]}
        
    }
    componentDidMount(){
        const fetchData=async()=>{
                const response=await axios(`https://www.breakingbadapi.com/api/deaths`)
                console.log(response.data)
                this.setState({
                    deaths:response.data
                })
                console.log(this.state)
        }
        fetchData()

        
    }

    render() {

        
        return <>
            <div className='centertitle'>Iconic Deaths</div>
            {
                !this.state.deaths? <Spinner></Spinner>:
                <section className="cards">
                    {
                        this.state.deaths.map(i=><div key={i.death_id}>{i.death}</div>)
                    }
                </section>

            }
        </>
            
        
    }
}

export default Deaths;


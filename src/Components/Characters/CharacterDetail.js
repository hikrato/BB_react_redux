import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCharacterDetails } from '../../Actions';
import Spinner from '../ui/Spinner';
import CharacterItem from './CharacterItem';

export class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    
    console.log(this.props);

  }
  componentDidMount(){
    const id= this.props.match.params.id
    this.props.getCharacterDetails(id)
    
  };
  
  render() {
    
    
    return (
      <div className="CharacterDetail">
    {this.props.isLoading ? <Spinner/>:

      <Link to="/characters" >
      <div>
        <h2>{this.props.character.name}</h2>
        <img className="CharacterDetail__Photo" src={this.props.character.img} alt="" />
        <p>{`Portrayed: ${this.props.character.portrayed} `}</p>
        <p>{`Birthday: ${this.props.character.birthday} `}</p>
        <p>{`Ocupations: ${this.props.character.occupation} `}</p>
      </div>
      </Link>
    

      
    }
    </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    character: state.character,
    isLoading: state.isLoading
  }
}
const mapDispatchToProps = {
getCharacterDetails
}



export default connect(mapStateToProps, mapDispatchToProps)( CharacterDetail);

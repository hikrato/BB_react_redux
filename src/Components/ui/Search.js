import React, { useState } from 'react';

const Search = (props) => {
    const [text, setText] =useState("")
    const onChange=(q)=>{
        setText(q)
        props.setQuery(q)
    }

    const handleChange=(e)=>{
        e.preventDefault()
        setText("")
    }

    return  (
        
                <section className="search">
                    
                        <form onSubmit={(e)=>handleChange(e)}>
                            <input
                            type="text"
                            className="form-control"
                            placeholder='Search Characters'
                            value={text}
                            onChange={(t)=>onChange(t.target.value)}
                            autoFocus
                            />
                        </form>
                </section>
    )
};

export default Search;

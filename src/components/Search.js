import React, {useState} from "react";
import {useSelector, useStore} from "react-redux";

function Search({isFetching, data, error, fetchFilm}) {

    const [title, setTitle] = useState("");
    let films = <></>;

    function handleButton(event) {
        event.preventDefault();
        fetchFilm(title);
    }

    if (isFetching) {
        return <p>Data is being fetched...</p>
    }

    if (error) {
        return <p>Error</p>
    }


    return (
        <>
            <div>
                <input type="text" placeholder="Type film title:" onChange={e => setTitle(e.target.value)}
                       value={title}/>
                <button onClick={event => handleButton(event)}>Search</button>
                {isFetching && <p>Data is being fetched...</p>}
                {error && <p>Error - {error}</p>}
            </div>
            <ul>
                {data && data.Search.map(el => {
                    return (
                        <div>
                            <h2>{el.Title} ({el.Year})</h2>
                        </div>
                    )
                })}
            </ul>
        </>
    )
}

export default Search;
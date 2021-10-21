import {fetchData} from "../redux/actions/apiFetch";
import {useDispatch, useSelector} from "react-redux";

export default function Basic() {
    const dispatch = useDispatch();
    const state = useSelector(globalState => globalState.apiReducer);
    console.log(state)


    const getData = () => {
        dispatch(fetchData("t=Man+on+Fire"));
    };

    if (state.error || state.isFetching) {
        return state.isFetching ? <p>fetching...</p> : state.error.TypeError.message;
    }

    return (
        <div>
            <button onClick={getData}>Get quote</button>
            <br/>
            <hr/>
            {state.data.Title}
            <br/>
            {state.data.Director}
            <br/>
            <hr/>
        </div>
    );

}
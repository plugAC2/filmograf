import {useDispatch, useSelector} from "react-redux";

export default function Basic() {

    //Add a random film generator
    //const dispatch = useDispatch();
    const state = useSelector(globalState => globalState.apiReducer);
    console.log(state)

    return (
        <div>
            <p>At this page you can search for films by title and read some details about them.</p>
        </div>
    );

}
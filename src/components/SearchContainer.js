import React from "react";
import Search from "./Search";
import {fetchData} from "../redux/actions/apiFetch";
import {connect} from "react-redux";

export default function SearchContainer() {

    const mapStateToProps = state =>{
        return {
            isFetching: state.apiReducer.isFetching,
            data: state.apiReducer.data,
            error: state.apiReducer.error
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            fetchFilm: (title) => {
                dispatch(fetchData("s=" + title))
            }
        }
    }

    const Container = connect(mapStateToProps, mapDispatchToProps)(Search)

    return <Container/>
}
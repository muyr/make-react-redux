import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './containers/Header'
import Content from './containers/Content'
import './index.css';
import {Provider} from './react-redux'


function createStore(reducer) {
    let listeners = []
    let state = null

    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }

    const subscribe = (listener) => {
        listeners.push(listener)
    }

    dispatch({})

    return {getState, dispatch, subscribe}
}

const themeReducer = (state, action) => {
    if (!state) {
        return {
            themeColor: 'red'
        }
    }

    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                themeColor: action.themeColor
            }
        default:
            return state

    }
}

const store = createStore(themeReducer)

class Index extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>,
    document.getElementById('root')
)

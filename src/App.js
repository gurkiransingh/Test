import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route, Router, Switch, Redirect } from 'react-router-dom';

import './styles/main.css'

import CSSTask from './CSSTask';
import List from './List.js';
import ListDetail from './ListDetail';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: null,
            pathname: '',
            bookmarkedId: null
          };

        this.getPathname = this.getPathname.bind(this);
        this.clearBookmarkId = this.clearBookmarkId.bind(this);
        this.sortList = this.sortList.bind(this);
    }

    componentDidMount() {
        if(window.location.pathname) {
            this.setState({
                pathname: window.location.pathname
            })
        }

        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((res) => {
            let sortedList = this.sortList(res);
            this.setState({
                items: sortedList,
                isLoaded: true,
            }, () => {
                let id = this.getPathname(this.state.pathname);
                if(id !== null) {
                    this.setState({
                        bookmarkedId: id
                    })
                } else {
                    this.setState({
                        bookmarkedId: null
                    })
                }
            })
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            })
        }
    )
    }

    sortList(res) {
        let users = res.sort(function(a,b) {
            if(a.name > b.name) { return -1}
            if(a.name < b.name) { return 1}
            return 0;
        })
        return users;
    }

    getPathname(path) {
        let id = Number(path.replace(/\D/g, ""));
        if (id < 0 || id > this.state.items.length || typeof(id) === id ==='') {
           return null
        } else {
            return id
        }
    }

    clearBookmarkId() {
        this.setState({
            bookmarkedId: null
        })
    }

    render() {
        return (
            <div className='container'>
                <BrowserRouter>
                    <Switch>
                        <Redirect exact from="/" to="/list" />
                        <Route 
                            exact
                            path='/css'
                            component={CSSTask}
                        />
                        <Route 
                            exact
                            path='/list'
                            component={props => <List {...props} clearBookmarkId={this.clearBookmarkId} items={this.state.items} error={this.state.error} isLoaded={this.state.isLoaded} />}
                        />
                        <Route 
                            path='/list/:id'
                            component={props => <ListDetail { ...props} items={this.state.items} bookmarkedId={this.state.bookmarkedId}/> }
                        />
                    </Switch>
                </BrowserRouter>

            </div>
        )
    }
}

render(<App />, document.getElementById("root"));
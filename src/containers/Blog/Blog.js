import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() =>  import('./NewPost/NewPost'));

class Blog extends Component {

    state = {
        auth: true
    };

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <li><NavLink to="/posts/" exact activeClassName="active">Posts</NavLink></li>
                        <li><NavLink to={{
                            pathname: '/new-post',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}>New Post</NavLink></li>
                    </nav>
                </header>
                <Switch>
                    { this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null }
                    <Route path="/posts" component={Posts} />
                    {/*<Redirect from="/" to="/posts" />*/}
                    <Route render={() => <h1>Not found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {
        
        return (
            <div className="Blog">
            <header>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to={{
                        pathname: this.props.match.url+'/new-post',
                        hash: '#submit',
                        search: '?quick-submit=true'
                    }}>New Post</Link></li>
                </nav>
            </header>
            <Route path="/" exact component={Posts} />
            <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;
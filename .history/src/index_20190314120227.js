import React, { Component } from 'react';
import { render } from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById('root');
class Post extends Component {
    render() {
        // create DOM element
        return React.createElement (
            'div',
            {
                className: 'post'
            },
            React.createElement(
                'h2',
                {
                    className: 'postAuthor',
                    id: this.props.id
                },
                this.props.user,
                React.createElement(
                    'span',
                    {
                        className: 'postBody'
                    },
                    this.props.content
                )
            )
        );
    }
}
// establish constraint
Post.propTypes = {
    user: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

// add the post
const App = React.createElement(Post, {
    id: 1, 
    content: 'Said: This is a post',
    user: 'mark'
});

render(App, node);

import React, { Component } from 'react';
import { render } from "react-dom";
import Protypes from "prop-types";
import "../../App";

const node = document.getElementById('root');
class Post extends Component {
    render() {
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

Post.propTypes = {
    user: PropTypes.string.isRequired,
    content: PropTypes.string.isRequire,
    id: PropTypes.number.isRequired
};

const App = React.createElement(Post, {
    id: 1, 
    content: 'Said: This is a post',
    user: 'mark'
});

render(App, node);

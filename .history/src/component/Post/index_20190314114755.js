import React, { Component } from 'react';
import { render } from "react-dom";
import Protypes from "prop-types";

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
        )
    }
}
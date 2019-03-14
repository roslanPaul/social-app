// establish constraint
Post.propTypes = {
    user: PropTypes.string.isRequired,
    content: PropTypes.string.isRequire,
    id: PropTypes.number.isRequired
};

// add the post
const App = React.createElement(Post, {
    id: 1, 
    content: 'Said: This is a post',
    user: 'mark'
});

render(App, node);
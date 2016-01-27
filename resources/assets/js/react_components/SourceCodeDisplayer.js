var React = require('react');
var ReactDOM = require('react-dom');
var hljs = require('highlight.js');

var SourceCodeDisplayer = React.createClass({
    getInitialState() {
        return {
            code: `#include <iostream>
using namespace std;
int main ()
{
    cout << "Hello World!";
    cout << "I'm a C++ program";
    
    return 0;
}`
        };
    },

    highlightCode() {
        var current = ReactDOM.findDOMNode(this);
        hljs.highlightBlock(current);
    },

    componentDidMount() {
        this.highlightCode();
    },

    componentDidUpdate() {
        this.highlightCode();
    },

    render() {
        return (
            <pre>
                <code className="hljs cpp">
                    {this.props.code != "" ? this.props.code : this.state.code}
                </code>
            </pre>
        );
    }
});

export default SourceCodeDisplayer;
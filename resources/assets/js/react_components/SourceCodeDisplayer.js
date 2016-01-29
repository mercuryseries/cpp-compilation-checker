var React = require('react');
var ReactDOM = require('react-dom');
var hljs = require('highlight.js');

export default React.createClass({

    propTypes: {
        code: React.PropTypes.string.isRequired
    },

    getInitialState() {
        return {
            code: `#include <iostream>
using namespace std;

int main ()
{
    cout << "Hello World from IFT-3001!" << endl;
    cout << "I'm a C++ program built at ULAVAL." << endl;
    
    return 0;
}`
        };      
    },

    highlightCode() {
        var current = ReactDOM.findDOMNode(this);
        hljs.highlightBlock(current);

        $('code.line-numbers').each(function(){
            // Check ihighlight js has already run and not already added line numbers
            if ($(this).hasClass('hljs') && ($(this).html().indexOf('class="line-number') < 1)) {
              // Get the content of the code block.
              var content = $(this).html();
              // Split the content on new lines "\n".
              content = content.split("\n");
              // Re-join the content with line number spans after the new line.
              content = content.join("\n<span class='line-number'> </span>");
              // Prefix with a line number for the first line.
              content = '<span class="line-number"> </span>' + content;
              // Replace the content of the code block with the new content.
              $(this).html(content);
            }
        });
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
                <code className="hljs cpp line-numbers sm-height" id="source-code-displayer">
                    {this.props.code ? this.props.code : this.state.code}
                </code>
            </pre>
        );
    }
});
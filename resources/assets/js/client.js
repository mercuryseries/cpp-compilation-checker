var React = require('react');
var ReactDOM = require('react-dom');

import SourceCodeDisplayer from './react_components/SourceCodeDisplayer';
import SourceCodeForm from './react_components/SourceCodeForm';

var App = React.createClass({

    getInitialState() {
        return {
            code: ''
        };
    },

    updateCode(code) {
        this.setState({code});
    },

    render() {
        return (
            <div>
                <h1 className="lead text-center">
                    IFT-3001 &middot; C++ Code Compilation Checker &middot; Université LAVAL
                </h1>
                
                <div className="row">
                    <div className="col-md-6">
                        <SourceCodeForm onUpdate={this.updateCode} />
                    </div>

                    <div className="col-md-6 md-space-top">
                        <SourceCodeDisplayer code={this.state.code} />
                    </div>
                </div>
            </div>
        );
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
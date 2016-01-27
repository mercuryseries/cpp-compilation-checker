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

    componentDidMount() {
        $('#code').on('scroll', function () {
            $('#source-code-displayer').scrollTop($(this).scrollTop());
        });
    },


    updateCode(code) {
        this.setState({code});
    },

    render() {
        return (
            <div>
                <h1 className="lead text-center alert alert-info">
                    IFT-3001 &middot; C++ Code Build Checker &middot; Université LAVAL
                </h1>
                
                <div className="row">
                    <div className="col-md-6">
                        <SourceCodeForm onUpdate={this.updateCode} />
                    </div>

                    <div className="col-md-6 md-margin-top">
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
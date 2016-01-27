var React = require('react');
var ReactDOM = require('react-dom');

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

var SourceCodeForm = React.createClass({
    getInitialState() {
        return {
            code: ''
        };
    },

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.code).focus();
    },

    launchBuildProcess(e) {
        e.preventDefault();
        $.post('/compile', function(result){
            if(result == ''){
                flashy('Build process ended without any issues...', '#');
            } else {
                var buildErrorsModal = $('#buildErrorsModal');
                buildErrorsModal.find('#build-errors').html(result.replace(/\n/g,"<br>"));
                buildErrorsModal.modal('show');
            }
        });
    },

    onChange(e) {
        this.setState({ code: e.target.value });
        this.props.onUpdate(this.state.code);
    },

    render() {
        return (
            <form onSubmit={this.launchBuildProcess}>
                <div className="form-group">
                    <label className="control-label" htmlFor="code">Please enter your beautiful C++ Code down below:</label>
                    <textarea value={this.state.code} onKeyUp={this.onChange} onChange={this.onChange} rows="20" id="code" ref="code" className="form-control"></textarea>
                </div>

                <input type="submit" value="Launch the Build Process" className="btn btn-primary btn-lg btn-block" />
            </form>
        );
    }
});

export default SourceCodeForm;
var React = require('react');

var SourceCodeForm = React.createClass({
    getInitialState() {
        return {
            code: ''
        };
    },

    launchBuildProcess(e) {
        e.preventDefault();
        flashy('Build process ended without any issues...', '#');
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
                    <textarea value={this.state.code} onKeyUp={this.onChange} onChange={this.onChange} rows="20" className="form-control"></textarea>
                </div>

                <input type="submit" value="Launch the Build Process" className="btn btn-primary btn-lg btn-block" />
            </form>
        );
    }
});

export default SourceCodeForm;
var React = require('react');

var SourceCodeForm = React.createClass({
    getInitialState() {
        return {
            code: ''
        };
    },

    onChange(e) {
        this.setState({ code: e.target.value });
        this.props.onUpdate(this.state.code);
    },

    render() {
        return (
            <form>
                <div className="form-group">
                    <label className="control-label" htmlFor="code">Veuillez entrer votre code C++ :</label>
                    <textarea value={this.state.code} onKeyUp={this.onChange} onChange={this.onChange} rows="20" className="form-control"></textarea>
                </div>

                <input type="submit" value="Lancer la compilation" className="btn btn-primary btn-lg btn-block" />
            </form>
        );
    }
});

export default SourceCodeForm;
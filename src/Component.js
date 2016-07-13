import { Component, PropTypes } from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import inStalk from 'in-stalk';


class Lazify extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    componentDidMount() {
        if(this.placeholder) {
            this.placeholder.addEventListener('in-stalk.in', this.convert.bind(this));
            inStalk.add( this.placeholder );
        }
    }

    componentWillUnmount() {
        if(this.placeholder) {
            inStalk.remove(this.placeholder);
        }
    }

    convert() {
        this.setState({ isLoaded: true });
        inStalk.remove(this.placeholder);
        if(this.props.onLoad) {
            this.props.onLoad();
        }
    }

    render() {
        return this.state.isLoaded
            ? this.props.children
            : (
                <span ref={ref=>this.placeholder=ref}>
                    <noscript dangerouslySetInnerHTML={{__html: `<div>${renderToStaticMarkup(this.props.children)}</div>`}}/>
                    <img
                        className="placeholder"
                        src="data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH/C1hNUCBEYXRhWE1QRT94cGFja2V0IDE2MDZCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZERDQ1MzVGMkZGMTExRTFBQTE4OTE5ODk4MQAh+QQFAAAAACwAAAAAAQABAEACAkQBADs="
                    />
                </span>
            )
    }


}

Lazify.propTypes = {
    children: PropTypes.element,
    onLoad: PropTypes.func
};


export default Lazify;

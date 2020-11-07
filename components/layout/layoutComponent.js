import React, { Component } from 'react';
import { Header, Meta } from './index';

class layoutComponent extends Component {
    render() {
        return (
            <>
                <Header />
                <Meta />
                <div className="main-container" style={{ width: "100%" }}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default layoutComponent;
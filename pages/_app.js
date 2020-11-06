import App from 'next/app';
import React from 'react';
import Layout from '../components/layout/layoutComponent';

class _app extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        );
    }
}

export default _app;
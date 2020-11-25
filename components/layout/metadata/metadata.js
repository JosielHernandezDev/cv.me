import React, { Component } from 'react';
import Head from 'next/head';


export default class Metadata extends Component {
    render() {
                
        return (
            <Head>
                <title>{'Carlos Josiel Hernandez Sanchez'}</title>
                <meta name="title" content={'Carlos Josiel Hernandez Sanchez'} />
                <meta name="description" content={'CV ME'} />
                <meta property="og:title" content={'Carlos Josiel Hernandez Sanchez'} />
                <meta property="og:description" content={'CV ME'}  />
                <meta name="twitter:title" content={'Carlos Josiel Hernandez Sanchez'} />
                <meta name="twitter:description" content={'CV ME'} />
            </Head>
        )
    }
}

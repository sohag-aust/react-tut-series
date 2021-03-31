import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Hero from './Hero';

class ErrorHandle extends Component {

    render() {
        return(
            <div>
                <ErrorBoundary>
                    <Hero name='Batman' />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Hero name='Superman'/>
                </ErrorBoundary>

                <ErrorBoundary>
                    <Hero name='Joker'/>
                </ErrorBoundary>
            </div>
        );
    }
    
}

export default ErrorHandle;

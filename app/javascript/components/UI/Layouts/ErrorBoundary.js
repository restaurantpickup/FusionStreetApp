import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {hasError: false};
    }
    static getDerivedStateFromError(error) {
        console.error(error);
        return {hasError: true}
    }
    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo)
    }
    render() {
        const {hasError} = this.state;
        const {children} = this.props;
        if(hasError) {
            return (
                <h1>
                    Something went wrong.
                </h1>
            )
        } 
        return children  
    }
}
export default ErrorBoundary

import React from 'react'
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary';

const StyledContent = styled.div`
flex-basis: 300px;
    flex: 1;
    padding: 2rem;
    background-color: #F9FBFC;
    overflow: hidding;
`
export default function Content(props) {
    const {children} = props
    return (
        <ErrorBoundary>
            <StyledContent>{children}</StyledContent>
        </ErrorBoundary>
    )
}

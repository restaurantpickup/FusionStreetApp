import React from 'react'
import styled from 'styled-components'
import ErrorBoundary from './ErrorBoundary';

const Box = styled.div`
    flex-basis: 600px;
    flex-grow: 1;
    padding: 1rem;
    background-color: white;
    margin-bottom: 1rem;
    color: #005F7F;
    border-radius: 3px;
`;
const Top = styled.div`
    display: flex;
    align-items: center:
    justify-content: space-between;
    color: #EC7700;
    padding: .5rem;
`;

const Title = styled.h6`
    display: block;
    margin: 1rem 0 0 0;
    color:  #EC7700;
    border-bottom: solid 1px #EC7700;

`;

const Cost = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    color: #EC7700;
`;

export default function InvoiceBox(props) {
    const {title,cost,children} = props;
    const hasChildren = !!(React.Children.toArray(children).length);
    return (

        <ErrorBoundary>
             <Box hasChildren={hasChildren}>
             {(title || cost) && (
                    <Top hasChildren={hasChildren}>
                        {title && <Title>{title}</Title>}
                        {cost && <Cost>{cost}</Cost>}
                    </Top>
                )}
                {children}
        </Box>

        </ErrorBoundary>
       
    )
}

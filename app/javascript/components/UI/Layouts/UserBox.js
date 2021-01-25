import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary';


const Box = styled.div`
    flex-basis: 600px;
    flex-grow: 1;
    padding: 1rem;
    background-color: white;
    margin: 0 1rem 0;
    color: #005F7F;
    border-radius: 3px;
    border: solid 1px #005F7F;  
`;
const Top = styled.div`
    display: flex;
    align-items: center:
    justify-content: space-between;
    color: #005F7F;
`;

const Bottom = styled.div`
    margin: 2rem 0 0 0;
    display: block;
    align-items: center:
    justify-content: space-between;
    color: #005F7F;
    padding: ${(props) => (props.hasChildren ? '0 0 0.75rem' : '0')};
    border-bottom: ${(props) => (props.hasChildren ? 'grey' : 'none')};
    margin-bottom: ${(props) => (props.hasChildren ? '1rem' : '0')};
`;

const Title = styled.h2`
    display: block;
    margin: 0 !important;
    padding: 0 !important;
    line-height: 1rem;
    color:  #005F7F;
`;

const Footer = styled.h2`
    display: block;
    margin: 0 !important;
    padding: 0 !important;
    line-height: 1rem;
    color:  #005F7F; 
  
`;


const Actions = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    color: #005F7F;
`;


export default function Default(props) {
    const {title, actions, footer, children} = props;
    const hasChildren = !!(React.Children.toArray(children).length);
    return (
        <ErrorBoundary>
            <Box hasChildren={hasChildren}>
                {(title || actions) && (
                    <Top hasChildren={hasChildren}>
                        {title && <Title>{title}</Title>}
                        {actions && <Actions>{actions}</Actions>}
                    </Top>
                )}
               
                {children}
                
                
                {(footer) && (
                    <Bottom hasChildren={hasChildren}>
                        {footer && <Footer>{footer}</Footer>}
                    </Bottom>
                )}
            </Box>   
        </ErrorBoundary>
    )
}

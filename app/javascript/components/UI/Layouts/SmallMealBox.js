import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary';

const Box = styled.div`
    flex-basis: 1px;
    flex-grow: 1;
    padding: 1rem;
    border: solid 1px #005F7F;
    background: white;
    color: #005F7F;
    border-radius: 3px;
    @media all and (min-width: 1200px){
       padding: .5rem;
      }
`;
const Top = styled.div`
    display: flex;
    align-items: center:
    justify-content: space-between;
    color: #005F7F;
    padding: ${(props) => (props.hasChildren ? '0 0 0 0' : '0')};
    border-bottom: ${(props) => (props.hasChildren ? 'grey' : 'none')};
    margin-bottom: ${(props) => (props.hasChildren ? '1rem' : '0')};
`;

const Title = styled.h2`
    display: block;
    margin: 0 !important;
    padding: 0 !important;
    line-height: 1rem;
    color:  #EC7700;
`;


const Actions = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    color: #005F7F;
`;
const Prompt = styled.div`
display: block;
margin: 8rem 0 -8rem 0;
padding: 0 !important;
line-height: 1rem;
color:  #EC7700;
`;


export default function Default(props) {
    const {title, actions, prompt, children} = props;
    const hasChildren = !!(React.Children.toArray(children).length);
    return (
        <ErrorBoundary>
            <Box hasChildren={hasChildren}>
                {(title || actions || prompt) && (
                    <Top hasChildren={hasChildren}>
                        {title && <Title>{title}</Title>}
                        {prompt && <Prompt>{prompt}</Prompt>}
                        {actions && <Actions>{actions}</Actions>}
                    </Top>
                )}
                {children}
            </Box>   
        </ErrorBoundary>
    )
}

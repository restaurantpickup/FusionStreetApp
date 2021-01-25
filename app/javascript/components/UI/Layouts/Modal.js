import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary';

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
padding: 4rem;
background-color: rgba(0,0,0, 0.7);
position: absolute;
top: 0;
// .modal-content {
// padding: 2rem;
// background: white;
// flex-basis: 400px;
// flex-grow: .5;
// max-height: 50%;
// }
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
                <div className={'modal-content'}>
                {children}
                </div>
            </Box>   
        </ErrorBoundary>
    )
}

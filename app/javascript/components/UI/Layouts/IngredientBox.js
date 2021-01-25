import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary';

const Box = styled.div`
    flex-basis: 800px;
    flex-grow: 1;
    padding: 2rem;
    background-color: white;
    margin-top: 1.25rem;
    margin-bottom: .5rem;
    color: #EC7700;
    font-size: 1.5rem;
    @media all and (min-width: 1200px){
        font-size: .75rem;
        padding: .5rem;
        flex-basis: 400px;
        margin-bottom: .5rem;
      }
    
 
`;
const Top = styled.div`
    margin-top: 2rem;
    margin-left: 1rem;
    display: flex;
    align-items: center:
    justify-content: space-between;
    color: #EC7700;


`;
const Main = styled.div`
    display: flex;
    align-items: center:
    justify-content: space-between;
    color: #005F7F;
    padding: ${(props) => (props.hasChildren ? '0 0 0.75rem' : '0')};
    border-bottom: ${(props) => (props.hasChildren ? 'grey' : 'none')};
    margin: ${(props) => (props.hasChildren ? '1rem' : '1rem 0 0 0')};
`;

const Title = styled.h2`
display: block;
margin: 1rem 0 0 0;
color:  #005F7F;
border-bottom: solid 1px #EC7700;
padding: .5rem;



`;

const Actions = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    color: #EC7700;
    font-size: 2.5rem;
    margin: 0 3rem -1.5rem 0;
    font-size: 1.5rem;
    @media all and (min-width: 1200px){
        font-size: 1rem;
      }
   

`;
const Left = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    color: #EC7700;
`;
const Center = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    color: #005F7F;
`;
const Right = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    color: #005F7F;
`;

export default function Default(props) {
    const {title, actions, left, center, right, children} = props;
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
                {(left || center || right) && (
                    <Main hasChildren={hasChildren}>
                        {left && <Left>{left}</Left>}
                        {center && <Center>{center}</Center>}
                        {right && <Right>{right}</Right>}
                    </Main>
                )}  
                {children}
            </Box>   
        </ErrorBoundary>
    )
}

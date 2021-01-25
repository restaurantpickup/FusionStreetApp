import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: white;
    margin: 0 3rem 2rem 3rem;
    font-size: 2rem;
    @media all and (min-width: 1200px){
        font-size: 1rem;
    }
`;
const Title = styled.div`
   color: #EC7700; 
   text-transform: uppercase;
 
`;
const Group = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    color: blue;
`;
const View = styled.div`
    margin-left: 1rem;
    flex-grow: .08;
`;
const Prompt = styled.div`
    margin-left: 1rem;
    flex-grow: .08;
`;
const Action = styled.div`
color: #EC7700; 
font-size: 1.5rem;
@media all and (min-width: 1200px){
    font-size: 1.5rem;
}
`;
export default function PateTitle(props) {
    const {
        title, action, view, prompt
    } = props;
    return (
        <Wrapper>
            <Title>{title}</Title>
            <View>{view}</View>
            <Prompt>{prompt}</Prompt>
            <Group>
                <Action>{action}</Action>
            </Group>
        </Wrapper>
    )
}

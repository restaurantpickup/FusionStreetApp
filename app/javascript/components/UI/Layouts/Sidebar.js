import React from 'react'
import styled from 'styled-components';
import { FaUserAlt } from "react-icons/fa"


const Aside = styled.aside`
    flex-basis: 300px;
    flex-grow: 1;
    max-height: 100%;
    max-width: 10%;
    background-color: white;
    overflow-y: auto;
    border-right: 1px solid  #005F7F;
`;
const Header = styled.h3`
    color: #005F7F;
    border-bottom: solid 1px  #005F7F;
    padding: 1rem;
    text-transform: uppercase:
    margin-bottom: 0 !important;
`;

const Icon = styled.div`
    display: inline-block;
    margin-right: 0.5rem;
`;

const Container = styled.div`
    diplay: flex;
` 



export default function Sidebar(props) {
    const {title, children} = props;
    return (
       
            <Container>
                <Aside>
                    <Header>
                        <Icon>
                        <FaUserAlt color={'#005F7F'}/>
                        </Icon>
                        {title}
                    </Header>
                        {children}
                </Aside>

            </Container>
       
       
    )
}

import React, {useContext} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import {GiFoodTruck } from "react-icons/gi";
import {PickupContext} from '../App'
import {UserContext} from '../App'
import {
    FlexEnd,
    PickupIcon,
    PickupCount,
    PickupContainer,
    Block} from './UI'

const Wrapper = styled.div`
    width: 100%;
    padding: 2rem 0;
    background: white;
    border-top: solid 1px #005F7F;
    border-bottom: solid 1px #005F7F;
    @media all and (min-width: 1200px){
        padding: 1rem 0;
      }
    
`;

const FTIcon = styled(GiFoodTruck)`
    color: #E80000;
    font-size: 9rem;
    align-self: center;
    margin: 1rem 0 0 0;
    @media all and (min-width: 1200px){
        font-size: 4.5rem;
    margin: .5rem 0 0 0;
      }
  
`
const FTContainer = styled(Link)`
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'overlap';
    text-decoration: none;
    color: #E80000;
    text-decoration: none;
    margin-right: 3rem;
    @media all and (min-width: 1200px){
        margin-right: 1.5rem;
      }

`

export default function Footer() {
  const [pickup, setPickup] = useContext(PickupContext);



    return (
    <Wrapper>
        <FlexEnd>
        <PickupContainer to={'/bag'}><PickupIcon/><PickupCount>{pickup.length}</PickupCount> <Block>Pick-up</Block> </PickupContainer>
        <FTContainer to={'/meals'}><FTIcon/><Block>Home</Block></FTContainer>               
        </FlexEnd>
    </Wrapper>
    )
}



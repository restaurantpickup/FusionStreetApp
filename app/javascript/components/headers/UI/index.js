import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import {CgWebsite } from "react-icons/cg";
import {FaHome} from "react-icons/fa";
import {RiShoppingBagLine, RiUserLine} from "react-icons/ri";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 0;
    background: white;
    border-top: solid 1px #005F7F;
    border-bottom: solid 1px #005F7F;
    @media all and (min-width: 1200px){
        padding: 1rem 0;

    }
`;
const A = styled.a`
  cursor: pointer;
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#005F7F" : "#005F7F"};
  color: ${props => props.primary ? "white" : "white"};
  text-transform: uppercase;
  font-size: 2rem;
  padding: 0.25rem 1em;
  border: .05rem solid #005470;
  border-radius: 3px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: white;
    background: #005470;
  }
  @media all and (min-width: 1200px){
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.125rem .5em;

  }
`;
const CompanyLogo = styled.div`
    width: 75px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    
    img {

      
        height: 75px;
        width: 75px;
        border-radius: 100%;
        border: 1px solid #efefef;
        @media all and (min-width: 1200px){
        
        
          }
    }
`

const FlexEnd = styled.div `
    display: flex;
    justify-content: flex-end;
`;
const FlexStart = styled.div `
    display: flex;
    justify-content: flex-start;
`;
const UserIcon = styled(CgWebsite)`
    color: #005F7F;
    font-size: 8rem;
    align-self: center;
    margin: .75rem 0 0 0;
    @media all and (min-width: 1200px){
        font-size: 4rem;
        align-self: center;
        margin: .375rem 0 0 0;
      }
`
const FTIcon = styled(FaHome)`
    color: #E80000;
    font-size: 9rem;
    align-self: center;
    margin: 1rem 0 0 0;
    @media all and (min-width: 1200px){
        font-size: 4.5rem;
        margin: .5rem 0 0 0;
      }
`
const FTIconRight = styled(CgWebsite)`
    color: #E80000;
    font-size: 9rem;
    align-self: center;
    margin: 0 1rem 2rem 0;
    @media all and (min-width: 1200px){
        font-size: 4.5rem;
    margin: 0 .5rem 1rem 0;
      }
`
const PickupIcon = styled(RiShoppingBagLine)`
    color: #EC7700;
    font-size: 9rem;
    grid-area: overlap;
    margin: auto;
    align-self: center;
    justify-self: center;
    @media all and (min-width: 1200px){
        font-size: 4.5rem;
    
      }
`
const PickupCount = styled.div`
    color: #EC7700;
    text-decoration: none;
    font-size: 3.5rem;
    margin-top: 2.25rem;
    grid-area: overlap;
    align-self: center;
    justify-self: center;
    @media all and (min-width: 1200px){
        font-size: 1.75rem;
        margin-top: 1.25rem;
    
      }
 
`
const FTContainerRight = styled(Link)`
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

const PickupContainer = styled(Link)`
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'overlap';
    text-decoration: none;
    margin-right: 2rem;
    margin-top: 1rem;
    color: #EC7700;
    @media all and (min-width: 1200px){
        margin-right: 1rem;
        margin-top: .5rem
    
      }

`
const UserContainer = styled.a`
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'overlap';
    text-decoration: none;
    margin-right: 3rem;
    margin-top: 1.75rem;
    color: #005F7F;
    @media all and (min-width: 1200px){
        margin-right: 1.5rem;
        margin-top: .75rem;
    
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
    margin-left: 3rem;
    @media all and (min-width: 1200px){
        margin-left: 1.5rem;
    
      }

`


const Block = styled.div`
    font-size: 2rem;
    margin: auto;
    align-self: center;
    justify-self: center;
    @media all and (min-width: 1200px){
        font-size: 1rem;
    
      }
    
`





export {
Wrapper,
FlexEnd,
FlexStart,
UserIcon,
FTIcon,
PickupIcon,
PickupCount,
PickupContainer,
UserContainer,
FTContainer,
Block,
FTContainerRight,
FTIconRight,
A,
CompanyLogo
}
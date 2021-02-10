
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { FaLeaf, FaTimesCircle, FaFileInvoiceDollar, FaEdit, FaCheckCircle, FaTrash } from 'react-icons/fa';
import {RiShoppingBagLine } from "react-icons/ri";
import {MdRestaurantMenu} from "react-icons/md";
import {AiOutlineInfoCircle } from "react-icons/ai";


const SmallGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    width: 100%;
    margin: 2rem 0 0 0;
    border-radius: %100;
    @media all and (min-width: 1200px){
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        width: 100%;
        margin: 1rem 0 0 0;
      }
    
`

const MainGrid = styled.div`
  
    @media all and (min-width: 1200px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        width: 100%;
        margin: 1rem 0 0 0;
      }
    
`
const Logo = styled.img`
    max-width: 600px;
    margin-right: 1rem; 
`
const LogoSmall = styled.img`
    max-width: 150px;  
`
const ImageLogo = styled.img`
    max-width: 75px;
    margin-right: 1rem;
    border-radius: 100%; 
`


const LogoHeader = styled.img`
    max-width: 300px;
    margin-bottom: 1rem; 
`
const Wrapper = styled.div`
  width: 100%;
`;
const Image = styled.img`
max-width: 1200px;
border-radius: 100%;
   
`
const LinkButton = styled(Link)`
cursor: pointer;
color: #EC7700;
display: flex;
flex-grow: 1;
justify-content: flex-end;
align-items: center;
background: ${props => props.primary ? "white" : "#white"};
color: ${props => props.primary ? "white" : "#005F7F"};
text-transform: uppercase;
text-decoration: none;
margin: 0 0 0 0;
`;
const FormButton = styled.div`
cursor: pointer;
color: #EC7700;
display: flex;
flex-grow: 1;
justify-content: flex-end;
align-items: center;
background: ${props => props.primary ? "white" : "#white"};
color: ${props => props.primary ? "white" : "#005F7F"};
text-transform: uppercase;
text-decoration: none;
margin: 0 0 0 0;
`;

const PickupIcon = styled(RiShoppingBagLine)`
    color: #EC7700;
    font-size: 12rem;
    grid-area: overlap;
    margin: auto;
    align-self: center;
    justify-self: center;
    
`
const RestaurantIconSmall = styled(MdRestaurantMenu)`
    color: #EC7700;
    font-size: 3rem;
    margin: 0 0 -.36rem 0;
    @media all and (min-width: 1200px){
        font-size: 1.5rem;
        margin: 0 0 -.15rem 0;
      }
    
`
const PickupCount = styled.div`
  color: #EC7700;
  text-decoration: none;
  font-size: 6rem;
  margin-top: 3rem;
  grid-area: overlap;
  align-self: center;
  justify-self: center;
`
const PickupContainer = styled.div`
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'overlap';
    text-decoration: none;
`
const PickupMain = styled.div`
    display: inline-block;
    align-items: center;
    color: blue;
    margin: 0 0 0 0;
`

const IngredientGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 48px;
    width: 100%;
    padding: 5px;
    margin: 2rem 0 0 2rem;
`
const Button = styled.button`
  cursor: pointer;
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#005F7F" : "#EC7700"};
  color: ${props => props.primary ? "white" : "white"};
  text-transform: uppercase;
  font-size: 3rem;
  padding: 0.25rem 1em;
  border: .05rem solid #EC7700;
  border-radius: 3px;
  &:hover {
    color: white;
    background: #EC7700;
  }
`;

const UserLogo = styled.div`
    width: 600px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
   
    img {
        height: 600px;
        width: 600px;
        border-radius: 100%;
        border: 1px solid #efefef;
    }
`
const Container = styled.div`
    max-width: 200px;
    margin: 12rem auto;
    text-align: center;
`
const PickupCountSmall = styled.div`
    color: #EC7700;
    text-decoration: none;
    font-size: 3rem;
    margin-top: 1.5rem;
    grid-area: overlap;
    align-self: center;
    justify-self: center;
`
const PickupContainerSmall = styled.div`
    margin-bottom: 0;
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'overlap';
    text-decoration: none;
`
const Block = styled.div`
    color: #EC7700;
    font-size: 1rem;
    margin: auto;
    align-self: center;
    justify-self: center;
`
const CartButton = styled.button`
    cursor: pointer;
    background: ${props => props.primary ? "#005F7F" : "#005F7F"};
    color: ${props => props.primary ? "white" : "white"};
    text-transform: uppercase;
    margin: .5rem .5rem -.5rem .5rem;
    font-size: 3rem;
    border: none;
    text-decoration: none;
    @media all and (min-width: 1200px){
        font-size: 1.5rem;
        margin: .25rem .25rem -.25rem .25rem;
       
      }
`;
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding: .5rem;
    border: .05rem solid #005F7F;
    border-radius: 3px;
    background: #005F7F;
    margin-right: .5rem;
  
`
const TimesIcon = styled(FaTimesCircle)`
    color: #005F7F;
    font-size: 6rem; 
   margin: 1.5rem 1.5rem 9rem 0;
`
const EditIcon = styled(FaEdit)`
    color: #005F7F;
    font-size: 3rem;
    margin: 0 0 -.25rem 0; 
    @media all and (min-width: 1200px){
        font-size: 1.5rem;
        margin: 0 0 -.125rem 0;
      }
`

const TrashIcon = styled(FaTrash)`
    color: #E80000;
    font-size: 2.5rem;
    margin: 0 0 -.25rem 0; 
    @media all and (min-width: 1200px){
        font-size: 1.5rem;
        margin: 0 0 -.125rem 0;
      }
`
const InfoIcon = styled(AiOutlineInfoCircle)`
    color: #005F7F;
    font-size: 2rem;
    margin: 0 0 -.25rem 0;  
`
const RestaurantIcon = styled(MdRestaurantMenu)`
    color: #EC7700;
    font-size: 3rem;
    margin: 0 0 -.25rem 0;  
    @media all and (min-width: 1200px){
        font-size: 1.5rem;
        margin: 0 0 -.125rem 0;  
      }
`
const PickupIconSmall = styled(RiShoppingBagLine)`
    color: white;
    font-size: 3rem;
    margin:  .5rem  0 -.25rem 0;
`
const InvoiceIcon = styled(FaFileInvoiceDollar)`
    color: #EC7700;
    font-size: 3rem;
    margin: 0 0 0 0;  
    @media all and (min-width: 1200px){
        font-size: 1.5rem;
      
      } 
`
const IngredientIcon = styled(FaLeaf)`
    color: #EC7700;
    font-size: 3rem;
    margin: 0 0 -.25rem 0;   
`
const CheckIcon = styled(FaCheckCircle)`
    color: #005F7F;
    font-size: 3rem; 
`
export {
  Wrapper,
  CartButton,
  LinkButton,
  PickupCount,
  PickupContainer,
  PickupMain,
  Grid,
  IngredientGrid,
  MainGrid,
  Button,
  UserLogo,
  Container,
  PickupCountSmall,
  PickupContainerSmall,
  Block,
  Logo,
  Image,
  TimesIcon,
  PickupIcon,
  RestaurantIcon,
  RestaurantIconSmall,
  EditIcon,
  PickupIconSmall,
  InvoiceIcon,
  IngredientIcon,
  CheckIcon,
  InfoIcon,
  LogoSmall,
  LogoHeader,
  SmallGrid,
  ImageLogo,
  FormButton,
  TrashIcon
}


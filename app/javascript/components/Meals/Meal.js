import React, {useContext} from 'react'
import {useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {Box} from '../UI/Layouts';
import {FaPlusCircle, FaHome} from "react-icons/fa";
import {SingleMealContext} from '../App'


const MealLogo = styled.div`
    width: 150px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    
    img {
        height: 150px;
        width: 150px;
        border-radius: 100%;
        border: 1px solid #efefef;
    }
`
const CompanyLogo = styled.div`
    width: 33px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    
    img {
        height: 33px;
        width: 33px;
        border-radius: 100%;
        border: 1px solid #efefef;
    }
`
const MealName = styled.div`
    color: #EC7700;
    font-size: 2rem;
    font-weight: bold;
    @media all and (min-width: 1200px){
        font-size: 1rem;

    }
`
const PriceName = styled.div`
    color: #E80000;
    font-size: 1rem;

    @media all and (min-width: 1200px){
        font-size: .75rem;

    }
`
const PiecesName = styled.div`
    color: #005F7F;
    font-size: 1rem;
   
    @media all and (min-width: 1200px){
        font-size: .75rem;

    }
`
const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: .5rem;
`
const PickupIconPlus = styled(FaPlusCircle)`
    color: #005F7F;
    font-size: 6rem;
    grid-area: overlap;
    margin: auto;
    align-self: center;
    justify-self: center;
    
    &:hover {
        color: #005470;
        
      }
    @media all and (min-width: 1200px){
        font-size: 3rem;
    }
      
`
const LinkButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    border: none;
    backgound: white; 
`
const FTIcon = styled(FaHome)`
    color: #E80000;
    font-size: 2rem;
    align-self: center;
    margin: 0 0 0 0;
`
export default function Meal(props) {
    const {meal} = props; 
    const {name} = props.meal
    const {image} = props.meal.image_url
    const [singleMeal, setSingleMeal] = useContext(SingleMealContext)

    const history = useHistory()
    const handleLink = () => {
        setSingleMeal(meal)
        history.push(`/items/${name}`)
    }
    console.log(meal.image_url)

    return (
    <Box meal={meal} title={  <CompanyLogo>
        <img src={require('../Images/RestaurantPickup.png')} alt={'RestaurantPickup'} />
    </CompanyLogo>} actions={<LinkButton onClick={handleLink}><PickupIconPlus/> </LinkButton> }> 
        <MealLogo>
            <img src={meal.image_url} alt={meal.name} />
        </MealLogo>
        <Block><MealName>{meal.name}</MealName></Block>
        <Block><PriceName>${meal.price} ({meal.count_type}) Piece(s)</PriceName></Block>
        <Block><PiecesName>({meal.count_type}) Piece(s)</PiecesName></Block>
    </Box>
    )
}
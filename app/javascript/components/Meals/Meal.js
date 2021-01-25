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
const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
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
    const [singleMeal, setSingleMeal] = useContext(SingleMealContext)

    const history = useHistory()
    const handleLink = () => {
        setSingleMeal(meal)
        history.push(`/meals/${name}`)
    }

    return (
    <Box meal={meal} title={  <CompanyLogo>
        <img src={'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/72223620_143316837028105_8656961370585038848_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=-EbXjLs4vUMAX-uO6ER&_nc_ht=scontent-sea1-1.xx&oh=b5c1ac615b98a7f2252e8c6193b21ad1&oe=603201AA'} alt={'Baker Shack'} />
    </CompanyLogo>} actions={<LinkButton onClick={handleLink}><PickupIconPlus/> </LinkButton> }>
        <MealLogo>
            <img src={meal.image_url} alt={meal.name} />
        </MealLogo>
        <Block><MealName>{meal.name}</MealName></Block>
    </Box>
    )
}
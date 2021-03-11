import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {useHistory } from 'react-router-dom'
import {RiShoppingBagLine} from "react-icons/ri";
import {MealContext, PickupContext, SingleMealContext} from '../App'



const Container = styled.div`
    max-width: 600px;
    margin: auto auto;
    text-align: center;
`
const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
`;
const PickupCount = styled.div`
    color: #EC7700;
    text-decoration: none;
    font-size: 12rem;
    margin-top: 6rem;
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
const PickupIcon = styled(RiShoppingBagLine)`
    color: #EC7700;
    font-size: 24rem;
    grid-area: overlap;
    margin: auto;
    align-self: center;
    justify-self: center;
    
`
const Block = styled.div`
    color: #EC7700;
    margin-top: 3rem;
    font-size: 3rem;
    margin: auto;
    align-self: center;
    justify-self: center;
`
const CompanyLogo = styled.div`
    width: 350px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    border-radius: 100%;
    box-shadow:  2px 2px 4px #000000;
    
    img {
        height: 350px;
        width: 350px;
        border-radius: 100%;
        border: 1px solid #efefef;
    }
`
const Button = styled.button`
  cursor: pointer;
  color: #fff;
  background: #ed5841;
  font-size: 2em;
  margin: 1em;
  padding: .5em 1em;
  border: 2px solid #ca3d26;
  border-radius: 3px;
  transition: 0.3s;
  &:hover {
    color: #ed5841;
    background: #fff none repeat scroll 0 0;
  }
`;

export default function Login(props) {
  const [meals, setMeals] = useContext(MealContext);
  const [pickup, setPickup] = useContext(PickupContext);
  const [singleMeal, setSingleMeal] = useContext(SingleMealContext)


//Array of Meal Objects
const getMeals = () => { axios.get('/api/v1/meals.json')
        .then(response => {
            console.log(response, 'meals')
        const result = response.data.data.map(((d) => (
            {
                id: d.id,
                type: d.type,
                name: d.attributes.name,
                price: d.attributes.price,
                count_type: d.attributes.count_type,
                meal_type: d.attributes.meal_type,
                image_url: d.attributes.image_url,
                ingredients: d.attributes.ingredients
            }
        )))
        setMeals(result)  
        })
        .catch(error => console.log(error))
}

//Pushing URL history to /meals
const history = useHistory()
const handleLink = () => { 
    history.push(`/items`)
}

//Calling functions when the DOM loads
useEffect(() => {
    setSingleMeal({});
    setPickup([]);
    getMeals()
},[])



    return (
      <Wrapper>
          <Container>
          <PickupContainer onClick={handleLink}><CompanyLogo><img src={require('../Images/FusionStreet.jpg')} alt={'Fusion Street'} /></CompanyLogo><Block></Block></PickupContainer>
<PickupContainer  onClick={handleLink}><Button>Order Now</Button></PickupContainer>
       </Container>  
      </Wrapper>  
        )   
    }
import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import Meal from './Meal'
import Header from '../headers/Header'
import {MealContext} from '../App'
import {Content} from '../UI/Layouts';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh; 
`;

//TopMain
const TopContentContainer = styled.div`
  width: 100%;
  padding: .5rem 0;
  background: #F9FBFC;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #005F7F;
  background: white;
  padding-top: 3rem;
  border-bottom: solid 1px #D3D3D3;
  border-top: solid 1px #D3D3D3;
  @media all and (min-width: 1200px){
    padding-top: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 1rem;
padding-bottom: 2rem;
@media all and (min-width: 1200px){
  margin-bottom: .5rem;
  padding-bottom: 1rem;
}
`
const ParagraphContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding-bottom: 3rem;
  @media all and (min-width: 1200px){
    font-size: 1rem;
    padding-bottom: 1.5rem;
  }
`;
const ParagraphText = styled.p`
    margin: 0 1.5rem;
    @media all and (min-width: 800px){
      margin: 0 .5rem;
    }
`;

const NavButton = styled.button`
  cursor: pointer;
  /* Adapt the colors based on primary prop */
  height: 150px;
  width: 150px;
  margin: 1.5rem;
  background: ${props => props.primary ? "#005F7F" : "#005F7F"};
  color: ${props => props.primary ? "white" : "white"};
  text-transform: uppercase;
  font-size: 1.15rem;
  font-weight: bold;
  border: .05rem solid #005470;
  border-radius: 100%;
  box-shadow:  2px 2px 4px #000000;
  &:hover {
    color: white;
    background: #005470;
  }
  @media all and (min-width: 1200px){
    font-size .55rem;
    margin: 1rem;
    height: 75px;
    width: 75px
  }
`;



//Grid
const Center = styled.div`
    text-align: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    width: 100%;
    @media all and (min-width: 1200px){
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
    }
`

export default function Meals() {
    const [meals, setMeals] = useContext(MealContext)
    const [filteredMeals, setFilteredMeals] = useState(meals)


    //Searching functions "algorithms"

    //Search All
    const filterAll = () => {
      setFilteredMeals(meals)
      }

    //Search by "meal_type"
    const filterFirst = () => {
    const result =  meals.filter(meal => meal.meal_type === 'Breakfast')
    setFilteredMeals(result)
    }
    const filterSecond = () => {
      const result =  meals.filter(meal => meal.meal_type === 'Lunch')
    setFilteredMeals(result) 
    }
    const filterThird = () => {
      const result =  meals.filter(meal => meal.meal_type === 'Sides')
      setFilteredMeals(result)
    }
    const filterFourth = () => {
      const result =  meals.filter(meal => meal.meal_type === 'KM')
      setFilteredMeals(result)
    }
    const filterFifth = () => {
      const result =  meals.filter(meal => meal.meal_type === 'Beverages')
      setFilteredMeals(result)
    }
  
    
    //Mapping through the Meals array with styling
    const grid = filteredMeals.map( meal => {
    return(<Meal 
        key={meal.id}
        meal={meal}
        meal_id={meal.id}
        ingredients={meal.ingredients}
    />)})

    return (
      <Wrapper>
      <Header/> 
      <TopContentContainer>
      <TopContainer>
      <ParagraphContainer>
          <ParagraphText>
            <strong>{'Baker Shack'}</strong>					
          </ParagraphText>
          </ParagraphContainer>
          <ButtonContainer>
          <NavButton onClick={filterAll}>Full Menu</NavButton>
          <NavButton onClick={filterFirst}>Baker's Breakfast 7:00-10:30 A.M.</NavButton>
          <NavButton onClick={filterSecond}>Baker's Lunch 10:30-2:30 P.M.</NavButton>
        
          </ButtonContainer>
          <ButtonContainer>
          <NavButton onClick={filterThird}>Baker's Sides</NavButton>
          <NavButton onClick={filterFourth}>Kid Friendly Choices</NavButton>
          <NavButton onClick={filterFifth}>Baker's Beverages</NavButton>
          </ButtonContainer>
          </TopContainer> 
      </TopContentContainer>   
            <Content><Center>
              <Grid>{grid.length === 0 && 
               <ParagraphText><strong>{"Oops!"}</strong> No Item(s) Currently Available. 
               </ParagraphText>}
               {grid}
              </Grid>
            </Center>
            </Content>
        </Wrapper>
    )
}

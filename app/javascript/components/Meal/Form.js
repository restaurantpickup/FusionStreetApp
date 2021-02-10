import React, {useContext, useState} from 'react'
import Pickup from './Pickup'
import styled from 'styled-components'
import {PageTitle, IngredientBox} from '../UI/Layouts';
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import {PickupContext} from '../App'
import {SingleMealContext} from '../App'
import {
    Wrapper,
    CartButton,
    Grid,
    IngredientGrid,
    RestaurantIcon,
    SmallGrid,
    MainGrid,
    InfoIcon,
    RestaurantIconSmall,
    InvoiceIcon,
} from './UI'

//TopMain

const EditButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    border: none;
    backgound: white;
    @media all and (min-width: 1200px){
        font-size: 1rem;
    }
`
const TopContentContainer = styled.div`
  width: 100%;
  padding: .5rem 0 0 0;
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
const TopMealContainer = styled.div`
  width: 100%;
  padding: .5rem 0 0 0;
  background: #F9FBFC;
  @media all and (min-width: 1200px){
    background: none;
    padding: none;
}
`;
const MealContainer = styled.div`
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
    border-bottom: none;
    border-top: none;

}
`;
const Column = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column
`
const MealLogo = styled.div`
    width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    @media all and (min-width: 1200px){
      width: 100%;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    img {  
        width: 100%;
        border: 1px solid #efefef;
        max-height: 900px;
        @media all and (min-width: 1200px){
          max-height: 640px;
          min-height: 640px;
          width: 90%;
        }
    }
`
const NavButton = styled.button`
  cursor: pointer;
  /* Adapt the colors based on primary prop */
  height: 150px;
  width: 150px;
  margin: 1.5rem;
  background: ${props => props.primary ? "red" : "#005F7F"};
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
    font-size .75rem;
    margin: 1.5rem;
    height: 100px;
    width: 100px;
  }
`;
const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 2rem;
@media all and (min-width: 1200px){
}
`
const Red = styled.div`
color: #E80000;
`
const RedText = styled.span`
color: #E80000;
font-size: 1.5rem;
@media all and (min-width: 1200px){
  font-size: 1rem;
}
`
export const ToggleContext = React.createContext()
export default function Header() {;
    const [pickup, setPickup] = useContext(PickupContext);
    const [singleMeal, setSingleMeal] = useContext(SingleMealContext)
    const [toggle, setToggle] = useState(false)
    const [n, setN] = useState(1)
    const [price, setPrice] = useState([singleMeal.count_type, singleMeal.price])
    const [toggleIngredient, setToggleIngredient] = useState(false)
    
    const ingredientList = singleMeal.ingredients.map((item, index) => {
    return( <li key={index}><strong>{item.title}</strong></li>)})

    const createPickup = () => {
     if(price){
      setPickup([...pickup, {
        id: pickup.length,
        meal_id: singleMeal.id,
        type: 'ticket',
        name: singleMeal.name,
        price: price,
        image_url: singleMeal.image_url,
        ingredients: singleMeal.ingredients,
        modification: `w/${price[0]}`  
    }])} 
    }
    const subTotal = pickup.reduce((acc, item) => acc + (item.price[1]), 0)
    
    const deletePickup = () => {
      const result  = pickup.splice(0, pickup.length -1)
        setPickup(result) 
    }

    const pickupList = pickup.map((meal, index) => {
      return(<Pickup 
        key={meal.id}
        meal={meal}
        meal_id={meal.id}
        modification={meal.modification}
    />
        )
        })
    
        

        const handleIngredients = () => {
          setToggleIngredient(!toggleIngredient)
        }
  
    

    return (
      <ToggleContext.Provider  value={[toggle, setToggle]}>
        <Column>   
          <MainGrid>
          <div>
          <TopMealContainer>
          <MealContainer>
          <PageTitle title={<><RestaurantIcon/> {` ${singleMeal.name}`}</>} action={<EditButton onClick={handleIngredients}><InfoIcon/></EditButton>}/> 
            <Wrapper>
              {toggleIngredient && 
              <IngredientBox title={`${singleMeal.name} ingredients: `}>  
              <IngredientGrid>
                      {ingredientList}
              </IngredientGrid>
              </IngredientBox>  
              }
              </Wrapper>  
          </MealContainer>
          </TopMealContainer>
          
          <TopMealContainer>
          <MealLogo>
            <img src={singleMeal.image_url} alt={singleMeal.name} />
          </MealLogo> 
          </TopMealContainer>
          </div>
          <div>
          <TopMealContainer>
            <MealContainer>
            <PageTitle title={<><InvoiceIcon/> Invoice: </>} action={''}/>
            <Wrapper>
            <IngredientBox title={`Item: (${(n)})${singleMeal.name}`} actions={''}>      
          
              {singleMeal.meal_type === 'Juice'  &&
                <ButtonContainer>
              <NavButton onClick={() => setPrice(['32oz', 25])}>{(price && price[0] === '32oz') ? <Red>32oz: $25.00</Red> : '32oz: $25.00'}</NavButton>
        

              </ButtonContainer>
              }
                  {singleMeal.meal_type === 'Rolls'  &&
                <ButtonContainer>
             <NavButton onClick={() => setPrice(['10', 30])}>{(price && price[0] === '10') ? <Red>10: $30.00</Red> : '10: $30.00'}</NavButton>
              <NavButton onClick={() => setPrice(['25', 75])}>{(price && price[0] === '25') ? <Red>25: $75.00</Red> : '25: $75.00'}</NavButton>
              <NavButton onClick={() => setPrice(['50', 75])}>{(price && price[0] === '50') ? <Red>50: $125.00</Red> : '50: $125.00'}</NavButton>
              </ButtonContainer>
              }
                          {singleMeal.meal_type === 'Dining'  &&
                <ButtonContainer>
              <NavButton onClick={() => setPrice(['Consult Credit', 100])}>{(price && price[0] === 'Consult Credit') ? <Red>Consult Credit $100.00</Red> : 'Consult Credit $100.00'}</NavButton>
      
              </ButtonContainer>
              }


             </IngredientBox>
            <IngredientBox title={`Ticket Items: (${(pickup.length)})` } actions={<RedText>{`$${subTotal}`}</RedText>}>      
           <SmallGrid>
           {pickupList}
           </SmallGrid>
              </IngredientBox>
                </Wrapper>
            </MealContainer>
          </TopMealContainer> 
          </div>
          </MainGrid>
        <TopContentContainer>
          <TopContainer>
            <PageTitle title={<> <RestaurantIconSmall/> Add/Remove Item: </>} action={ 
            <>          
          <Grid>
          <CartButton onClick={deletePickup}><FiMinusCircle/></CartButton>  
          <CartButton onClick={createPickup}><FiPlusCircle/></CartButton>   
          </Grid>  </>}/> 
          </TopContainer>
       </TopContentContainer>    
        </Column> 
      </ToggleContext.Provider>
    )
}


  


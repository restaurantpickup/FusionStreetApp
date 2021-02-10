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
          
              {singleMeal.meal_type === 'Breakfast' && singleMeal.name === 'Baker Biscuits & Sausage Gravy' &&
                <ButtonContainer>
              <NavButton onClick={() => setPrice(['Half Order', 3])}>{(price && price[0] === 'Half Order') ? <Red>Half Order: $3.00</Red> : 'Half Order: $3.00'}</NavButton>
              <NavButton onClick={() => setPrice(['Full Order', 5])}>{(price && price[0] === 'Full Order') ? <Red>Full Order: $5.00</Red> : 'Full Order: $5.00'}</NavButton>
              </ButtonContainer>
              }
                  {singleMeal.meal_type === 'Breakfast' && singleMeal.name === 'Baker’s Breakfast Wrap' &&
                <ButtonContainer>
              <NavButton onClick={() => setPrice(['Bacon', 5.25])}>{(price && price[0] === 'Bacon') ? <Red>Bacon $5.25</Red> : 'Bacon: $5.25'}</NavButton>
              <NavButton onClick={() => setPrice(['Canadian Bacon',  5.25])}>{(price && price[0] === 'Canadian Bacon') ? <Red>Canadian Bacon: $5.25</Red> : 'Canadian Bacon: $5.25'}</NavButton>
              <NavButton onClick={() => setPrice(['Sausage', 5.25])}>{(price && price[0] === 'Sausage') ? <Red>Sausage $5.25</Red> : 'Sausage: $5.25'}</NavButton>
              <NavButton onClick={() => setPrice(['Egg',  4.75])}>{(price && price[0] === 'Egg') ? <Red>Egg: $4.75</Red> : 'Egg: $4.75'}</NavButton>
              <NavButton onClick={() => setPrice(['All Meat', 7.25])}>{(price && price[0] === 'All Meat') ? <Red>All Meat: $7.25</Red> : 'All Meat: $7.25'}</NavButton>
              </ButtonContainer>
              }
                          {singleMeal.meal_type === 'Breakfast' && singleMeal.name === 'Baker’s Breakfast Bowl' &&
                <ButtonContainer>
              <NavButton onClick={() => setPrice(['Bacon', 5.75])}>{(price && price[0] === 'Bacon') ? <Red>Bacon $5.75</Red> : 'Bacon $5.75'}</NavButton>
              <NavButton onClick={() => setPrice(['Canadian Bacon',  5.75])}>{(price && price[0] === 'Canadian Bacon') ? <Red>Canadian Bacon: $5.75</Red> : 'Canadian Bacon: $5.75'}</NavButton>
              <NavButton onClick={() => setPrice(['Sausage', 5.25])}>{(price && price[0] === 'Sausage') ? <Red>Sausage: $5.25</Red> : 'Sausage: $5.25'}</NavButton>
              </ButtonContainer>
              }

                        {singleMeal.meal_type === 'Breakfast' && singleMeal.name === 'Breakfast Sandwhich' &&
                <ButtonContainer>
              <NavButton onClick={() => setPrice(['Bacon', 4])}>{(price && price[0] === 'Bacon') ? <Red>Bacon $4.00</Red> : 'Bacon $4.00'}</NavButton>
              <NavButton onClick={() => setPrice(['Canadian Bacon',  4])}>{(price && price[0] === 'Canadian Bacon') ? <Red>Canadian Bacon: $4.00</Red> : 'Canadian Bacon: $4.00'}</NavButton>
              <NavButton onClick={() => setPrice(['Sausage', 4])}>{(price && price[0] === 'Sausage') ? <Red>Sausage: $4.00</Red> : 'Sausage: $4.00'}</NavButton>
              </ButtonContainer>
              }
                            {singleMeal.meal_type === 'Lunch' && singleMeal.name === 'BLTC Wrap' &&
                <ButtonContainer>
              <NavButton onClick={() => setPrice(['Regular', 7.25])}>{(price && price[0] === 'Regular') ? <Red>W/ Salad $7.25</Red> : 'Regular $7.25'}</NavButton>
              <NavButton onClick={() => setPrice(['W/ Salad', 8])}>{(price && price[0] === 'W/ Salad') ? <Red>W/ Salad $8.00</Red> : 'W/ Salad $8.00'}</NavButton>
              </ButtonContainer>
              }

                          
              {singleMeal.meal_type === 'Lunch' && singleMeal.name === 'Baker’s Chicken Salad Wrap' &&
                <ButtonContainer>
              <NavButton onClick={() => setPrice(['Wrap', 7.25])}>{(price && price[0] === 'Wrap') ? <Red>Wrap $7.25</Red> : 'Wrap $7.25'}</NavButton>
              <NavButton onClick={() => setPrice(['Salad Croissant', 6.75])}>{(price && price[0] === 'Salad Croissant') ? <Red>Salad Croissant $6.75</Red> : 'Salad Croissant $6.75'}</NavButton>

              </ButtonContainer>
              }
           
                {singleMeal.meal_type === 'Lunch' && singleMeal.name === 'Mexi Chicken Wrap' &&
                <ButtonContainer>
               <NavButton onClick={() => setPrice(['Regular', 6.75])}>{(price && price[0] === 'Regular') ? <Red>Regular $6.75</Red> : 'Regular $6.75'}</NavButton>
              <NavButton onClick={() => setPrice(['W/ MEXI CHICKEN SALAD', 7.5])}>{(price && price[0] === 'W/ MEXI CHICKEN SALAD') ? <Red>W/ MEXI CHICKEN SALAD  $7.50</Red> : 'W/ MEXI CHICKEN SALAD  $7.50'}</NavButton>

              </ButtonContainer>
              }
              {singleMeal.meal_type === 'Lunch' && singleMeal.name === 'Mexi Ground Beef Wrap' &&
                <ButtonContainer>
               <NavButton onClick={() => setPrice(['Regular', 6.75])}>{(price && price[0] === 'Regular') ? <Red>Regular $6.75</Red> : 'Regular $6.75'}</NavButton>
              <NavButton onClick={() => setPrice(['W/ MEXI BEEF SALAD ', 7.5])}>{(price && price[0] === 'W/ MEXI BEEF SALAD') ? <Red>W/ MEXI BEEF SALAD   $7.50</Red> : 'W/ MEXI BEEF SALAD  $7.50'}</NavButton>

              </ButtonContainer>
              }
                {singleMeal.meal_type === 'Lunch' && singleMeal.name === 'Bacon Cheeseburger Wrap' &&
                <ButtonContainer>
               <NavButton onClick={() => setPrice(['Regular', 7.25])}>{(price && price[0] === 'Regular') ? <Red>Regular $7.25</Red> : 'Regular $7.25'}</NavButton>
              <NavButton onClick={() => setPrice(['W/  SALAD ', 7.5])}>{(price && price[0] === 'W/ Salad') ? <Red>W/ SALAD   $8.00</Red> : 'W/ SALAD  $8.00'}</NavButton>

              </ButtonContainer>
              }
               {singleMeal.meal_type === 'Sides' && singleMeal.name === 'Soup of the Day' &&
                <ButtonContainer>
               <NavButton onClick={() => setPrice(['Cup', 3.25])}>{(price && price[0] === 'Cup') ? <Red>Cup $3.25</Red> : 'Cup $3.25'}</NavButton>
              <NavButton onClick={() => setPrice(['Bowl ', 4.25])}>{(price && price[0] === 'Bowl') ? <Red>Bowl   $4.25</Red> : 'Bowl  $4.25'}</NavButton>

              </ButtonContainer>
              }
                {singleMeal.meal_type === 'Sides' && singleMeal.name === 'Sauce' &&
                <ButtonContainer>
               <NavButton onClick={() => setPrice(['Fry', .50])}>{(price && price[0] === 'Fry') ? <Red>Fry $0.50</Red> : 'Fry $0.50'}</NavButton>
               <NavButton onClick={() => setPrice(['Ranch', .50])}>{(price && price[0] === 'Ranch') ? <Red>Ranch $0.50</Red> : 'Ranch $0.50'}</NavButton>
               <NavButton onClick={() => setPrice(['Cheese', .50])}>{(price && price[0] === 'Cheese') ? <Red>Cheese $0.50</Red> : 'Cheese $0.50'}</NavButton>
               <NavButton onClick={() => setPrice(['Salsa', .50])}>{(price && price[0] === 'Salsa') ? <Red>Salsa $0.50</Red> : 'Salsa $0.50'}</NavButton>

              </ButtonContainer>
              }
               {singleMeal.meal_type === 'Sides' && singleMeal.name === 'Biscotti' &&
                <ButtonContainer>
               <NavButton onClick={() => setPrice(['Lemon Almond', 1])}>{(price && price[0] === 'Lemon Almond') ? <Red>Lemon Almond $1.00</Red> : 'Lemon Almond $1.00'}</NavButton>
               <NavButton onClick={() => setPrice(['Hazelnut', 1])}>{(price && price[0] === 'Hazelnut') ? <Red>Hazelnut $1.00</Red> : 'Hazelnut $1.00'}</NavButton>

              </ButtonContainer>
              }
                  {singleMeal.meal_type === 'KM' && 
                <ButtonContainer>
               <NavButton onClick={() => setPrice(['Fries', 7.25])}>{(price && price[0] === 'Fries') ? <Red>Fries 7.25</Red> : 'Fries $7.25'}</NavButton>
               <NavButton onClick={() => setPrice(['Chips', 7.25])}>{(price && price[0] === 'Chips') ? <Red>Chips 7.25</Red> : 'Chips $7.25'}</NavButton>
               <NavButton onClick={() => setPrice(['Applesauce', 7.25])}>{(price && price[0] === 'Applesauce') ? <Red>Applesauce 7.25</Red> : 'Applesauce $7.25'}</NavButton>
               <NavButton onClick={() => setPrice(['Dipping Sauce', 7.25])}>{(price && price[0] === 'Dipping Sauce') ? <Red>Dipping Sauce 7.25</Red> : 'Dipping Sauce $7.25'}</NavButton>
               <NavButton onClick={() => setPrice(['Juice Box', 7.25])}>{(price && price[0] === 'Juice Box') ? <Red>Juice Box 7.25</Red> : 'Juice Box $7.25'}</NavButton>
              </ButtonContainer>
              }
               {singleMeal.meal_type === 'Beverages' && singleMeal.name === 'Austrian Coffee' &&
                <ButtonContainer>
               <NavButton onClick={() => setPrice([' 12 oz.', 2])}>{(price && price[0] === ' 12 oz.') ? <Red>12 oz. $2.00</Red> : ' 12 oz. $2.00'}</NavButton>
               <NavButton onClick={() => setPrice(['16 oz. ', 2.50])}>{(price && price[0] === '16 oz. ') ? <Red>16 oz. $3.50 $2.50</Red> : '16 oz. $2.50'}</NavButton>

              </ButtonContainer>
              }
               {singleMeal.meal_type === 'Beverages' && singleMeal.name === 'London Fog' &&
                <ButtonContainer>
               <NavButton onClick={() => setPrice(['12 oz.', 2.50 ])}>{(price && price[0] === '12 oz.') ? <Red>12 oz. $2.50 </Red> : '12 oz. $2.50 '}</NavButton>
               <NavButton onClick={() => setPrice(['16 oz. ', 3.50])}>{(price && price[0] === '16 oz. ') ? <Red>16 oz. $3.50</Red> : '16 oz. $3.50'}</NavButton>

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


  


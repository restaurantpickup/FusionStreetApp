import React, {useContext, useState, useEffect, useRef} from 'react'
import 'react-credit-cards/es/styles-compiled.css'
import Pickup from './Pickup'
import styled from 'styled-components'
import {PageTitle, IngredientBox, Box} from '../UI/Layouts';
import {PickupContext} from '../App'

import {
    Wrapper,
    SmallGrid,
    InvoiceIcon,

    A
} from './UI'


//TopMain
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
  padding: 3rem;
  border-bottom: solid 1px #D3D3D3;
  border-top: solid 1px #D3D3D3;
  @media all and (min-width: 1200px){
    padding: 1.5rem;

  }
`;

const Column = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column
`
const Red = styled.span`
color: #E80000;
font-size: 1.5rem;
@media all and (min-width: 1200px){
  font-size: 1rem;
}
`
export const ToggleContext = React.createContext()
function Form(props) {;
    const [toggle, setToggle] = useState(false)
    const [pickup, setPickup] = useContext(PickupContext);
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();
    const subTotal = pickup.reduce((acc, item) => acc + (item.price[1]), 0)
    const pickupList = pickup.map((meal, index) => {
      return(<Pickup 
        key={meal.id}
        meal={meal}
        meal_id={meal.id}
        modification={meal.modification}
    />
        )
        })
    const array = pickup.map(((d, index) =>
        d.price[0] + d.price[2]
    ))

    const description = array.join()
    console.log(description)

    
   
        useEffect(() => {
          window.paypal
            .Buttons({
              createOrder: (data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: description,
                      amount: {
                        currency_code: 'USD',
                        value: subTotal,
                      },
                    },
                  ],
                });
              },
              onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                setPaidFor(true);
                setPickup([])
                console.log(order);
              },
              onError: err => {
                setError(err);
                console.error(err);
              },
            })
            .render(paypalRef.current);
        }, []);
      
      
      

        

    return (
      <ToggleContext.Provider  value={[toggle, setToggle]}>
          {error && <div>Uh oh, an error occurred! {error.message}</div>}
          {paidFor && <div>Congratulations your order has been sent!</div>}
        <Column>
          <TopContentContainer>
          <TopContainer>
        <PageTitle title={<><InvoiceIcon/> {`Invoice: `}</>} action={''}/>     
           <Wrapper>
           <IngredientBox title={`Ticket Items: (${(pickup.length)})${''}`} actions={<Red>{`$${subTotal}.00`}</Red>}> 
          <SmallGrid>
          {pickupList}
          </SmallGrid>
             </IngredientBox>
             <div ref={paypalRef} />

               </Wrapper>       
          </TopContainer>
          </TopContentContainer>  
      </Column> 


        </ToggleContext.Provider>
    )
}

export default Form

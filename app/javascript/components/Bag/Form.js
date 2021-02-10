import React, {useContext, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Cards from 'react-credit-cards'
import Select from 'react-select'
import 'react-credit-cards/es/styles-compiled.css'
import Pickup from './Pickup'
import axios from 'axios'
import styled from 'styled-components'
import {PageTitle, IngredientBox, Box} from '../UI/Layouts';
import {PickupContext} from '../App'
import {SingleMealContext} from '../App'

import {
    Wrapper,
    Button,
    SmallGrid,
    InvoiceIcon,
    UpArrow,
    DownArrow,
    CalendarIcon,
    ExitIcon,
    A
} from './UI'
import { FaPaintBrush } from 'react-icons/fa'

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

const locations = [
  {value: 'Missoula (MT)', label: 'Missoula (MT)'}
]
const times = [
  {value: '7:00 AM', label: '7:00 AM'},
  {value: '7:30 AM', label: '7:30 AM'},
  {value: '8:00 AM', label: '8:00 AM'},
  {value: '8:30 AM', label: '8:30 AM'},
  {value: '9:00 AM', label:'9:00 AM'},
  {value: '9:30 AM', label: '9:30 AM'},
  {value: '10:00 AM', label: '10:00 AM'},
  {value:'10:30 AM', label: '10:30 AM'},
  {value: '11:00 AM', label: '11:00 AM'},
  {value: '11:30 AM', label: '11:30 AM'},
  {value: '12:00 PM', label: '12:00 PM'},
  {value: '12:30 PM', label: '12:30 PM'},
  {value: '1:00 PM', label: '1:00 PM'},
  {value: '1:30 PM', label: '1:30 PM'},
  {value: '2:00 PM', label: '2:00 PM'},
  {value: '2:30 PM', label: '2:30 PM'},
  {value: '3:00 PM', label: '3:00 PM'},
  {value: '3:30 PM', label: '3:30 PM'},
  {value: '4:00 PM', label: '4:00 PM'},
  {value: '4:30 PM', label: '4:30 PM'},
  {value: '5:00 PM', label: '5:00 PM'},
  {value: '5:30 PM', label: '5:30 PM'},
  {value: '6:00 PM', label: '6:00 PM'},
  {value: '6:30 PM', label: '6:30 PM'},
  {value: '7:00 PM', label: '7:00 PM'},
  {value: '7:30 PM', label: '7:30 PM'},
  {value: '8:00 PM', label: '8:00 PM'},
  {value: '8:30 PM', label: '8:30 PM'},
  {value: '9:00 PM', label: '9:00 PM'},
]

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
const DropDown = styled(Select)`
  margin-left: 1.5rem;
  width: 100%;
  height: 100%;
  border-radius: .8rem;
`;
const Form = styled.form`
  font-size: 2rem;
  padding: 2rem;
  justify-content: center;

.container {
  border-radius: .8rem;
  font-size: 2rem;

  .input-container{
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    @media all and (min-width: 1200px){
      font-size: 1rem;
}
    input {
      font-size: 1rem;
      margin-left: 6rem;
      padding: .5rem;
      border: solid 1px #005F7F;
      border-radius: .25rem;
    }
    label {
      align-self: flex-end;
      margin-right: 6rem;
    }
  }
}
.submit-container {
    margin-top: 3rem;
    font-size: 2rem;
    @media all and (min-width: 1200px){
      font-size: 1rem;
}
  input{
    font-size: 1rem;
    margin-top: 2rem;
    align-self: flex-end;
} 
`
export const ToggleContext = React.createContext()
export default function Header(props) {;
    const history = useHistory()
    const [toggle, setToggle] = useState(false)
    const [schedulePickup, setSchedulePickup] = useState(false)
    const [formToggle, setFormToggle] = useState(false)
    const [paymentToggle, setPaymentToggle] = useState(true)
    const [modalToggle, setModalToggle] = useState(false)
    const [pickup, setPickup] = useContext(PickupContext);
    const [singleMeal, setSingleMeal] = useContext(SingleMealContext)
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [location, setLocation] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')

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
    useEffect(() => {
      //Get all Meals from api
      //Update meals in our state
      axios.get('/api/v1/users')
      .then(response => {
      })
      .catch(error => console.log(error))
    }, [])
        
    useEffect(() => {
      setSingleMeal([])
    }, [])


    const handleSchedule = () => {
      if(date && time && location){setSchedulePickup(true); setFormToggle(!formToggle)}
    }

    const toggleForm = () => {
      setFormToggle(!formToggle)
    }
    const togglePay = () => {
      history.push('account/profile')
    }

    return (
      <ToggleContext.Provider  value={[toggle, setToggle]}>
        <Column> 
       

<TopContentContainer>
<TopContainer>

<PageTitle title={<><CalendarIcon/> {(schedulePickup) ? <>Schedule Order: <Red> {(date)? `Date: ${date}/` : ``}{(time)?`Time: ${time}/` : ``}{(location)?`Location: ${location}` : ``}</Red> </> : 'Schedule Order:'} </>} action={(formToggle) ? <DownArrow onClick={toggleForm}/> : <UpArrow onClick={toggleForm}/>}/>
{!formToggle && 
 <Wrapper>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScNltyh3eil-_yVbD_dULku4PG5PBocSbA5Gxv2LhBqZ8cBQA/viewform?embedded=true" width="640" height="992" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</Wrapper>     
}
</TopContainer>
</TopContentContainer>
        
          <TopContentContainer>
          <TopContainer>
        <PageTitle title={<><InvoiceIcon/> {`Invoice: `}</>} action={''}/>
          {paymentToggle && 
           <Wrapper>
          
           </Wrapper>     
          }  
          
           <Wrapper>
           <IngredientBox title={`Ticket Items: (${(pickup.length)})${''}`} actions={<Red>{`$${subTotal}.00`}</Red>}> 
          <SmallGrid>
          {pickupList}
          </SmallGrid>
             </IngredientBox>
             <PageTitle title={<> </>} action={<A href={'https://restaurantpickupapp.com/DiscoKitchen'}>Continue</A>}/> 
               </Wrapper>       
        
          </TopContainer>
          </TopContentContainer>  
        <TopContentContainer>
       </TopContentContainer>   
      </Column> 
        </ToggleContext.Provider>
    )
}



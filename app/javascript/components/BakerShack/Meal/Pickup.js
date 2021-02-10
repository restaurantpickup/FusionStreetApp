import React, {useContext, useState, useEffect} from 'react'
import {useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {SingleMealContext} from '../App'
import {PickupContext} from '../App'
import {ToggleContext} from './Form'
import {IngredientBox, SmallMealBox} from '../UI/Layouts';
import {
    Wrapper,
    TrashIcon
} from './UI'


const Table = styled.table`
    display: column;
    justify-content: 'center';
    padding: 2rem;
    font-size: 1.5rem;
    thead {
        font-size: 2.5rem;
        font-weight: bold;
        border-bottom: 1px solid black;
        @media all and (min-width: 1200px){
            font-size: 1.5rem;
          }
       
    }
    th {
        font-size: 3rem;
        padding: 2rem;
        text-align: center;
        border-bottom: 1px solid #ddd;
        @media all and (min-width: 1200px){
            font-size: 1.5rem;
            padding: 2rem;
         }
    }
    td {
        font-size: 1.5rem;
        padding: 2rem;
        text-align: center;
        border-bottom: 1px solid #ddd;
        @media all and (min-width: 1200px){
            font-size: 1rem;
            padding: 1.5rem;
         }
    }

    tr:hover {background-color:#f5f5f5;}
    .button-container {
       display: flex;
       justify-content: center;
   }

   input {
       width: 2.5rem;
       height: 2.5rem;
       @media all and (min-width: 1200px){
       width: 1.5rem;
       height: 1.5rem;
       border: .05rem solid #005470;
       border-radius: 3px;
   
    }
   }
   
   button {
    cursor: pointer;
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "#005F7F" : "#005F7F"};
    color: ${props => props.primary ? "white" : "white"};
    text-transform: uppercase;
    font-size: 1.5rem;
    padding: 0.25rem 1em;
    margin: 0 0 1rem 0;
    border: .05rem solid #005470;
    border-radius: 3px;
    &:hover {
      color: white;
      background: #005470;
    }
     @media all and (min-width: 1200px){
        font-size: 1rem;
    } 
   }
`



const SmallMealLogo = styled.div`
    width: 250px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    @media all and (min-width: 1200px){
        width: 150px;
          }
   
    img {
        height: 250px;
        width: 250px;
        border-radius: 100%;
        border: 1px solid #efefef;
        @media all and (min-width: 1200px){
        height: 150px;
        width: 150px;
        border-radius: 100%;
          }
    }
    
`
const MealName = styled.div`
    color: #EC7700;
    font-size: 2rem;
    @media all and (min-width: 1200px){
        font-size: .75rem;
    }
`
const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`
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
const TrashButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    border: none;
    backgound: white;
   
`

export default function Pickup(props) {
    const {meal, tickets} = props; 
    const {name, ingredients} = props.meal
    const [singleMeal, setSingleMeal] = useContext(SingleMealContext)
    const [toggleIngredient, setToggleIngredient] = useState(false)
    const [toggle, setToggle] = useContext(ToggleContext)
    const [action, setAction] = useState(null)
    const [pickup, setPickup] = useContext(PickupContext)
    const [filteredIngredients, setFilteredIngredients] = useState([])
    const history = useHistory()

    const deleteFilter = () => {
        const result =  pickup.filter(item => item.id !== meal.id)
      setPickup(result)
      }

      const handleIngredients = () => {
        setToggleIngredient(!toggleIngredient)
      }



    const updatePickup = () => {
        setFilteredIngredients(filteredIngredients.filter(i => i.select === true));
      const data = {id: meal.id,  meal_id: meal.id,  type: 'ticket',  name: meal.name, price: meal.price, image_url: meal.image_url, ingredients: filteredIngredients, modification: meal.modification}
      const result = pickup.map(i => (i.id === meal.id) ? data : i)
      setPickup(result)
      setToggle(!toggle)
      setToggle(!toggle)

     
    }
    // const ingredientList = pickup[meal.id].ingredients.map((item, index) => {
    //     return( <NavButton  key={index}>{item.title}</NavButton>)})

       useEffect(() => {
           if(filteredIngredients.length <= 0){
               let array = ingredients;
               setFilteredIngredients( array.map(i => {
                return {
                    id: i.id,
                    select: true,
                    title: i.title,
                    description: i.description,
                    score: i.score
                }
            }))

           }
           if(filteredIngredients.length > 0){
            let array = filteredIngredients;
            setFilteredIngredients( array.map(i => {
             return {
                 id: i.id,
                 select: true,
                 title: i.title,
                 description: i.description,
                 score: i.score
             }
         }))

        }
           
       },[])

       useEffect(() => {

       },[])
    return (
    <SmallMealBox meal={meal} title={<TrashButton onClick={deleteFilter}><TrashIcon/></TrashButton>} actions={''}>
        {!toggleIngredient && 
        <>
            <SmallMealLogo>
            <img src={meal.image_url} alt={meal.name} />
            </SmallMealLogo>
            <Block><MealName>{`${meal.name} (${meal.price[0]}): $${meal.price[1]} `}</MealName></Block>
        </>
        }
        {toggleIngredient && 
        <Wrapper>
            <IngredientBox title={`${meal.name} Features: `}>  
            <Table>
                <thead>
                    <tr>
                        <th><input onChange={e => {
                            let checked = e.target.checked;
                            setFilteredIngredients(
                                filteredIngredients.map(i => {
                                    i.select = checked;
                                    return i
                                })
                            )
                        }} type={"checkbox"} defaultChecked={true}/></th>
                       
                        <th><button onClick={updatePickup}>save</button></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredIngredients.map((i, index) => (
                      <tr key={index}>
                            <td><input onChange={(e) => {
                                let checked= e.target.checked;
                            setFilteredIngredients(filteredIngredients.map((j, index) => {
                                if(i.id === j.id){
                                    j.select = checked;
                                }
                                return j
                            })
                            )}} type={'checkbox'} checked={i.select} /></td>
                            <td>{i.title}</td>
                      </tr>
                    ))}
                </tbody>
            </Table>
            
            </IngredientBox>  
            </Wrapper> 
        } 
    </SmallMealBox>
    )
}
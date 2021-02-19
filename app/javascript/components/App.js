import React, {useState, useEffect, createContext} from 'react'
import { Route, Switch } from 'react-router-dom'
import Meals from './Meals'
import Meal from './Meal'
import Bag from './Bag'
import Login from './Home/Login'





function useLocalStorage(key, defaultValue) {
    const [state, setState] = useState(() => {
        let value
        try {
            value = JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultValue))
        } catch (e) {
            value = defaultValue
        }
        return value
    })
   useEffect(() => {
       window.localStorage.setItem(key, JSON.stringify(state))
   },[state])
   return [state, setState]
}


function App() {
    const [pickup, setPickup] = useLocalStorage('app:pickup',[]);
    const [meals, setMeals] = useLocalStorage('app:meals', []);
    const [singleMeal, setSingleMeal] = useLocalStorage('app:meal', {});
    return (
        <PickupContext.Provider value={[pickup, setPickup]}>
         <MealContext.Provider value={[meals, setMeals]}>  
         <SingleMealContext.Provider value={[singleMeal, setSingleMeal]}>
        <Switch>           
            <Route exact path='/' component={Login} />
            <Route exact path='/items' component={Meals} />
            <Route exact path='/items/:name' component={Meal} />
            <Route exact path='/bag' component={Bag} />
           
        </Switch>
         </SingleMealContext.Provider>  
         </MealContext.Provider>       
       </PickupContext.Provider> 
    )
}
export default App
export const PickupContext = React.createContext()
export const MealContext = React.createContext()
export const SingleMealContext = React.createContext()


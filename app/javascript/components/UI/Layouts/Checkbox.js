import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
   display: flex;
   margin: auto;
   padding: 2rem;
   flex-direction: column;
   @media all and (min-width: 1200px){
    padding-top: .5rem;

  }
   

`;

const Label = styled.label`
    color: #EC7700;
    font-size: 2rem;

    margin-left: .5rem;
    @media all and (min-width: 1200px){
        font-size: 1rem;
        margin-left: .5rem;
    
      }

`;
const Input = styled.input`
    border-radius: .25rem;
    width: 22px;
    height: 22px;
    font-size: 1rem;
    border: solid 1px #EC7700;
    color: #EC7700;
    @media all and (min-width: 1200px){
        border-radius: .25rem;
        width: 11px;
        height: 11px;
        font-size: 1rem;
    
      }
`
export default function Checkbox(props) {
    const {label,value} = props;
    return (
        <>
         
         <Box>
        
             <Input
            type='checkbox'
            value={value}
            defaultChecked={true}
            checked={value}
            {...props}
           /> 
            <Label>{label}</Label>
           
          
        </Box>


        </>
  
    )
}

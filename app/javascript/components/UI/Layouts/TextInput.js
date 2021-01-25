import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
padding: 1rem;
margin: auto auto;
width: 25%;
@media all and (min-width: 1200px){
    padding: .75rem;

  }

`;

const Label = styled.label`
    display: block;
    font-size: 2rem;
    margin-bottom: 0.25rem;
    color:  #005F7F;
    @media all and (min-width: 1200px){
        font-size: 1rem;
        margin-bottom: 0.125rem;
    
      }
`
const Input = styled.input`
border-radius: .08rem;
    font-size: 1.5rem;
    border: solid 1px #005F7F;
    color: #FF9E18;
    padding-top: 1rem;
    margin-bottom: 0.5rem;
    @media all and (min-width: 1200px){
        font-size: 2rem;
        padding-top: .5rem;

    
      }
`

export default function TextInput(props) {
    const {label,value} = props;
    return (
        <Box>
            <Label><strong>{label}</strong></Label>
            
            <Input
            type='text'
            value={value}
            {...props}
           /> 
            
         
        </Box>
    )
}

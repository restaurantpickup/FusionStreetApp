import React from 'react';
import styled from 'styled-components';
import Select from 'react-select'

const Box = styled.div`
margin-left: 1rem;
@media all and (min-width: 1200px){


  }

`;

const Label = styled.label`

    @media all and (min-width: 1200px){
 
    
      }
`

export default function DropDown(props) {
    const {label, options} = props;
    const value = options.filter((v) => v.value === props.value)[0];
    return (
        <Box>
            <Label><strong>{label}</strong></Label>
            <Select {...props}  value={value} />
        </Box>
    )
}

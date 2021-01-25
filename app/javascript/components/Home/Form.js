import React, {useState} from 'react'
import styled from 'styled-components';
import {Main, Content, PageTitle, Box, TextInput} from '../UI/Layouts';

export default function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Box>
<TextInput placeholder={'Email...'} label={'Email: '} type='text' name="email" onChange={(e) => setEmail(e.target.value)}/> 
<TextInput placeholder={'Password...'} label={'Password: '} type='text' name="password" onChange={(e) => setEmail(e.target.value)}/> 

       </Box>
    )
}

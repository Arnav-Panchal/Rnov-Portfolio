"use client"
import { Container,Heading,FormControl,FormLabel,Input, Textarea, FormErrorMessage } from '@chakra-ui/react'
import {useState} from "react";

const initvalues ={name:"",email:"",subject:"",message:"",}
const initState={values : initvalues}

export default function Email() { 
  const [state ,setState]=useState(initState);

  const { values } = state;

  const handlechange = (target) => 
  setState((prev) => ({
    ...prev,
    values:{
        ...prev.values,
        [target.name]: target.value,
    },
  }));

  return (
    <Container maxW="450px" mt={12}>
        <Heading>Contact</Heading>
        <FormControl isRequired isInvalid={values.name}>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" errorBorderColor="red.300" value={values.name} onChange={handlechange}/>
            <FormErrorMessage>
              Required
            </FormErrorMessage>
        </FormControl>


        <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={values.email} onChange={handlechange}/>
        </FormControl>


        <FormControl isRequired>
            <FormLabel>subject</FormLabel>
            <Input type="text" name="subject" value={values.subject} onChange={handlechange}/>
        </FormControl>


      <FormControl isRequired >
            <FormLabel>Message</FormLabel>
            <Textarea type="text" name="message" rows={4} value={values.message} onChange={handlechange}/>
        </FormControl>
    </Container>
  )
}

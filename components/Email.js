import { Container,Heading,FormControl,FormLabel,Input } from '@chakra-ui/react'
import useState from 'react'

const initvalues ={name:"",email:"",subject:"",message:"",}
const initState={values : initvalues}

export default function Email() { 
  const [state ,setState]=useState(initState);

  const { values } = state;

  const handlechange = (target) => 
  setState((prev)=> ({
    ...prev,
    values:{
        ...prev.values,
        [target.name]: target.value,
    },
  }));

  return (
    <Container maxW="450px" mt={12}>
        <Heading>Contact</Heading>
        <FormControl isREquired>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={values.name} onChange={handlechange}/>
        </FormControl>


        <FormControl isREquired>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={values.name} onChange={handlechange}/>
        </FormControl>


        <FormControl isREquired>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={values.name} onChange={handlechange}/>
        </FormControl>


        <FormControl isREquired>
            <FormLabel>Message</FormLabel>
            <textarea type="text" name="name" value={values.name} onChange={handlechange}/>
        </FormControl>
    </Container>
  )
}

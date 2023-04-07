import React, {useState} from 'react'
import { FormGroup, Label, Input, Form,Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const VillainNew = ({ createVillain }) => {
  const navigate = useNavigate()
  const [newVillain, setNewVillain] = useState({
    name: "",
    age: "",
    enjoy: "",
    img: ""
  })

  const handleChange = (e) => {
    setNewVillain({ ...newVillain, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    createVillain(newVillain)
    navigate("/VillainIndex")
  }
  
  return (
    <>
      <h1 className='new-header'>Join The League of Villains!</h1>
      <Form>
        <FormGroup>
          <Label for="name">
            Villain Name
          </Label>
            <Input
              name="name"
              placeholder="What is your name"
              type="text"
              onChange={handleChange}
            />
        </FormGroup>


        <FormGroup>
          <Label for="age">
            Villain Age
          </Label>
            <Input
              name="age"
              placeholder="What is your age?"
              type="number"
              onChange={handleChange}
            />
        </FormGroup>
        
        
        <FormGroup>
          <Label for="enjoy">
            Enjoys
          </Label>
            <Input
              name="enjoy"
              placeholder="What do you enjoy?"
              type="text"
              onChange={handleChange}
            />
        </FormGroup>


        <FormGroup>
          <Label for="img">
            Image URL
          </Label>
            <Input
              name="img"
              type="url"
              onChange={handleChange}
            />
        </FormGroup>
    
        <Button onClick={handleSubmit} name="submit">
              Submit
        </Button>
      </Form>
    </>
  )
}

export default VillainNew
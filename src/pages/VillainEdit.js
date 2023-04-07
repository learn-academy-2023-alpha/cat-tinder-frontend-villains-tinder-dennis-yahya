import React, {useState} from 'react'
import { FormGroup, Label, Input, Form, Button } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'
    
    const VillainEdit = ({ villains, updateVillain }) => {
    const { id } = useParams()
    let currentVillain = villains?.find((villain) => villain.id === +id)
    const navigate = useNavigate()
    const handleSubmit = () => {
      updateVillain(editVillain, currentVillain.id)
      navigate("/VillainIndex")
    }
    const [editVillain, setEditVillain] = useState({
      name: currentVillain ? currentVillain.name : '',
      age: currentVillain ? currentVillain.age : '',
      enjoys: currentVillain ? currentVillain.enjoy : '',
      image: currentVillain ? currentVillain.img : ''
    })
    
    const handleChange = (e) => {
      setEditVillain({ ...editVillain, [e.target.name]: e.target.value })
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
              placeholder="What is the villains name"
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
              placeholder="What is the villains age"
              type="number"
              onChange={handleChange}
            />
        </FormGroup>
        
        
        <FormGroup>
          <Label for="enjoy">
            Enjoys
          </Label>
            <Input
              name="enjoys"
              placeholder="What does the villain enjoy?"
              type="text"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="img">
            Image URL
          </Label>
            <Input
              name="image"
              type="url"
              onChange={handleChange}
            />
        </FormGroup>
    
        <Button onClick={handleSubmit} name="submit">
              Submit updated Villain
        </Button>
      </Form>
    </>
  )
}

export default VillainEdit
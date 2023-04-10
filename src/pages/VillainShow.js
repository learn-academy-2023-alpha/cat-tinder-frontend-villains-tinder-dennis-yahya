import React from "react"
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from 'reactstrap'
import { NavLink, useParams, useNavigate } from "react-router-dom"


const VillainShow = ({ villains, deleteVillain }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  let selectedVillain = villains.find(villain => villain.id === +id)
  
  const handleSubmit = () => {
    deleteVillain(selectedVillain.id)
    navigate("/VillainIndex")
  }


  return (
    <div className='villain-show-align'>
    {selectedVillain && (
      <Card
      className='villain-show'
      style={{
        width: '25%',
        marginTop: '0px'
      }}
    >
      <img className="show-image"
        alt={selectedVillain.name}
        src={selectedVillain.img}
        style={{
        }}
      />
      <CardBody>
        <CardTitle tag="h5">
          {selectedVillain.name}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Age: {selectedVillain.age}
        </CardSubtitle>
        <CardText>
          Enjoys {selectedVillain.enjoy}
        </CardText>
      <Button><NavLink to={`/VillainEdit/${selectedVillain.id}`} className="nav-link">
          Edit a Villain
          </NavLink></Button>
  <Button onClick={handleSubmit}>Delete Villain Profile</Button>

      </CardBody>
    </Card>
    )}
  </div>
  )
}

export default VillainShow
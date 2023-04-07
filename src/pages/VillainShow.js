import React from "react"
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from 'reactstrap'
import { NavLink, useParams } from "react-router-dom"
// import {currentVillain} from "./src/pages/VillainEdit"

const VillainShow = ({ villains }) => {
  const { id } = useParams()
  let selectedVillain = villains.find((villain) => villain.id === +id)
  let currentVillain = villains?.find((villain) => villain.id === +id)


  return (
    <div className='villain-show-align'>
    {selectedVillain && (
      <Card
      className='villain-show'
      style={{
        width: '40%'
      }}
    >
      <img
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
      <Button><NavLink to={`/VillainEdit/${currentVillain.id}`} className="nav-link">
          Edit a Villain
          </NavLink></Button>
      </CardBody>
    </Card>
    )}
  </div>
  )
}

export default VillainShow
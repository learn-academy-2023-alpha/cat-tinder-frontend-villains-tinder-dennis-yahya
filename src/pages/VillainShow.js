import React from "react"
import { useParams } from "react-router-dom"
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from 'reactstrap'

const VillainShow = ({ villains }) => {
  const { id } = useParams()
  let selectedVillain = villains.find((villain) => villain.id === +id)

  console.log(id)

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
      </CardBody>
    </Card>
    )}
  </div>
  )
}

export default VillainShow
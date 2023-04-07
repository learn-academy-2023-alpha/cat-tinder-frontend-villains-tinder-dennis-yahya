import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button,} from "reactstrap"
import { NavLink } from "react-router-dom"

const VillainIndex = ({villains}) =>{
  return (
    <main className="villain-index-cards">
  {villains?.map((villain, index) => {
    return (
      <Card
        style={{
          width: "14rem"
        }}
        key={index}
      >
        <img alt={`profile of a villain named ${villain.name}`} src={villain.img} />
        <CardBody>
          <CardTitle tag="h5">{villain.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            
            Age: {villain.age}
          </CardSubtitle>
         <Button><NavLink to={`/VillainShow/${villain.id}`} className="nav-link">
          See More Details
          </NavLink></Button>
        </CardBody>
      </Card>
    )
  })}
</main>
)}
export default VillainIndex
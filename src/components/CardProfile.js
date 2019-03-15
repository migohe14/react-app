import React from "react";
import { Card, Button } from 'react-bootstrap'
import './CardProfile.css'

function CardProfile() {
  var members = [
    {name: "Javi", role: "Teacher", img: require("../assets/teacher.jpg")},
    {name: "Borja", role: "Junior fron-end", img: require("../assets/student2.jpg")},
    {name: "Miguel", role: "Junior front-end", img: require("../assets/profile.jpg")},
    {name: "Manolito", role: "Senior front-end", img: require("../assets/student.jpg")},
  ]
    return (
      <div className="CardProfile row">
            {members.map((item, index) => {
              return <Card className="m-5" key={index} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.role}
                    </Card.Text>
                    <Button variant="primary">Ver perfil</Button>
                  </Card.Body>
                </Card>;
            })}
      </div>
    );
  }

  export default CardProfile;
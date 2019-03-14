import React from "react";
import { Card, Button } from 'react-bootstrap'
import './CardProfile.css'

function CardProfile() {
  var members = [
    {name: "Javi", role: "teacher", img:"https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"},
    {name: "Borja", role: "junior fron-end", img:"https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"},
    {name: "Miguel", role: "junior front-end", img:"https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"},
    {name: "Manolito", role: "junior front-end", img:"https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"},
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
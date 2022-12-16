import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import navIcon5 from "../assets/img/nav-icon5.png";


export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <a href="mailto:manuram0823@gmail.com?Subject=Enlace?Subject=Enlace"><img src={navIcon5} alt="" /></a>

    

      
  )
}
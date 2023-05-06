import React, { useState } from "react";
import Title from "../Title/Title";
import { ButtonForm, ContainerForm, FlexForm, FlexPrimer } from "./css/Form";
import ImgForm from "./ImgForm";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <ContainerForm>
      <div>
        <Title
          title={"Contactame"}
          subtitle={"Trabajemos juntos"}
          parrafo="¿Buscas un desarrollador Full Stack talentoso 
          y dedicado para tu equipo? ¡Aquí estoy! Listo para asumir
           nuevos retos y crear soluciones innovadoras juntos"
          
        />
        <FlexForm onSubmit={handleSubmit}>
          <FlexPrimer>
            <label>
              Nombre
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </FlexPrimer>
          <label>
            Número de celular
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <label>
            Mensaje
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <ButtonForm>
            <button type="submit">Enviar</button>
          </ButtonForm>
        </FlexForm>
      </div>
      <ImgForm />
    </ContainerForm>
  );
};

export default Form;

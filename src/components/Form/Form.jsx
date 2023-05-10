import React, { useState, useEffect, useRef } from "react";
import Title from "../Title/Title";
import { ButtonForm, ContainerForm, FlexForm, FlexPrimer } from "./css/Form";
import ImgForm from "./ImgForm";
import { FormAnimate } from "./gsap";

const Form = () => {
  const descriptionRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const CardChildren = useRef(null);
  const imgRef = useRef(null);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error al enviar el correo electrónico", error);
      // Maneja cualquier error que ocurra durante el envío del correo electrónico
    }
  };

  useEffect(() => {
    FormAnimate(containerRef, titleRef, descriptionRef, CardChildren, imgRef);
  }, []);

  return (
    <ContainerForm ref={containerRef}>
      <div>
        <Title
          titleRef={titleRef}
          descriptionRef={descriptionRef}
          title={"Contactame"}
          subtitle={"Trabajemos juntos"}
          parrafo="¿Buscas un desarrollador Full Stack talentoso 
          y dedicado para tu equipo? ¡Aquí estoy! Listo para asumir
           nuevos retos y crear soluciones innovadoras juntos"
        />
        <FlexForm onSubmit={handleSubmit} ref={CardChildren}>
          <FlexPrimer>
            <label>
              Nombre
              <input
                autoComplete="off"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                autoComplete="off"
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
      <ImgForm imgRef={imgRef} />
    </ContainerForm>
  );
};

export default Form;

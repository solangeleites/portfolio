import React from 'react';
import { FormContainer, Input, TextArea, Button, MsgEnviado } from './FormStyled';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  const [state, sendToFormspree] = useForm('mnjweovk');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name.length === 0){
      alert('El campo nombre es obligatorio');

    } else if (email.length === 0){
      alert('El campo email es obligatorio');

    } else if (phone.length === 0){
      alert('El campo teléfono es obligatorio');

    } else if (msg.length === 0){
      alert('El campo mensaje es obligatorio');

    } else {

      sendToFormspree(e);

    }
  };

  if (state.succeeded) {
    return <MsgEnviado>Gracias, tu mensaje fue enviado correctamente. En breve nos pondremos en contacto.</MsgEnviado>;
  }

  return (

    <FormContainer onSubmit={handleSubmit}>

      <Input
        type="text"
        placeholder="Nombre"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

            <Input
        type="phone"
        placeholder="Teléfono"
        name="phone"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <ValidationError
        prefix="Teléfono"
        field="phone"
        errors={state.errors}
      />

      <TextArea
        name="message"
        id="message"
        cols="50"
        rows="5"
        placeholder="Mensaje"
        style={{
          outline: 'none',
          borderTop: 'none',
          borderLeft: 'none'
        }}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />

      <ValidationError
        prefix="Mensaje"
        field="message"
        errors={state.errors}
      />

      <Button
        type='submit'
        name='send'
        id='send'
        value={state.submitting ? 'Enviando...' : 'Enviar'}
        disabled={state.submitting}
      />

    </FormContainer>
  );
};

export default Form;
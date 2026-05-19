import styled from 'styled-components';
import { mobile } from '../../../queries/mediaQueries';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;
  width: 615px;
  height: 100%;
  border: 3px solid #2a3d75;
  border-radius:50px;
  gap: 20px;

  ${mobile} {
    width: 350px;
    padding: 0px;
  }
  
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 3px solid #2a3d75;
  height: 30px;
  width: 500px;
  font-family: 'Inter', sans-serif;
  font-weight:400;
  font-size:20px;
  background: none;


  
  ${mobile} {
    width: 220px;
  }
  &::placeholder {
  font-weight: 400;
  font-size: 19px;
  width: 570px;
  font-family: 'Times New Roman', Times, serif
    }

`;

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  border-bottom: 3px solid #2a3d75;
  height: 90px;
  width: 500px;
  font-family: 'Inter', sans-serif;
  font-weight:400;
  font-size:20px;
  background: none;
  &::placeholder {
  font-size: 19px;
  font-family: 'Times New Roman', Times, serif

  }

  ${mobile} {
    width: 220px;
  }
`;

export const Button = styled.input`
  border-radius: 10px;
  border: none;
  outline: none;
  height: 50px;
  width: 350px;
  font-family: 'Inter', sans-serif;
    font-weight:500;
  font-size:16px;
      background-color:#2a3d75;
color: white;
  
  cursor: pointer;
  transition: 0.5s ease;
    &:hover {
    transform: translateY(-5px);
    transition: 0.3s ease;
  }
  ${mobile} {
    width: 220px;
  }
`;
export const MsgEnviado = styled.p`
font-size: 20px;
font-weight:500;
color:#2a3d75;
width:370px;
`;
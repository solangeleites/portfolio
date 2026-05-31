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
  border: 2.5px solid #2a3d75;
  border-radius:20px;
  ${mobile} {
    max-width: 350px;
    padding: 15px;
    min-height: 450px;
    justify-content: space-around;
  }
  
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 3px solid #2a3d75;
  height: 30px;
  width: 500px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 20px;
  background: none;


  
  ${mobile} {
    max-width: 260px;
    font-size: 16px;
  }
  &::placeholder {
  font-weight: 400;
  font-size: 19px;
  width: 570px;
  font-family: 'Inter', sans-serif;
    }

`;

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  border-bottom: 3px solid #2a3d75;
  height: 90px;
  width: 500px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 20px;
  background: none;
  ${mobile} {
    width: 260px;
    font-size: 16px;
  }
`;

export const Button = styled.input`
  border-radius: 10px;
  border: none;
  outline: none;
  height: 50px;
  width: 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  background-color: #2a3d75;
  color: white;
  cursor: pointer;
  transition: 0.5s ease;

    &:hover {
    transform: translateY(-5px);
    transition: 0.3s ease;
  }
  ${mobile} {
    width: 280px;
  }
`;
export const MsgEnviado = styled.p`
font-size: 20px;
font-weight:500;
color:#2a3d75;
width:370px;
`;
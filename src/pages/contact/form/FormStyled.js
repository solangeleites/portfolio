import styled from 'styled-components';
import { mobile } from '../../../queries/mediaQueries';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;
  width: 650px;
  height: 100%;
  border: 3px solid #2a3d75;
  border-radius:50px;
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
  width: 550px;
  font-family: 'Inter', sans-serif;
  font-weight:400;
  font-size:20px;
  background: none;
  ${mobile} {
    width: 220px;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  border-bottom: 3px solid #2a3d75;
  height: 90px;
  width: 550px;
  font-family: 'Inter', sans-serif;
  font-weight:400;
  font-size:20px;
  background: none;


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
    background-color:#2a3d75;
    color: white;
  }
  ${mobile} {
    width: 220px;
  }
`;

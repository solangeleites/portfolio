import styled from "styled-components";
import { mobile } from "../../queries/mediaQueries";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;
    border:1px solid lightgray;

    ${mobile}{
        width: 100%;
    }

`

export const Text = styled.p`
    font-size: 14px;
    color: grey;
    line-height: 1.5;
      font-family: 'Inter', sans-serif;


`
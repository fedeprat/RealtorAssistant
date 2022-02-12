import styled from "styled-components";

export const Descripcion = styled.div`
    margin: 30px;
    outline: 3px solid black;
    background-color: rgba(0,0,0,0.5);
    border-radius: 30px;
    input {
        width: 390px;
        height: 100px;
        font-size: 30px;
        margin: 30px;
        display: block;
        :focus {
        outline: none !important;
        border-color: #719ECE;
        box-shadow: 0 0 10px #719ECE;
    }
    }
    grid-column: 15 / 21;
    grid-row: 2 / 8;
`;

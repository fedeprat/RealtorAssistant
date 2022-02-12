import styled from "styled-components";


export const Extras = styled.div`
    background-color: rgba(0,0,0,0.7);
    grid-column: 15 / 20;
    grid-row: 8 / 15;
    border-radius: 20px;
    outline: 2px solid black;

    label {
        font-size: 20px;
        margin-left: 10px;
        display: block;
    }
    input {
        display: inline;
        margin-left: 10px;
        margin-bottom: 20px;
        margin-top: 10px;
        :focus {
        outline: none !important;
        border-color: #719ECE;
        box-shadow: 0 0 10px #719ECE;
    }
    }
`;

export const Wrapper = styled.div`
    width: 200px;
    height: 100px;
    background-color: rgba(255,255,255,0.5);
    outline: 2px solid black;
    margin: 20px;
    border-radius: 0px 30px;
`;
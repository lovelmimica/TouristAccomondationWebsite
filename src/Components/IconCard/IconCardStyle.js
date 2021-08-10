import styled from 'styled-components';

export const StyledIconCard = styled.img`
    height: auto;
    width: 40%;
    margin-top: 20px;
`;

export const StyledIconCardBox = styled.div`
    border-radius: 7px;
    border: 1px solid rgba(110, 148, 168, 0.25);
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: max-content;
    max-width: 270px;

    &:nth-child(even){
        margin-top: 40%;;
    }
`;
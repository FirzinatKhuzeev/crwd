import styled from 'styled-components';
import { CreditCard } from 'styled-icons/boxicons-regular';

export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`;

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
`;

export const TotalLabel = styled.span`
    text-transform: uppercase;
    padding-right: 30px;
`;

export const PayButton = styled.button`
    background-color: #2690fb;
    border-radius: 5px;
    color: white;
    height: 35px;
    width: 80px;
    cursor: pointer;
    border: 1px solid transparent;
    font-size: 1rem;
`;

export const CardIcon = styled(CreditCard)``;

import styled from 'styled-components';
import { CreditCard } from 'styled-icons/boxicons-regular';

export const CheckoutPageContainer = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`;

export const TotalContainer = styled.div`
    margin: 30px 0 30px auto;
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

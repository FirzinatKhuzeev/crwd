import styled from 'styled-components';

export const ContactsContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const AddressContainer = styled.div`
    margin-left: 15px;
`;

export const FullAddress = styled.span`
    font-style: italic;
`;

export const SubmitButton = styled.button`
    background-color: #2690fb;
    border-radius: 3px;
    color: white;
    font-size: 15px;
    height: 35px;
    width: 100px;
    cursor: pointer;
    border: 1px solid #0000001c;
    font-size: 1rem;
`;

export const Title = styled.h2`
    margin-bottom: 10px;
    &:first-of-type {
        margin: auto;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const FormInput = styled.input`
    display: block;
    font-family: inherit;
    font-size: inherit;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    margin-bottom: 10px;
`;

export const TextArea = FormInput.withComponent('textarea');

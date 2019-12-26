import styled from 'styled-components';

export const SignInContainer = styled.div`
    display: flex;
    margin: 40px auto;
    flex-direction: column;
    align-items: center;
`;

export const SignInTitle = styled.h2`
    margin: 10px 0;
`;

export const FormContainer = styled.form`
    width: 300px;
`;

export const FormInput = styled.input`
    display: block;
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

export const SignInButton = styled.button`
    background-color: #2690fb;
    border-radius: 3px;
    color: white;
    font-size: 15px;
    height: 35px;
    width: 150px;
    cursor: pointer;
    font-family: inherit;
`;

export const AccountContainer = styled.div`
    margin-top: 10px;
`;

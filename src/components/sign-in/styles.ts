import styled from 'styled-components';
import { Google } from 'styled-icons/icomoon';

export const SignInContainer = styled.div`
    display: flex;
    margin: 40px auto;
    flex-direction: column;
    align-items: center;
`;

export const SignInTitle = styled.h1`
    margin: 10px 0;
`;

export const FormContainer = styled.form`
    width: 400px;
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

export const Button = styled.button`
    border-radius: 3px;
    font-size: 15px;
    cursor: pointer;
    font-family: inherit;
    border: 1px solid #0000001c;
`;

export const SignInButton = styled(Button)`
    background-color: #2690fb;
    color: white;
    font-size: 15px;
    height: 35px;
    width: 100px;
`;

export const GoogleSignInButton = styled(Button)`
    background-color: #fff;
    color: black;
    height: 35px;
    margin-right: 10px;
    min-width: 200px;
`;

export const ButtonsContainter = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const GoogleIcon = styled(Google)``;

export const AccountContainer = styled.div`
    text-align: center;
    padding: 15px;
`;

export const CreateAccountLink = styled.a`
    color: #329bfe;
`;

import styled from "styled-components";

export const ContactsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddressContainer = styled.div`
  margin-left: 15px;
`;

export const AddressTitle = styled.h2`
  margin: auto;
  margin-bottom: 10px;
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
  font-family: inherit;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  margin-bottom: 10px;
`;

export const TextArea = FormInput.withComponent('textarea');
import styled from "styled-components";

export const InputStyle = styled.div`
  > div,
  > input {
    padding: 1rem;
    align-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid var(--b0, #11434a);
    background-color: white;
  }
  > div {
    min-width: 20rem;
  }
  > input {
    min-width: 5rem;
  }
`;

export const FormInputStyle = styled(InputStyle)`
  > div,
  > input {
    height: 3.125rem;
  }
`;

export const FormTextareaStyle = styled(InputStyle)`
  width: 100%;
  > div,
  > input {
    height: 15rem;
  }
  > div {
    min-width: 30rem;
    width: 100%;
  }
`;

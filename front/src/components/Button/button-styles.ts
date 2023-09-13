import { styled } from "styled-components"


export const Container = styled.button<{ disabled: boolean }>`
    background-color: ${props => props.disabled? '#f6f6f6': '#00c8b3' };
    color: ${props => props.disabled? '#dddcdc': '#ffff'};;
    border: 1px solid  ${props => props.disabled? '#dddcdc': '#00c8b3' };
    border-radius: 1rem;
    height: 75px;
    width: 100%;
    &:hover {
      opacity: 70%;
    }
`;
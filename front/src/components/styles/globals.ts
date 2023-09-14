import styled from "styled-components";

export const Container = styled.div<{
  label?: string;
  icon?: any;
  error?: boolean;
  active?: boolean;
  type?: string;
  width?: number;
  height?: number;
}>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;

  span {
    font-weight: 700;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: 0.2em;
    white-space: nowrap;
    text-transform: uppercase;
    color: black;
    opacity: 0.8;
  }

  .input-error {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    font-weight: 700;
    font-size: 11px;
    line-height: 14px;
    color: red;

    p {
      margin-top: 2px;
    }

    svg {
      transform: scale(1.4);
    }
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: 1 center;
    padding: ${(props) =>
      props.icon === undefined ? "5px 4px 5px 20px" : "5px 4px 5px 60px"};
    gap: 15px;
    height: 44px;
    background: ${(props) => {
      if (props.active) {
        return "#EEFAF5";
      }

      return "white";
    }};

    border-bottom: 2px solid
      ${(props) => {
        if (props.error) {
          return "#FAB3BB";
        }
        return "black";
      }};

    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #c1c1c1;
    }
  }
`;

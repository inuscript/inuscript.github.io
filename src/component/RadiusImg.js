import styled from "styled-components";

export const SizeImg = styled.img`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
export const RadiusImg = styled(SizeImg)`
  border-radius: ${({ size }) => size}px;
`;

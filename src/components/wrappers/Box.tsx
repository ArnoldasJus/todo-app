import styled from "styled-components";

export const Box = styled.div.attrs<{
  $border?: string;
  $padding?: string;
  $width?: string;
}>((props) => ({
  $border: props.$border || "none",
  $padding: props.$padding || "20px",
  $width: props.$width || "-webkit-fill-available",
}))`
  border: ${(props) => props.$border};
  padding: ${(props) => props.$padding};
  width: ${(props) => props.$width};
`;

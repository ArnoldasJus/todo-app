import styled from "styled-components";

export const FlexWrapper = styled.div.attrs<{$direction?: string; $alignItems?: string; $gap?: string; $justifyContent?: string;}>(props => ({
    $direction: props.$direction || 'row',
    $alignItems: props.$alignItems || 'unset',
    $justifyContent: props.$justifyContent || 'unset',
    $gap: props.$gap || 'unset',
}))`
  display: flex;

  flex-direction: ${props => props.$direction};
  align-items: ${props => props.$alignItems};
  justify-content: ${props => props.$justifyContent};
  gap: ${props => props.$gap};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

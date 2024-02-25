// import { ReactNode, CSSProperties } from "react";
// import * as S from './styled'


// type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

// type TypographyProps = {
//     tag?: TagVariants;
//     children: ReactNode;
//   };

//  export const Typography = ({ tag = 'p', children }: TypographyProps) => (
//     <S.DynamicTypography tag={tag}>
//       {children}
//     </S.DynamicTypography>
//   );

import { createElement, ReactNode } from 'react';
import styled from 'styled-components';

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TypographyProps = {
  tag: TagVariants;
  children: ReactNode;
} & React.ComponentProps<TagVariants>;

export const Typography = styled(({ tag, children, ...props }: TypographyProps) =>
  createElement(tag, props, children),
)`
color: #00adb5;
font-family: "Roboto Mono", monospace;
`;

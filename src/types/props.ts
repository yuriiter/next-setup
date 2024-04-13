import { ElementType, PropsWithChildren } from "react";
import { PolymorphicComponentProps } from "./polymorphicProps";
import { StyledObject } from "styled-components";

export type PropsWithClassName = {
  className?: string;
};

export type PropsWithSx = {
  sx?: StyledObject;
};

export type StandardProps = PropsWithChildren &
  PropsWithClassName &
  PropsWithSx;

export type BoxProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  PropsWithClassName & PropsWithSx
>;

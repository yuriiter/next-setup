"use client";
import { ElementType } from "react";
import { BoxProps, PropsWithSx } from "../types/props";
import styled from "styled-components";

const NotStyledBox = <C extends ElementType = "div">(props: BoxProps<C>) => {
  const { component, sx, mRef, ...rest } = props;

  const Component = component ?? "div";

  return <Component ref={mRef} {...rest} />;
};

export const Box = styled(NotStyledBox).withConfig({
  shouldForwardProp: (prop) => prop !== "sx",
})<PropsWithSx>(({ sx }) => sx);

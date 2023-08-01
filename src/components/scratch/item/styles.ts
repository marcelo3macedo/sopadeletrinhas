import { IImageProps } from "@interfaces/images/IImageProps";
import { styled } from "styled-components/native";

export const Container = styled.View`
    alignItems: center;
    justifyContent: center;
    borderRadius: 16px;
`;

export const Picture = styled.Image<IImageProps>`
    position: absolute;
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    backgroundColor: transparent;
    alignSelf: center;
    borderRadius: 16px;
`;

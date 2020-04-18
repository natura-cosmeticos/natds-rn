import React from "react";
import icoArrowLeft from "../../assets/icons/ic_arrow_left_white.png";
import { ButtonWrapper, ButtonText, ButtonIcon } from "./NatButton.styles";
type NatButtonProps = {
  iconLeft?: string,
  label: string,
  noUpperCase?: boolean,
  onPress: (...args: any[]) => any,
  type?: string
};
export const NatButton: React.SFC<NatButtonProps> = ({
  onPress,
  type,
  label,
  noUpperCase,
  iconLeft
}) => (
  <ButtonWrapper
    accessible
    accessibilityRole="button"
    onPress={onPress}
    type={type}
    disabled={type === "disabled"}
  >
    {iconLeft && <ButtonIcon source={iconLeft} />}
    <ButtonText type={type} accessibilityLabel={`${label}`}>
      {noUpperCase ? label : label.toUpperCase()}
    </ButtonText>
    {type === "card" && <ButtonIcon source={icoArrowLeft} />}
  </ButtonWrapper>
);
NatButton.defaultProps = {
  type: "default"
};

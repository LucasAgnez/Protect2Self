import * as React from "react";
import {
  PlasmicSino__OptionGroup,
  DefaultSino__OptionGroupProps
} from "./plasmic/protect_2_self/PlasmicSino__OptionGroup";

interface Sino__OptionGroupProps extends DefaultSino__OptionGroupProps {
  // Feel free to add any additional props that this component should receive
}
function Sino__OptionGroup(props: Sino__OptionGroupProps) {
  const { plasmicProps } = PlasmicSino__OptionGroup.useBehavior(props);
  return <PlasmicSino__OptionGroup {...plasmicProps} />;
}

export default Object.assign(Sino__OptionGroup, {
  __plumeType: "select-option-group"
});

import * as React from "react";
import {
  PlasmicOpcoesMembro__OptionGroup,
  DefaultOpcoesMembro__OptionGroupProps
} from "./plasmic/protect_2_self/PlasmicOpcoesMembro__OptionGroup";

interface OpcoesMembro__OptionGroupProps
  extends DefaultOpcoesMembro__OptionGroupProps {}

function OpcoesMembro__OptionGroup(props: OpcoesMembro__OptionGroupProps) {
  const { plasmicProps } = PlasmicOpcoesMembro__OptionGroup.useBehavior(props);
  return <PlasmicOpcoesMembro__OptionGroup {...plasmicProps} />;
}

export default Object.assign(OpcoesMembro__OptionGroup, {
  __plumeType: "select-option-group"
});

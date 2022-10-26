import * as React from "react";
import {
  PlasmicOpcoesAdm__OptionGroup,
  DefaultOpcoesAdm__OptionGroupProps
} from "./plasmic/protect_2_self/PlasmicOpcoesAdm__OptionGroup";

interface OpcoesAdm__OptionGroupProps
  extends DefaultOpcoesAdm__OptionGroupProps {}

function OpcoesAdm__OptionGroup(props: OpcoesAdm__OptionGroupProps) {
  const { plasmicProps } = PlasmicOpcoesAdm__OptionGroup.useBehavior(props);
  return <PlasmicOpcoesAdm__OptionGroup {...plasmicProps} />;
}

export default Object.assign(OpcoesAdm__OptionGroup, {
  __plumeType: "select-option-group"
});

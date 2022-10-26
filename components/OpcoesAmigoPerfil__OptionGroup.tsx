import * as React from "react";
import {
  PlasmicOpcoesAmigoPerfil__OptionGroup,
  DefaultOpcoesAmigoPerfil__OptionGroupProps
} from "./plasmic/protect_2_self/PlasmicOpcoesAmigoPerfil__OptionGroup";

interface OpcoesAmigoPerfil__OptionGroupProps
  extends DefaultOpcoesAmigoPerfil__OptionGroupProps {}

function OpcoesAmigoPerfil__OptionGroup(
  props: OpcoesAmigoPerfil__OptionGroupProps
) {
  const { plasmicProps } =
    PlasmicOpcoesAmigoPerfil__OptionGroup.useBehavior(props);
  return <PlasmicOpcoesAmigoPerfil__OptionGroup {...plasmicProps} />;
}

export default Object.assign(OpcoesAmigoPerfil__OptionGroup, {
  __plumeType: "select-option-group"
});

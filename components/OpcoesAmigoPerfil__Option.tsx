import * as React from "react";
import {
  PlasmicOpcoesAmigoPerfil__Option,
  DefaultOpcoesAmigoPerfil__OptionProps
} from "./plasmic/protect_2_self/PlasmicOpcoesAmigoPerfil__Option";
import { SelectOptionRef } from "@plasmicapp/react-web";

interface OpcoesAmigoPerfil__OptionProps
  extends DefaultOpcoesAmigoPerfil__OptionProps {}

function OpcoesAmigoPerfil__Option_(
  props: OpcoesAmigoPerfil__OptionProps,
  ref: SelectOptionRef
) {
  const { plasmicProps } = PlasmicOpcoesAmigoPerfil__Option.useBehavior(
    props,
    ref
  );
  return <PlasmicOpcoesAmigoPerfil__Option {...plasmicProps} />;
}

const OpcoesAmigoPerfil__Option = React.forwardRef(OpcoesAmigoPerfil__Option_);

export default Object.assign(OpcoesAmigoPerfil__Option, {
  __plumeType: "select-option"
});

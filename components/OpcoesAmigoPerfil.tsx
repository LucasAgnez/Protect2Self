import * as React from "react";
import {
  PlasmicOpcoesAmigoPerfil,
  DefaultOpcoesAmigoPerfilProps
} from "./plasmic/protect_2_self/PlasmicOpcoesAmigoPerfil";
import { SelectRef } from "@plasmicapp/react-web";
import Option from "./OpcoesAmigoPerfil__Option";
import OptionGroup from "./OpcoesAmigoPerfil__OptionGroup";

interface OpcoesAmigoPerfilProps extends DefaultOpcoesAmigoPerfilProps {}

function OpcoesAmigoPerfil_(props: OpcoesAmigoPerfilProps, ref: SelectRef) {
  const { plasmicProps, state } = PlasmicOpcoesAmigoPerfil.useBehavior(
    props,
    ref
  );
  return <PlasmicOpcoesAmigoPerfil {...plasmicProps} />;
}

const OpcoesAmigoPerfil = React.forwardRef(OpcoesAmigoPerfil_);

export default Object.assign(OpcoesAmigoPerfil, {
  Option,
  OptionGroup,
  __plumeType: "select"
});

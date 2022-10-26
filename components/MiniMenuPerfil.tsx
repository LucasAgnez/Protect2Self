import * as React from "react";
import {
  PlasmicMiniMenuPerfil,
  DefaultMiniMenuPerfilProps
} from "./plasmic/protect_2_self/PlasmicMiniMenuPerfil";
import { SelectRef } from "@plasmicapp/react-web";
import Option from "./MiniMenuPerfil__Option";
import OptionGroup from "./MiniMenuPerfil__OptionGroup";

interface MiniMenuPerfilProps extends DefaultMiniMenuPerfilProps {}

function MiniMenuPerfil_(props: MiniMenuPerfilProps, ref: SelectRef) {
  const { plasmicProps, state } = PlasmicMiniMenuPerfil.useBehavior(props, ref);
  return <PlasmicMiniMenuPerfil {...plasmicProps} />;
}

const MiniMenuPerfil = React.forwardRef(MiniMenuPerfil_);

export default Object.assign(MiniMenuPerfil, {
  Option,
  OptionGroup,
  __plumeType: "select"
});

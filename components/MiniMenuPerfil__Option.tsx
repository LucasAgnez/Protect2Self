import * as React from "react";
import {
  PlasmicMiniMenuPerfil__Option,
  DefaultMiniMenuPerfil__OptionProps
} from "./plasmic/protect_2_self/PlasmicMiniMenuPerfil__Option";
import { SelectOptionRef } from "@plasmicapp/react-web";

interface MiniMenuPerfil__OptionProps
  extends DefaultMiniMenuPerfil__OptionProps {}

function MiniMenuPerfil__Option_(
  props: MiniMenuPerfil__OptionProps,
  ref: SelectOptionRef
) {
  const { plasmicProps } = PlasmicMiniMenuPerfil__Option.useBehavior(
    props,
    ref
  );
  return <PlasmicMiniMenuPerfil__Option {...plasmicProps} />;
}

const MiniMenuPerfil__Option = React.forwardRef(MiniMenuPerfil__Option_);

export default Object.assign(MiniMenuPerfil__Option, {
  __plumeType: "select-option"
});

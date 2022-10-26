import * as React from "react";
import {
  PlasmicMiniMenuPerfil__OptionGroup,
  DefaultMiniMenuPerfil__OptionGroupProps
} from "./plasmic/protect_2_self/PlasmicMiniMenuPerfil__OptionGroup";

interface MiniMenuPerfil__OptionGroupProps
  extends DefaultMiniMenuPerfil__OptionGroupProps {}

function MiniMenuPerfil__OptionGroup(props: MiniMenuPerfil__OptionGroupProps) {
  const { plasmicProps } =
    PlasmicMiniMenuPerfil__OptionGroup.useBehavior(props);
  return <PlasmicMiniMenuPerfil__OptionGroup {...plasmicProps} />;
}

export default Object.assign(MiniMenuPerfil__OptionGroup, {
  __plumeType: "select-option-group"
});

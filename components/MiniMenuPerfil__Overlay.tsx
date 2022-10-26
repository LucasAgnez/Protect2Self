import * as React from "react";
import {
  PlasmicMiniMenuPerfil__Overlay,
  DefaultMiniMenuPerfil__OverlayProps
} from "./plasmic/protect_2_self/PlasmicMiniMenuPerfil__Overlay";
import { TriggeredOverlayRef } from "@plasmicapp/react-web";

interface MiniMenuPerfil__OverlayProps
  extends DefaultMiniMenuPerfil__OverlayProps {}

function MiniMenuPerfil__Overlay_(
  props: MiniMenuPerfil__OverlayProps,
  ref: TriggeredOverlayRef
) {
  const { plasmicProps } = PlasmicMiniMenuPerfil__Overlay.useBehavior(
    props,
    ref
  );
  return <PlasmicMiniMenuPerfil__Overlay {...plasmicProps} />;
}

const MiniMenuPerfil__Overlay = React.forwardRef(MiniMenuPerfil__Overlay_);

export default Object.assign(MiniMenuPerfil__Overlay, {
  __plumeType: "triggered-overlay"
});

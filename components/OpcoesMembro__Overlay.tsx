import * as React from "react";
import {
  PlasmicOpcoesMembro__Overlay,
  DefaultOpcoesMembro__OverlayProps
} from "./plasmic/protect_2_self/PlasmicOpcoesMembro__Overlay";
import { TriggeredOverlayRef } from "@plasmicapp/react-web";

interface OpcoesMembro__OverlayProps
  extends DefaultOpcoesMembro__OverlayProps {}

function OpcoesMembro__Overlay_(
  props: OpcoesMembro__OverlayProps,
  ref: TriggeredOverlayRef
) {
  const { plasmicProps } = PlasmicOpcoesMembro__Overlay.useBehavior(props, ref);
  return <PlasmicOpcoesMembro__Overlay {...plasmicProps} />;
}

const OpcoesMembro__Overlay = React.forwardRef(OpcoesMembro__Overlay_);

export default Object.assign(OpcoesMembro__Overlay, {
  __plumeType: "triggered-overlay"
});

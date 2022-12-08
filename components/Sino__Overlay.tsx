import * as React from "react";
import {
  PlasmicSino__Overlay,
  DefaultSino__OverlayProps
} from "./plasmic/protect_2_self/PlasmicSino__Overlay";
import { TriggeredOverlayRef } from "@plasmicapp/react-web";

interface Sino__OverlayProps extends DefaultSino__OverlayProps {
  // Feel free to add any additional props that this component should receive
}
function Sino__Overlay_(props: Sino__OverlayProps, ref: TriggeredOverlayRef) {
  const { plasmicProps } = PlasmicSino__Overlay.useBehavior(props, ref);
  return <PlasmicSino__Overlay {...plasmicProps} />;
}

const Sino__Overlay = React.forwardRef(Sino__Overlay_);

export default Object.assign(Sino__Overlay, {
  __plumeType: "triggered-overlay"
});

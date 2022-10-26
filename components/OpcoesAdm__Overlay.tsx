import * as React from "react";
import {
  PlasmicOpcoesAdm__Overlay,
  DefaultOpcoesAdm__OverlayProps
} from "./plasmic/protect_2_self/PlasmicOpcoesAdm__Overlay";
import { TriggeredOverlayRef } from "@plasmicapp/react-web";

interface OpcoesAdm__OverlayProps extends DefaultOpcoesAdm__OverlayProps {}

function OpcoesAdm__Overlay_(
  props: OpcoesAdm__OverlayProps,
  ref: TriggeredOverlayRef
) {
  const { plasmicProps } = PlasmicOpcoesAdm__Overlay.useBehavior(props, ref);
  return <PlasmicOpcoesAdm__Overlay {...plasmicProps} />;
}

const OpcoesAdm__Overlay = React.forwardRef(OpcoesAdm__Overlay_);

export default Object.assign(OpcoesAdm__Overlay, {
  __plumeType: "triggered-overlay"
});

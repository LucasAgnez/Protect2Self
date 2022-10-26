import * as React from "react";
import {
  PlasmicOpcoesAmigoPerfil__Overlay,
  DefaultOpcoesAmigoPerfil__OverlayProps
} from "./plasmic/protect_2_self/PlasmicOpcoesAmigoPerfil__Overlay";
import { TriggeredOverlayRef } from "@plasmicapp/react-web";

interface OpcoesAmigoPerfil__OverlayProps
  extends DefaultOpcoesAmigoPerfil__OverlayProps {}

function OpcoesAmigoPerfil__Overlay_(
  props: OpcoesAmigoPerfil__OverlayProps,
  ref: TriggeredOverlayRef
) {
  const { plasmicProps } = PlasmicOpcoesAmigoPerfil__Overlay.useBehavior(
    props,
    ref
  );
  return <PlasmicOpcoesAmigoPerfil__Overlay {...plasmicProps} />;
}

const OpcoesAmigoPerfil__Overlay = React.forwardRef(
  OpcoesAmigoPerfil__Overlay_
);

export default Object.assign(OpcoesAmigoPerfil__Overlay, {
  __plumeType: "triggered-overlay"
});

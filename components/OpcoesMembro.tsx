import * as React from "react";
import {
  PlasmicOpcoesMembro,
  DefaultOpcoesMembroProps
} from "./plasmic/protect_2_self/PlasmicOpcoesMembro";
import { SelectRef } from "@plasmicapp/react-web";
import Option from "./OpcoesMembro__Option";
import OptionGroup from "./OpcoesMembro__OptionGroup";

interface OpcoesMembroProps extends DefaultOpcoesMembroProps {}

function OpcoesMembro_(props: OpcoesMembroProps, ref: SelectRef) {
  const { plasmicProps, state } = PlasmicOpcoesMembro.useBehavior(props, ref);
  return <PlasmicOpcoesMembro {...plasmicProps} />;
}

const OpcoesMembro = React.forwardRef(OpcoesMembro_);

export default Object.assign(OpcoesMembro, {
  Option,
  OptionGroup,
  __plumeType: "select"
});

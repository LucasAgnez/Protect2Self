import * as React from "react";
import {
  PlasmicOpcoesAdm,
  DefaultOpcoesAdmProps
} from "./plasmic/protect_2_self/PlasmicOpcoesAdm";
import { SelectRef } from "@plasmicapp/react-web";
import Option from "./OpcoesAdm__Option";
import OptionGroup from "./OpcoesAdm__OptionGroup";

interface OpcoesAdmProps extends DefaultOpcoesAdmProps {}

function OpcoesAdm_(props: OpcoesAdmProps, ref: SelectRef) {
  const { plasmicProps, state } = PlasmicOpcoesAdm.useBehavior(props, ref);
  return <PlasmicOpcoesAdm {...plasmicProps} />;
}

const OpcoesAdm = React.forwardRef(OpcoesAdm_);

export default Object.assign(OpcoesAdm, {
  Option,
  OptionGroup,
  __plumeType: "select"
});

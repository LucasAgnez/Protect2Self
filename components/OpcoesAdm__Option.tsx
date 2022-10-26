import * as React from "react";
import {
  PlasmicOpcoesAdm__Option,
  DefaultOpcoesAdm__OptionProps
} from "./plasmic/protect_2_self/PlasmicOpcoesAdm__Option";
import { SelectOptionRef } from "@plasmicapp/react-web";

interface OpcoesAdm__OptionProps extends DefaultOpcoesAdm__OptionProps {}

function OpcoesAdm__Option_(
  props: OpcoesAdm__OptionProps,
  ref: SelectOptionRef
) {
  const { plasmicProps } = PlasmicOpcoesAdm__Option.useBehavior(props, ref);
  return <PlasmicOpcoesAdm__Option {...plasmicProps} />;
}

const OpcoesAdm__Option = React.forwardRef(OpcoesAdm__Option_);

export default Object.assign(OpcoesAdm__Option, {
  __plumeType: "select-option"
});

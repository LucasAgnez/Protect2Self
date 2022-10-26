import * as React from "react";
import {
  PlasmicOpcoesMembro__Option,
  DefaultOpcoesMembro__OptionProps
} from "./plasmic/protect_2_self/PlasmicOpcoesMembro__Option";
import { SelectOptionRef } from "@plasmicapp/react-web";

interface OpcoesMembro__OptionProps extends DefaultOpcoesMembro__OptionProps {}

function OpcoesMembro__Option_(
  props: OpcoesMembro__OptionProps,
  ref: SelectOptionRef
) {
  const { plasmicProps } = PlasmicOpcoesMembro__Option.useBehavior(props, ref);
  return <PlasmicOpcoesMembro__Option {...plasmicProps} />;
}

const OpcoesMembro__Option = React.forwardRef(OpcoesMembro__Option_);

export default Object.assign(OpcoesMembro__Option, {
  __plumeType: "select-option"
});

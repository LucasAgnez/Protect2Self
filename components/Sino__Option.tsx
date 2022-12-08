import * as React from "react";
import {
  PlasmicSino__Option,
  DefaultSino__OptionProps
} from "./plasmic/protect_2_self/PlasmicSino__Option";
import { SelectOptionRef } from "@plasmicapp/react-web";

interface Sino__OptionProps extends DefaultSino__OptionProps {
  // Feel free to add any additional props that this component should receive
}
function Sino__Option_(props: Sino__OptionProps, ref: SelectOptionRef) {
  const { plasmicProps } = PlasmicSino__Option.useBehavior(props, ref);
  return <PlasmicSino__Option {...plasmicProps} />;
}

const Sino__Option = React.forwardRef(Sino__Option_);

export default Object.assign(Sino__Option, {
  __plumeType: "select-option"
});

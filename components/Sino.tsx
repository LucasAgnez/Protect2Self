import * as React from "react";
import {
  PlasmicSino,
  DefaultSinoProps
} from "./plasmic/protect_2_self/PlasmicSino";
import { SelectRef } from "@plasmicapp/react-web";
import Option from "./Sino__Option";
import OptionGroup from "./Sino__OptionGroup";

interface SinoProps extends DefaultSinoProps {
  // Feel free to add any additional props that this component should receive
}
function Sino_(props: SinoProps, ref: SelectRef) {
  const { plasmicProps, state } = PlasmicSino.useBehavior(props, ref);
  return <PlasmicSino {...plasmicProps} />;
}

const Sino = React.forwardRef(Sino_);

export default Object.assign(Sino, {
  Option,
  OptionGroup,
  __plumeType: "select"
});

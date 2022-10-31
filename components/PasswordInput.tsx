import * as React from "react";
import {
  PlasmicPasswordInput,
  DefaultPasswordInputProps
} from "./plasmic/protect_2_self/PlasmicPasswordInput";
import { TextInputRef } from "@plasmicapp/react-web";

interface PasswordInputProps extends DefaultPasswordInputProps {}

function PasswordInput_(props: PasswordInputProps, ref: TextInputRef) {
  const { plasmicProps } = PlasmicPasswordInput.useBehavior<PasswordInputProps>(
    props,
    ref
  );
  return <PlasmicPasswordInput {...plasmicProps} />;
}

const PasswordInput = React.forwardRef(PasswordInput_);

export default Object.assign(PasswordInput, {
  __plumeType: "text-input"
});

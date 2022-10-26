import * as React from "react";
import {
  PlasmicMainPageButton,
  DefaultMainPageButtonProps
} from "./plasmic/protect_2_self/PlasmicMainPageButton";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface MainPageButtonProps extends DefaultMainPageButtonProps {}

function MainPageButton_(props: MainPageButtonProps, ref: ButtonRef) {
  const { plasmicProps } =
    PlasmicMainPageButton.useBehavior<MainPageButtonProps>(props, ref);
  return <PlasmicMainPageButton {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<MainPageButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<MainPageButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const MainPageButton = React.forwardRef(
  MainPageButton_
) as any as ButtonComponentType;

export default Object.assign(MainPageButton, {
  __plumeType: "button"
});

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: BqML-slVbHs
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicOpcoesMembro__Overlay.module.css"; // plasmic-import: BqML-slVbHs/css

import SUPER__PlasmicOpcoesMembro from "./PlasmicOpcoesMembro"; // plasmic-import: _FgEegp8IaS/render

export type PlasmicOpcoesMembro__Overlay__VariantMembers = {
  relativePlacement: "top" | "bottom" | "left" | "right";
};
export type PlasmicOpcoesMembro__Overlay__VariantsArgs = {
  relativePlacement?: SingleChoiceArg<"top" | "bottom" | "left" | "right">;
};
type VariantPropType = keyof PlasmicOpcoesMembro__Overlay__VariantsArgs;
export const PlasmicOpcoesMembro__Overlay__VariantProps =
  new Array<VariantPropType>("relativePlacement");

export type PlasmicOpcoesMembro__Overlay__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicOpcoesMembro__Overlay__ArgsType;
export const PlasmicOpcoesMembro__Overlay__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicOpcoesMembro__Overlay__OverridesType = {
  root?: p.Flex<"div">;
  top?: p.Flex<"div">;
  middle?: p.Flex<"div">;
  left?: p.Flex<"div">;
  main?: p.Flex<"div">;
  right?: p.Flex<"div">;
  bottom?: p.Flex<"div">;
};

export interface DefaultOpcoesMembro__OverlayProps
  extends pp.BaseTriggeredOverlayProps {
  children?: React.ReactNode;
}

function PlasmicOpcoesMembro__Overlay__RenderFunc(props: {
  variants: PlasmicOpcoesMembro__Overlay__VariantsArgs;
  args: PlasmicOpcoesMembro__Overlay__ArgsType;
  overrides: PlasmicOpcoesMembro__Overlay__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "relativePlacement",
        type: "private",
        initFunc: ($props, $state) => $props.relativePlacement
      }
    ],
    [$props]
  );
  const $state = p.useDollarState(stateSpecs, $props);

  const superContexts = {
    OpcoesMembro: React.useContext(SUPER__PlasmicOpcoesMembro.Context)
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {(hasVariant($state, "relativePlacement", "bottom") ? true : false) ? (
        <div
          data-plasmic-name={"top"}
          data-plasmic-override={overrides.top}
          className={classNames(projectcss.all, sty.top, {
            [sty.toprelativePlacement_bottom]: hasVariant(
              $state,
              "relativePlacement",
              "bottom"
            )
          })}
        />
      ) : null}

      <div
        data-plasmic-name={"middle"}
        data-plasmic-override={overrides.middle}
        className={classNames(projectcss.all, sty.middle)}
      >
        {(hasVariant($state, "relativePlacement", "right") ? true : false) ? (
          <div
            data-plasmic-name={"left"}
            data-plasmic-override={overrides.left}
            className={classNames(projectcss.all, sty.left, {
              [sty.leftrelativePlacement_right]: hasVariant(
                $state,
                "relativePlacement",
                "right"
              )
            })}
          />
        ) : null}

        <div
          data-plasmic-name={"main"}
          data-plasmic-override={overrides.main}
          className={classNames(projectcss.all, sty.main)}
        >
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.children
          })}
        </div>

        {(hasVariant($state, "relativePlacement", "left") ? true : false) ? (
          <div
            data-plasmic-name={"right"}
            data-plasmic-override={overrides.right}
            className={classNames(projectcss.all, sty.right, {
              [sty.rightrelativePlacement_left]: hasVariant(
                $state,
                "relativePlacement",
                "left"
              )
            })}
          />
        ) : null}
      </div>

      {(hasVariant($state, "relativePlacement", "top") ? true : false) ? (
        <div
          data-plasmic-name={"bottom"}
          data-plasmic-override={overrides.bottom}
          className={classNames(projectcss.all, sty.bottom, {
            [sty.bottomrelativePlacement_top]: hasVariant(
              $state,
              "relativePlacement",
              "top"
            )
          })}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseTriggeredOverlayProps>(
  props: P,
  ref: pp.TriggeredOverlayRef
) {
  return pp.useTriggeredOverlay(
    PlasmicOpcoesMembro__Overlay,
    props,
    {
      isPlacedTopVariant: { group: "relativePlacement", variant: "top" },
      isPlacedBottomVariant: { group: "relativePlacement", variant: "bottom" },
      isPlacedLeftVariant: { group: "relativePlacement", variant: "left" },
      isPlacedRightVariant: { group: "relativePlacement", variant: "right" },
      contentSlot: "children",
      root: "root"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "top", "middle", "left", "main", "right", "bottom"],
  top: ["top"],
  middle: ["middle", "left", "main", "right"],
  left: ["left"],
  main: ["main"],
  right: ["right"],
  bottom: ["bottom"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  top: "div";
  middle: "div";
  left: "div";
  main: "div";
  right: "div";
  bottom: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOpcoesMembro__Overlay__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOpcoesMembro__Overlay__VariantsArgs;
    args?: PlasmicOpcoesMembro__Overlay__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOpcoesMembro__Overlay__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicOpcoesMembro__Overlay__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicOpcoesMembro__Overlay__ArgProps,
          internalVariantPropNames: PlasmicOpcoesMembro__Overlay__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicOpcoesMembro__Overlay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOpcoesMembro__Overlay";
  } else {
    func.displayName = `PlasmicOpcoesMembro__Overlay.${nodeName}`;
  }
  return func;
}

export const PlasmicOpcoesMembro__Overlay = Object.assign(
  // Top-level PlasmicOpcoesMembro__Overlay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    top: makeNodeComponent("top"),
    middle: makeNodeComponent("middle"),
    left: makeNodeComponent("left"),
    main: makeNodeComponent("main"),
    right: makeNodeComponent("right"),
    bottom: makeNodeComponent("bottom"),

    // Metadata about props expected for PlasmicOpcoesMembro__Overlay
    internalVariantProps: PlasmicOpcoesMembro__Overlay__VariantProps,
    internalArgProps: PlasmicOpcoesMembro__Overlay__ArgProps,

    useBehavior
  }
);

export default PlasmicOpcoesMembro__Overlay;
/* prettier-ignore-end */

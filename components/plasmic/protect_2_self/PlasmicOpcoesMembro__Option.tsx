// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: UqHzbATt5ih
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
import sty from "./PlasmicOpcoesMembro__Option.module.css"; // plasmic-import: UqHzbATt5ih/css

import SUPER__PlasmicOpcoesMembro from "./PlasmicOpcoesMembro"; // plasmic-import: _FgEegp8IaS/render

export type PlasmicOpcoesMembro__Option__VariantMembers = {
  isSelected: "isSelected";
  isHighlighted: "isHighlighted";
  isDisabled: "isDisabled";
};
export type PlasmicOpcoesMembro__Option__VariantsArgs = {
  isSelected?: SingleBooleanChoiceArg<"isSelected">;
  isHighlighted?: SingleBooleanChoiceArg<"isHighlighted">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
};
type VariantPropType = keyof PlasmicOpcoesMembro__Option__VariantsArgs;
export const PlasmicOpcoesMembro__Option__VariantProps =
  new Array<VariantPropType>("isSelected", "isHighlighted", "isDisabled");

export type PlasmicOpcoesMembro__Option__ArgsType = {
  children?: React.ReactNode;
  value?: string;
  textValue?: string;
};
type ArgPropType = keyof PlasmicOpcoesMembro__Option__ArgsType;
export const PlasmicOpcoesMembro__Option__ArgProps = new Array<ArgPropType>(
  "children",
  "value",
  "textValue"
);

export type PlasmicOpcoesMembro__Option__OverridesType = {
  root?: p.Flex<"div">;
  labelContainer?: p.Flex<"div">;
};

export interface DefaultOpcoesMembro__OptionProps
  extends pp.BaseSelectOptionProps {}

function PlasmicOpcoesMembro__Option__RenderFunc(props: {
  variants: PlasmicOpcoesMembro__Option__VariantsArgs;
  args: PlasmicOpcoesMembro__Option__ArgsType;
  overrides: PlasmicOpcoesMembro__Option__OverridesType;

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
        path: "isSelected",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.isSelected
      },
      {
        path: "isHighlighted",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.isHighlighted
      },
      {
        path: "isDisabled",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.isDisabled
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

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
        sty.root,
        {
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootisHighlighted]: hasVariant(
            $state,
            "isHighlighted",
            "isHighlighted"
          ),
          [sty.rootisSelected]: hasVariant($state, "isSelected", "isSelected")
        }
      )}
    >
      <div
        data-plasmic-name={"labelContainer"}
        data-plasmic-override={overrides.labelContainer}
        className={classNames(projectcss.all, sty.labelContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Option",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenisHighlighted]: hasVariant(
              $state,
              "isHighlighted",
              "isHighlighted"
            ),
            [sty.slotTargetChildrenisSelected]: hasVariant(
              $state,
              "isSelected",
              "isSelected"
            )
          })
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseSelectOptionProps>(
  props: P,
  ref: pp.SelectOptionRef
) {
  return pp.useSelectOption(
    PlasmicOpcoesMembro__Option,
    props,
    {
      isSelectedVariant: { group: "isSelected", variant: "isSelected" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      isHighlightedVariant: {
        group: "isHighlighted",
        variant: "isHighlighted"
      },
      labelSlot: "children",
      root: "root",
      labelContainer: "labelContainer"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "labelContainer"],
  labelContainer: ["labelContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  labelContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOpcoesMembro__Option__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOpcoesMembro__Option__VariantsArgs;
    args?: PlasmicOpcoesMembro__Option__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOpcoesMembro__Option__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicOpcoesMembro__Option__ArgsType,
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
          internalArgPropNames: PlasmicOpcoesMembro__Option__ArgProps,
          internalVariantPropNames: PlasmicOpcoesMembro__Option__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicOpcoesMembro__Option__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOpcoesMembro__Option";
  } else {
    func.displayName = `PlasmicOpcoesMembro__Option.${nodeName}`;
  }
  return func;
}

export const PlasmicOpcoesMembro__Option = Object.assign(
  // Top-level PlasmicOpcoesMembro__Option renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    labelContainer: makeNodeComponent("labelContainer"),

    // Metadata about props expected for PlasmicOpcoesMembro__Option
    internalVariantProps: PlasmicOpcoesMembro__Option__VariantProps,
    internalArgProps: PlasmicOpcoesMembro__Option__ArgProps,

    useBehavior
  }
);

export default PlasmicOpcoesMembro__Option;
/* prettier-ignore-end */

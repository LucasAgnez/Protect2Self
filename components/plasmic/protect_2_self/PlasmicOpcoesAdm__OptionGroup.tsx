// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: pzKIMAe7y7J
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
import OpcoesAdm__Option from "../../OpcoesAdm__Option"; // plasmic-import: BdQJvqA4IgO/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicOpcoesAdm__OptionGroup.module.css"; // plasmic-import: pzKIMAe7y7J/css

import SUPER__PlasmicOpcoesAdm from "./PlasmicOpcoesAdm"; // plasmic-import: d9qSkDAT15Y/render

export type PlasmicOpcoesAdm__OptionGroup__VariantMembers = {
  noTitle: "noTitle";
  isFirst: "isFirst";
};

export type PlasmicOpcoesAdm__OptionGroup__VariantsArgs = {
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
  isFirst?: SingleBooleanChoiceArg<"isFirst">;
};

type VariantPropType = keyof PlasmicOpcoesAdm__OptionGroup__VariantsArgs;
export const PlasmicOpcoesAdm__OptionGroup__VariantProps =
  new Array<VariantPropType>("noTitle", "isFirst");

export type PlasmicOpcoesAdm__OptionGroup__ArgsType = {
  children?: React.ReactNode;
  title?: React.ReactNode;
};

type ArgPropType = keyof PlasmicOpcoesAdm__OptionGroup__ArgsType;
export const PlasmicOpcoesAdm__OptionGroup__ArgProps = new Array<ArgPropType>(
  "children",
  "title"
);

export type PlasmicOpcoesAdm__OptionGroup__OverridesType = {
  root?: p.Flex<"div">;
  separator?: p.Flex<"div">;
  titleContainer?: p.Flex<"div">;
  optionsContainer?: p.Flex<"div">;
};

export interface DefaultOpcoesAdm__OptionGroupProps
  extends pp.BaseSelectOptionGroupProps {
  title?: React.ReactNode;
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
}

function PlasmicOpcoesAdm__OptionGroup__RenderFunc(props: {
  variants: PlasmicOpcoesAdm__OptionGroup__VariantsArgs;
  args: PlasmicOpcoesAdm__OptionGroup__ArgsType;
  overrides: PlasmicOpcoesAdm__OptionGroup__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "noTitle",
        type: "private",
        initFunc: ($props, $state) => $props.noTitle
      },

      {
        path: "isFirst",
        type: "private",
        initFunc: ($props, $state) => $props.isFirst
      }
    ],

    [$props]
  );
  const $state = p.useDollarState(stateSpecs, $props);

  const superContexts = {
    OpcoesAdm: React.useContext(SUPER__PlasmicOpcoesAdm.Context)
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
      {(hasVariant($state, "isFirst", "isFirst") ? false : true) ? (
        <div
          data-plasmic-name={"separator"}
          data-plasmic-override={overrides.separator}
          className={classNames(projectcss.all, sty.separator, {
            [sty.separatorisFirst]: hasVariant($state, "isFirst", "isFirst"),
            [sty.separatornoTitle]: hasVariant($state, "noTitle", "noTitle")
          })}
        />
      ) : null}
      {(hasVariant($state, "noTitle", "noTitle") ? false : true) ? (
        <div
          data-plasmic-name={"titleContainer"}
          data-plasmic-override={overrides.titleContainer}
          className={classNames(projectcss.all, sty.titleContainer, {
            [sty.titleContainerisFirst]: hasVariant(
              $state,
              "isFirst",
              "isFirst"
            ),
            [sty.titleContainernoTitle]: hasVariant(
              $state,
              "noTitle",
              "noTitle"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Group Name",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}
        </div>
      ) : null}

      <div
        data-plasmic-name={"optionsContainer"}
        data-plasmic-override={overrides.optionsContainer}
        className={classNames(projectcss.all, sty.optionsContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <OpcoesAdm__Option
                className={classNames("__wab_instance", sty.option__yxGp1)}
              />

              <OpcoesAdm__Option
                className={classNames("__wab_instance", sty.option__aZMy)}
              />
            </React.Fragment>
          ),
          value: args.children
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseSelectOptionGroupProps>(props: P) {
  return pp.useSelectOptionGroup(PlasmicOpcoesAdm__OptionGroup, props, {
    noTitleVariant: { group: "noTitle", variant: "noTitle" },
    isFirstVariant: { group: "isFirst", variant: "isFirst" },
    optionsSlot: "children",
    titleSlot: "title",
    root: "root",
    separator: "separator",
    titleContainer: "titleContainer",
    optionsContainer: "optionsContainer"
  });
}

const PlasmicDescendants = {
  root: ["root", "separator", "titleContainer", "optionsContainer"],
  separator: ["separator"],
  titleContainer: ["titleContainer"],
  optionsContainer: ["optionsContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  separator: "div";
  titleContainer: "div";
  optionsContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOpcoesAdm__OptionGroup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOpcoesAdm__OptionGroup__VariantsArgs;
    args?: PlasmicOpcoesAdm__OptionGroup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOpcoesAdm__OptionGroup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOpcoesAdm__OptionGroup__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
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
          internalArgPropNames: PlasmicOpcoesAdm__OptionGroup__ArgProps,
          internalVariantPropNames: PlasmicOpcoesAdm__OptionGroup__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicOpcoesAdm__OptionGroup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOpcoesAdm__OptionGroup";
  } else {
    func.displayName = `PlasmicOpcoesAdm__OptionGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicOpcoesAdm__OptionGroup = Object.assign(
  // Top-level PlasmicOpcoesAdm__OptionGroup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    separator: makeNodeComponent("separator"),
    titleContainer: makeNodeComponent("titleContainer"),
    optionsContainer: makeNodeComponent("optionsContainer"),

    // Metadata about props expected for PlasmicOpcoesAdm__OptionGroup
    internalVariantProps: PlasmicOpcoesAdm__OptionGroup__VariantProps,
    internalArgProps: PlasmicOpcoesAdm__OptionGroup__ArgProps,

    useBehavior
  }
);

export default PlasmicOpcoesAdm__OptionGroup;
/* prettier-ignore-end */

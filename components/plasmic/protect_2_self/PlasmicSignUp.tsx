// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: 5zVsdLWHz-
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
import sty from "./PlasmicSignUp.module.css"; // plasmic-import: 5zVsdLWHz-/css

export type PlasmicSignUp__VariantMembers = {};

export type PlasmicSignUp__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignUp__VariantsArgs;
export const PlasmicSignUp__VariantProps = new Array<VariantPropType>();

export type PlasmicSignUp__ArgsType = {};
type ArgPropType = keyof PlasmicSignUp__ArgsType;
export const PlasmicSignUp__ArgProps = new Array<ArgPropType>();

export type PlasmicSignUp__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultSignUpProps {
  className?: string;
}

function PlasmicSignUp__RenderFunc(props: {
  variants: PlasmicSignUp__VariantsArgs;
  args: PlasmicSignUp__ArgsType;
  overrides: PlasmicSignUp__OverridesType;

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

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={`/criar-conta`}
      platform={"nextjs"}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(
          projectcss.all,
          projectcss.a,
          projectcss.__wab_text,
          sty.link
        )}
        component={Link}
        platform={"nextjs"}
      >
        <React.Fragment>
          <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ color: "#000000" }}
          >
            {"Registre-se"}
          </span>
        </React.Fragment>
      </p.PlasmicLink>
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignUp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignUp__VariantsArgs;
    args?: PlasmicSignUp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignUp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSignUp__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicSignUp__ArgProps,
          internalVariantPropNames: PlasmicSignUp__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSignUp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignUp";
  } else {
    func.displayName = `PlasmicSignUp.${nodeName}`;
  }
  return func;
}

export const PlasmicSignUp = Object.assign(
  // Top-level PlasmicSignUp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicSignUp
    internalVariantProps: PlasmicSignUp__VariantProps,
    internalArgProps: PlasmicSignUp__ArgProps
  }
);

export default PlasmicSignUp;
/* prettier-ignore-end */

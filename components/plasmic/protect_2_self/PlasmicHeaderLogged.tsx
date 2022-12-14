// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: gLO3qE5tA7
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
import Header from "../../Header"; // plasmic-import: Cew9iEQBJMu/component
import Menu from "../../Menu"; // plasmic-import: PZ7Wdg9iZJ/component

import { useScreenVariants as useScreenVariantswwY5HaVRu8X4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WwY5HA-vRU8x4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicHeaderLogged.module.css"; // plasmic-import: gLO3qE5tA7/css

export type PlasmicHeaderLogged__VariantMembers = {};
export type PlasmicHeaderLogged__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeaderLogged__VariantsArgs;
export const PlasmicHeaderLogged__VariantProps = new Array<VariantPropType>();

export type PlasmicHeaderLogged__ArgsType = {};
type ArgPropType = keyof PlasmicHeaderLogged__ArgsType;
export const PlasmicHeaderLogged__ArgProps = new Array<ArgPropType>();

export type PlasmicHeaderLogged__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  menu?: p.Flex<typeof Menu>;
};

export interface DefaultHeaderLoggedProps {
  className?: string;
}

function PlasmicHeaderLogged__RenderFunc(props: {
  variants: PlasmicHeaderLogged__VariantsArgs;
  args: PlasmicHeaderLogged__ArgsType;
  overrides: PlasmicHeaderLogged__OverridesType;

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

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswwY5HaVRu8X4()
  });

  return (
    true ? (
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
        <Header
          data-plasmic-name={"header"}
          data-plasmic-override={overrides.header}
          className={classNames("__wab_instance", sty.header)}
          line={"off" as const}
          shortcut={
            hasVariant(globalVariants, "screen", "tablet") ? true : true
          }
        />

        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <Menu
            data-plasmic-name={"menu"}
            data-plasmic-override={overrides.menu}
            className={classNames("__wab_instance", sty.menu)}
          />
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "menu"],
  header: ["header"],
  menu: ["menu"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  menu: typeof Menu;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeaderLogged__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeaderLogged__VariantsArgs;
    args?: PlasmicHeaderLogged__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeaderLogged__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeaderLogged__ArgsType,
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
          internalArgPropNames: PlasmicHeaderLogged__ArgProps,
          internalVariantPropNames: PlasmicHeaderLogged__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeaderLogged__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeaderLogged";
  } else {
    func.displayName = `PlasmicHeaderLogged.${nodeName}`;
  }
  return func;
}

export const PlasmicHeaderLogged = Object.assign(
  // Top-level PlasmicHeaderLogged renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    menu: makeNodeComponent("menu"),

    // Metadata about props expected for PlasmicHeaderLogged
    internalVariantProps: PlasmicHeaderLogged__VariantProps,
    internalArgProps: PlasmicHeaderLogged__ArgProps
  }
);

export default PlasmicHeaderLogged;
/* prettier-ignore-end */

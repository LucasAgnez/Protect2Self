// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: hXP-9YKRw2
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
import HeaderLogged from "../../HeaderLogged"; // plasmic-import: gLO3qE5tA7/component
import MiniaturaAmigo from "../../MiniaturaAmigo"; // plasmic-import: -2Az4tsp3u/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicListaDeAmigos.module.css"; // plasmic-import: hXP-9YKRw2/css

export type PlasmicListaDeAmigos__VariantMembers = {};
export type PlasmicListaDeAmigos__VariantsArgs = {};
type VariantPropType = keyof PlasmicListaDeAmigos__VariantsArgs;
export const PlasmicListaDeAmigos__VariantProps = new Array<VariantPropType>();

export type PlasmicListaDeAmigos__ArgsType = {};
type ArgPropType = keyof PlasmicListaDeAmigos__ArgsType;
export const PlasmicListaDeAmigos__ArgProps = new Array<ArgPropType>();

export type PlasmicListaDeAmigos__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  container?: p.Flex<"div">;
};

export interface DefaultListaDeAmigosProps {}

function PlasmicListaDeAmigos__RenderFunc(props: {
  variants: PlasmicListaDeAmigos__VariantsArgs;
  args: PlasmicListaDeAmigos__ArgsType;
  overrides: PlasmicListaDeAmigos__OverridesType;

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

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <HeaderLogged
            data-plasmic-name={"headerLogged"}
            data-plasmic-override={overrides.headerLogged}
            className={classNames("__wab_instance", sty.headerLogged)}
          />

          <div
            data-plasmic-name={"container"}
            data-plasmic-override={overrides.container}
            className={classNames(projectcss.all, sty.container)}
          >
            <MiniaturaAmigo
              className={classNames("__wab_instance", sty.miniaturaAmigo__hgvh)}
            />

            <MiniaturaAmigo
              className={classNames(
                "__wab_instance",
                sty.miniaturaAmigo__qfhIp
              )}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "headerLogged", "container"],
  headerLogged: ["headerLogged"],
  container: ["container"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
  container: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicListaDeAmigos__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicListaDeAmigos__VariantsArgs;
    args?: PlasmicListaDeAmigos__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicListaDeAmigos__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicListaDeAmigos__ArgsType,
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
          internalArgPropNames: PlasmicListaDeAmigos__ArgProps,
          internalVariantPropNames: PlasmicListaDeAmigos__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicListaDeAmigos__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicListaDeAmigos";
  } else {
    func.displayName = `PlasmicListaDeAmigos.${nodeName}`;
  }
  return func;
}

export const PlasmicListaDeAmigos = Object.assign(
  // Top-level PlasmicListaDeAmigos renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    container: makeNodeComponent("container"),

    // Metadata about props expected for PlasmicListaDeAmigos
    internalVariantProps: PlasmicListaDeAmigos__VariantProps,
    internalArgProps: PlasmicListaDeAmigos__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicListaDeAmigos;
/* prettier-ignore-end */

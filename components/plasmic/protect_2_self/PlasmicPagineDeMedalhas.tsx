// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: Ju1A340bzB-
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
import Medalha from "../../Medalha"; // plasmic-import: OOiN6jLpGW/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicPagineDeMedalhas.module.css"; // plasmic-import: Ju1A340bzB-/css

export type PlasmicPagineDeMedalhas__VariantMembers = {};

export type PlasmicPagineDeMedalhas__VariantsArgs = {};
type VariantPropType = keyof PlasmicPagineDeMedalhas__VariantsArgs;
export const PlasmicPagineDeMedalhas__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPagineDeMedalhas__ArgsType = {};
type ArgPropType = keyof PlasmicPagineDeMedalhas__ArgsType;
export const PlasmicPagineDeMedalhas__ArgProps = new Array<ArgPropType>();

export type PlasmicPagineDeMedalhas__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
};

export interface DefaultPagineDeMedalhasProps {}

function PlasmicPagineDeMedalhas__RenderFunc(props: {
  variants: PlasmicPagineDeMedalhas__VariantsArgs;
  args: PlasmicPagineDeMedalhas__ArgsType;
  overrides: PlasmicPagineDeMedalhas__OverridesType;

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

          <div className={classNames(projectcss.all, sty.columns__qSb7M)}>
            <div className={classNames(projectcss.all, sty.column__jZlL)}>
              <Medalha
                className={classNames("__wab_instance", sty.medalha__gtMio)}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__zr5AU)}>
              <Medalha
                className={classNames("__wab_instance", sty.medalha__mrIqA)}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__h3HtH)}>
              <Medalha
                className={classNames("__wab_instance", sty.medalha___0C7Zk)}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__a63RL)}>
              <Medalha
                className={classNames("__wab_instance", sty.medalha__g3O)}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__jaXuC)}>
              <Medalha
                className={classNames("__wab_instance", sty.medalha___7QrZ)}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__zuEGs)}>
              <Medalha
                className={classNames("__wab_instance", sty.medalha__kaC4O)}
              />
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.columns__nvFmq)}>
            <div className={classNames(projectcss.all, sty.column__oEe1H)}>
              <Medalha
                className={classNames("__wab_instance", sty.medalha__et6Lc)}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__eaS9K)}>
              <Medalha
                className={classNames("__wab_instance", sty.medalha__dfvej)}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__vKSh)}>
              <Medalha
                className={classNames("__wab_instance", sty.medalha__fJbWo)}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column___2FUz)}>
              <Medalha
                className={classNames("__wab_instance", sty.medalha__ux9E)}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__hmikX)}>
              <Medalha
                className={classNames("__wab_instance", sty.medalha__seRTw)}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__vqqWb)}>
              <Medalha
                className={classNames("__wab_instance", sty.medalha__nwnkw)}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "headerLogged"],
  headerLogged: ["headerLogged"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPagineDeMedalhas__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPagineDeMedalhas__VariantsArgs;
    args?: PlasmicPagineDeMedalhas__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPagineDeMedalhas__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPagineDeMedalhas__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPagineDeMedalhas__ArgProps,
          internalVariantPropNames: PlasmicPagineDeMedalhas__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPagineDeMedalhas__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPagineDeMedalhas";
  } else {
    func.displayName = `PlasmicPagineDeMedalhas.${nodeName}`;
  }
  return func;
}

export const PlasmicPagineDeMedalhas = Object.assign(
  // Top-level PlasmicPagineDeMedalhas renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),

    // Metadata about props expected for PlasmicPagineDeMedalhas
    internalVariantProps: PlasmicPagineDeMedalhas__VariantProps,
    internalArgProps: PlasmicPagineDeMedalhas__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPagineDeMedalhas;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: S7kg1gcj7-v
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
import BotoesMenuPrincipal from "../../BotoesMenuPrincipal"; // plasmic-import: 8PboOpLyrBm/component
import TextInput from "../../TextInput"; // plasmic-import: 7q4dYfz6E__/component

import { useScreenVariants as useScreenVariantswwY5HaVRu8X4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WwY5HA-vRU8x4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicMeusGrupos.module.css"; // plasmic-import: S7kg1gcj7-v/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: WK-uNEKVCw3/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon

export type PlasmicMeusGrupos__VariantMembers = {};
export type PlasmicMeusGrupos__VariantsArgs = {};
type VariantPropType = keyof PlasmicMeusGrupos__VariantsArgs;
export const PlasmicMeusGrupos__VariantProps = new Array<VariantPropType>();

export type PlasmicMeusGrupos__ArgsType = {};
type ArgPropType = keyof PlasmicMeusGrupos__ArgsType;
export const PlasmicMeusGrupos__ArgProps = new Array<ArgPropType>();

export type PlasmicMeusGrupos__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  columns?: p.Flex<"div">;
  botoesMenuPrincipal?: p.Flex<typeof BotoesMenuPrincipal>;
  buscaGrupo?: p.Flex<typeof TextInput>;
  container?: p.Flex<"div">;
};

export interface DefaultMeusGruposProps {}

function PlasmicMeusGrupos__RenderFunc(props: {
  variants: PlasmicMeusGrupos__VariantsArgs;
  args: PlasmicMeusGrupos__ArgsType;
  overrides: PlasmicMeusGrupos__OverridesType;

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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicMeusGrupos.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicMeusGrupos.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicMeusGrupos.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
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
            {true ? (
              <HeaderLogged
                data-plasmic-name={"headerLogged"}
                data-plasmic-override={overrides.headerLogged}
                className={classNames("__wab_instance", sty.headerLogged)}
              />
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__eZJtJ)}>
                  <BotoesMenuPrincipal
                    data-plasmic-name={"botoesMenuPrincipal"}
                    data-plasmic-override={overrides.botoesMenuPrincipal}
                    className={classNames(
                      "__wab_instance",
                      sty.botoesMenuPrincipal
                    )}
                  />
                </div>

                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.column__z4Foz)}
                  >
                    <TextInput
                      data-plasmic-name={"buscaGrupo"}
                      data-plasmic-override={overrides.buscaGrupo}
                      className={classNames("__wab_instance", sty.buscaGrupo)}
                      id={"buscaGrupo" as const}
                      showStartIcon={true}
                    />

                    {(
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? true
                        : true
                    ) ? (
                      <div
                        data-plasmic-name={"container"}
                        data-plasmic-override={overrides.container}
                        className={classNames(projectcss.all, sty.container)}
                      />
                    ) : null}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "headerLogged",
    "columns",
    "botoesMenuPrincipal",
    "buscaGrupo",
    "container"
  ],
  headerLogged: ["headerLogged"],
  columns: ["columns", "botoesMenuPrincipal", "buscaGrupo", "container"],
  botoesMenuPrincipal: ["botoesMenuPrincipal"],
  buscaGrupo: ["buscaGrupo"],
  container: ["container"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
  columns: "div";
  botoesMenuPrincipal: typeof BotoesMenuPrincipal;
  buscaGrupo: typeof TextInput;
  container: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMeusGrupos__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMeusGrupos__VariantsArgs;
    args?: PlasmicMeusGrupos__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMeusGrupos__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMeusGrupos__ArgsType,
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
          internalArgPropNames: PlasmicMeusGrupos__ArgProps,
          internalVariantPropNames: PlasmicMeusGrupos__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMeusGrupos__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMeusGrupos";
  } else {
    func.displayName = `PlasmicMeusGrupos.${nodeName}`;
  }
  return func;
}

export const PlasmicMeusGrupos = Object.assign(
  // Top-level PlasmicMeusGrupos renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    columns: makeNodeComponent("columns"),
    botoesMenuPrincipal: makeNodeComponent("botoesMenuPrincipal"),
    buscaGrupo: makeNodeComponent("buscaGrupo"),
    container: makeNodeComponent("container"),

    // Metadata about props expected for PlasmicMeusGrupos
    internalVariantProps: PlasmicMeusGrupos__VariantProps,
    internalArgProps: PlasmicMeusGrupos__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Enviar",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMeusGrupos;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: Cwcul4UrW6HS
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
import MiniaturaMeta from "../../MiniaturaMeta"; // plasmic-import: LQeW26Vvq3/component
import MiniaturaGrupo from "../../MiniaturaGrupo"; // plasmic-import: QylFKCNC0eW/component

import { useScreenVariants as useScreenVariantswwY5HaVRu8X4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WwY5HA-vRU8x4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicInicial.module.css"; // plasmic-import: Cwcul4UrW6HS/css

export type PlasmicInicial__VariantMembers = {};
export type PlasmicInicial__VariantsArgs = {};
type VariantPropType = keyof PlasmicInicial__VariantsArgs;
export const PlasmicInicial__VariantProps = new Array<VariantPropType>();

export type PlasmicInicial__ArgsType = {};
type ArgPropType = keyof PlasmicInicial__ArgsType;
export const PlasmicInicial__ArgProps = new Array<ArgPropType>();

export type PlasmicInicial__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  columns?: p.Flex<"div">;
  botoesMenuPrincipal?: p.Flex<typeof BotoesMenuPrincipal>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultInicialProps {}

function PlasmicInicial__RenderFunc(props: {
  variants: PlasmicInicial__VariantsArgs;
  args: PlasmicInicial__ArgsType;
  overrides: PlasmicInicial__OverridesType;

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
        <title key="title">{PlasmicInicial.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicInicial.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicInicial.pageMetadata.title}
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
                <div className={classNames(projectcss.all, sty.column__xzDzp)}>
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
                    className={classNames(projectcss.all, sty.column__sPnqS)}
                  >
                    {(
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? true
                        : true
                    ) ? (
                      <div
                        data-plasmic-name={"freeBox"}
                        data-plasmic-override={overrides.freeBox}
                        className={classNames(projectcss.all, sty.freeBox)}
                      >
                        {true ? (
                          <MiniaturaMeta
                            className={classNames(
                              "__wab_instance",
                              sty.miniaturaMeta__hu97B
                            )}
                          />
                        ) : null}
                        {true ? (
                          <MiniaturaMeta
                            className={classNames(
                              "__wab_instance",
                              sty.miniaturaMeta__qmnXn
                            )}
                          />
                        ) : null}
                        {true ? (
                          <MiniaturaMeta
                            className={classNames(
                              "__wab_instance",
                              sty.miniaturaMeta__gmczo
                            )}
                          />
                        ) : null}
                        {true ? (
                          <MiniaturaGrupo
                            className={classNames(
                              "__wab_instance",
                              sty.miniaturaGrupo___7Rd5L
                            )}
                          />
                        ) : null}
                        {true ? (
                          <MiniaturaGrupo
                            className={classNames(
                              "__wab_instance",
                              sty.miniaturaGrupo___9S3MZ
                            )}
                          />
                        ) : null}
                        {true ? (
                          <MiniaturaGrupo
                            className={classNames(
                              "__wab_instance",
                              sty.miniaturaGrupo__vkx0G
                            )}
                          />
                        ) : null}
                      </div>
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
  root: ["root", "headerLogged", "columns", "botoesMenuPrincipal", "freeBox"],
  headerLogged: ["headerLogged"],
  columns: ["columns", "botoesMenuPrincipal", "freeBox"],
  botoesMenuPrincipal: ["botoesMenuPrincipal"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
  columns: "div";
  botoesMenuPrincipal: typeof BotoesMenuPrincipal;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInicial__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInicial__VariantsArgs;
    args?: PlasmicInicial__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInicial__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInicial__ArgsType,
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
          internalArgPropNames: PlasmicInicial__ArgProps,
          internalVariantPropNames: PlasmicInicial__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicInicial__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInicial";
  } else {
    func.displayName = `PlasmicInicial.${nodeName}`;
  }
  return func;
}

export const PlasmicInicial = Object.assign(
  // Top-level PlasmicInicial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    columns: makeNodeComponent("columns"),
    botoesMenuPrincipal: makeNodeComponent("botoesMenuPrincipal"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicInicial
    internalVariantProps: PlasmicInicial__VariantProps,
    internalArgProps: PlasmicInicial__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Enviar",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicInicial;
/* prettier-ignore-end */

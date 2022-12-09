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
import UserPhoto from "../../UserPhoto"; // plasmic-import: iFRyT7eXLH/component
import Button from "../../Button"; // plasmic-import: CJ-3PKujtR-/component
import BotoesPerfil from "../../BotoesPerfil"; // plasmic-import: RmM8H_pqLGC/component

import { useScreenVariants as useScreenVariantswwY5HaVRu8X4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WwY5HA-vRU8x4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicPaginaDeMedalhas.module.css"; // plasmic-import: Ju1A340bzB-/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicPaginaDeMedalhas__VariantMembers = {};
export type PlasmicPaginaDeMedalhas__VariantsArgs = {};
type VariantPropType = keyof PlasmicPaginaDeMedalhas__VariantsArgs;
export const PlasmicPaginaDeMedalhas__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPaginaDeMedalhas__ArgsType = {};
type ArgPropType = keyof PlasmicPaginaDeMedalhas__ArgsType;
export const PlasmicPaginaDeMedalhas__ArgProps = new Array<ArgPropType>();

export type PlasmicPaginaDeMedalhas__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  columns?: p.Flex<"div">;
  userPhoto?: p.Flex<typeof UserPhoto>;
  button?: p.Flex<typeof Button>;
  botoesPerfil?: p.Flex<typeof BotoesPerfil>;
  text?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  container?: p.Flex<"div">;
};

export interface DefaultPaginaDeMedalhasProps {}

function PlasmicPaginaDeMedalhas__RenderFunc(props: {
  variants: PlasmicPaginaDeMedalhas__VariantsArgs;
  args: PlasmicPaginaDeMedalhas__ArgsType;
  overrides: PlasmicPaginaDeMedalhas__OverridesType;

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

          {true ? (
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              {true ? (
                <div className={classNames(projectcss.all, sty.column___3D71)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox___92R2O)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__jsvwd)}
                    >
                      <UserPhoto
                        data-plasmic-name={"userPhoto"}
                        data-plasmic-override={overrides.userPhoto}
                        className={classNames("__wab_instance", sty.userPhoto)}
                      />

                      <Button
                        data-plasmic-name={"button"}
                        data-plasmic-override={overrides.button}
                        className={classNames("__wab_instance", sty.button)}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Editar Perfil"
                          : "Editar Foto"}
                      </Button>
                    </div>

                    {true ? (
                      <BotoesPerfil
                        data-plasmic-name={"botoesPerfil"}
                        data-plasmic-override={overrides.botoesPerfil}
                        className={classNames(
                          "__wab_instance",
                          sty.botoesPerfil
                        )}
                      />
                    ) : null}
                  </div>
                </div>
              ) : null}
              {true ? (
                <div className={classNames(projectcss.all, sty.column__snfx5)}>
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <h2
                          data-plasmic-name={"h2"}
                          data-plasmic-override={overrides.h2}
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#FFFFFF" }}
                            >
                              {"Medalhas"}
                            </span>
                          </React.Fragment>
                        </h2>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>

                  <div
                    data-plasmic-name={"container"}
                    data-plasmic-override={overrides.container}
                    className={classNames(projectcss.all, sty.container)}
                  />
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "headerLogged",
    "columns",
    "userPhoto",
    "button",
    "botoesPerfil",
    "text",
    "h2",
    "container"
  ],
  headerLogged: ["headerLogged"],
  columns: [
    "columns",
    "userPhoto",
    "button",
    "botoesPerfil",
    "text",
    "h2",
    "container"
  ],
  userPhoto: ["userPhoto"],
  button: ["button"],
  botoesPerfil: ["botoesPerfil"],
  text: ["text", "h2"],
  h2: ["h2"],
  container: ["container"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
  columns: "div";
  userPhoto: typeof UserPhoto;
  button: typeof Button;
  botoesPerfil: typeof BotoesPerfil;
  text: "div";
  h2: "h2";
  container: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPaginaDeMedalhas__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPaginaDeMedalhas__VariantsArgs;
    args?: PlasmicPaginaDeMedalhas__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPaginaDeMedalhas__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPaginaDeMedalhas__ArgsType,
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
          internalArgPropNames: PlasmicPaginaDeMedalhas__ArgProps,
          internalVariantPropNames: PlasmicPaginaDeMedalhas__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPaginaDeMedalhas__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPaginaDeMedalhas";
  } else {
    func.displayName = `PlasmicPaginaDeMedalhas.${nodeName}`;
  }
  return func;
}

export const PlasmicPaginaDeMedalhas = Object.assign(
  // Top-level PlasmicPaginaDeMedalhas renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    columns: makeNodeComponent("columns"),
    userPhoto: makeNodeComponent("userPhoto"),
    button: makeNodeComponent("button"),
    botoesPerfil: makeNodeComponent("botoesPerfil"),
    text: makeNodeComponent("text"),
    h2: makeNodeComponent("h2"),
    container: makeNodeComponent("container"),

    // Metadata about props expected for PlasmicPaginaDeMedalhas
    internalVariantProps: PlasmicPaginaDeMedalhas__VariantProps,
    internalArgProps: PlasmicPaginaDeMedalhas__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPaginaDeMedalhas;
/* prettier-ignore-end */

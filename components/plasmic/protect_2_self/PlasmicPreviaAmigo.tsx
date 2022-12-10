// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: gEkBigb_MQN
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
import Button from "../../Button"; // plasmic-import: CJ-3PKujtR-/component

import { useScreenVariants as useScreenVariantswwY5HaVRu8X4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WwY5HA-vRU8x4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicPreviaAmigo.module.css"; // plasmic-import: gEkBigb_MQN/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import LeftArrowSvgrepoComsvgIcon from "./icons/PlasmicIcon__LeftArrowSvgrepoComsvg"; // plasmic-import: fmFspLMBVy/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicPreviaAmigo__VariantMembers = {};
export type PlasmicPreviaAmigo__VariantsArgs = {};
type VariantPropType = keyof PlasmicPreviaAmigo__VariantsArgs;
export const PlasmicPreviaAmigo__VariantProps = new Array<VariantPropType>();

export type PlasmicPreviaAmigo__ArgsType = {};
type ArgPropType = keyof PlasmicPreviaAmigo__ArgsType;
export const PlasmicPreviaAmigo__ArgProps = new Array<ArgPropType>();

export type PlasmicPreviaAmigo__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  botoesMenuPrincipal?: p.Flex<typeof BotoesMenuPrincipal>;
  voltar?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
  fotoPerfil?: p.Flex<typeof p.PlasmicImg>;
  nomeUsuario?: p.Flex<"h2">;
  grupoComum?: p.Flex<"div">;
  amigosComum?: p.Flex<"div">;
  aceitar?: p.Flex<typeof Button>;
  recusar?: p.Flex<typeof Button>;
};

export interface DefaultPreviaAmigoProps {}

function PlasmicPreviaAmigo__RenderFunc(props: {
  variants: PlasmicPreviaAmigo__VariantsArgs;
  args: PlasmicPreviaAmigo__ArgsType;
  overrides: PlasmicPreviaAmigo__OverridesType;

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
        <title key="title">{PlasmicPreviaAmigo.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicPreviaAmigo.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicPreviaAmigo.pageMetadata.title}
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
              <div className={classNames(projectcss.all, sty.columns__oBgJx)}>
                <div className={classNames(projectcss.all, sty.column__hqZwv)}>
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
                    className={classNames(projectcss.all, sty.column__h8E8X)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__zmEav)}
                    >
                      <Button
                        data-plasmic-name={"voltar"}
                        data-plasmic-override={overrides.voltar}
                        className={classNames("__wab_instance", sty.voltar)}
                        color={"clear" as const}
                        link={`/notificacoes`}
                        shape={"round" as const}
                      >
                        <LeftArrowSvgrepoComsvgIcon
                          data-plasmic-name={"svg"}
                          data-plasmic-override={overrides.svg}
                          className={classNames(projectcss.all, sty.svg)}
                          role={"img"}
                        />
                      </Button>
                    </div>

                    {(
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? true
                        : true
                    ) ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__t9X30
                        )}
                      >
                        <p.PlasmicImg
                          data-plasmic-name={"fotoPerfil"}
                          data-plasmic-override={overrides.fotoPerfil}
                          alt={""}
                          className={classNames(sty.fotoPerfil)}
                          displayHeight={"172px" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"auto" as const}
                          loading={"lazy" as const}
                          src={{
                            src: "/plasmic/protect_2_self/images/defaultPfpsvgpng.png",
                            fullWidth: 2048,
                            fullHeight: 2048,
                            aspectRatio: undefined
                          }}
                        />

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__dy5Bt
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__rxyjA
                            )}
                          >
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              {
                                <h2
                                  data-plasmic-name={"nomeUsuario"}
                                  data-plasmic-override={overrides.nomeUsuario}
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h2,
                                    projectcss.__wab_text,
                                    sty.nomeUsuario
                                  )}
                                >
                                  <React.Fragment>
                                    <span
                                      className={
                                        "plasmic_default__all plasmic_default__span"
                                      }
                                      style={{ color: "#FFFFFF" }}
                                    >
                                      {"Nome Usuario"}
                                    </span>
                                  </React.Fragment>
                                </h2>
                              }
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          </div>

                          <div
                            className={classNames(
                              projectcss.all,
                              sty.columns__tAGxh
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column___17R9
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__ylIi
                                )}
                              >
                                <React.Fragment>
                                  <React.Fragment>{""}</React.Fragment>
                                  {
                                    <h5
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.h5,
                                        projectcss.__wab_text,
                                        sty.h5__sZQf
                                      )}
                                    >
                                      <React.Fragment>
                                        <span
                                          className={
                                            "plasmic_default__all plasmic_default__span"
                                          }
                                          style={{ color: "#C9C9C9" }}
                                        >
                                          {"Grupos em Comum:"}
                                        </span>
                                      </React.Fragment>
                                    </h5>
                                  }
                                  <React.Fragment>{""}</React.Fragment>
                                </React.Fragment>
                              </div>

                              <div
                                data-plasmic-name={"grupoComum"}
                                data-plasmic-override={overrides.grupoComum}
                                className={classNames(
                                  projectcss.all,
                                  sty.grupoComum
                                )}
                              />
                            </div>

                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__fiAlx
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text___04HzK
                                )}
                              >
                                <React.Fragment>
                                  <React.Fragment>{""}</React.Fragment>
                                  {
                                    <h5
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.h5,
                                        projectcss.__wab_text,
                                        sty.h5__qbjhq
                                      )}
                                    >
                                      <React.Fragment>
                                        <span
                                          className={
                                            "plasmic_default__all plasmic_default__span"
                                          }
                                          style={{ color: "#C9C9C9" }}
                                        >
                                          {"Amigos em Comum:"}
                                        </span>
                                      </React.Fragment>
                                    </h5>
                                  }
                                  <React.Fragment>{""}</React.Fragment>
                                </React.Fragment>
                              </div>

                              <div
                                data-plasmic-name={"amigosComum"}
                                data-plasmic-override={overrides.amigosComum}
                                className={classNames(
                                  projectcss.all,
                                  sty.amigosComum
                                )}
                              />
                            </div>
                          </div>

                          {true ? (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__xPkXv
                              )}
                            >
                              <Button
                                data-plasmic-name={"aceitar"}
                                data-plasmic-override={overrides.aceitar}
                                className={classNames(
                                  "__wab_instance",
                                  sty.aceitar
                                )}
                                color={"yellow" as const}
                              >
                                {"Adicionar"}
                              </Button>

                              <Button
                                data-plasmic-name={"recusar"}
                                data-plasmic-override={overrides.recusar}
                                className={classNames(
                                  "__wab_instance",
                                  sty.recusar
                                )}
                                color={"red" as const}
                              >
                                {"Recusar"}
                              </Button>
                            </div>
                          ) : null}
                        </div>
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
  root: [
    "root",
    "headerLogged",
    "botoesMenuPrincipal",
    "voltar",
    "svg",
    "fotoPerfil",
    "nomeUsuario",
    "grupoComum",
    "amigosComum",
    "aceitar",
    "recusar"
  ],
  headerLogged: ["headerLogged"],
  botoesMenuPrincipal: ["botoesMenuPrincipal"],
  voltar: ["voltar", "svg"],
  svg: ["svg"],
  fotoPerfil: ["fotoPerfil"],
  nomeUsuario: ["nomeUsuario"],
  grupoComum: ["grupoComum"],
  amigosComum: ["amigosComum"],
  aceitar: ["aceitar"],
  recusar: ["recusar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
  botoesMenuPrincipal: typeof BotoesMenuPrincipal;
  voltar: typeof Button;
  svg: "svg";
  fotoPerfil: typeof p.PlasmicImg;
  nomeUsuario: "h2";
  grupoComum: "div";
  amigosComum: "div";
  aceitar: typeof Button;
  recusar: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPreviaAmigo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPreviaAmigo__VariantsArgs;
    args?: PlasmicPreviaAmigo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPreviaAmigo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPreviaAmigo__ArgsType,
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
          internalArgPropNames: PlasmicPreviaAmigo__ArgProps,
          internalVariantPropNames: PlasmicPreviaAmigo__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPreviaAmigo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPreviaAmigo";
  } else {
    func.displayName = `PlasmicPreviaAmigo.${nodeName}`;
  }
  return func;
}

export const PlasmicPreviaAmigo = Object.assign(
  // Top-level PlasmicPreviaAmigo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    botoesMenuPrincipal: makeNodeComponent("botoesMenuPrincipal"),
    voltar: makeNodeComponent("voltar"),
    svg: makeNodeComponent("svg"),
    fotoPerfil: makeNodeComponent("fotoPerfil"),
    nomeUsuario: makeNodeComponent("nomeUsuario"),
    grupoComum: makeNodeComponent("grupoComum"),
    amigosComum: makeNodeComponent("amigosComum"),
    aceitar: makeNodeComponent("aceitar"),
    recusar: makeNodeComponent("recusar"),

    // Metadata about props expected for PlasmicPreviaAmigo
    internalVariantProps: PlasmicPreviaAmigo__VariantProps,
    internalArgProps: PlasmicPreviaAmigo__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Enviar",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPreviaAmigo;
/* prettier-ignore-end */

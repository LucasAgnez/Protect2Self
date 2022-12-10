// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: ZRQuop94HB5
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
import sty from "./PlasmicPreviaGrupo.module.css"; // plasmic-import: ZRQuop94HB5/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import LeftArrowSvgrepoComsvgIcon from "./icons/PlasmicIcon__LeftArrowSvgrepoComsvg"; // plasmic-import: fmFspLMBVy/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicPreviaGrupo__VariantMembers = {};
export type PlasmicPreviaGrupo__VariantsArgs = {};
type VariantPropType = keyof PlasmicPreviaGrupo__VariantsArgs;
export const PlasmicPreviaGrupo__VariantProps = new Array<VariantPropType>();

export type PlasmicPreviaGrupo__ArgsType = {};
type ArgPropType = keyof PlasmicPreviaGrupo__ArgsType;
export const PlasmicPreviaGrupo__ArgProps = new Array<ArgPropType>();

export type PlasmicPreviaGrupo__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  columns?: p.Flex<"div">;
  botoesMenuPrincipal?: p.Flex<typeof BotoesMenuPrincipal>;
  voltar?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
  fotoPerfil?: p.Flex<typeof p.PlasmicImg>;
  nomeGrupo?: p.Flex<"h2">;
  descricaoGrupo?: p.Flex<"div">;
  h5?: p.Flex<"h5">;
  aceitar?: p.Flex<typeof Button>;
  recusar?: p.Flex<typeof Button>;
};

export interface DefaultPreviaGrupoProps {}

function PlasmicPreviaGrupo__RenderFunc(props: {
  variants: PlasmicPreviaGrupo__VariantsArgs;
  args: PlasmicPreviaGrupo__ArgsType;
  overrides: PlasmicPreviaGrupo__OverridesType;

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
        <title key="title">{PlasmicPreviaGrupo.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicPreviaGrupo.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicPreviaGrupo.pageMetadata.title}
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
                <div className={classNames(projectcss.all, sty.column__i9PRf)}>
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
                    className={classNames(projectcss.all, sty.column__zcO1G)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__lGp7A)}
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
                          sty.freeBox__x6Bwe
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
                            sty.freeBox__mXYz
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__tgnin
                            )}
                          >
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              {
                                <h2
                                  data-plasmic-name={"nomeGrupo"}
                                  data-plasmic-override={overrides.nomeGrupo}
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h2,
                                    projectcss.__wab_text,
                                    sty.nomeGrupo
                                  )}
                                >
                                  <React.Fragment>
                                    <span
                                      className={
                                        "plasmic_default__all plasmic_default__span"
                                      }
                                      style={{ color: "#FFFFFF" }}
                                    >
                                      {"Nome Grupo"}
                                    </span>
                                  </React.Fragment>
                                </h2>
                              }
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          </div>

                          {(
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? true
                              : true
                          ) ? (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__mqV65
                              )}
                            >
                              {true ? (
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    sty.freeBox__t5CIi
                                  )}
                                >
                                  <div
                                    data-plasmic-name={"descricaoGrupo"}
                                    data-plasmic-override={
                                      overrides.descricaoGrupo
                                    }
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.descricaoGrupo
                                    )}
                                  >
                                    {"texto"}
                                  </div>
                                </div>
                              ) : null}

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__ryqci
                                )}
                              >
                                <React.Fragment>
                                  <React.Fragment>{""}</React.Fragment>
                                  {
                                    <h5
                                      data-plasmic-name={"h5"}
                                      data-plasmic-override={overrides.h5}
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.h5,
                                        projectcss.__wab_text,
                                        sty.h5
                                      )}
                                    >
                                      <React.Fragment>
                                        <span
                                          className={
                                            "plasmic_default__all plasmic_default__span"
                                          }
                                          style={{ color: "#757575" }}
                                        >
                                          {"Descrição:"}
                                        </span>
                                      </React.Fragment>
                                    </h5>
                                  }
                                  <React.Fragment>{""}</React.Fragment>
                                </React.Fragment>
                              </div>
                            </div>
                          ) : null}
                        </div>

                        {true ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__fYn2E
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
                              {"Entrar"}
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
    "voltar",
    "svg",
    "fotoPerfil",
    "nomeGrupo",
    "descricaoGrupo",
    "h5",
    "aceitar",
    "recusar"
  ],
  headerLogged: ["headerLogged"],
  columns: [
    "columns",
    "botoesMenuPrincipal",
    "voltar",
    "svg",
    "fotoPerfil",
    "nomeGrupo",
    "descricaoGrupo",
    "h5",
    "aceitar",
    "recusar"
  ],
  botoesMenuPrincipal: ["botoesMenuPrincipal"],
  voltar: ["voltar", "svg"],
  svg: ["svg"],
  fotoPerfil: ["fotoPerfil"],
  nomeGrupo: ["nomeGrupo"],
  descricaoGrupo: ["descricaoGrupo"],
  h5: ["h5"],
  aceitar: ["aceitar"],
  recusar: ["recusar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
  columns: "div";
  botoesMenuPrincipal: typeof BotoesMenuPrincipal;
  voltar: typeof Button;
  svg: "svg";
  fotoPerfil: typeof p.PlasmicImg;
  nomeGrupo: "h2";
  descricaoGrupo: "div";
  h5: "h5";
  aceitar: typeof Button;
  recusar: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPreviaGrupo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPreviaGrupo__VariantsArgs;
    args?: PlasmicPreviaGrupo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPreviaGrupo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPreviaGrupo__ArgsType,
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
          internalArgPropNames: PlasmicPreviaGrupo__ArgProps,
          internalVariantPropNames: PlasmicPreviaGrupo__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPreviaGrupo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPreviaGrupo";
  } else {
    func.displayName = `PlasmicPreviaGrupo.${nodeName}`;
  }
  return func;
}

export const PlasmicPreviaGrupo = Object.assign(
  // Top-level PlasmicPreviaGrupo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    columns: makeNodeComponent("columns"),
    botoesMenuPrincipal: makeNodeComponent("botoesMenuPrincipal"),
    voltar: makeNodeComponent("voltar"),
    svg: makeNodeComponent("svg"),
    fotoPerfil: makeNodeComponent("fotoPerfil"),
    nomeGrupo: makeNodeComponent("nomeGrupo"),
    descricaoGrupo: makeNodeComponent("descricaoGrupo"),
    h5: makeNodeComponent("h5"),
    aceitar: makeNodeComponent("aceitar"),
    recusar: makeNodeComponent("recusar"),

    // Metadata about props expected for PlasmicPreviaGrupo
    internalVariantProps: PlasmicPreviaGrupo__VariantProps,
    internalArgProps: PlasmicPreviaGrupo__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Enviar",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPreviaGrupo;
/* prettier-ignore-end */
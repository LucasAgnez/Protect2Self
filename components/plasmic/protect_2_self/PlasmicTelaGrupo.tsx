// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: bfV7oLmQIs
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
import Button from "../../Button"; // plasmic-import: CJ-3PKujtR-/component
import TextInput from "../../TextInput"; // plasmic-import: 7q4dYfz6E__/component

import { useScreenVariants as useScreenVariantswwY5HaVRu8X4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WwY5HA-vRU8x4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicTelaGrupo.module.css"; // plasmic-import: bfV7oLmQIs/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import LeftArrowSvgrepoComsvgIcon from "./icons/PlasmicIcon__LeftArrowSvgrepoComsvg"; // plasmic-import: fmFspLMBVy/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: WK-uNEKVCw3/icon

export type PlasmicTelaGrupo__VariantMembers = {
  adm: "adm";
};
export type PlasmicTelaGrupo__VariantsArgs = {
  adm?: SingleBooleanChoiceArg<"adm">;
};
type VariantPropType = keyof PlasmicTelaGrupo__VariantsArgs;
export const PlasmicTelaGrupo__VariantProps = new Array<VariantPropType>("adm");

export type PlasmicTelaGrupo__ArgsType = {};
type ArgPropType = keyof PlasmicTelaGrupo__ArgsType;
export const PlasmicTelaGrupo__ArgProps = new Array<ArgPropType>();

export type PlasmicTelaGrupo__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  columns?: p.Flex<"div">;
  column?: p.Flex<"div">;
  voltar?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
  button?: p.Flex<typeof Button>;
  nomeGrupo?: p.Flex<"h2">;
  nomeGrupoAdm?: p.Flex<"h2">;
  textInput?: p.Flex<typeof TextInput>;
  admin?: p.Flex<"div">;
  container?: p.Flex<"div">;
  excluir?: p.Flex<typeof Button>;
  sair?: p.Flex<typeof Button>;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultTelaGrupoProps {}

function PlasmicTelaGrupo__RenderFunc(props: {
  variants: PlasmicTelaGrupo__VariantsArgs;
  args: PlasmicTelaGrupo__ArgsType;
  overrides: PlasmicTelaGrupo__OverridesType;

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

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "adm",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.adm
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

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
            sty.root,
            { [sty.rootadm]: hasVariant($state, "adm", "adm") }
          )}
        >
          <HeaderLogged
            data-plasmic-name={"headerLogged"}
            data-plasmic-override={overrides.headerLogged}
            className={classNames("__wab_instance", sty.headerLogged, {
              [sty.headerLoggedadm]: hasVariant($state, "adm", "adm")
            })}
          />

          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns, {
              [sty.columnsadm]: hasVariant($state, "adm", "adm")
            })}
          >
            {(
              hasVariant($state, "adm", "adm") &&
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? true
                : true
            ) ? (
              <div
                data-plasmic-name={"column"}
                data-plasmic-override={overrides.column}
                className={classNames(projectcss.all, sty.column, {
                  [sty.columnadm]: hasVariant($state, "adm", "adm")
                })}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___852Xr, {
                    [sty.freeBoxadm___852Xrh6EUz]: hasVariant(
                      $state,
                      "adm",
                      "adm"
                    )
                  })}
                >
                  <Button
                    data-plasmic-name={"voltar"}
                    data-plasmic-override={overrides.voltar}
                    className={classNames("__wab_instance", sty.voltar)}
                    color={"clear" as const}
                    link={`/grupos`}
                    shape={"round" as const}
                  >
                    <LeftArrowSvgrepoComsvgIcon
                      data-plasmic-name={"svg"}
                      data-plasmic-override={overrides.svg}
                      className={classNames(projectcss.all, sty.svg)}
                      role={"img"}
                    />
                  </Button>

                  {(hasVariant($state, "adm", "adm") ? true : true) ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__xAYt, {
                        [sty.freeBoxadm__xAYth6EUz]: hasVariant(
                          $state,
                          "adm",
                          "adm"
                        )
                      })}
                    >
                      {(hasVariant($state, "adm", "adm") ? true : true) ? (
                        <Button
                          data-plasmic-name={"button"}
                          data-plasmic-override={overrides.button}
                          className={classNames("__wab_instance", sty.button, {
                            [sty.buttonadm]: hasVariant($state, "adm", "adm")
                          })}
                          link={
                            hasVariant($state, "adm", "adm")
                              ? `/adiciona-a-grupo`
                              : undefined
                          }
                        >
                          {"Adicionar Participante"}
                        </Button>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                {(
                  hasVariant($state, "adm", "adm") &&
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__mMjMk, {
                      [sty.freeBoxadm__mMjMkH6EUz]: hasVariant(
                        $state,
                        "adm",
                        "adm"
                      )
                    })}
                  >
                    {(
                      hasVariant($state, "adm", "adm") &&
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? true
                        : true
                    ) ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__zRZbY,
                          {
                            [sty.freeBoxadm__zRZbYh6EUz]: hasVariant(
                              $state,
                              "adm",
                              "adm"
                            )
                          }
                        )}
                      >
                        {(hasVariant($state, "adm", "adm") ? true : true) ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__xf5Hc,
                              {
                                [sty.textadm__xf5HcH6EUz]: hasVariant(
                                  $state,
                                  "adm",
                                  "adm"
                                )
                              }
                            )}
                          >
                            {hasVariant($state, "adm", "adm") ? (
                              <React.Fragment>
                                <React.Fragment>{""}</React.Fragment>
                                {
                                  <h2
                                    data-plasmic-name={"nomeGrupoAdm"}
                                    data-plasmic-override={
                                      overrides.nomeGrupoAdm
                                    }
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.h2,
                                      projectcss.__wab_text,
                                      sty.nomeGrupoAdm,
                                      {
                                        [sty.nomeGrupoAdmadm]: hasVariant(
                                          $state,
                                          "adm",
                                          "adm"
                                        )
                                      }
                                    )}
                                  >
                                    {hasVariant($state, "adm", "adm") ? (
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
                                    ) : (
                                      "Enter some text"
                                    )}
                                  </h2>
                                }
                                <React.Fragment>{""}</React.Fragment>
                              </React.Fragment>
                            ) : (
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
                            )}
                          </div>
                        ) : null}
                        {true ? (
                          <TextInput
                            data-plasmic-name={"textInput"}
                            data-plasmic-override={overrides.textInput}
                            className={classNames(
                              "__wab_instance",
                              sty.textInput
                            )}
                            color={"dark" as const}
                            id={"novoNome" as const}
                          />
                        ) : null}
                      </div>
                    ) : null}
                    {(hasVariant($state, "adm", "adm") ? true : true) ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ikPBy,
                          {
                            [sty.textadm__ikPByH6EUz]: hasVariant(
                              $state,
                              "adm",
                              "adm"
                            )
                          }
                        )}
                      >
                        <React.Fragment>
                          <React.Fragment>{""}</React.Fragment>
                          {
                            <h6
                              className={classNames(
                                projectcss.all,
                                projectcss.h6,
                                projectcss.__wab_text,
                                sty.h6__hVmM
                              )}
                            >
                              {"Administrador"}
                            </h6>
                          }
                          <React.Fragment>{""}</React.Fragment>
                        </React.Fragment>
                      </div>
                    ) : null}

                    <div
                      data-plasmic-name={"admin"}
                      data-plasmic-override={overrides.admin}
                      className={classNames(projectcss.all, sty.admin)}
                    />

                    {(hasVariant($state, "adm", "adm") ? true : true) ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___25Wii,
                          {
                            [sty.textadm___25WiiH6EUz]: hasVariant(
                              $state,
                              "adm",
                              "adm"
                            )
                          }
                        )}
                      >
                        <React.Fragment>
                          <React.Fragment>{""}</React.Fragment>
                          {
                            <h6
                              className={classNames(
                                projectcss.all,
                                projectcss.h6,
                                projectcss.__wab_text,
                                sty.h6__evDp
                              )}
                            >
                              {"Membros"}
                            </h6>
                          }
                          <React.Fragment>{""}</React.Fragment>
                        </React.Fragment>
                      </div>
                    ) : null}
                    {true ? (
                      <div
                        data-plasmic-name={"container"}
                        data-plasmic-override={overrides.container}
                        className={classNames(projectcss.all, sty.container)}
                      />
                    ) : null}
                  </div>
                ) : null}
                {(hasVariant($state, "adm", "adm") ? true : true) ? (
                  <Button
                    data-plasmic-name={"excluir"}
                    data-plasmic-override={overrides.excluir}
                    className={classNames("__wab_instance", sty.excluir, {
                      [sty.excluiradm]: hasVariant($state, "adm", "adm")
                    })}
                    color={
                      hasVariant($state, "adm", "adm")
                        ? ("red" as const)
                        : undefined
                    }
                  >
                    {hasVariant($state, "adm", "adm")
                      ? "Excluir Grupo"
                      : "Button"}
                  </Button>
                ) : null}
                {(hasVariant($state, "adm", "adm") ? true : true) ? (
                  <Button
                    data-plasmic-name={"sair"}
                    data-plasmic-override={overrides.sair}
                    className={classNames("__wab_instance", sty.sair, {
                      [sty.sairadm]: hasVariant($state, "adm", "adm")
                    })}
                    color={
                      hasVariant($state, "adm", "adm")
                        ? ("red" as const)
                        : ("red" as const)
                    }
                  >
                    {hasVariant($state, "adm", "adm")
                      ? "Excluir Grupo"
                      : "Sair"}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>
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
    "column",
    "voltar",
    "svg",
    "button",
    "nomeGrupo",
    "nomeGrupoAdm",
    "textInput",
    "textbox",
    "admin",
    "container",
    "excluir",
    "sair"
  ],
  headerLogged: ["headerLogged"],
  columns: [
    "columns",
    "column",
    "voltar",
    "svg",
    "button",
    "nomeGrupo",
    "nomeGrupoAdm",
    "textInput",
    "textbox",
    "admin",
    "container",
    "excluir",
    "sair"
  ],
  column: [
    "column",
    "voltar",
    "svg",
    "button",
    "nomeGrupo",
    "nomeGrupoAdm",
    "textInput",
    "textbox",
    "admin",
    "container",
    "excluir",
    "sair"
  ],
  voltar: ["voltar", "svg"],
  svg: ["svg"],
  button: ["button"],
  nomeGrupo: ["nomeGrupo"],
  nomeGrupoAdm: ["nomeGrupoAdm"],
  textInput: ["textInput", "textbox"],
  admin: ["admin"],
  container: ["container"],
  excluir: ["excluir"],
  sair: ["sair"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
  columns: "div";
  column: "div";
  voltar: typeof Button;
  svg: "svg";
  button: typeof Button;
  nomeGrupo: "h2";
  nomeGrupoAdm: "h2";
  textInput: typeof TextInput;
  admin: "div";
  container: "div";
  excluir: typeof Button;
  sair: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTelaGrupo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTelaGrupo__VariantsArgs;
    args?: PlasmicTelaGrupo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTelaGrupo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTelaGrupo__ArgsType,
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
          internalArgPropNames: PlasmicTelaGrupo__ArgProps,
          internalVariantPropNames: PlasmicTelaGrupo__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTelaGrupo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTelaGrupo";
  } else {
    func.displayName = `PlasmicTelaGrupo.${nodeName}`;
  }
  return func;
}

export const PlasmicTelaGrupo = Object.assign(
  // Top-level PlasmicTelaGrupo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    voltar: makeNodeComponent("voltar"),
    svg: makeNodeComponent("svg"),
    button: makeNodeComponent("button"),
    nomeGrupo: makeNodeComponent("nomeGrupo"),
    nomeGrupoAdm: makeNodeComponent("nomeGrupoAdm"),
    textInput: makeNodeComponent("textInput"),
    admin: makeNodeComponent("admin"),
    container: makeNodeComponent("container"),
    excluir: makeNodeComponent("excluir"),
    sair: makeNodeComponent("sair"),

    // Metadata about props expected for PlasmicTelaGrupo
    internalVariantProps: PlasmicTelaGrupo__VariantProps,
    internalArgProps: PlasmicTelaGrupo__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTelaGrupo;
/* prettier-ignore-end */

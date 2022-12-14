// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: zmhDGaogJf
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
import BotoesPerfil from "../../BotoesPerfil"; // plasmic-import: RmM8H_pqLGC/component
import Button from "../../Button"; // plasmic-import: CJ-3PKujtR-/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicPerfil.module.css"; // plasmic-import: zmhDGaogJf/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicPerfil__VariantMembers = {};
export type PlasmicPerfil__VariantsArgs = {};
type VariantPropType = keyof PlasmicPerfil__VariantsArgs;
export const PlasmicPerfil__VariantProps = new Array<VariantPropType>();

export type PlasmicPerfil__ArgsType = {};
type ArgPropType = keyof PlasmicPerfil__ArgsType;
export const PlasmicPerfil__ArgProps = new Array<ArgPropType>();

export type PlasmicPerfil__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  columns?: p.Flex<"div">;
  botoesPerfil?: p.Flex<typeof BotoesPerfil>;
  campoUsername?: p.Flex<"div">;
  username?: p.Flex<"h4">;
  botaoEditar?: p.Flex<typeof Button>;
  iconEditar?: p.Flex<typeof p.PlasmicImg>;
  campoNome?: p.Flex<"div">;
  nome?: p.Flex<"div">;
  campoEmail?: p.Flex<"div">;
  email?: p.Flex<"div">;
  campoTelefone?: p.Flex<"div">;
  telefone?: p.Flex<"div">;
};

export interface DefaultPerfilProps {}

function PlasmicPerfil__RenderFunc(props: {
  variants: PlasmicPerfil__VariantsArgs;
  args: PlasmicPerfil__ArgsType;
  overrides: PlasmicPerfil__OverridesType;

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

          {true ? (
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              {true ? (
                <div className={classNames(projectcss.all, sty.column__boKAs)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__xuZzA)}
                  >
                    <BotoesPerfil
                      data-plasmic-name={"botoesPerfil"}
                      data-plasmic-override={overrides.botoesPerfil}
                      className={classNames("__wab_instance", sty.botoesPerfil)}
                    />
                  </div>
                </div>
              ) : null}
              {true ? (
                <div className={classNames(projectcss.all, sty.column___8KiRz)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__i8Yc)}
                  >
                    <div
                      data-plasmic-name={"campoUsername"}
                      data-plasmic-override={overrides.campoUsername}
                      className={classNames(projectcss.all, sty.campoUsername)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__m79Nb
                        )}
                      >
                        <React.Fragment>
                          <React.Fragment>{""}</React.Fragment>
                          {
                            <h4
                              data-plasmic-name={"username"}
                              data-plasmic-override={overrides.username}
                              className={classNames(
                                projectcss.all,
                                projectcss.h4,
                                projectcss.__wab_text,
                                sty.username
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
                            </h4>
                          }
                          <React.Fragment>{""}</React.Fragment>
                        </React.Fragment>
                      </div>

                      <Button
                        data-plasmic-name={"botaoEditar"}
                        data-plasmic-override={overrides.botaoEditar}
                        className={classNames(
                          "__wab_instance",
                          sty.botaoEditar
                        )}
                        color={"clear" as const}
                        link={`/editar-perfil`}
                      >
                        <p.PlasmicImg
                          data-plasmic-name={"iconEditar"}
                          data-plasmic-override={overrides.iconEditar}
                          alt={""}
                          className={classNames(sty.iconEditar)}
                          displayHeight={"20px" as const}
                          displayMaxHeight={"100%" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"20px" as const}
                          loading={"lazy" as const}
                          src={{
                            src: "/plasmic/protect_2_self/images/lapispng.png",
                            fullWidth: 512,
                            fullHeight: 512,
                            aspectRatio: undefined
                          }}
                        />
                      </Button>
                    </div>

                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__s2JN3
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__w6Ilt
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#FFFFFF" }}
                            >
                              {"Nome "}
                            </span>
                            <React.Fragment>{"\n"}</React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#FFFFFF" }}
                            >
                              {"completo"}
                            </span>
                          </React.Fragment>
                        </div>

                        <div
                          data-plasmic-name={"campoNome"}
                          data-plasmic-override={overrides.campoNome}
                          className={classNames(projectcss.all, sty.campoNome)}
                        >
                          <div
                            data-plasmic-name={"nome"}
                            data-plasmic-override={overrides.nome}
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.nome
                            )}
                          >
                            <React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ color: "#FFFFFF" }}
                              >
                                {"nome completo"}
                              </span>
                            </React.Fragment>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___00FjY
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__uyTig
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"Email:"}
                          </span>
                        </React.Fragment>
                      </div>

                      <div
                        data-plasmic-name={"campoEmail"}
                        data-plasmic-override={overrides.campoEmail}
                        className={classNames(projectcss.all, sty.campoEmail)}
                      >
                        <div
                          data-plasmic-name={"email"}
                          data-plasmic-override={overrides.email}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.email
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#FFFFFF" }}
                            >
                              {"nomesobrenome@email.com"}
                            </span>
                          </React.Fragment>
                        </div>
                      </div>
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.freeBox__j9MYh)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dpHsU
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"Telefone:"}
                          </span>
                        </React.Fragment>
                      </div>

                      <div
                        data-plasmic-name={"campoTelefone"}
                        data-plasmic-override={overrides.campoTelefone}
                        className={classNames(
                          projectcss.all,
                          sty.campoTelefone
                        )}
                      >
                        <div
                          data-plasmic-name={"telefone"}
                          data-plasmic-override={overrides.telefone}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.telefone
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#FFFFFF" }}
                            >
                              {"(00) 99999 - 9999"}
                            </span>
                          </React.Fragment>
                        </div>
                      </div>
                    </div>
                  </div>
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
    "botoesPerfil",
    "campoUsername",
    "username",
    "botaoEditar",
    "iconEditar",
    "campoNome",
    "nome",
    "campoEmail",
    "email",
    "campoTelefone",
    "telefone"
  ],
  headerLogged: ["headerLogged"],
  columns: [
    "columns",
    "botoesPerfil",
    "campoUsername",
    "username",
    "botaoEditar",
    "iconEditar",
    "campoNome",
    "nome",
    "campoEmail",
    "email",
    "campoTelefone",
    "telefone"
  ],
  botoesPerfil: ["botoesPerfil"],
  campoUsername: ["campoUsername", "username", "botaoEditar", "iconEditar"],
  username: ["username"],
  botaoEditar: ["botaoEditar", "iconEditar"],
  iconEditar: ["iconEditar"],
  campoNome: ["campoNome", "nome"],
  nome: ["nome"],
  campoEmail: ["campoEmail", "email"],
  email: ["email"],
  campoTelefone: ["campoTelefone", "telefone"],
  telefone: ["telefone"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
  columns: "div";
  botoesPerfil: typeof BotoesPerfil;
  campoUsername: "div";
  username: "h4";
  botaoEditar: typeof Button;
  iconEditar: typeof p.PlasmicImg;
  campoNome: "div";
  nome: "div";
  campoEmail: "div";
  email: "div";
  campoTelefone: "div";
  telefone: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPerfil__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPerfil__VariantsArgs;
    args?: PlasmicPerfil__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPerfil__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPerfil__ArgsType,
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
          internalArgPropNames: PlasmicPerfil__ArgProps,
          internalVariantPropNames: PlasmicPerfil__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPerfil__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPerfil";
  } else {
    func.displayName = `PlasmicPerfil.${nodeName}`;
  }
  return func;
}

export const PlasmicPerfil = Object.assign(
  // Top-level PlasmicPerfil renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    columns: makeNodeComponent("columns"),
    botoesPerfil: makeNodeComponent("botoesPerfil"),
    campoUsername: makeNodeComponent("campoUsername"),
    username: makeNodeComponent("username"),
    botaoEditar: makeNodeComponent("botaoEditar"),
    iconEditar: makeNodeComponent("iconEditar"),
    campoNome: makeNodeComponent("campoNome"),
    nome: makeNodeComponent("nome"),
    campoEmail: makeNodeComponent("campoEmail"),
    email: makeNodeComponent("email"),
    campoTelefone: makeNodeComponent("campoTelefone"),
    telefone: makeNodeComponent("telefone"),

    // Metadata about props expected for PlasmicPerfil
    internalVariantProps: PlasmicPerfil__VariantProps,
    internalArgProps: PlasmicPerfil__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPerfil;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: 8WUOyU1T46J
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
import HelpingHand from "../../HelpingHand"; // plasmic-import: 0GtKHl4SJA/component
import Button from "../../Button"; // plasmic-import: CJ-3PKujtR-/component
import TextInput from "../../TextInput"; // plasmic-import: 7q4dYfz6E__/component
import PasswordInput from "../../PasswordInput"; // plasmic-import: s963UX2uFqp/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicLoginScreen.module.css"; // plasmic-import: 8WUOyU1T46J/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: WK-uNEKVCw3/icon

export type PlasmicLoginScreen__VariantMembers = {};
export type PlasmicLoginScreen__VariantsArgs = {};
type VariantPropType = keyof PlasmicLoginScreen__VariantsArgs;
export const PlasmicLoginScreen__VariantProps = new Array<VariantPropType>();

export type PlasmicLoginScreen__ArgsType = {};
type ArgPropType = keyof PlasmicLoginScreen__ArgsType;
export const PlasmicLoginScreen__ArgProps = new Array<ArgPropType>();

export type PlasmicLoginScreen__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  columns?: p.Flex<"div">;
  helpingHand?: p.Flex<typeof HelpingHand>;
  h2?: p.Flex<"h2">;
  h1?: p.Flex<"h1">;
  entrar?: p.Flex<typeof Button>;
  button?: p.Flex<typeof Button>;
  email?: p.Flex<typeof TextInput>;
  senha?: p.Flex<typeof PasswordInput>;
  erro?: p.Flex<"div">;
  confirma?: p.Flex<typeof Button>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultLoginScreenProps {}

function PlasmicLoginScreen__RenderFunc(props: {
  variants: PlasmicLoginScreen__VariantsArgs;
  args: PlasmicLoginScreen__ArgsType;
  overrides: PlasmicLoginScreen__OverridesType;

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
          <div className={classNames(projectcss.all, sty.freeBox__cttTr)}>
            {true ? (
              <Header
                data-plasmic-name={"header"}
                data-plasmic-override={overrides.header}
                className={classNames("__wab_instance", sty.header)}
                line={"on" as const}
              />
            ) : null}
            {true ? (
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__ya5E1)}>
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__dfwWr)}
                    >
                      <HelpingHand
                        data-plasmic-name={"helpingHand"}
                        data-plasmic-override={overrides.helpingHand}
                        className={classNames(
                          "__wab_instance",
                          sty.helpingHand
                        )}
                      />

                      {true ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__ecuMz
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__qiixT
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
                                      style={{ color: "#FFFCFC" }}
                                    >
                                      {"O talento vence jogos, mas s?? o"}
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
                              projectcss.__wab_text,
                              sty.text__p62Fe
                            )}
                          >
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              {
                                <h1
                                  data-plasmic-name={"h1"}
                                  data-plasmic-override={overrides.h1}
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h1,
                                    projectcss.__wab_text,
                                    sty.h1
                                  )}
                                >
                                  <React.Fragment>
                                    <span
                                      className={
                                        "plasmic_default__all plasmic_default__span"
                                      }
                                      style={{ color: "#FFFCFC" }}
                                    >
                                      {"trabalho em equipe ganha campeonatos."}
                                    </span>
                                  </React.Fragment>
                                </h1>
                              }
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          </div>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__yHse2
                            )}
                          >
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              {
                                <h3
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h3,
                                    projectcss.__wab_text,
                                    sty.h3__qwEjt
                                  )}
                                >
                                  <React.Fragment>
                                    <span
                                      className={
                                        "plasmic_default__all plasmic_default__span"
                                      }
                                      style={{ color: "#FFFCFC" }}
                                    >
                                      {"-Michael Jordan"}
                                    </span>
                                  </React.Fragment>
                                </h3>
                              }
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                <div className={classNames(projectcss.all, sty.column__zAoFt)}>
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__ygCQ)}
                    >
                      <Button
                        data-plasmic-name={"entrar"}
                        data-plasmic-override={overrides.entrar}
                        className={classNames("__wab_instance", sty.entrar)}
                        color={"white" as const}
                        shape={"rounded" as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___31KdJ
                          )}
                        >
                          <React.Fragment>
                            <React.Fragment>{""}</React.Fragment>
                            {
                              <h3
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h3,
                                  projectcss.__wab_text,
                                  sty.h3__inZq
                                )}
                              >
                                {"Entrar"}
                              </h3>
                            }
                            <React.Fragment>{""}</React.Fragment>
                          </React.Fragment>
                        </div>
                      </Button>

                      <Button
                        data-plasmic-name={"button"}
                        data-plasmic-override={overrides.button}
                        className={classNames("__wab_instance", sty.button)}
                        color={"yellow" as const}
                        link={`/criar-conta`}
                        shape={"rounded" as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__zWhOh
                          )}
                        >
                          <React.Fragment>
                            <React.Fragment>{""}</React.Fragment>
                            {
                              <h3
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h3,
                                  projectcss.__wab_text,
                                  sty.h3___2N7B3
                                )}
                              >
                                {"Registre-se"}
                              </h3>
                            }
                            <React.Fragment>{""}</React.Fragment>
                          </React.Fragment>
                        </div>
                      </Button>
                    </div>
                  ) : null}
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__yZiD)}
                    >
                      {true ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__eWbh7
                          )}
                        >
                          <TextInput
                            data-plasmic-name={"email"}
                            data-plasmic-override={overrides.email}
                            className={classNames("__wab_instance", sty.email)}
                            id={"email" as const}
                          />

                          <PasswordInput
                            data-plasmic-name={"senha"}
                            data-plasmic-override={overrides.senha}
                            className={classNames("__wab_instance", sty.senha)}
                            color={"dark" as const}
                            id={"senha" as const}
                          />

                          <div
                            data-plasmic-name={"erro"}
                            data-plasmic-override={overrides.erro}
                            className={classNames(projectcss.all, sty.erro)}
                          />

                          {true ? (
                            <Button
                              data-plasmic-name={"confirma"}
                              data-plasmic-override={overrides.confirma}
                              className={classNames(
                                "__wab_instance",
                                sty.confirma
                              )}
                              color={"yellow" as const}
                            >
                              {"Entrar"}
                            </Button>
                          ) : null}

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__xpxS5
                            )}
                          >
                            <React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ color: "#FFFFFF" }}
                              >
                                {"Ainda n??o tem conta? Registre-se "}
                              </span>
                              <React.Fragment>{""}</React.Fragment>
                              {
                                <p.PlasmicLink
                                  data-plasmic-name={"link"}
                                  data-plasmic-override={overrides.link}
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.a,
                                    projectcss.__wab_text,
                                    projectcss.plasmic_default__inline,
                                    sty.link
                                  )}
                                  component={Link}
                                  href={`/criar-conta`}
                                  platform={"nextjs"}
                                >
                                  <React.Fragment>
                                    <span
                                      className={
                                        "plasmic_default__all plasmic_default__span"
                                      }
                                      style={{ color: "#00B5FF" }}
                                    >
                                      {"aqui"}
                                    </span>
                                  </React.Fragment>
                                </p.PlasmicLink>
                              }
                              <React.Fragment>{""}</React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ color: "#FFFFFF" }}
                              >
                                {"!"}
                              </span>
                            </React.Fragment>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
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
    "header",
    "columns",
    "helpingHand",
    "h2",
    "h1",
    "entrar",
    "button",
    "email",
    "senha",
    "erro",
    "confirma",
    "link"
  ],
  header: ["header"],
  columns: [
    "columns",
    "helpingHand",
    "h2",
    "h1",
    "entrar",
    "button",
    "email",
    "senha",
    "erro",
    "confirma",
    "link"
  ],
  helpingHand: ["helpingHand"],
  h2: ["h2"],
  h1: ["h1"],
  entrar: ["entrar"],
  button: ["button"],
  email: ["email"],
  senha: ["senha"],
  erro: ["erro"],
  confirma: ["confirma"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  columns: "div";
  helpingHand: typeof HelpingHand;
  h2: "h2";
  h1: "h1";
  entrar: typeof Button;
  button: typeof Button;
  email: typeof TextInput;
  senha: typeof PasswordInput;
  erro: "div";
  confirma: typeof Button;
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoginScreen__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoginScreen__VariantsArgs;
    args?: PlasmicLoginScreen__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLoginScreen__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLoginScreen__ArgsType,
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
          internalArgPropNames: PlasmicLoginScreen__ArgProps,
          internalVariantPropNames: PlasmicLoginScreen__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLoginScreen__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoginScreen";
  } else {
    func.displayName = `PlasmicLoginScreen.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginScreen = Object.assign(
  // Top-level PlasmicLoginScreen renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    columns: makeNodeComponent("columns"),
    helpingHand: makeNodeComponent("helpingHand"),
    h2: makeNodeComponent("h2"),
    h1: makeNodeComponent("h1"),
    entrar: makeNodeComponent("entrar"),
    button: makeNodeComponent("button"),
    email: makeNodeComponent("email"),
    senha: makeNodeComponent("senha"),
    erro: makeNodeComponent("erro"),
    confirma: makeNodeComponent("confirma"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicLoginScreen
    internalVariantProps: PlasmicLoginScreen__VariantProps,
    internalArgProps: PlasmicLoginScreen__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLoginScreen;
/* prettier-ignore-end */

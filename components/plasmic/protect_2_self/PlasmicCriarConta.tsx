// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: QeX4Yp4ozGm
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
import TextInput from "../../TextInput"; // plasmic-import: 7q4dYfz6E__/component
import PasswordInput from "../../PasswordInput"; // plasmic-import: s963UX2uFqp/component
import Button from "../../Button"; // plasmic-import: CJ-3PKujtR-/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicCriarConta.module.css"; // plasmic-import: QeX4Yp4ozGm/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: WK-uNEKVCw3/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicCriarConta__VariantMembers = {};
export type PlasmicCriarConta__VariantsArgs = {};
type VariantPropType = keyof PlasmicCriarConta__VariantsArgs;
export const PlasmicCriarConta__VariantProps = new Array<VariantPropType>();

export type PlasmicCriarConta__ArgsType = {};
type ArgPropType = keyof PlasmicCriarConta__ArgsType;
export const PlasmicCriarConta__ArgProps = new Array<ArgPropType>();

export type PlasmicCriarConta__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  dadosCadastro?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  nomeCompleto?: p.Flex<typeof TextInput>;
  erro?: p.Flex<"div">;
  confirma?: p.Flex<typeof Button>;
};

export interface DefaultCriarContaProps {}

function PlasmicCriarConta__RenderFunc(props: {
  variants: PlasmicCriarConta__VariantsArgs;
  args: PlasmicCriarConta__ArgsType;
  overrides: PlasmicCriarConta__OverridesType;

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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
            line={"on" as const}
          />

          {true ? (
            <div className={classNames(projectcss.all, sty.columns__qyVw)}>
              <div
                data-plasmic-name={"dadosCadastro"}
                data-plasmic-override={overrides.dadosCadastro}
                className={classNames(projectcss.all, sty.dadosCadastro)}
              >
                <div
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  className={classNames(projectcss.all, sty.freeBox)}
                >
                  <div
                    className={classNames(projectcss.all, sty.columns__kb7EL)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__mjRxB)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ofp7
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"Nome Completo:"}
                          </span>
                        </React.Fragment>
                      </div>
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column___5L36C)}
                    >
                      <TextInput
                        data-plasmic-name={"nomeCompleto"}
                        data-plasmic-override={overrides.nomeCompleto}
                        className={classNames(
                          "__wab_instance",
                          sty.nomeCompleto
                        )}
                        color={"dark" as const}
                        id={"nomeCompleto" as const}
                        name={"nome" as const}
                        placeholder={"ex. Joao Silva de Lima" as const}
                        required={true}
                      />
                    </div>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.columns__rnYbj)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__gCkk3)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__j22G
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"Nome de"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"Usuário:"}
                          </span>
                        </React.Fragment>
                      </div>
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__eCv2)}
                    >
                      <TextInput
                        className={classNames(
                          "__wab_instance",
                          sty.textInput__gbGx1
                        )}
                        color={"dark" as const}
                        id={"nomeUsuario" as const}
                        name={"username" as const}
                        placeholder={"ex. JoaoSilva" as const}
                        required={true}
                      />
                    </div>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.columns__xShu0)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__rIoj)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__o0W9J
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
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__uhrlV)}
                    >
                      <TextInput
                        className={classNames(
                          "__wab_instance",
                          sty.textInput__hqjvl
                        )}
                        color={"dark" as const}
                        id={"email" as const}
                        name={"email" as const}
                        placeholder={"ex. joaosilva@email.com" as const}
                        required={true}
                      />
                    </div>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.columns__uKw6H)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__nzJib)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lvX3E
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
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column___03Pvk)}
                    >
                      <TextInput
                        className={classNames(
                          "__wab_instance",
                          sty.textInput___0Ug8T
                        )}
                        color={"dark" as const}
                        id={"telefone" as const}
                        name={"telefone" as const}
                        placeholder={"(00) 99999-9999" as const}
                        required={true}
                      />
                    </div>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.columns___0AOrZ)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__pmi6)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__kdxK
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"Senha"}
                          </span>
                        </React.Fragment>
                      </div>
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__vabcg)}
                    >
                      <PasswordInput
                        className={classNames(
                          "__wab_instance",
                          sty.passwordInput__os9Be
                        )}
                        color={"dark" as const}
                        id={"senha" as const}
                        placeholder={"" as const}
                      />
                    </div>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.columns__ixTGi)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__xnBh)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lU50
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"Confirmar Senha:"}
                          </span>
                        </React.Fragment>
                      </div>
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__g3Ybg)}
                    >
                      <PasswordInput
                        className={classNames(
                          "__wab_instance",
                          sty.passwordInput__cOfim
                        )}
                        color={"dark" as const}
                        id={"confirmarSenha" as const}
                        placeholder={"" as const}
                      />
                    </div>
                  </div>

                  {true ? (
                    <div
                      data-plasmic-name={"erro"}
                      data-plasmic-override={overrides.erro}
                      className={classNames(projectcss.all, sty.erro)}
                    />
                  ) : null}

                  <Button
                    data-plasmic-name={"confirma"}
                    data-plasmic-override={overrides.confirma}
                    className={classNames("__wab_instance", sty.confirma)}
                    color={"yellow" as const}
                  >
                    {"Criar Conta"}
                  </Button>
                </div>
              </div>
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
    "header",
    "dadosCadastro",
    "freeBox",
    "nomeCompleto",
    "erro",
    "confirma"
  ],
  header: ["header"],
  dadosCadastro: [
    "dadosCadastro",
    "freeBox",
    "nomeCompleto",
    "erro",
    "confirma"
  ],
  freeBox: ["freeBox", "nomeCompleto", "erro", "confirma"],
  nomeCompleto: ["nomeCompleto"],
  erro: ["erro"],
  confirma: ["confirma"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  dadosCadastro: "div";
  freeBox: "div";
  nomeCompleto: typeof TextInput;
  erro: "div";
  confirma: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCriarConta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCriarConta__VariantsArgs;
    args?: PlasmicCriarConta__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCriarConta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCriarConta__ArgsType,
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
          internalArgPropNames: PlasmicCriarConta__ArgProps,
          internalVariantPropNames: PlasmicCriarConta__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCriarConta__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCriarConta";
  } else {
    func.displayName = `PlasmicCriarConta.${nodeName}`;
  }
  return func;
}

export const PlasmicCriarConta = Object.assign(
  // Top-level PlasmicCriarConta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    dadosCadastro: makeNodeComponent("dadosCadastro"),
    freeBox: makeNodeComponent("freeBox"),
    nomeCompleto: makeNodeComponent("nomeCompleto"),
    erro: makeNodeComponent("erro"),
    confirma: makeNodeComponent("confirma"),

    // Metadata about props expected for PlasmicCriarConta
    internalVariantProps: PlasmicCriarConta__VariantProps,
    internalArgProps: PlasmicCriarConta__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCriarConta;
/* prettier-ignore-end */

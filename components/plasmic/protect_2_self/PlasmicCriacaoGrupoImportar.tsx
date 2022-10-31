// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: Bmg8wAZSTr2
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
import TextInput from "../../TextInput"; // plasmic-import: 7q4dYfz6E__/component
import Select from "../../Select"; // plasmic-import: JvLnzcKYZbb/component
import Select__Option from "../../Select__Option"; // plasmic-import: MXYniCeie3G/component
import Button from "../../Button"; // plasmic-import: CJ-3PKujtR-/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicCriacaoGrupoImportar.module.css"; // plasmic-import: Bmg8wAZSTr2/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: WK-uNEKVCw3/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicCriacaoGrupoImportar__VariantMembers = {};

export type PlasmicCriacaoGrupoImportar__VariantsArgs = {};
type VariantPropType = keyof PlasmicCriacaoGrupoImportar__VariantsArgs;
export const PlasmicCriacaoGrupoImportar__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCriacaoGrupoImportar__ArgsType = {
  fotoGrupo?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCriacaoGrupoImportar__ArgsType;
export const PlasmicCriacaoGrupoImportar__ArgProps = new Array<ArgPropType>(
  "fotoGrupo"
);

export type PlasmicCriacaoGrupoImportar__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  dados?: p.Flex<"div">;
  nomeGrupo?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  descricao?: p.Flex<"div">;
  meta?: p.Flex<"div">;
  select?: p.Flex<typeof Select>;
  confirma?: p.Flex<typeof Button>;
};

export interface DefaultCriacaoGrupoImportarProps {}

function PlasmicCriacaoGrupoImportar__RenderFunc(props: {
  variants: PlasmicCriacaoGrupoImportar__VariantsArgs;
  args: PlasmicCriacaoGrupoImportar__ArgsType;
  overrides: PlasmicCriacaoGrupoImportar__OverridesType;

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

          <div
            data-plasmic-name={"dados"}
            data-plasmic-override={overrides.dados}
            className={classNames(projectcss.all, sty.dados)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__cnRcf)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"115px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/protect_2_self/images/defaultPfpsvgpng.png",
                    fullWidth: 2048,
                    fullHeight: 2048,
                    aspectRatio: undefined
                  }}
                />
              ),

              value: args.fotoGrupo
            })}

            {true ? (
              <div
                data-plasmic-name={"nomeGrupo"}
                data-plasmic-override={overrides.nomeGrupo}
                className={classNames(projectcss.all, sty.nomeGrupo)}
              >
                <div className={classNames(projectcss.all, sty.column___7Yfn)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kV32Z
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
                              {"Nome do Grupo:"}
                            </span>
                          </React.Fragment>
                        </h2>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                </div>

                <div className={classNames(projectcss.all, sty.column__fHy2T)}>
                  <TextInput
                    className={classNames(
                      "__wab_instance",
                      sty.textInput__ti0Dp
                    )}
                    color={"dark" as const}
                    id={"nome" as const}
                    placeholder={"Digite o nome do Grupo" as const}
                  />
                </div>
              </div>
            ) : null}

            <div
              data-plasmic-name={"descricao"}
              data-plasmic-override={overrides.descricao}
              className={classNames(projectcss.all, sty.descricao)}
            >
              <div className={classNames(projectcss.all, sty.column__yVpec)}>
                {true ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mJe0O
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
                            sty.h3__ib0Qf
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#FFFFFF" }}
                            >
                              {"Descrição:"}
                            </span>
                          </React.Fragment>
                        </h3>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                ) : null}
              </div>

              <div className={classNames(projectcss.all, sty.column__bwEwd)}>
                {true ? (
                  <TextInput
                    className={classNames(
                      "__wab_instance",
                      sty.textInput__hL3Vq
                    )}
                    color={"dark" as const}
                    id={"descricao" as const}
                    placeholder={"Digite aqui uma descrição do grupo" as const}
                    required={false}
                  />
                ) : null}
              </div>
            </div>

            <div
              data-plasmic-name={"meta"}
              data-plasmic-override={overrides.meta}
              className={classNames(projectcss.all, sty.meta)}
            >
              <div className={classNames(projectcss.all, sty.column__oiaD)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pwxVn
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
                          sty.h3__eO8G
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FFFFFF" }}
                          >
                            {"Meta:"}
                          </span>
                        </React.Fragment>
                      </h3>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.column__fq2T4)}>
                <Select
                  data-plasmic-name={"select"}
                  data-plasmic-override={overrides.select}
                  className={classNames("__wab_instance", sty.select)}
                  color={"dark" as const}
                >
                  <Select__Option
                    className={classNames("__wab_instance", sty.option__kfpKz)}
                    color={"dark" as const}
                    value={"value1" as const}
                  >
                    {"Criar"}
                  </Select__Option>

                  <Select__Option
                    className={classNames("__wab_instance", sty.option__pu2Zv)}
                    color={"dark" as const}
                    value={"value2" as const}
                  >
                    {"Importar"}
                  </Select__Option>
                </Select>
              </div>
            </div>

            <Button
              data-plasmic-name={"confirma"}
              data-plasmic-override={overrides.confirma}
              className={classNames("__wab_instance", sty.confirma)}
              color={"yellow" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ap7PB
                )}
              >
                {"CONCLUIR"}
              </div>
            </Button>
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
    "dados",
    "nomeGrupo",
    "h2",
    "descricao",
    "meta",
    "select",
    "confirma"
  ],
  headerLogged: ["headerLogged"],
  dados: [
    "dados",
    "nomeGrupo",
    "h2",
    "descricao",
    "meta",
    "select",
    "confirma"
  ],
  nomeGrupo: ["nomeGrupo", "h2"],
  h2: ["h2"],
  descricao: ["descricao"],
  meta: ["meta", "select"],
  select: ["select"],
  confirma: ["confirma"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
  dados: "div";
  nomeGrupo: "div";
  h2: "h2";
  descricao: "div";
  meta: "div";
  select: typeof Select;
  confirma: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCriacaoGrupoImportar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCriacaoGrupoImportar__VariantsArgs;
    args?: PlasmicCriacaoGrupoImportar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCriacaoGrupoImportar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCriacaoGrupoImportar__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicCriacaoGrupoImportar__ArgProps,
          internalVariantPropNames: PlasmicCriacaoGrupoImportar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCriacaoGrupoImportar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCriacaoGrupoImportar";
  } else {
    func.displayName = `PlasmicCriacaoGrupoImportar.${nodeName}`;
  }
  return func;
}

export const PlasmicCriacaoGrupoImportar = Object.assign(
  // Top-level PlasmicCriacaoGrupoImportar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    dados: makeNodeComponent("dados"),
    nomeGrupo: makeNodeComponent("nomeGrupo"),
    h2: makeNodeComponent("h2"),
    descricao: makeNodeComponent("descricao"),
    meta: makeNodeComponent("meta"),
    select: makeNodeComponent("select"),
    confirma: makeNodeComponent("confirma"),

    // Metadata about props expected for PlasmicCriacaoGrupoImportar
    internalVariantProps: PlasmicCriacaoGrupoImportar__VariantProps,
    internalArgProps: PlasmicCriacaoGrupoImportar__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCriacaoGrupoImportar;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: g2Fzp1_v7ow
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

import { useScreenVariants as useScreenVariantswwY5HaVRu8X4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WwY5HA-vRU8x4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicCriacaoMeta.module.css"; // plasmic-import: g2Fzp1_v7ow/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: WK-uNEKVCw3/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicCriacaoMeta__VariantMembers = {
  habito: "habito";
};

export type PlasmicCriacaoMeta__VariantsArgs = {
  habito?: SingleBooleanChoiceArg<"habito">;
};

type VariantPropType = keyof PlasmicCriacaoMeta__VariantsArgs;
export const PlasmicCriacaoMeta__VariantProps = new Array<VariantPropType>(
  "habito"
);

export type PlasmicCriacaoMeta__ArgsType = {};
type ArgPropType = keyof PlasmicCriacaoMeta__ArgsType;
export const PlasmicCriacaoMeta__ArgProps = new Array<ArgPropType>();

export type PlasmicCriacaoMeta__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  dados?: p.Flex<"div">;
  nomeMeta?: p.Flex<"div">;
  descricao?: p.Flex<"div">;
  tipoMeta?: p.Flex<"div">;
  meta?: p.Flex<"div">;
  frequenciaHabito?: p.Flex<"div">;
  confirma?: p.Flex<typeof Button>;
};

export interface DefaultCriacaoMetaProps {}

function PlasmicCriacaoMeta__RenderFunc(props: {
  variants: PlasmicCriacaoMeta__VariantsArgs;
  args: PlasmicCriacaoMeta__ArgsType;
  overrides: PlasmicCriacaoMeta__OverridesType;

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
            { [sty.roothabito]: hasVariant(variants, "habito", "habito") }
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
            className={classNames(projectcss.all, sty.dados, {
              [sty.dadoshabito]: hasVariant(variants, "habito", "habito")
            })}
          >
            {true ? (
              <div
                data-plasmic-name={"nomeMeta"}
                data-plasmic-override={overrides.nomeMeta}
                className={classNames(projectcss.all, sty.nomeMeta)}
              >
                <div className={classNames(projectcss.all, sty.column__s0IBb)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qMrB
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2__gg5Lq,
                            {
                              [sty.h2habito__gg5LqhFb2G]: hasVariant(
                                variants,
                                "habito",
                                "habito"
                              )
                            }
                          )}
                        >
                          {hasVariant(variants, "habito", "habito") &&
                          hasVariant(globalVariants, "screen", "mobileOnly") ? (
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              {
                                <h3
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h3,
                                    projectcss.__wab_text,
                                    sty.h3__foQk,
                                    {
                                      [sty.h3habito__foQkhFb2G]: hasVariant(
                                        variants,
                                        "habito",
                                        "habito"
                                      )
                                    }
                                  )}
                                >
                                  {hasVariant(
                                    globalVariants,
                                    "screen",
                                    "mobileOnly"
                                  ) ? (
                                    <React.Fragment>
                                      <React.Fragment>{""}</React.Fragment>
                                      {
                                        <h2
                                          className={classNames(
                                            projectcss.all,
                                            projectcss.h2,
                                            projectcss.__wab_text,
                                            sty.h2__iQiU
                                          )}
                                        >
                                          <React.Fragment>
                                            <span
                                              className={
                                                "plasmic_default__all plasmic_default__span"
                                              }
                                              style={{ color: "#FFFFFF" }}
                                            >
                                              {"Nome da Meta:"}
                                            </span>
                                          </React.Fragment>
                                        </h2>
                                      }
                                      <React.Fragment>{""}</React.Fragment>
                                    </React.Fragment>
                                  ) : (
                                    <React.Fragment>
                                      <span
                                        className={
                                          "plasmic_default__all plasmic_default__span"
                                        }
                                        style={{ color: "#FFFFFF" }}
                                      >
                                        {"Nome da Meta:"}
                                      </span>
                                    </React.Fragment>
                                  )}
                                </h3>
                              }
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ color: "#FFFFFF" }}
                              >
                                {"Nome da Meta:"}
                              </span>
                            </React.Fragment>
                          )}
                        </h2>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                </div>

                <div className={classNames(projectcss.all, sty.column__c3JRo)}>
                  <TextInput
                    className={classNames(
                      "__wab_instance",
                      sty.textInput__dHpvT
                    )}
                    color={"dark" as const}
                    placeholder={"Digite o nome da Meta" as const}
                  />
                </div>
              </div>
            ) : null}

            <div
              data-plasmic-name={"descricao"}
              data-plasmic-override={overrides.descricao}
              className={classNames(projectcss.all, sty.descricao)}
            >
              <div className={classNames(projectcss.all, sty.column__cQUxT)}>
                {true ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mf7G3
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
                            sty.h3___8JKlG
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

              <div className={classNames(projectcss.all, sty.column__fHlAf)}>
                {true ? (
                  <TextInput
                    className={classNames(
                      "__wab_instance",
                      sty.textInput__pxbz3
                    )}
                    color={"dark" as const}
                    placeholder={"Digite aqui uma descrição da Meta" as const}
                    required={false}
                  />
                ) : null}
              </div>
            </div>

            <div
              data-plasmic-name={"tipoMeta"}
              data-plasmic-override={overrides.tipoMeta}
              className={classNames(projectcss.all, sty.tipoMeta)}
            >
              <div className={classNames(projectcss.all, sty.column__bbDpx)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ut9Np
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
                          sty.h3__guO6
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#FCFCFC" }}
                          >
                            {"Tipo da Meta:"}
                          </span>
                        </React.Fragment>
                      </h3>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.column__cd6BG)}>
                <Select
                  className={classNames("__wab_instance", sty.select__rVnb)}
                  color={"dark" as const}
                >
                  <Select__Option
                    className={classNames("__wab_instance", sty.option__a4ZR1)}
                    color={"dark" as const}
                    value={"value1" as const}
                  >
                    {"Criar Hábito"}
                  </Select__Option>

                  <Select__Option
                    className={classNames("__wab_instance", sty.option__jUo0L)}
                    color={"dark" as const}
                    value={"value2" as const}
                  >
                    {"Eliminar Vício"}
                  </Select__Option>
                </Select>
              </div>
            </div>

            <div
              data-plasmic-name={"meta"}
              data-plasmic-override={overrides.meta}
              className={classNames(projectcss.all, sty.meta)}
            >
              <div className={classNames(projectcss.all, sty.column__px82W)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___4KqHe
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
                          sty.h3__cdmDv
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

              <div className={classNames(projectcss.all, sty.column___5IucV)}>
                <Button
                  className={classNames("__wab_instance", sty.button__j0F7X)}
                >
                  {"Criar"}
                </Button>
              </div>

              <div className={classNames(projectcss.all, sty.column__yHHb)}>
                <Button
                  className={classNames("__wab_instance", sty.button__lv91H)}
                >
                  {"Importar"}
                </Button>
              </div>
            </div>

            {(hasVariant(variants, "habito", "habito") ? true : true) ? (
              <div
                data-plasmic-name={"frequenciaHabito"}
                data-plasmic-override={overrides.frequenciaHabito}
                className={classNames(projectcss.all, sty.frequenciaHabito, {
                  [sty.frequenciaHabitohabito]: hasVariant(
                    variants,
                    "habito",
                    "habito"
                  )
                })}
              >
                <div className={classNames(projectcss.all, sty.column___1B8CX)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wi0M4
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
                            sty.h3__fr9Kd,
                            {
                              [sty.h3habito__fr9KdhFb2G]: hasVariant(
                                variants,
                                "habito",
                                "habito"
                              )
                            }
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#FFFFFF" }}
                            >
                              {"Frequencia:"}
                            </span>
                          </React.Fragment>
                        </h3>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                </div>

                <div
                  className={classNames(projectcss.all, sty.column__odbEl, {
                    [sty.columnhabito__odbElhFb2G]: hasVariant(
                      variants,
                      "habito",
                      "habito"
                    )
                  })}
                >
                  <Select
                    className={classNames("__wab_instance", sty.select__gnuqT)}
                    color={"dark" as const}
                  >
                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__d8Pp4
                      )}
                      color={"dark" as const}
                      value={"value1" as const}
                    >
                      {"Diário"}
                    </Select__Option>

                    <Select__Option
                      className={classNames("__wab_instance", sty.option__qHaT)}
                      color={"dark" as const}
                      value={"value2" as const}
                    >
                      {"Semanal"}
                    </Select__Option>

                    <Select__Option
                      className={classNames("__wab_instance", sty.option__qWfq)}
                      color={"dark" as const}
                      value={"value3" as const}
                    >
                      {"Mensal"}
                    </Select__Option>
                  </Select>
                </div>
              </div>
            ) : null}

            <Button
              data-plasmic-name={"confirma"}
              data-plasmic-override={overrides.confirma}
              className={classNames("__wab_instance", sty.confirma)}
              color={"yellow" as const}
              link={`/logged`}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lBijE
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
    "nomeMeta",
    "descricao",
    "tipoMeta",
    "meta",
    "frequenciaHabito",
    "confirma"
  ],
  headerLogged: ["headerLogged"],
  dados: [
    "dados",
    "nomeMeta",
    "descricao",
    "tipoMeta",
    "meta",
    "frequenciaHabito",
    "confirma"
  ],
  nomeMeta: ["nomeMeta"],
  descricao: ["descricao"],
  tipoMeta: ["tipoMeta"],
  meta: ["meta"],
  frequenciaHabito: ["frequenciaHabito"],
  confirma: ["confirma"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
  dados: "div";
  nomeMeta: "div";
  descricao: "div";
  tipoMeta: "div";
  meta: "div";
  frequenciaHabito: "div";
  confirma: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCriacaoMeta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCriacaoMeta__VariantsArgs;
    args?: PlasmicCriacaoMeta__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCriacaoMeta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCriacaoMeta__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicCriacaoMeta__ArgProps,
          internalVariantPropNames: PlasmicCriacaoMeta__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCriacaoMeta__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCriacaoMeta";
  } else {
    func.displayName = `PlasmicCriacaoMeta.${nodeName}`;
  }
  return func;
}

export const PlasmicCriacaoMeta = Object.assign(
  // Top-level PlasmicCriacaoMeta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    dados: makeNodeComponent("dados"),
    nomeMeta: makeNodeComponent("nomeMeta"),
    descricao: makeNodeComponent("descricao"),
    tipoMeta: makeNodeComponent("tipoMeta"),
    meta: makeNodeComponent("meta"),
    frequenciaHabito: makeNodeComponent("frequenciaHabito"),
    confirma: makeNodeComponent("confirma"),

    // Metadata about props expected for PlasmicCriacaoMeta
    internalVariantProps: PlasmicCriacaoMeta__VariantProps,
    internalArgProps: PlasmicCriacaoMeta__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCriacaoMeta;
/* prettier-ignore-end */
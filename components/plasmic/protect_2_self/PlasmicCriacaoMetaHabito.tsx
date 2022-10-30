// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: pJ5H5bIW9Pq
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
import Button from "../../Button"; // plasmic-import: CJ-3PKujtR-/component
import Select from "../../Select"; // plasmic-import: JvLnzcKYZbb/component
import Select__Option from "../../Select__Option"; // plasmic-import: MXYniCeie3G/component

import { useScreenVariants as useScreenVariantswwY5HaVRu8X4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WwY5HA-vRU8x4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicCriacaoMetaHabito.module.css"; // plasmic-import: pJ5H5bIW9Pq/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: WK-uNEKVCw3/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicCriacaoMetaHabito__VariantMembers = {};

export type PlasmicCriacaoMetaHabito__VariantsArgs = {};
type VariantPropType = keyof PlasmicCriacaoMetaHabito__VariantsArgs;
export const PlasmicCriacaoMetaHabito__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCriacaoMetaHabito__ArgsType = {};
type ArgPropType = keyof PlasmicCriacaoMetaHabito__ArgsType;
export const PlasmicCriacaoMetaHabito__ArgProps = new Array<ArgPropType>();

export type PlasmicCriacaoMetaHabito__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  dados?: p.Flex<"div">;
  nomeMeta?: p.Flex<"div">;
  descricao?: p.Flex<"div">;
  meta?: p.Flex<"div">;
  frequenciaHabito?: p.Flex<"div">;
  select?: p.Flex<typeof Select>;
  confirma?: p.Flex<typeof Button>;
};

export interface DefaultCriacaoMetaHabitoProps {}

function PlasmicCriacaoMetaHabito__RenderFunc(props: {
  variants: PlasmicCriacaoMetaHabito__VariantsArgs;
  args: PlasmicCriacaoMetaHabito__ArgsType;
  overrides: PlasmicCriacaoMetaHabito__OverridesType;

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
            {true ? (
              <div
                data-plasmic-name={"nomeMeta"}
                data-plasmic-override={overrides.nomeMeta}
                className={classNames(projectcss.all, sty.nomeMeta)}
              >
                <div className={classNames(projectcss.all, sty.column__i4Md)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__d4Ur
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
                            sty.h2__gYbUa
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
                  </div>
                </div>

                <div className={classNames(projectcss.all, sty.column__dyZf6)}>
                  <TextInput
                    className={classNames(
                      "__wab_instance",
                      sty.textInput__xHcft
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
              <div className={classNames(projectcss.all, sty.column__z4Mf9)}>
                {true ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__daOdo
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
                            sty.h3__f1OQ0
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

              <div className={classNames(projectcss.all, sty.column__cBhEq)}>
                {true ? (
                  <TextInput
                    className={classNames(
                      "__wab_instance",
                      sty.textInput___1PX88
                    )}
                    color={"dark" as const}
                    placeholder={"Digite aqui uma descrição da Meta" as const}
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
              <div className={classNames(projectcss.all, sty.column__oWo8Z)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___8J5Gg
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
                          sty.h3___9Sc6R
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

              <div className={classNames(projectcss.all, sty.column__tRfXk)}>
                <Button
                  className={classNames("__wab_instance", sty.button___9VL0V)}
                >
                  {"Criar"}
                </Button>
              </div>

              <div className={classNames(projectcss.all, sty.column__iavnB)}>
                <Button
                  className={classNames("__wab_instance", sty.button__jvpR7)}
                >
                  {"Importar"}
                </Button>
              </div>
            </div>

            {true ? (
              <div
                data-plasmic-name={"frequenciaHabito"}
                data-plasmic-override={overrides.frequenciaHabito}
                className={classNames(projectcss.all, sty.frequenciaHabito)}
              >
                <div className={classNames(projectcss.all, sty.column__o8Iv4)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eTiaT
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
                            sty.h3__niQ63
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

                <div className={classNames(projectcss.all, sty.column__zRhEu)}>
                  <Select
                    data-plasmic-name={"select"}
                    data-plasmic-override={overrides.select}
                    className={classNames("__wab_instance", sty.select)}
                    color={"dark" as const}
                  >
                    <Select__Option
                      className={classNames("__wab_instance", sty.option__qCcN)}
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
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__j9Qi4
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
    "meta",
    "frequenciaHabito",
    "select",
    "confirma"
  ],
  headerLogged: ["headerLogged"],
  dados: [
    "dados",
    "nomeMeta",
    "descricao",
    "meta",
    "frequenciaHabito",
    "select",
    "confirma"
  ],
  nomeMeta: ["nomeMeta"],
  descricao: ["descricao"],
  meta: ["meta"],
  frequenciaHabito: ["frequenciaHabito", "select"],
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
  nomeMeta: "div";
  descricao: "div";
  meta: "div";
  frequenciaHabito: "div";
  select: typeof Select;
  confirma: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCriacaoMetaHabito__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCriacaoMetaHabito__VariantsArgs;
    args?: PlasmicCriacaoMetaHabito__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCriacaoMetaHabito__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCriacaoMetaHabito__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicCriacaoMetaHabito__ArgProps,
          internalVariantPropNames: PlasmicCriacaoMetaHabito__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCriacaoMetaHabito__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCriacaoMetaHabito";
  } else {
    func.displayName = `PlasmicCriacaoMetaHabito.${nodeName}`;
  }
  return func;
}

export const PlasmicCriacaoMetaHabito = Object.assign(
  // Top-level PlasmicCriacaoMetaHabito renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    dados: makeNodeComponent("dados"),
    nomeMeta: makeNodeComponent("nomeMeta"),
    descricao: makeNodeComponent("descricao"),
    meta: makeNodeComponent("meta"),
    frequenciaHabito: makeNodeComponent("frequenciaHabito"),
    select: makeNodeComponent("select"),
    confirma: makeNodeComponent("confirma"),

    // Metadata about props expected for PlasmicCriacaoMetaHabito
    internalVariantProps: PlasmicCriacaoMetaHabito__VariantProps,
    internalArgProps: PlasmicCriacaoMetaHabito__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCriacaoMetaHabito;
/* prettier-ignore-end */

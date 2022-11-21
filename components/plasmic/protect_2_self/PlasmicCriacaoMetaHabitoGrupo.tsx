// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: RPXnndImEa1
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
import sty from "./PlasmicCriacaoMetaHabitoGrupo.module.css"; // plasmic-import: RPXnndImEa1/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: WK-uNEKVCw3/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicCriacaoMetaHabitoGrupo__VariantMembers = {};

export type PlasmicCriacaoMetaHabitoGrupo__VariantsArgs = {};
type VariantPropType = keyof PlasmicCriacaoMetaHabitoGrupo__VariantsArgs;
export const PlasmicCriacaoMetaHabitoGrupo__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCriacaoMetaHabitoGrupo__ArgsType = {};
type ArgPropType = keyof PlasmicCriacaoMetaHabitoGrupo__ArgsType;
export const PlasmicCriacaoMetaHabitoGrupo__ArgProps = new Array<ArgPropType>();

export type PlasmicCriacaoMetaHabitoGrupo__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  dados?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  colunaNomeGrupo?: p.Flex<"div">;
  nomeGrupo?: p.Flex<typeof TextInput>;
  descricao2?: p.Flex<"div">;
  descricaoGrupo?: p.Flex<typeof TextInput>;
  colunaNomeMeta?: p.Flex<"div">;
  nomeMeta?: p.Flex<typeof TextInput>;
  descricao?: p.Flex<"div">;
  descricaoMeta?: p.Flex<typeof TextInput>;
  frequenciaHabito?: p.Flex<"div">;
  frequencia?: p.Flex<typeof Select>;
  confirma?: p.Flex<typeof Button>;
};

export interface DefaultCriacaoMetaHabitoGrupoProps {}

function PlasmicCriacaoMetaHabitoGrupo__RenderFunc(props: {
  variants: PlasmicCriacaoMetaHabitoGrupo__VariantsArgs;
  args: PlasmicCriacaoMetaHabitoGrupo__ArgsType;
  overrides: PlasmicCriacaoMetaHabitoGrupo__OverridesType;

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

  const currentUser = p.useCurrentUser?.() || {};

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
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"200px" as const}
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

            {true ? (
              <div
                data-plasmic-name={"colunaNomeGrupo"}
                data-plasmic-override={overrides.colunaNomeGrupo}
                className={classNames(projectcss.all, sty.colunaNomeGrupo)}
              >
                <div className={classNames(projectcss.all, sty.column__kGrc7)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jgaVm
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
                            sty.h2___5YAwI
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

                <div className={classNames(projectcss.all, sty.column__uRvY)}>
                  <TextInput
                    data-plasmic-name={"nomeGrupo"}
                    data-plasmic-override={overrides.nomeGrupo}
                    className={classNames("__wab_instance", sty.nomeGrupo)}
                    color={"dark" as const}
                    id={"nomeGrupo" as const}
                    placeholder={"Digite o nome do Grupo" as const}
                  />
                </div>
              </div>
            ) : null}

            <div
              data-plasmic-name={"descricao2"}
              data-plasmic-override={overrides.descricao2}
              className={classNames(projectcss.all, sty.descricao2)}
            >
              <div className={classNames(projectcss.all, sty.column__urHx7)}>
                {true ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xjTmu
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
                            sty.h3__e8A9
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#FFFFFF" }}
                            >
                              {"Descrição do Grupo:"}
                            </span>
                          </React.Fragment>
                        </h3>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                ) : null}
              </div>

              <div className={classNames(projectcss.all, sty.column__mMTl)}>
                {true ? (
                  <TextInput
                    data-plasmic-name={"descricaoGrupo"}
                    data-plasmic-override={overrides.descricaoGrupo}
                    className={classNames("__wab_instance", sty.descricaoGrupo)}
                    color={"dark" as const}
                    id={"descricaoGrupo" as const}
                    placeholder={"Digite aqui uma descrição do Grupo" as const}
                    required={false}
                  />
                ) : null}
              </div>
            </div>

            {true ? (
              <div
                data-plasmic-name={"colunaNomeMeta"}
                data-plasmic-override={overrides.colunaNomeMeta}
                className={classNames(projectcss.all, sty.colunaNomeMeta)}
              >
                <div className={classNames(projectcss.all, sty.column__nRCe0)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__maild
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
                            sty.h2__cQ2W
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

                <div className={classNames(projectcss.all, sty.column__cUxXe)}>
                  <TextInput
                    data-plasmic-name={"nomeMeta"}
                    data-plasmic-override={overrides.nomeMeta}
                    className={classNames("__wab_instance", sty.nomeMeta)}
                    color={"dark" as const}
                    id={"nomeMeta" as const}
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
              <div className={classNames(projectcss.all, sty.column___2ZvWd)}>
                {true ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__b40Zt
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
                            sty.h3__irLly
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#FFFFFF" }}
                            >
                              {"Descrição da Meta:"}
                            </span>
                          </React.Fragment>
                        </h3>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                ) : null}
              </div>

              <div className={classNames(projectcss.all, sty.column__sYcbS)}>
                {true ? (
                  <TextInput
                    data-plasmic-name={"descricaoMeta"}
                    data-plasmic-override={overrides.descricaoMeta}
                    className={classNames("__wab_instance", sty.descricaoMeta)}
                    color={"dark" as const}
                    id={"descricaoMeta" as const}
                    placeholder={"Digite aqui uma descrição da Meta" as const}
                    required={false}
                  />
                ) : null}
              </div>
            </div>

            {true ? (
              <div
                data-plasmic-name={"frequenciaHabito"}
                data-plasmic-override={overrides.frequenciaHabito}
                className={classNames(projectcss.all, sty.frequenciaHabito)}
              >
                <div className={classNames(projectcss.all, sty.column__gG4Om)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ji8Sx
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
                            sty.h3__nvJ4F
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

                <div className={classNames(projectcss.all, sty.column__x01U)}>
                  <Select
                    data-plasmic-name={"frequencia"}
                    data-plasmic-override={overrides.frequencia}
                    className={classNames("__wab_instance", sty.frequencia)}
                    color={"dark" as const}
                    id={"frequencia" as const}
                  >
                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__eobbL
                      )}
                      color={"dark" as const}
                      value={"Diario" as const}
                    >
                      {"Diário"}
                    </Select__Option>

                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option___3PSUr
                      )}
                      color={"dark" as const}
                      value={"Semanal" as const}
                    >
                      {"Semanal"}
                    </Select__Option>

                    <Select__Option
                      className={classNames("__wab_instance", sty.option__rpOJ)}
                      color={"dark" as const}
                      value={"Mensal" as const}
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
                  sty.text___6L9L4
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
    "img",
    "colunaNomeGrupo",
    "nomeGrupo",
    "descricao2",
    "descricaoGrupo",
    "colunaNomeMeta",
    "nomeMeta",
    "descricao",
    "descricaoMeta",
    "frequenciaHabito",
    "frequencia",
    "confirma"
  ],
  headerLogged: ["headerLogged"],
  dados: [
    "dados",
    "img",
    "colunaNomeGrupo",
    "nomeGrupo",
    "descricao2",
    "descricaoGrupo",
    "colunaNomeMeta",
    "nomeMeta",
    "descricao",
    "descricaoMeta",
    "frequenciaHabito",
    "frequencia",
    "confirma"
  ],
  img: ["img"],
  colunaNomeGrupo: ["colunaNomeGrupo", "nomeGrupo"],
  nomeGrupo: ["nomeGrupo"],
  descricao2: ["descricao2", "descricaoGrupo"],
  descricaoGrupo: ["descricaoGrupo"],
  colunaNomeMeta: ["colunaNomeMeta", "nomeMeta"],
  nomeMeta: ["nomeMeta"],
  descricao: ["descricao", "descricaoMeta"],
  descricaoMeta: ["descricaoMeta"],
  frequenciaHabito: ["frequenciaHabito", "frequencia"],
  frequencia: ["frequencia"],
  confirma: ["confirma"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
  dados: "div";
  img: typeof p.PlasmicImg;
  colunaNomeGrupo: "div";
  nomeGrupo: typeof TextInput;
  descricao2: "div";
  descricaoGrupo: typeof TextInput;
  colunaNomeMeta: "div";
  nomeMeta: typeof TextInput;
  descricao: "div";
  descricaoMeta: typeof TextInput;
  frequenciaHabito: "div";
  frequencia: typeof Select;
  confirma: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCriacaoMetaHabitoGrupo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCriacaoMetaHabitoGrupo__VariantsArgs;
    args?: PlasmicCriacaoMetaHabitoGrupo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCriacaoMetaHabitoGrupo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCriacaoMetaHabitoGrupo__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicCriacaoMetaHabitoGrupo__ArgProps,
          internalVariantPropNames: PlasmicCriacaoMetaHabitoGrupo__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCriacaoMetaHabitoGrupo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCriacaoMetaHabitoGrupo";
  } else {
    func.displayName = `PlasmicCriacaoMetaHabitoGrupo.${nodeName}`;
  }
  return func;
}

export const PlasmicCriacaoMetaHabitoGrupo = Object.assign(
  // Top-level PlasmicCriacaoMetaHabitoGrupo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    dados: makeNodeComponent("dados"),
    img: makeNodeComponent("img"),
    colunaNomeGrupo: makeNodeComponent("colunaNomeGrupo"),
    nomeGrupo: makeNodeComponent("nomeGrupo"),
    descricao2: makeNodeComponent("descricao2"),
    descricaoGrupo: makeNodeComponent("descricaoGrupo"),
    colunaNomeMeta: makeNodeComponent("colunaNomeMeta"),
    nomeMeta: makeNodeComponent("nomeMeta"),
    descricao: makeNodeComponent("descricao"),
    descricaoMeta: makeNodeComponent("descricaoMeta"),
    frequenciaHabito: makeNodeComponent("frequenciaHabito"),
    frequencia: makeNodeComponent("frequencia"),
    confirma: makeNodeComponent("confirma"),

    // Metadata about props expected for PlasmicCriacaoMetaHabitoGrupo
    internalVariantProps: PlasmicCriacaoMetaHabitoGrupo__VariantProps,
    internalArgProps: PlasmicCriacaoMetaHabitoGrupo__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCriacaoMetaHabitoGrupo;
/* prettier-ignore-end */

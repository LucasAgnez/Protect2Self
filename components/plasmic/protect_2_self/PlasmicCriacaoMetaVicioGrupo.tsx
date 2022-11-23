// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: 0gwx988VBe2
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicCriacaoMetaVicioGrupo.module.css"; // plasmic-import: 0gwx988VBe2/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: WK-uNEKVCw3/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicCriacaoMetaVicioGrupo__VariantMembers = {};
export type PlasmicCriacaoMetaVicioGrupo__VariantsArgs = {};
type VariantPropType = keyof PlasmicCriacaoMetaVicioGrupo__VariantsArgs;
export const PlasmicCriacaoMetaVicioGrupo__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCriacaoMetaVicioGrupo__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCriacaoMetaVicioGrupo__ArgsType;
export const PlasmicCriacaoMetaVicioGrupo__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicCriacaoMetaVicioGrupo__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  dados?: p.Flex<"div">;
  colunaNomeGrupo?: p.Flex<"div">;
  nomeGrupo?: p.Flex<typeof TextInput>;
  descricao2?: p.Flex<"div">;
  descricaoGrupo?: p.Flex<typeof TextInput>;
  colunaNomeMeta?: p.Flex<"div">;
  nomeMeta?: p.Flex<typeof TextInput>;
  descricao?: p.Flex<"div">;
  descricaoMeta?: p.Flex<typeof TextInput>;
  confirma?: p.Flex<typeof Button>;
};

export interface DefaultCriacaoMetaVicioGrupoProps {}

function PlasmicCriacaoMetaVicioGrupo__RenderFunc(props: {
  variants: PlasmicCriacaoMetaVicioGrupo__VariantsArgs;
  args: PlasmicCriacaoMetaVicioGrupo__ArgsType;
  overrides: PlasmicCriacaoMetaVicioGrupo__OverridesType;

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
                  className={classNames(sty.img__rGMao)}
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
              ),

              value: args.children
            })}
            {true ? (
              <div
                data-plasmic-name={"colunaNomeGrupo"}
                data-plasmic-override={overrides.colunaNomeGrupo}
                className={classNames(projectcss.all, sty.colunaNomeGrupo)}
              >
                <div className={classNames(projectcss.all, sty.column__viNqh)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dR9Xj
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
                            sty.h2__rg3Ze
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

                <div className={classNames(projectcss.all, sty.column__w0VOn)}>
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
              <div className={classNames(projectcss.all, sty.column__qngWp)}>
                {true ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zTyh
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
                            sty.h3__vhm6T
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

              <div className={classNames(projectcss.all, sty.column__xJiC)}>
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
                <div className={classNames(projectcss.all, sty.column__l8Mq7)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qbJvp
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
                            sty.h2___2FzUz
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

                <div className={classNames(projectcss.all, sty.column__njkiw)}>
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
              <div className={classNames(projectcss.all, sty.column__bP2XT)}>
                {true ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dOaUo
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
                            sty.h3__uyXxA
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

              <div className={classNames(projectcss.all, sty.column__kwe1V)}>
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
                  sty.text___4AElg
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
    "colunaNomeGrupo",
    "nomeGrupo",
    "descricao2",
    "descricaoGrupo",
    "colunaNomeMeta",
    "nomeMeta",
    "descricao",
    "descricaoMeta",
    "confirma"
  ],
  headerLogged: ["headerLogged"],
  dados: [
    "dados",
    "colunaNomeGrupo",
    "nomeGrupo",
    "descricao2",
    "descricaoGrupo",
    "colunaNomeMeta",
    "nomeMeta",
    "descricao",
    "descricaoMeta",
    "confirma"
  ],
  colunaNomeGrupo: ["colunaNomeGrupo", "nomeGrupo"],
  nomeGrupo: ["nomeGrupo"],
  descricao2: ["descricao2", "descricaoGrupo"],
  descricaoGrupo: ["descricaoGrupo"],
  colunaNomeMeta: ["colunaNomeMeta", "nomeMeta"],
  nomeMeta: ["nomeMeta"],
  descricao: ["descricao", "descricaoMeta"],
  descricaoMeta: ["descricaoMeta"],
  confirma: ["confirma"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
  dados: "div";
  colunaNomeGrupo: "div";
  nomeGrupo: typeof TextInput;
  descricao2: "div";
  descricaoGrupo: typeof TextInput;
  colunaNomeMeta: "div";
  nomeMeta: typeof TextInput;
  descricao: "div";
  descricaoMeta: typeof TextInput;
  confirma: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCriacaoMetaVicioGrupo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCriacaoMetaVicioGrupo__VariantsArgs;
    args?: PlasmicCriacaoMetaVicioGrupo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCriacaoMetaVicioGrupo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCriacaoMetaVicioGrupo__ArgsType,
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
          internalArgPropNames: PlasmicCriacaoMetaVicioGrupo__ArgProps,
          internalVariantPropNames: PlasmicCriacaoMetaVicioGrupo__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCriacaoMetaVicioGrupo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCriacaoMetaVicioGrupo";
  } else {
    func.displayName = `PlasmicCriacaoMetaVicioGrupo.${nodeName}`;
  }
  return func;
}

export const PlasmicCriacaoMetaVicioGrupo = Object.assign(
  // Top-level PlasmicCriacaoMetaVicioGrupo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    dados: makeNodeComponent("dados"),
    colunaNomeGrupo: makeNodeComponent("colunaNomeGrupo"),
    nomeGrupo: makeNodeComponent("nomeGrupo"),
    descricao2: makeNodeComponent("descricao2"),
    descricaoGrupo: makeNodeComponent("descricaoGrupo"),
    colunaNomeMeta: makeNodeComponent("colunaNomeMeta"),
    nomeMeta: makeNodeComponent("nomeMeta"),
    descricao: makeNodeComponent("descricao"),
    descricaoMeta: makeNodeComponent("descricaoMeta"),
    confirma: makeNodeComponent("confirma"),

    // Metadata about props expected for PlasmicCriacaoMetaVicioGrupo
    internalVariantProps: PlasmicCriacaoMetaVicioGrupo__VariantProps,
    internalArgProps: PlasmicCriacaoMetaVicioGrupo__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCriacaoMetaVicioGrupo;
/* prettier-ignore-end */

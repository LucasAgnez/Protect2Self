// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: pXV_I6jM5lc
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

import { useScreenVariants as useScreenVariantswwY5HaVRu8X4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WwY5HA-vRU8x4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicCriacaoMetaVicio.module.css"; // plasmic-import: pXV_I6jM5lc/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: WK-uNEKVCw3/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicCriacaoMetaVicio__VariantMembers = {};

export type PlasmicCriacaoMetaVicio__VariantsArgs = {};
type VariantPropType = keyof PlasmicCriacaoMetaVicio__VariantsArgs;
export const PlasmicCriacaoMetaVicio__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCriacaoMetaVicio__ArgsType = {};
type ArgPropType = keyof PlasmicCriacaoMetaVicio__ArgsType;
export const PlasmicCriacaoMetaVicio__ArgProps = new Array<ArgPropType>();

export type PlasmicCriacaoMetaVicio__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  dados?: p.Flex<"div">;
  nomeMeta?: p.Flex<"div">;
  nome?: p.Flex<typeof TextInput>;
  descricao?: p.Flex<"div">;
  descricaoMeta?: p.Flex<typeof TextInput>;
  confirma?: p.Flex<typeof Button>;
};

export interface DefaultCriacaoMetaVicioProps {}

function PlasmicCriacaoMetaVicio__RenderFunc(props: {
  variants: PlasmicCriacaoMetaVicio__VariantsArgs;
  args: PlasmicCriacaoMetaVicio__ArgsType;
  overrides: PlasmicCriacaoMetaVicio__OverridesType;

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
            {true ? (
              <div
                data-plasmic-name={"nomeMeta"}
                data-plasmic-override={overrides.nomeMeta}
                className={classNames(projectcss.all, sty.nomeMeta)}
              >
                <div className={classNames(projectcss.all, sty.column__uhiQ)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__i1KEt
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
                            sty.h2__e4E1K
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

                <div className={classNames(projectcss.all, sty.column__tawmf)}>
                  <TextInput
                    data-plasmic-name={"nome"}
                    data-plasmic-override={overrides.nome}
                    className={classNames("__wab_instance", sty.nome)}
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
              <div className={classNames(projectcss.all, sty.column__z2Ybp)}>
                {true ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nhqRa
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
                            sty.h3__cQj5B
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

              <div className={classNames(projectcss.all, sty.column__xip1C)}>
                {true ? (
                  <TextInput
                    data-plasmic-name={"descricaoMeta"}
                    data-plasmic-override={overrides.descricaoMeta}
                    className={classNames("__wab_instance", sty.descricaoMeta)}
                    color={"dark" as const}
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
                  sty.text__fVgWf
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
    "nome",
    "descricao",
    "descricaoMeta",
    "confirma"
  ],
  headerLogged: ["headerLogged"],
  dados: [
    "dados",
    "nomeMeta",
    "nome",
    "descricao",
    "descricaoMeta",
    "confirma"
  ],
  nomeMeta: ["nomeMeta", "nome"],
  nome: ["nome"],
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
  nomeMeta: "div";
  nome: typeof TextInput;
  descricao: "div";
  descricaoMeta: typeof TextInput;
  confirma: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCriacaoMetaVicio__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCriacaoMetaVicio__VariantsArgs;
    args?: PlasmicCriacaoMetaVicio__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCriacaoMetaVicio__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCriacaoMetaVicio__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicCriacaoMetaVicio__ArgProps,
          internalVariantPropNames: PlasmicCriacaoMetaVicio__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCriacaoMetaVicio__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCriacaoMetaVicio";
  } else {
    func.displayName = `PlasmicCriacaoMetaVicio.${nodeName}`;
  }
  return func;
}

export const PlasmicCriacaoMetaVicio = Object.assign(
  // Top-level PlasmicCriacaoMetaVicio renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    dados: makeNodeComponent("dados"),
    nomeMeta: makeNodeComponent("nomeMeta"),
    nome: makeNodeComponent("nome"),
    descricao: makeNodeComponent("descricao"),
    descricaoMeta: makeNodeComponent("descricaoMeta"),
    confirma: makeNodeComponent("confirma"),

    // Metadata about props expected for PlasmicCriacaoMetaVicio
    internalVariantProps: PlasmicCriacaoMetaVicio__VariantProps,
    internalArgProps: PlasmicCriacaoMetaVicio__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCriacaoMetaVicio;
/* prettier-ignore-end */

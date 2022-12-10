// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: VacVjAesWbY
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
import UserPhoto from "../../UserPhoto"; // plasmic-import: iFRyT7eXLH/component
import Button from "../../Button"; // plasmic-import: CJ-3PKujtR-/component
import TextInput from "../../TextInput"; // plasmic-import: 7q4dYfz6E__/component

import { useScreenVariants as useScreenVariantswwY5HaVRu8X4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WwY5HA-vRU8x4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicAdicionaAGrupo.module.css"; // plasmic-import: VacVjAesWbY/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon
import LeftArrowSvgrepoComsvgIcon from "./icons/PlasmicIcon__LeftArrowSvgrepoComsvg"; // plasmic-import: fmFspLMBVy/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: WK-uNEKVCw3/icon

export type PlasmicAdicionaAGrupo__VariantMembers = {};
export type PlasmicAdicionaAGrupo__VariantsArgs = {};
type VariantPropType = keyof PlasmicAdicionaAGrupo__VariantsArgs;
export const PlasmicAdicionaAGrupo__VariantProps = new Array<VariantPropType>();

export type PlasmicAdicionaAGrupo__ArgsType = {};
type ArgPropType = keyof PlasmicAdicionaAGrupo__ArgsType;
export const PlasmicAdicionaAGrupo__ArgProps = new Array<ArgPropType>();

export type PlasmicAdicionaAGrupo__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  columns?: p.Flex<"div">;
  userPhoto?: p.Flex<typeof UserPhoto>;
  svg?: p.Flex<"svg">;
  text?: p.Flex<"div">;
  h4?: p.Flex<"h4">;
  busca?: p.Flex<typeof TextInput>;
  confirma?: p.Flex<typeof Button>;
  usuarios?: p.Flex<"div">;
};

export interface DefaultAdicionaAGrupoProps {}

function PlasmicAdicionaAGrupo__RenderFunc(props: {
  variants: PlasmicAdicionaAGrupo__VariantsArgs;
  args: PlasmicAdicionaAGrupo__ArgsType;
  overrides: PlasmicAdicionaAGrupo__OverridesType;

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

          {true ? (
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              {true ? (
                <div className={classNames(projectcss.all, sty.column__gwKzA)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__gCvqZ)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__kGjV)}
                    >
                      <UserPhoto
                        data-plasmic-name={"userPhoto"}
                        data-plasmic-override={overrides.userPhoto}
                        className={classNames("__wab_instance", sty.userPhoto)}
                      />

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__uMnqH
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Editar Perfil"
                          : "Editar Foto"}
                      </Button>
                    </div>
                  </div>
                </div>
              ) : null}
              {true ? (
                <div className={classNames(projectcss.all, sty.column__ym9YV)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__fiCx)}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__vKyB7
                      )}
                      color={"clear" as const}
                      link={`/tela-grupo`}
                      shape={"round" as const}
                    >
                      <LeftArrowSvgrepoComsvgIcon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(projectcss.all, sty.svg)}
                        role={"img"}
                      />
                    </Button>
                  </div>

                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <h4
                          data-plasmic-name={"h4"}
                          data-plasmic-override={overrides.h4}
                          className={classNames(
                            projectcss.all,
                            projectcss.h4,
                            projectcss.__wab_text,
                            sty.h4
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#FFFFFF" }}
                            >
                              {"Adicionar Membro"}
                            </span>
                          </React.Fragment>
                        </h4>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>

                  {true ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___2XpmM
                      )}
                    >
                      <TextInput
                        data-plasmic-name={"busca"}
                        data-plasmic-override={overrides.busca}
                        className={classNames("__wab_instance", sty.busca)}
                        color={"dark" as const}
                        id={"buscaAmigo" as const}
                        placeholder={
                          "Você pode adicionar membros pelo nome de usuário ou email" as const
                        }
                        showStartIcon={true}
                      />

                      <Button
                        data-plasmic-name={"confirma"}
                        data-plasmic-override={overrides.confirma}
                        className={classNames("__wab_instance", sty.confirma)}
                        color={"yellow" as const}
                      >
                        {"Buscar"}
                      </Button>
                    </div>
                  ) : null}

                  <div
                    data-plasmic-name={"usuarios"}
                    data-plasmic-override={overrides.usuarios}
                    className={classNames(projectcss.all, sty.usuarios)}
                  />
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
    "userPhoto",
    "svg",
    "text",
    "h4",
    "busca",
    "confirma",
    "usuarios"
  ],
  headerLogged: ["headerLogged"],
  columns: [
    "columns",
    "userPhoto",
    "svg",
    "text",
    "h4",
    "busca",
    "confirma",
    "usuarios"
  ],
  userPhoto: ["userPhoto"],
  svg: ["svg"],
  text: ["text", "h4"],
  h4: ["h4"],
  busca: ["busca"],
  confirma: ["confirma"],
  usuarios: ["usuarios"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
  columns: "div";
  userPhoto: typeof UserPhoto;
  svg: "svg";
  text: "div";
  h4: "h4";
  busca: typeof TextInput;
  confirma: typeof Button;
  usuarios: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAdicionaAGrupo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAdicionaAGrupo__VariantsArgs;
    args?: PlasmicAdicionaAGrupo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAdicionaAGrupo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAdicionaAGrupo__ArgsType,
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
          internalArgPropNames: PlasmicAdicionaAGrupo__ArgProps,
          internalVariantPropNames: PlasmicAdicionaAGrupo__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAdicionaAGrupo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAdicionaAGrupo";
  } else {
    func.displayName = `PlasmicAdicionaAGrupo.${nodeName}`;
  }
  return func;
}

export const PlasmicAdicionaAGrupo = Object.assign(
  // Top-level PlasmicAdicionaAGrupo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    columns: makeNodeComponent("columns"),
    userPhoto: makeNodeComponent("userPhoto"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),
    h4: makeNodeComponent("h4"),
    busca: makeNodeComponent("busca"),
    confirma: makeNodeComponent("confirma"),
    usuarios: makeNodeComponent("usuarios"),

    // Metadata about props expected for PlasmicAdicionaAGrupo
    internalVariantProps: PlasmicAdicionaAGrupo__VariantProps,
    internalArgProps: PlasmicAdicionaAGrupo__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAdicionaAGrupo;
/* prettier-ignore-end */

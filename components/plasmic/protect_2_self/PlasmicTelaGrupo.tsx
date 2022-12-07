// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: bfV7oLmQIs
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
import sty from "./PlasmicTelaGrupo.module.css"; // plasmic-import: bfV7oLmQIs/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: WK-uNEKVCw3/icon

export type PlasmicTelaGrupo__VariantMembers = {
  adm: "adm";
  editar: "editar";
};
export type PlasmicTelaGrupo__VariantsArgs = {
  adm?: SingleBooleanChoiceArg<"adm">;
  editar?: SingleBooleanChoiceArg<"editar">;
};
type VariantPropType = keyof PlasmicTelaGrupo__VariantsArgs;
export const PlasmicTelaGrupo__VariantProps = new Array<VariantPropType>(
  "adm",
  "editar"
);

export type PlasmicTelaGrupo__ArgsType = {};
type ArgPropType = keyof PlasmicTelaGrupo__ArgsType;
export const PlasmicTelaGrupo__ArgProps = new Array<ArgPropType>();

export type PlasmicTelaGrupo__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  columns?: p.Flex<"div">;
  userPhoto?: p.Flex<typeof UserPhoto>;
  text?: p.Flex<"div">;
  nomeGrupo?: p.Flex<"h2">;
  nomeGrupoAdm?: p.Flex<"h2">;
  img?: p.Flex<typeof p.PlasmicImg>;
  textInput?: p.Flex<typeof TextInput>;
  admin?: p.Flex<"div">;
  container?: p.Flex<"div">;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultTelaGrupoProps {}

function PlasmicTelaGrupo__RenderFunc(props: {
  variants: PlasmicTelaGrupo__VariantsArgs;
  args: PlasmicTelaGrupo__ArgsType;
  overrides: PlasmicTelaGrupo__OverridesType;

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

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "adm",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.adm
      },
      {
        path: "editar",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.editar
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

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
            sty.root,
            {
              [sty.rootadm]: hasVariant($state, "adm", "adm"),
              [sty.rooteditar]: hasVariant($state, "editar", "editar")
            }
          )}
        >
          <HeaderLogged
            data-plasmic-name={"headerLogged"}
            data-plasmic-override={overrides.headerLogged}
            className={classNames("__wab_instance", sty.headerLogged, {
              [sty.headerLoggedadm]: hasVariant($state, "adm", "adm")
            })}
          />

          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns, {
              [sty.columnsadm]: hasVariant($state, "adm", "adm"),
              [sty.columnseditar]: hasVariant($state, "editar", "editar")
            })}
          >
            {(
              hasVariant($state, "adm", "adm") &&
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? true
                : true
            ) ? (
              <div
                className={classNames(projectcss.all, sty.column__nqgca, {
                  [sty.columnadm__nqgcaH6EUz]: hasVariant($state, "adm", "adm")
                })}
              >
                {(
                  hasVariant($state, "adm", "adm") &&
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__syvFn, {
                      [sty.freeBoxadm__syvFnH6EUz]: hasVariant(
                        $state,
                        "adm",
                        "adm"
                      )
                    })}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___3Sqsa,
                        {
                          [sty.freeBoxadm___3SqsaH6EUz]: hasVariant(
                            $state,
                            "adm",
                            "adm"
                          )
                        }
                      )}
                    >
                      <UserPhoto
                        data-plasmic-name={"userPhoto"}
                        data-plasmic-override={overrides.userPhoto}
                        className={classNames("__wab_instance", sty.userPhoto)}
                      />

                      {(hasVariant($state, "adm", "adm") ? true : true) ? (
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__gpQte,
                            {
                              [sty.buttonadm__gpQteh6EUz]: hasVariant(
                                $state,
                                "adm",
                                "adm"
                              )
                            }
                          )}
                        >
                          {hasVariant($state, "adm", "adm") &&
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "Editar Icone"
                            : hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "Editar Perfil"
                            : "Editar Icone"}
                        </Button>
                      ) : null}
                    </div>

                    {(hasVariant($state, "adm", "adm") ? true : true) ? (
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__hjJrc,
                          {
                            [sty.buttonadm__hjJrch6EUz]: hasVariant(
                              $state,
                              "adm",
                              "adm"
                            )
                          }
                        )}
                      >
                        {"Adicionar Participante"}
                      </Button>
                    ) : null}
                    {(hasVariant($state, "adm", "adm") ? true : true) ? (
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__yr5PM,
                          {
                            [sty.buttonadm__yr5PMh6EUz]: hasVariant(
                              $state,
                              "adm",
                              "adm"
                            )
                          }
                        )}
                      >
                        {"Editar Meta"}
                      </Button>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ) : null}
            {(
              hasVariant($state, "adm", "adm") &&
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? true
                : true
            ) ? (
              <div
                className={classNames(projectcss.all, sty.column___9Gy, {
                  [sty.columnadm___9GyH6EUz]: hasVariant($state, "adm", "adm"),
                  [sty.columneditar___9GyTSpDr]: hasVariant(
                    $state,
                    "editar",
                    "editar"
                  )
                })}
              >
                {(
                  hasVariant($state, "adm", "adm") &&
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__mMjMk, {
                      [sty.freeBoxadm__mMjMkH6EUz]: hasVariant(
                        $state,
                        "adm",
                        "adm"
                      )
                    })}
                  >
                    {(
                      hasVariant($state, "adm", "adm") &&
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? true
                        : true
                    ) ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__zRZbY,
                          {
                            [sty.freeBoxadm__zRZbYh6EUz]: hasVariant(
                              $state,
                              "adm",
                              "adm"
                            ),
                            [sty.freeBoxeditar__zRZbYtSpDr]: hasVariant(
                              $state,
                              "editar",
                              "editar"
                            )
                          }
                        )}
                      >
                        {(
                          hasVariant($state, "editar", "editar")
                            ? true
                            : hasVariant($state, "adm", "adm")
                            ? true
                            : true
                        ) ? (
                          <div
                            data-plasmic-name={"text"}
                            data-plasmic-override={overrides.text}
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text,
                              {
                                [sty.textadm]: hasVariant($state, "adm", "adm"),
                                [sty.texteditar]: hasVariant(
                                  $state,
                                  "editar",
                                  "editar"
                                )
                              }
                            )}
                          >
                            {hasVariant($state, "adm", "adm") ? (
                              <React.Fragment>
                                <React.Fragment>{""}</React.Fragment>
                                {
                                  <h2
                                    data-plasmic-name={"nomeGrupoAdm"}
                                    data-plasmic-override={
                                      overrides.nomeGrupoAdm
                                    }
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.h2,
                                      projectcss.__wab_text,
                                      sty.nomeGrupoAdm,
                                      {
                                        [sty.nomeGrupoAdmadm]: hasVariant(
                                          $state,
                                          "adm",
                                          "adm"
                                        )
                                      }
                                    )}
                                  >
                                    {hasVariant($state, "adm", "adm") ? (
                                      <React.Fragment>
                                        <span
                                          className={
                                            "plasmic_default__all plasmic_default__span"
                                          }
                                          style={{ color: "#FFFFFF" }}
                                        >
                                          {"Nome Grupo"}
                                        </span>
                                      </React.Fragment>
                                    ) : (
                                      "Enter some text"
                                    )}
                                  </h2>
                                }
                                <React.Fragment>{""}</React.Fragment>
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                <React.Fragment>{""}</React.Fragment>
                                {
                                  <h2
                                    data-plasmic-name={"nomeGrupo"}
                                    data-plasmic-override={overrides.nomeGrupo}
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.h2,
                                      projectcss.__wab_text,
                                      sty.nomeGrupo
                                    )}
                                  >
                                    <React.Fragment>
                                      <span
                                        className={
                                          "plasmic_default__all plasmic_default__span"
                                        }
                                        style={{ color: "#FFFFFF" }}
                                      >
                                        {"Nome Grupo"}
                                      </span>
                                    </React.Fragment>
                                  </h2>
                                }
                                <React.Fragment>{""}</React.Fragment>
                              </React.Fragment>
                            )}
                          </div>
                        ) : null}
                        {(hasVariant($state, "adm", "adm") ? true : true) ? (
                          <Button
                            className={classNames(
                              "__wab_instance",
                              sty.button__dqFu5,
                              {
                                [sty.buttonadm__dqFu5H6EUz]: hasVariant(
                                  $state,
                                  "adm",
                                  "adm"
                                )
                              }
                            )}
                            color={"clear" as const}
                          >
                            <p.PlasmicImg
                              data-plasmic-name={"img"}
                              data-plasmic-override={overrides.img}
                              alt={""}
                              className={classNames(sty.img)}
                              displayHeight={"auto" as const}
                              displayMaxHeight={"none" as const}
                              displayMaxWidth={"100%" as const}
                              displayMinHeight={"0" as const}
                              displayMinWidth={"0" as const}
                              displayWidth={"36px" as const}
                              loading={"lazy" as const}
                              src={{
                                src: "/plasmic/protect_2_self/images/lapispng.png",
                                fullWidth: 512,
                                fullHeight: 512,
                                aspectRatio: undefined
                              }}
                            />
                          </Button>
                        ) : null}
                        {(
                          hasVariant($state, "editar", "editar") ? true : true
                        ) ? (
                          <TextInput
                            data-plasmic-name={"textInput"}
                            data-plasmic-override={overrides.textInput}
                            className={classNames(
                              "__wab_instance",
                              sty.textInput,
                              {
                                [sty.textInputeditar]: hasVariant(
                                  $state,
                                  "editar",
                                  "editar"
                                )
                              }
                            )}
                            color={"dark" as const}
                            id={"novoNome" as const}
                          />
                        ) : null}
                      </div>
                    ) : null}

                    <div
                      data-plasmic-name={"admin"}
                      data-plasmic-override={overrides.admin}
                      className={classNames(projectcss.all, sty.admin)}
                    />

                    {true ? (
                      <div
                        data-plasmic-name={"container"}
                        data-plasmic-override={overrides.container}
                        className={classNames(projectcss.all, sty.container)}
                      />
                    ) : null}
                  </div>
                ) : null}
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
    "headerLogged",
    "columns",
    "userPhoto",
    "text",
    "nomeGrupo",
    "nomeGrupoAdm",
    "img",
    "textInput",
    "textbox",
    "admin",
    "container"
  ],
  headerLogged: ["headerLogged"],
  columns: [
    "columns",
    "userPhoto",
    "text",
    "nomeGrupo",
    "nomeGrupoAdm",
    "img",
    "textInput",
    "textbox",
    "admin",
    "container"
  ],
  userPhoto: ["userPhoto"],
  text: ["text", "nomeGrupo", "nomeGrupoAdm"],
  nomeGrupo: ["nomeGrupo"],
  nomeGrupoAdm: ["nomeGrupoAdm"],
  img: ["img"],
  textInput: ["textInput", "textbox"],
  admin: ["admin"],
  container: ["container"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
  columns: "div";
  userPhoto: typeof UserPhoto;
  text: "div";
  nomeGrupo: "h2";
  nomeGrupoAdm: "h2";
  img: typeof p.PlasmicImg;
  textInput: typeof TextInput;
  admin: "div";
  container: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTelaGrupo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTelaGrupo__VariantsArgs;
    args?: PlasmicTelaGrupo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTelaGrupo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTelaGrupo__ArgsType,
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
          internalArgPropNames: PlasmicTelaGrupo__ArgProps,
          internalVariantPropNames: PlasmicTelaGrupo__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTelaGrupo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTelaGrupo";
  } else {
    func.displayName = `PlasmicTelaGrupo.${nodeName}`;
  }
  return func;
}

export const PlasmicTelaGrupo = Object.assign(
  // Top-level PlasmicTelaGrupo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerLogged: makeNodeComponent("headerLogged"),
    columns: makeNodeComponent("columns"),
    userPhoto: makeNodeComponent("userPhoto"),
    text: makeNodeComponent("text"),
    nomeGrupo: makeNodeComponent("nomeGrupo"),
    nomeGrupoAdm: makeNodeComponent("nomeGrupoAdm"),
    img: makeNodeComponent("img"),
    textInput: makeNodeComponent("textInput"),
    admin: makeNodeComponent("admin"),
    container: makeNodeComponent("container"),

    // Metadata about props expected for PlasmicTelaGrupo
    internalVariantProps: PlasmicTelaGrupo__VariantProps,
    internalArgProps: PlasmicTelaGrupo__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTelaGrupo;
/* prettier-ignore-end */

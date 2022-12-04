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
import MiniaturaAmigo from "../../MiniaturaAmigo"; // plasmic-import: -2Az4tsp3u/component

import { useScreenVariants as useScreenVariantswwY5HaVRu8X4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WwY5HA-vRU8x4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicTelaGrupo.module.css"; // plasmic-import: bfV7oLmQIs/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicTelaGrupo__VariantMembers = {
  telaAdm: "telaAdm";
};
export type PlasmicTelaGrupo__VariantsArgs = {
  telaAdm?: SingleBooleanChoiceArg<"telaAdm">;
};
type VariantPropType = keyof PlasmicTelaGrupo__VariantsArgs;
export const PlasmicTelaGrupo__VariantProps = new Array<VariantPropType>(
  "telaAdm"
);

export type PlasmicTelaGrupo__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTelaGrupo__ArgsType;
export const PlasmicTelaGrupo__ArgProps = new Array<ArgPropType>("children");

export type PlasmicTelaGrupo__OverridesType = {
  root?: p.Flex<"div">;
  headerLogged?: p.Flex<typeof HeaderLogged>;
  columns?: p.Flex<"div">;
  userPhoto?: p.Flex<typeof UserPhoto>;
  img?: p.Flex<typeof p.PlasmicImg>;
  miniaturaAmigo?: p.Flex<typeof MiniaturaAmigo>;
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
        path: "telaAdm",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.telaAdm
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
            { [sty.roottelaAdm]: hasVariant($state, "telaAdm", "telaAdm") }
          )}
        >
          <HeaderLogged
            data-plasmic-name={"headerLogged"}
            data-plasmic-override={overrides.headerLogged}
            className={classNames("__wab_instance", sty.headerLogged, {
              [sty.headerLoggedtelaAdm]: hasVariant(
                $state,
                "telaAdm",
                "telaAdm"
              )
            })}
          />

          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns, {
              [sty.columnstelaAdm]: hasVariant($state, "telaAdm", "telaAdm")
            })}
          >
            {(
              hasVariant($state, "telaAdm", "telaAdm") &&
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? true
                : true
            ) ? (
              <div
                className={classNames(projectcss.all, sty.column__nqgca, {
                  [sty.columntelaAdm__nqgcaH6EUz]: hasVariant(
                    $state,
                    "telaAdm",
                    "telaAdm"
                  )
                })}
              >
                {(
                  hasVariant($state, "telaAdm", "telaAdm") &&
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__syvFn, {
                      [sty.freeBoxtelaAdm__syvFnH6EUz]: hasVariant(
                        $state,
                        "telaAdm",
                        "telaAdm"
                      )
                    })}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___3Sqsa,
                        {
                          [sty.freeBoxtelaAdm___3SqsaH6EUz]: hasVariant(
                            $state,
                            "telaAdm",
                            "telaAdm"
                          )
                        }
                      )}
                    >
                      <UserPhoto
                        data-plasmic-name={"userPhoto"}
                        data-plasmic-override={overrides.userPhoto}
                        className={classNames("__wab_instance", sty.userPhoto)}
                      />

                      {(
                        hasVariant($state, "telaAdm", "telaAdm") ? true : true
                      ) ? (
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__gpQte,
                            {
                              [sty.buttontelaAdm__gpQteh6EUz]: hasVariant(
                                $state,
                                "telaAdm",
                                "telaAdm"
                              )
                            }
                          )}
                        >
                          {hasVariant($state, "telaAdm", "telaAdm") &&
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "Editar Icone"
                            : hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "Editar Perfil"
                            : "Editar Icone"}
                        </Button>
                      ) : null}
                    </div>

                    {(
                      hasVariant($state, "telaAdm", "telaAdm") ? true : true
                    ) ? (
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__hjJrc,
                          {
                            [sty.buttontelaAdm__hjJrch6EUz]: hasVariant(
                              $state,
                              "telaAdm",
                              "telaAdm"
                            )
                          }
                        )}
                      >
                        {"Adicionar Participante"}
                      </Button>
                    ) : null}
                    {(
                      hasVariant($state, "telaAdm", "telaAdm") ? true : true
                    ) ? (
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__yr5PM,
                          {
                            [sty.buttontelaAdm__yr5PMh6EUz]: hasVariant(
                              $state,
                              "telaAdm",
                              "telaAdm"
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
              hasVariant($state, "telaAdm", "telaAdm") &&
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? true
                : true
            ) ? (
              <div
                className={classNames(projectcss.all, sty.column___9Gy, {
                  [sty.columntelaAdm___9GyH6EUz]: hasVariant(
                    $state,
                    "telaAdm",
                    "telaAdm"
                  )
                })}
              >
                {(
                  hasVariant($state, "telaAdm", "telaAdm") &&
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__mMjMk, {
                      [sty.freeBoxtelaAdm__mMjMkH6EUz]: hasVariant(
                        $state,
                        "telaAdm",
                        "telaAdm"
                      )
                    })}
                  >
                    {(
                      hasVariant($state, "telaAdm", "telaAdm") &&
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? true
                        : true
                    ) ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__zRZbY,
                          {
                            [sty.freeBoxtelaAdm__zRZbYh6EUz]: hasVariant(
                              $state,
                              "telaAdm",
                              "telaAdm"
                            )
                          }
                        )}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: (
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text___0TpaN
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
                                      sty.h2__xZnN
                                    )}
                                  >
                                    <React.Fragment>
                                      <React.Fragment>{""}</React.Fragment>
                                      {
                                        <h4
                                          className={classNames(
                                            projectcss.all,
                                            projectcss.h4,
                                            projectcss.__wab_text,
                                            sty.h4__k9Mou
                                          )}
                                        >
                                          <React.Fragment>
                                            <React.Fragment>
                                              {""}
                                            </React.Fragment>
                                            {
                                              <h2
                                                className={classNames(
                                                  projectcss.all,
                                                  projectcss.h2,
                                                  projectcss.__wab_text,
                                                  sty.h2__hwqQ2
                                                )}
                                              >
                                                <React.Fragment>
                                                  <span
                                                    className={
                                                      "plasmic_default__all plasmic_default__span"
                                                    }
                                                    style={{ color: "#FFFFFF" }}
                                                  >
                                                    {"Nome Do Grupo"}
                                                  </span>
                                                </React.Fragment>
                                              </h2>
                                            }
                                            <React.Fragment>
                                              {""}
                                            </React.Fragment>
                                          </React.Fragment>
                                        </h4>
                                      }
                                      <React.Fragment>{""}</React.Fragment>
                                    </React.Fragment>
                                  </h2>
                                }
                                <React.Fragment>{""}</React.Fragment>
                              </React.Fragment>
                            </div>
                          ),

                          value: args.children
                        })}
                        {true ? (
                          <Button
                            className={classNames(
                              "__wab_instance",
                              sty.button__dqFu5
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
                      </div>
                    ) : null}
                    {(
                      hasVariant($state, "telaAdm", "telaAdm") &&
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? true
                        : true
                    ) ? (
                      <MiniaturaAmigo
                        data-plasmic-name={"miniaturaAmigo"}
                        data-plasmic-override={overrides.miniaturaAmigo}
                        className={classNames(
                          "__wab_instance",
                          sty.miniaturaAmigo,
                          {
                            [sty.miniaturaAmigotelaAdm]: hasVariant(
                              $state,
                              "telaAdm",
                              "telaAdm"
                            )
                          }
                        )}
                        emGrupo={
                          hasVariant($state, "telaAdm", "telaAdm")
                            ? ("visaoDoAdm" as const)
                            : ("visaoMembros" as const)
                        }
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
    "img",
    "miniaturaAmigo"
  ],
  headerLogged: ["headerLogged"],
  columns: ["columns", "userPhoto", "img", "miniaturaAmigo"],
  userPhoto: ["userPhoto"],
  img: ["img"],
  miniaturaAmigo: ["miniaturaAmigo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerLogged: typeof HeaderLogged;
  columns: "div";
  userPhoto: typeof UserPhoto;
  img: typeof p.PlasmicImg;
  miniaturaAmigo: typeof MiniaturaAmigo;
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
    img: makeNodeComponent("img"),
    miniaturaAmigo: makeNodeComponent("miniaturaAmigo"),

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

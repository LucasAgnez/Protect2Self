// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: LQeW26Vvq3
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
import Medalha from "../../Medalha"; // plasmic-import: OOiN6jLpGW/component
import Button from "../../Button"; // plasmic-import: CJ-3PKujtR-/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicMiniaturaMeta.module.css"; // plasmic-import: LQeW26Vvq3/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import ThumbDownSvgrepoCom2SvgIcon from "./icons/PlasmicIcon__ThumbDownSvgrepoCom2Svg"; // plasmic-import: GIzEWcU_Lc/icon
import ThumbUpSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__ThumbUpSvgrepoCom1Svg"; // plasmic-import: _Too7mk-Tm/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicMiniaturaMeta__VariantMembers = {
  comMedalha: "comMedalha";
  tipo: "habito" | "vicio";
};
export type PlasmicMiniaturaMeta__VariantsArgs = {
  comMedalha?: SingleBooleanChoiceArg<"comMedalha">;
  tipo?: MultiChoiceArg<"habito" | "vicio">;
};
type VariantPropType = keyof PlasmicMiniaturaMeta__VariantsArgs;
export const PlasmicMiniaturaMeta__VariantProps = new Array<VariantPropType>(
  "comMedalha",
  "tipo"
);

export type PlasmicMiniaturaMeta__ArgsType = {};
type ArgPropType = keyof PlasmicMiniaturaMeta__ArgsType;
export const PlasmicMiniaturaMeta__ArgProps = new Array<ArgPropType>();

export type PlasmicMiniaturaMeta__OverridesType = {
  stack?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  nomeMeta?: p.Flex<"h4">;
  medalha?: p.Flex<typeof Medalha>;
  sequenciaHabito?: p.Flex<"div">;
  sequenciaVicio?: p.Flex<"div">;
  registra?: p.Flex<typeof Button>;
};

export interface DefaultMiniaturaMetaProps {
  comMedalha?: SingleBooleanChoiceArg<"comMedalha">;
  tipo?: MultiChoiceArg<"habito" | "vicio">;
  className?: string;
}

function PlasmicMiniaturaMeta__RenderFunc(props: {
  variants: PlasmicMiniaturaMeta__VariantsArgs;
  args: PlasmicMiniaturaMeta__ArgsType;
  overrides: PlasmicMiniaturaMeta__OverridesType;

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
        path: "comMedalha",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.comMedalha
      },
      {
        path: "tipo",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.tipo
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  return (
    true ? (
      <div
        data-plasmic-name={"stack"}
        data-plasmic-override={overrides.stack}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.stack,
          {
            [sty.stackcomMedalha]: hasVariant(
              $state,
              "comMedalha",
              "comMedalha"
            )
          }
        )}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__cowRf, {
            [sty.freeBoxcomMedalha__cowRfyJuMv]: hasVariant(
              $state,
              "comMedalha",
              "comMedalha"
            ),
            [sty.freeBoxtipo_habito__cowRfFpvrz]: hasVariant(
              $state,
              "tipo",
              "habito"
            )
          })}
        >
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__noCej)}>
              <div
                className={classNames(projectcss.all, sty.freeBox__mfpq, {
                  [sty.freeBoxtipo_vicio__mfpq54S]: hasVariant(
                    $state,
                    "tipo",
                    "vicio"
                  )
                })}
              >
                <p.PlasmicLink
                  data-plasmic-name={"link"}
                  data-plasmic-override={overrides.link}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link,
                    {
                      [sty.linkcomMedalha]: hasVariant(
                        $state,
                        "comMedalha",
                        "comMedalha"
                      )
                    }
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <h4
                        data-plasmic-name={"nomeMeta"}
                        data-plasmic-override={overrides.nomeMeta}
                        className={classNames(
                          projectcss.all,
                          projectcss.h4,
                          projectcss.__wab_text,
                          sty.nomeMeta,
                          {
                            [sty.nomeMetacomMedalha]: hasVariant(
                              $state,
                              "comMedalha",
                              "comMedalha"
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
                            {"Meta"}
                          </span>
                        </React.Fragment>
                      </h4>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </p.PlasmicLink>
              </div>

              {(
                hasVariant($state, "comMedalha", "comMedalha") ? true : true
              ) ? (
                <Medalha
                  data-plasmic-name={"medalha"}
                  data-plasmic-override={overrides.medalha}
                  className={classNames("__wab_instance", sty.medalha, {
                    [sty.medalhacomMedalha]: hasVariant(
                      $state,
                      "comMedalha",
                      "comMedalha"
                    )
                  })}
                  miniatura={true}
                />
              ) : null}
            </div>
          ) : null}

          <div
            className={classNames(projectcss.all, sty.freeBox___6ExQ, {
              [sty.freeBoxtipo_habito___6ExQfpvrz]: hasVariant(
                $state,
                "tipo",
                "habito"
              )
            })}
          >
            {(hasVariant($state, "tipo", "habito") ? true : true) ? (
              <div
                data-plasmic-name={"sequenciaHabito"}
                data-plasmic-override={overrides.sequenciaHabito}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.sequenciaHabito,
                  {
                    [sty.sequenciaHabitotipo_habito]: hasVariant(
                      $state,
                      "tipo",
                      "habito"
                    )
                  }
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#D3D3D3" }}
                  >
                    {"Sequencia"}
                  </span>
                </React.Fragment>
              </div>
            ) : null}
            {(hasVariant($state, "tipo", "vicio") ? true : true) ? (
              <div
                data-plasmic-name={"sequenciaVicio"}
                data-plasmic-override={overrides.sequenciaVicio}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.sequenciaVicio,
                  {
                    [sty.sequenciaViciotipo_habito]: hasVariant(
                      $state,
                      "tipo",
                      "habito"
                    ),
                    [sty.sequenciaViciotipo_vicio]: hasVariant(
                      $state,
                      "tipo",
                      "vicio"
                    )
                  }
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#D3D3D3" }}
                  >
                    {"Sequencia"}
                  </span>
                </React.Fragment>
              </div>
            ) : null}
          </div>
        </div>

        <Button
          data-plasmic-name={"registra"}
          data-plasmic-override={overrides.registra}
          className={classNames("__wab_instance", sty.registra, {
            [sty.registracomMedalha]: hasVariant(
              $state,
              "comMedalha",
              "comMedalha"
            ),
            [sty.registratipo_habito]: hasVariant($state, "tipo", "habito"),
            [sty.registratipo_vicio]: hasVariant($state, "tipo", "vicio")
          })}
          color={
            hasVariant($state, "tipo", "vicio")
              ? ("red" as const)
              : hasVariant($state, "tipo", "habito")
              ? ("yellow" as const)
              : ("yellow" as const)
          }
          shape={"round" as const}
        >
          {(hasVariant($state, "tipo", "vicio") ? true : true) ? (
            <ThumbDownSvgrepoCom2SvgIcon
              className={classNames(projectcss.all, sty.svg___2ZnNy, {
                [sty.svgtipo_vicio___2ZnNy54S]: hasVariant(
                  $state,
                  "tipo",
                  "vicio"
                )
              })}
              role={"img"}
            />
          ) : null}
          {(
            hasVariant($state, "tipo", "vicio")
              ? true
              : hasVariant($state, "tipo", "habito")
              ? true
              : true
          ) ? (
            <ThumbUpSvgrepoCom1SvgIcon
              className={classNames(projectcss.all, sty.svg___0Fz3K, {
                [sty.svgtipo_habito___0Fz3KFpvrz]: hasVariant(
                  $state,
                  "tipo",
                  "habito"
                ),
                [sty.svgtipo_vicio___0Fz3K54S]: hasVariant(
                  $state,
                  "tipo",
                  "vicio"
                )
              })}
              role={"img"}
            />
          ) : null}
        </Button>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  stack: [
    "stack",
    "link",
    "nomeMeta",
    "medalha",
    "sequenciaHabito",
    "sequenciaVicio",
    "registra"
  ],
  link: ["link", "nomeMeta"],
  nomeMeta: ["nomeMeta"],
  medalha: ["medalha"],
  sequenciaHabito: ["sequenciaHabito"],
  sequenciaVicio: ["sequenciaVicio"],
  registra: ["registra"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  stack: "div";
  link: "a";
  nomeMeta: "h4";
  medalha: typeof Medalha;
  sequenciaHabito: "div";
  sequenciaVicio: "div";
  registra: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMiniaturaMeta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMiniaturaMeta__VariantsArgs;
    args?: PlasmicMiniaturaMeta__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMiniaturaMeta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMiniaturaMeta__ArgsType,
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
          internalArgPropNames: PlasmicMiniaturaMeta__ArgProps,
          internalVariantPropNames: PlasmicMiniaturaMeta__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMiniaturaMeta__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "stack") {
    func.displayName = "PlasmicMiniaturaMeta";
  } else {
    func.displayName = `PlasmicMiniaturaMeta.${nodeName}`;
  }
  return func;
}

export const PlasmicMiniaturaMeta = Object.assign(
  // Top-level PlasmicMiniaturaMeta renders the root element
  makeNodeComponent("stack"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    nomeMeta: makeNodeComponent("nomeMeta"),
    medalha: makeNodeComponent("medalha"),
    sequenciaHabito: makeNodeComponent("sequenciaHabito"),
    sequenciaVicio: makeNodeComponent("sequenciaVicio"),
    registra: makeNodeComponent("registra"),

    // Metadata about props expected for PlasmicMiniaturaMeta
    internalVariantProps: PlasmicMiniaturaMeta__VariantProps,
    internalArgProps: PlasmicMiniaturaMeta__ArgProps
  }
);

export default PlasmicMiniaturaMeta;
/* prettier-ignore-end */

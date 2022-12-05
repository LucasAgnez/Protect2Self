// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: -2Az4tsp3u
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
import sty from "./PlasmicMiniaturaAmigo.module.css"; // plasmic-import: -2Az4tsp3u/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicMiniaturaAmigo__VariantMembers = {
  emGrupo: "adm" | "visaoDoAdm" | "visaoMembros";
  naLista: "sim";
};
export type PlasmicMiniaturaAmigo__VariantsArgs = {
  emGrupo?: SingleChoiceArg<"adm" | "visaoDoAdm" | "visaoMembros">;
  naLista?: SingleChoiceArg<"sim">;
};
type VariantPropType = keyof PlasmicMiniaturaAmigo__VariantsArgs;
export const PlasmicMiniaturaAmigo__VariantProps = new Array<VariantPropType>(
  "emGrupo",
  "naLista"
);

export type PlasmicMiniaturaAmigo__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicMiniaturaAmigo__ArgsType;
export const PlasmicMiniaturaAmigo__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicMiniaturaAmigo__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  medalha?: p.Flex<typeof Medalha>;
  remove?: p.Flex<typeof Button>;
};

export interface DefaultMiniaturaAmigoProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  emGrupo?: SingleChoiceArg<"adm" | "visaoDoAdm" | "visaoMembros">;
  naLista?: SingleChoiceArg<"sim">;
  className?: string;
}

function PlasmicMiniaturaAmigo__RenderFunc(props: {
  variants: PlasmicMiniaturaAmigo__VariantsArgs;
  args: PlasmicMiniaturaAmigo__ArgsType;
  overrides: PlasmicMiniaturaAmigo__OverridesType;

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
        path: "emGrupo",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.emGrupo
      },
      {
        path: "naLista",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.naLista
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  return (
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
          [sty.rootemGrupo_adm]: hasVariant($state, "emGrupo", "adm"),
          [sty.rootemGrupo_visaoDoAdm]: hasVariant(
            $state,
            "emGrupo",
            "visaoDoAdm"
          ),
          [sty.rootemGrupo_visaoMembros]: hasVariant(
            $state,
            "emGrupo",
            "visaoMembros"
          ),
          [sty.rootnaLista_sim]: hasVariant($state, "naLista", "sim")
        }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img___2FjJ)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"57px" as const}
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

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxnaLista_sim]: hasVariant($state, "naLista", "sim")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__oTYaS
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
                      sty.h4___62ARo
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#FFFFFF" }}
                      >
                        {"Nome Amigo"}
                      </span>
                    </React.Fragment>
                  </h4>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          ),

          value: args.slot
        })}
        {(hasVariant($state, "naLista", "sim") ? false : true)
          ? p.renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mvQWr
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <h6
                        className={classNames(
                          projectcss.all,
                          projectcss.h6,
                          projectcss.__wab_text,
                          sty.h6__vLz3T
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#A9A9A9" }}
                          >
                            {"Meta amigo"}
                          </span>
                        </React.Fragment>
                      </h6>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              ),

              value: args.slot2
            })
          : null}
      </div>

      {(hasVariant($state, "emGrupo", "adm") ? true : true) ? (
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img, {
            [sty.imgemGrupo_adm]: hasVariant($state, "emGrupo", "adm")
          })}
          displayHeight={"auto" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"40px" as const}
          loading={"lazy" as const}
          src={{
            src: "/plasmic/protect_2_self/images/shieldRemovebgPreviewpng.png",
            fullWidth: 250,
            fullHeight: 201,
            aspectRatio: undefined
          }}
        />
      ) : null}
      {(hasVariant($state, "naLista", "sim") ? true : true) ? (
        <Medalha
          data-plasmic-name={"medalha"}
          data-plasmic-override={overrides.medalha}
          className={classNames("__wab_instance", sty.medalha, {
            [sty.medalhaemGrupo_adm]: hasVariant($state, "emGrupo", "adm"),
            [sty.medalhaemGrupo_visaoDoAdm]: hasVariant(
              $state,
              "emGrupo",
              "visaoDoAdm"
            ),
            [sty.medalhaemGrupo_visaoMembros]: hasVariant(
              $state,
              "emGrupo",
              "visaoMembros"
            ),
            [sty.medalhanaLista_sim]: hasVariant($state, "naLista", "sim")
          })}
        />
      ) : null}
      {(
        hasVariant($state, "naLista", "sim")
          ? true
          : hasVariant($state, "emGrupo", "visaoDoAdm")
          ? true
          : true
      ) ? (
        <Button
          data-plasmic-name={"remove"}
          data-plasmic-override={overrides.remove}
          className={classNames("__wab_instance", sty.remove, {
            [sty.removeemGrupo_visaoDoAdm]: hasVariant(
              $state,
              "emGrupo",
              "visaoDoAdm"
            ),
            [sty.removenaLista_sim]: hasVariant($state, "naLista", "sim")
          })}
        >
          {"X"}
        </Button>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "img", "medalha", "remove"],
  freeBox: ["freeBox"],
  img: ["img"],
  medalha: ["medalha"],
  remove: ["remove"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  img: typeof p.PlasmicImg;
  medalha: typeof Medalha;
  remove: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMiniaturaAmigo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMiniaturaAmigo__VariantsArgs;
    args?: PlasmicMiniaturaAmigo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMiniaturaAmigo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMiniaturaAmigo__ArgsType,
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
          internalArgPropNames: PlasmicMiniaturaAmigo__ArgProps,
          internalVariantPropNames: PlasmicMiniaturaAmigo__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMiniaturaAmigo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMiniaturaAmigo";
  } else {
    func.displayName = `PlasmicMiniaturaAmigo.${nodeName}`;
  }
  return func;
}

export const PlasmicMiniaturaAmigo = Object.assign(
  // Top-level PlasmicMiniaturaAmigo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    medalha: makeNodeComponent("medalha"),
    remove: makeNodeComponent("remove"),

    // Metadata about props expected for PlasmicMiniaturaAmigo
    internalVariantProps: PlasmicMiniaturaAmigo__VariantProps,
    internalArgProps: PlasmicMiniaturaAmigo__ArgProps
  }
);

export default PlasmicMiniaturaAmigo;
/* prettier-ignore-end */

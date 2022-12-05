// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: OOiN6jLpGW
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicMedalha.module.css"; // plasmic-import: OOiN6jLpGW/css

export type PlasmicMedalha__VariantMembers = {
  miniatura: "unnamedVariant";
  cor: "bronze" | "prata" | "ouro" | "platina" | "diamante";
};
export type PlasmicMedalha__VariantsArgs = {
  miniatura?: SingleChoiceArg<"unnamedVariant">;
  cor?: SingleChoiceArg<"bronze" | "prata" | "ouro" | "platina" | "diamante">;
};
type VariantPropType = keyof PlasmicMedalha__VariantsArgs;
export const PlasmicMedalha__VariantProps = new Array<VariantPropType>(
  "miniatura",
  "cor"
);

export type PlasmicMedalha__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicMedalha__ArgsType;
export const PlasmicMedalha__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicMedalha__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultMedalhaProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  miniatura?: SingleChoiceArg<"unnamedVariant">;
  cor?: SingleChoiceArg<"bronze" | "prata" | "ouro" | "platina" | "diamante">;
  className?: string;
}

function PlasmicMedalha__RenderFunc(props: {
  variants: PlasmicMedalha__VariantsArgs;
  args: PlasmicMedalha__ArgsType;
  overrides: PlasmicMedalha__OverridesType;

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
        path: "miniatura",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.miniatura
      },
      {
        path: "cor",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.cor
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
    true ? (
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
            [sty.rootcor_bronze]: hasVariant($state, "cor", "bronze"),
            [sty.rootcor_ouro]: hasVariant($state, "cor", "ouro"),
            [sty.rootcor_platina]: hasVariant($state, "cor", "platina"),
            [sty.rootcor_prata]: hasVariant($state, "cor", "prata"),
            [sty.rootminiatura_unnamedVariant]: hasVariant(
              $state,
              "miniatura",
              "unnamedVariant"
            )
          }
        )}
        data-plasmic-trigger-props={[triggerRootHoverProps]}
      >
        {(
          hasVariant($state, "cor", "diamante")
            ? true
            : hasVariant($state, "cor", "platina")
            ? true
            : hasVariant($state, "cor", "ouro")
            ? true
            : hasVariant($state, "cor", "prata")
            ? true
            : hasVariant($state, "cor", "bronze")
            ? true
            : true
        ) ? (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__ybdpd, {
              [sty.imgcor_bronze__ybdpdFdRKc]: hasVariant(
                $state,
                "cor",
                "bronze"
              ),
              [sty.imgcor_diamante__ybdpdd0RJr]: hasVariant(
                $state,
                "cor",
                "diamante"
              ),
              [sty.imgcor_ouro__ybdpdkRo0Y]: hasVariant($state, "cor", "ouro"),
              [sty.imgcor_platina__ybdpdCfncs]: hasVariant(
                $state,
                "cor",
                "platina"
              ),
              [sty.imgcor_prata__ybdpdN0PR]: hasVariant($state, "cor", "prata")
            })}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"77px" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/protect_2_self/images/medalhaSemFundopng.png",
              fullWidth: 225,
              fullHeight: 225,
              aspectRatio: undefined
            }}
          />
        ) : null}
        {(hasVariant($state, "cor", "bronze") ? true : true) ? (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img___92Nuw, {
              [sty.imgcor_bronze___92NuwFdRKc]: hasVariant(
                $state,
                "cor",
                "bronze"
              )
            })}
            displayHeight={"77px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"77px" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/protect_2_self/images/medalhaBronzepng.png",
              fullWidth: 225,
              fullHeight: 225,
              aspectRatio: undefined
            }}
          />
        ) : null}
        {(hasVariant($state, "cor", "prata") ? true : true) ? (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img___6Pq8I, {
              [sty.imgcor_prata___6Pq8In0PR]: hasVariant($state, "cor", "prata")
            })}
            displayHeight={"77px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"77px" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/protect_2_self/images/medalhaPratapng.png",
              fullWidth: 225,
              fullHeight: 225,
              aspectRatio: undefined
            }}
          />
        ) : null}
        {(hasVariant($state, "cor", "ouro") ? true : true) ? (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__vPqJc, {
              [sty.imgcor_ouro__vPqJckRo0Y]: hasVariant($state, "cor", "ouro")
            })}
            displayHeight={"77px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"77px" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/protect_2_self/images/medalhaOuropng.png",
              fullWidth: 225,
              fullHeight: 225,
              aspectRatio: undefined
            }}
          />
        ) : null}
        {(hasVariant($state, "cor", "platina") ? true : true) ? (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__bbY1T, {
              [sty.imgcor_platina__bbY1TCfncs]: hasVariant(
                $state,
                "cor",
                "platina"
              )
            })}
            displayHeight={"77px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"77px" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/protect_2_self/images/medalhaPlatinapng.png",
              fullWidth: 225,
              fullHeight: 225,
              aspectRatio: undefined
            }}
          />
        ) : null}
        {(hasVariant($state, "cor", "diamante") ? true : true) ? (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__yWxIt, {
              [sty.imgcor_diamante__yWxItd0RJr]: hasVariant(
                $state,
                "cor",
                "diamante"
              )
            })}
            displayHeight={"77px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"77px" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/protect_2_self/images/medalhaDiamantepng.png",
              fullWidth: 225,
              fullHeight: 225,
              aspectRatio: undefined
            }}
          />
        ) : null}
        {(
          hasVariant($state, "miniatura", "unnamedVariant") &&
          triggers.hover_root
            ? true
            : triggers.hover_root
            ? true
            : true
        ) ? (
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox, {
              [sty.freeBoxminiatura_unnamedVariant]: hasVariant(
                $state,
                "miniatura",
                "unnamedVariant"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vuFop
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#CCCCCC" }}
                    >
                      {"Meta Relacionada"}
                    </span>
                  </React.Fragment>
                </div>
              ),

              value: args.slot
            })}
            {p.renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__qjYsr
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#8D8D8D", fontStyle: "italic" }}
                    >
                      {"dd/mm/aaaa"}
                    </span>
                  </React.Fragment>
                </div>
              ),

              value: args.children
            })}
          </div>
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMedalha__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMedalha__VariantsArgs;
    args?: PlasmicMedalha__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMedalha__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMedalha__ArgsType,
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
          internalArgPropNames: PlasmicMedalha__ArgProps,
          internalVariantPropNames: PlasmicMedalha__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMedalha__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMedalha";
  } else {
    func.displayName = `PlasmicMedalha.${nodeName}`;
  }
  return func;
}

export const PlasmicMedalha = Object.assign(
  // Top-level PlasmicMedalha renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicMedalha
    internalVariantProps: PlasmicMedalha__VariantProps,
    internalArgProps: PlasmicMedalha__ArgProps
  }
);

export default PlasmicMedalha;
/* prettier-ignore-end */

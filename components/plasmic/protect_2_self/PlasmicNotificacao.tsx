// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: aLWT0HE8Zu
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
import Button from "../../Button"; // plasmic-import: CJ-3PKujtR-/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicNotificacao.module.css"; // plasmic-import: aLWT0HE8Zu/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicNotificacao__VariantMembers = {
  tipo: "amizade" | "grupo";
};
export type PlasmicNotificacao__VariantsArgs = {
  tipo?: MultiChoiceArg<"amizade" | "grupo">;
};
type VariantPropType = keyof PlasmicNotificacao__VariantsArgs;
export const PlasmicNotificacao__VariantProps = new Array<VariantPropType>(
  "tipo"
);

export type PlasmicNotificacao__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicNotificacao__ArgsType;
export const PlasmicNotificacao__ArgProps = new Array<ArgPropType>("children");

export type PlasmicNotificacao__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  text?: p.Flex<"div">;
  nomeUsuario?: p.Flex<"h4">;
  adiciona?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
  remove?: p.Flex<typeof Button>;
};

export interface DefaultNotificacaoProps {
  children?: React.ReactNode;
  tipo?: MultiChoiceArg<"amizade" | "grupo">;
  className?: string;
}

function PlasmicNotificacao__RenderFunc(props: {
  variants: PlasmicNotificacao__VariantsArgs;
  args: PlasmicNotificacao__ArgsType;
  overrides: PlasmicNotificacao__OverridesType;

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
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxtipo_amizade]: hasVariant($state, "tipo", "amizade")
        })}
      >
        <p.PlasmicLink
          className={classNames(projectcss.all, projectcss.a, sty.link__hpSOr, {
            [sty.linktipo_amizade__hpSOrqITjt]: hasVariant(
              $state,
              "tipo",
              "amizade"
            ),
            [sty.linktipo_grupo__hpSOrzVo08]: hasVariant(
              $state,
              "tipo",
              "grupo"
            )
          })}
          component={Link}
          href={
            hasVariant($state, "tipo", "grupo")
              ? `/previa-grupo`
              : hasVariant($state, "tipo", "amizade")
              ? `/previa-amigo`
              : undefined
          }
          platform={"nextjs"}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__qUfq0)}
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
        </p.PlasmicLink>

        <p.PlasmicLink
          className={classNames(projectcss.all, projectcss.a, sty.link__s4SrL, {
            [sty.linktipo_amizade__s4SrLqITjt]: hasVariant(
              $state,
              "tipo",
              "amizade"
            ),
            [sty.linktipo_grupo__s4SrLzVo08]: hasVariant(
              $state,
              "tipo",
              "grupo"
            )
          })}
          component={Link}
          href={
            hasVariant($state, "tipo", "grupo")
              ? `/previa-grupo`
              : hasVariant($state, "tipo", "amizade")
              ? `/previa-amigo`
              : undefined
          }
          platform={"nextjs"}
        >
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
                  data-plasmic-name={"nomeUsuario"}
                  data-plasmic-override={overrides.nomeUsuario}
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.nomeUsuario,
                    {
                      [sty.nomeUsuariotipo_grupo]: hasVariant(
                        $state,
                        "tipo",
                        "grupo"
                      )
                    }
                  )}
                >
                  {hasVariant($state, "tipo", "grupo") ? (
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#FFFFFF" }}
                      >
                        {"Nome Grupo"}
                      </span>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#FFFFFF" }}
                      >
                        {"Nome Amigo"}
                      </span>
                    </React.Fragment>
                  )}
                </h4>
              }
              <React.Fragment>{""}</React.Fragment>
            </React.Fragment>
          </div>
        </p.PlasmicLink>

        {(hasVariant($state, "tipo", "amizade") ? true : true) ? (
          <Button
            data-plasmic-name={"adiciona"}
            data-plasmic-override={overrides.adiciona}
            className={classNames("__wab_instance", sty.adiciona, {
              [sty.adicionatipo_amizade]: hasVariant($state, "tipo", "amizade")
            })}
            color={"yellow" as const}
            shape={"round" as const}
          >
            <ChecksvgIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          </Button>
        ) : null}
        {true ? (
          <Button
            data-plasmic-name={"remove"}
            data-plasmic-override={overrides.remove}
            className={classNames("__wab_instance", sty.remove)}
            color={"red" as const}
            shape={"round" as const}
          >
            {"X"}
          </Button>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text", "nomeUsuario", "adiciona", "svg", "remove"],
  freeBox: ["freeBox", "text", "nomeUsuario", "adiciona", "svg", "remove"],
  text: ["text", "nomeUsuario"],
  nomeUsuario: ["nomeUsuario"],
  adiciona: ["adiciona", "svg"],
  svg: ["svg"],
  remove: ["remove"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  text: "div";
  nomeUsuario: "h4";
  adiciona: typeof Button;
  svg: "svg";
  remove: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNotificacao__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNotificacao__VariantsArgs;
    args?: PlasmicNotificacao__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNotificacao__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNotificacao__ArgsType,
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
          internalArgPropNames: PlasmicNotificacao__ArgProps,
          internalVariantPropNames: PlasmicNotificacao__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNotificacao__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNotificacao";
  } else {
    func.displayName = `PlasmicNotificacao.${nodeName}`;
  }
  return func;
}

export const PlasmicNotificacao = Object.assign(
  // Top-level PlasmicNotificacao renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    nomeUsuario: makeNodeComponent("nomeUsuario"),
    adiciona: makeNodeComponent("adiciona"),
    svg: makeNodeComponent("svg"),
    remove: makeNodeComponent("remove"),

    // Metadata about props expected for PlasmicNotificacao
    internalVariantProps: PlasmicNotificacao__VariantProps,
    internalArgProps: PlasmicNotificacao__ArgProps
  }
);

export default PlasmicNotificacao;
/* prettier-ignore-end */

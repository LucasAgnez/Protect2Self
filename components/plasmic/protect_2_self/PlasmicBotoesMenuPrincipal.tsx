// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: 8PboOpLyrBm
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
import SinoNoti from "../../SinoNoti"; // plasmic-import: AxoJF9EP_M/component
import MainPageButton from "../../MainPageButton"; // plasmic-import: hF66z6g8PUp/component

import { useScreenVariants as useScreenVariantswwY5HaVRu8X4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WwY5HA-vRU8x4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicBotoesMenuPrincipal.module.css"; // plasmic-import: 8PboOpLyrBm/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicBotoesMenuPrincipal__VariantMembers = {};
export type PlasmicBotoesMenuPrincipal__VariantsArgs = {};
type VariantPropType = keyof PlasmicBotoesMenuPrincipal__VariantsArgs;
export const PlasmicBotoesMenuPrincipal__VariantProps =
  new Array<VariantPropType>();

export type PlasmicBotoesMenuPrincipal__ArgsType = {};
type ArgPropType = keyof PlasmicBotoesMenuPrincipal__ArgsType;
export const PlasmicBotoesMenuPrincipal__ArgProps = new Array<ArgPropType>();

export type PlasmicBotoesMenuPrincipal__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  sinoNoti?: p.Flex<typeof SinoNoti>;
  minhasMetas?: p.Flex<typeof MainPageButton>;
  meusGrupos?: p.Flex<typeof MainPageButton>;
  criarMeta?: p.Flex<typeof MainPageButton>;
  criarGrupo?: p.Flex<typeof MainPageButton>;
};

export interface DefaultBotoesMenuPrincipalProps {
  className?: string;
}

function PlasmicBotoesMenuPrincipal__RenderFunc(props: {
  variants: PlasmicBotoesMenuPrincipal__VariantsArgs;
  args: PlasmicBotoesMenuPrincipal__ArgsType;
  overrides: PlasmicBotoesMenuPrincipal__OverridesType;

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
    true ? (
      <p.Stack
        as={"div"}
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
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
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <SinoNoti
            data-plasmic-name={"sinoNoti"}
            data-plasmic-override={overrides.sinoNoti}
            className={classNames("__wab_instance", sty.sinoNoti)}
          />
        </div>

        <MainPageButton
          data-plasmic-name={"minhasMetas"}
          data-plasmic-override={overrides.minhasMetas}
          className={classNames("__wab_instance", sty.minhasMetas)}
          link={`/metas`}
        >
          {(hasVariant(globalVariants, "screen", "tablet") ? true : true) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__iDdFs
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
                      sty.h4__d3FfY
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#FFFFFF" }}
                      >
                        {"Minhas Metas"}
                      </span>
                    </React.Fragment>
                  </h4>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          ) : null}
        </MainPageButton>

        <MainPageButton
          data-plasmic-name={"meusGrupos"}
          data-plasmic-override={overrides.meusGrupos}
          className={classNames("__wab_instance", sty.meusGrupos)}
          link={`/grupos`}
        >
          {(hasVariant(globalVariants, "screen", "tablet") ? true : true) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__djHid
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
                      sty.h4__ihrVo
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#FFFFFF" }}
                      >
                        {"Meus Grupos"}
                      </span>
                    </React.Fragment>
                  </h4>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          ) : null}
        </MainPageButton>

        <MainPageButton
          data-plasmic-name={"criarMeta"}
          data-plasmic-override={overrides.criarMeta}
          className={classNames("__wab_instance", sty.criarMeta)}
          link={`/criacao-meta`}
        >
          {(hasVariant(globalVariants, "screen", "tablet") ? true : true) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8Ob54
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
                      sty.h4__xnXxu
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#FFFFFF" }}
                      >
                        {"Criar Meta"}
                      </span>
                    </React.Fragment>
                  </h4>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          ) : null}
        </MainPageButton>

        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <MainPageButton
            data-plasmic-name={"criarGrupo"}
            data-plasmic-override={overrides.criarGrupo}
            className={classNames("__wab_instance", sty.criarGrupo)}
            link={`/criacao-grupo`}
          >
            {(hasVariant(globalVariants, "screen", "tablet") ? true : true) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xMaz
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
                        sty.h4__l47N
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#FFFFFF" }}
                        >
                          {"Criar Grupo"}
                        </span>
                      </React.Fragment>
                    </h4>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </div>
            ) : null}
          </MainPageButton>
        ) : null}
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "sinoNoti",
    "minhasMetas",
    "meusGrupos",
    "criarMeta",
    "criarGrupo"
  ],
  freeBox: ["freeBox", "sinoNoti"],
  sinoNoti: ["sinoNoti"],
  minhasMetas: ["minhasMetas"],
  meusGrupos: ["meusGrupos"],
  criarMeta: ["criarMeta"],
  criarGrupo: ["criarGrupo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  sinoNoti: typeof SinoNoti;
  minhasMetas: typeof MainPageButton;
  meusGrupos: typeof MainPageButton;
  criarMeta: typeof MainPageButton;
  criarGrupo: typeof MainPageButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBotoesMenuPrincipal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBotoesMenuPrincipal__VariantsArgs;
    args?: PlasmicBotoesMenuPrincipal__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBotoesMenuPrincipal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBotoesMenuPrincipal__ArgsType,
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
          internalArgPropNames: PlasmicBotoesMenuPrincipal__ArgProps,
          internalVariantPropNames: PlasmicBotoesMenuPrincipal__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBotoesMenuPrincipal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBotoesMenuPrincipal";
  } else {
    func.displayName = `PlasmicBotoesMenuPrincipal.${nodeName}`;
  }
  return func;
}

export const PlasmicBotoesMenuPrincipal = Object.assign(
  // Top-level PlasmicBotoesMenuPrincipal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    sinoNoti: makeNodeComponent("sinoNoti"),
    minhasMetas: makeNodeComponent("minhasMetas"),
    meusGrupos: makeNodeComponent("meusGrupos"),
    criarMeta: makeNodeComponent("criarMeta"),
    criarGrupo: makeNodeComponent("criarGrupo"),

    // Metadata about props expected for PlasmicBotoesMenuPrincipal
    internalVariantProps: PlasmicBotoesMenuPrincipal__VariantProps,
    internalArgProps: PlasmicBotoesMenuPrincipal__ArgProps
  }
);

export default PlasmicBotoesMenuPrincipal;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: 1hwvYUH-3-
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
import sty from "./PlasmicTestemonial.module.css"; // plasmic-import: 1hwvYUH-3-/css

export type PlasmicTestemonial__VariantMembers = {
  color: "green" | "blue";
};

export type PlasmicTestemonial__VariantsArgs = {
  color?: SingleChoiceArg<"green" | "blue">;
};

type VariantPropType = keyof PlasmicTestemonial__VariantsArgs;
export const PlasmicTestemonial__VariantProps = new Array<VariantPropType>(
  "color"
);

export type PlasmicTestemonial__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTestemonial__ArgsType;
export const PlasmicTestemonial__ArgProps = new Array<ArgPropType>("children");

export type PlasmicTestemonial__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultTestemonialProps {
  children?: React.ReactNode;
  color?: SingleChoiceArg<"green" | "blue">;
  className?: string;
}

function PlasmicTestemonial__RenderFunc(props: {
  variants: PlasmicTestemonial__VariantsArgs;
  args: PlasmicTestemonial__ArgsType;
  overrides: PlasmicTestemonial__OverridesType;

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

  return (
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
        sty.root,
        {
          [sty.rootcolor_blue]: hasVariant(variants, "color", "blue"),
          [sty.rootcolor_green]: hasVariant(variants, "color", "green")
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__jXbil)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___5VICo
          )}
        >
          {
            '"A sem a velit consequat a torquent posuere nibh consectetur ac sodales mi vulputate imperdiet suspendisse a adipiscing felis convallis est tristique faucibus condimentum ante viverra."'
          }
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__jB4Gn)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__ldFlN)}
              displayHeight={"64px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"none" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"64px" as const}
              src={
                "https://www.caa.com/sites/default/files/styles/headshot_500x500/public/speaker-headshots/Morgan_CAAspeakers_Heashot_Web.jpg?itok=WCOhQ1Hj" as const
              }
            />
          ),

          value: args.children
        })}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__bwMc5)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__xxqLz)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4Vai
              )}
            >
              {"Tracy Jordan"}
            </div>
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__p58G
            )}
          >
            {"Comedian, TGS"}
          </div>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestemonial__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestemonial__VariantsArgs;
    args?: PlasmicTestemonial__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestemonial__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTestemonial__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTestemonial__ArgProps,
          internalVariantPropNames: PlasmicTestemonial__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTestemonial__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestemonial";
  } else {
    func.displayName = `PlasmicTestemonial.${nodeName}`;
  }
  return func;
}

export const PlasmicTestemonial = Object.assign(
  // Top-level PlasmicTestemonial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTestemonial
    internalVariantProps: PlasmicTestemonial__VariantProps,
    internalArgProps: PlasmicTestemonial__ArgProps
  }
);

export default PlasmicTestemonial;
/* prettier-ignore-end */

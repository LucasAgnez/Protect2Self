// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: PZ7Wdg9iZJ
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
import Menu from "antd/lib/menu/index"; // plasmic-import: Iz_hLKpHZDg/codeComponent
import MenuItem from "antd/lib/menu/MenuItem"; // plasmic-import: HZ6EmQgIQJr/codeComponent
import SubMenu from "antd/lib/menu/SubMenu"; // plasmic-import: DSwQm8gUYob/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicMenu.module.css"; // plasmic-import: PZ7Wdg9iZJ/css

export type PlasmicMenu__VariantMembers = {};
export type PlasmicMenu__VariantsArgs = {};
type VariantPropType = keyof PlasmicMenu__VariantsArgs;
export const PlasmicMenu__VariantProps = new Array<VariantPropType>();

export type PlasmicMenu__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicMenu__ArgsType;
export const PlasmicMenu__ArgProps = new Array<ArgPropType>("children");

export type PlasmicMenu__OverridesType = {
  root?: p.Flex<"div">;
  antdMenu?: p.Flex<typeof Menu>;
  antdMenuItem?: p.Flex<typeof MenuItem>;
  antdSubMenu?: p.Flex<typeof SubMenu>;
  text?: p.Flex<"div">;
  perfil?: p.Flex<typeof MenuItem>;
  sair?: p.Flex<typeof MenuItem>;
};

export interface DefaultMenuProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicMenu__RenderFunc(props: {
  variants: PlasmicMenu__VariantsArgs;
  args: PlasmicMenu__ArgsType;
  overrides: PlasmicMenu__OverridesType;

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
          sty.root
        )}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img___31CLa)}
              displayHeight={"70px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
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

        <Menu
          data-plasmic-name={"antdMenu"}
          data-plasmic-override={overrides.antdMenu}
          className={classNames("__wab_instance", sty.antdMenu)}
          theme={"dark" as const}
        >
          {true ? (
            <MenuItem
              data-plasmic-name={"antdMenuItem"}
              data-plasmic-override={overrides.antdMenuItem}
              className={classNames("__wab_instance", sty.antdMenuItem)}
              key={"menuItemKey" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__n5VvU
                )}
              >
                {"Option"}
              </div>
            </MenuItem>
          ) : null}

          <SubMenu
            data-plasmic-name={"antdSubMenu"}
            data-plasmic-override={overrides.antdSubMenu}
            className={classNames("__wab_instance", sty.antdSubMenu)}
            key={"subMenuKey" as const}
            title={
              true ? (
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"Sub-menu"}
                </div>
              ) : null
            }
          >
            <MenuItem
              data-plasmic-name={"perfil"}
              data-plasmic-override={overrides.perfil}
              className={classNames("__wab_instance", sty.perfil)}
              key={"subMenuItemKey1" as const}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__dehA0
                )}
                component={Link}
                href={`/perfil`}
                platform={"nextjs"}
              >
                {"Perfil"}
              </p.PlasmicLink>
            </MenuItem>

            <MenuItem
              data-plasmic-name={"sair"}
              data-plasmic-override={overrides.sair}
              className={classNames("__wab_instance", sty.sair)}
              key={"subMenuItemKey2" as const}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__gmb8H
                )}
                component={Link}
                href={`/`}
                platform={"nextjs"}
              >
                {"Sair"}
              </p.PlasmicLink>
            </MenuItem>
          </SubMenu>
        </Menu>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "antdMenu",
    "antdMenuItem",
    "antdSubMenu",
    "text",
    "perfil",
    "sair"
  ],
  antdMenu: [
    "antdMenu",
    "antdMenuItem",
    "antdSubMenu",
    "text",
    "perfil",
    "sair"
  ],
  antdMenuItem: ["antdMenuItem"],
  antdSubMenu: ["antdSubMenu", "text", "perfil", "sair"],
  text: ["text"],
  perfil: ["perfil"],
  sair: ["sair"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  antdMenu: typeof Menu;
  antdMenuItem: typeof MenuItem;
  antdSubMenu: typeof SubMenu;
  text: "div";
  perfil: typeof MenuItem;
  sair: typeof MenuItem;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenu__VariantsArgs;
    args?: PlasmicMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenu__ArgsType,
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
          internalArgPropNames: PlasmicMenu__ArgProps,
          internalVariantPropNames: PlasmicMenu__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenu";
  } else {
    func.displayName = `PlasmicMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicMenu = Object.assign(
  // Top-level PlasmicMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    antdMenu: makeNodeComponent("antdMenu"),
    antdMenuItem: makeNodeComponent("antdMenuItem"),
    antdSubMenu: makeNodeComponent("antdSubMenu"),
    text: makeNodeComponent("text"),
    perfil: makeNodeComponent("perfil"),
    sair: makeNodeComponent("sair"),

    // Metadata about props expected for PlasmicMenu
    internalVariantProps: PlasmicMenu__VariantProps,
    internalArgProps: PlasmicMenu__ArgProps
  }
);

export default PlasmicMenu;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: rtdQhdscRZ1
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
import TextInput from "../../TextInput"; // plasmic-import: 7q4dYfz6E__/component
import PasswordInput from "../../PasswordInput"; // plasmic-import: s963UX2uFqp/component
import Button from "../../Button"; // plasmic-import: CJ-3PKujtR-/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicLogin.module.css"; // plasmic-import: rtdQhdscRZ1/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: WK-uNEKVCw3/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: H1GZJxswewQ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hCPX34t0fK3/icon

export type PlasmicLogin__VariantMembers = {};

export type PlasmicLogin__VariantsArgs = {};
type VariantPropType = keyof PlasmicLogin__VariantsArgs;
export const PlasmicLogin__VariantProps = new Array<VariantPropType>();

export type PlasmicLogin__ArgsType = {};
type ArgPropType = keyof PlasmicLogin__ArgsType;
export const PlasmicLogin__ArgProps = new Array<ArgPropType>();

export type PlasmicLogin__OverridesType = {
  root?: p.Flex<"div">;
  textInput?: p.Flex<typeof TextInput>;
  passwordInput?: p.Flex<typeof PasswordInput>;
  logar?: p.Flex<typeof Button>;
  logarComGoogle?: p.Flex<typeof Button>;
  img?: p.Flex<typeof p.PlasmicImg>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultLoginProps {
  className?: string;
}

function PlasmicLogin__RenderFunc(props: {
  variants: PlasmicLogin__VariantsArgs;
  args: PlasmicLogin__ArgsType;
  overrides: PlasmicLogin__OverridesType;

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
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__jskbU)}>
          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
            id={"nome" as const}
            placeholder={" Nome de Usuário ou e-mail" as const}
          />

          <PasswordInput
            data-plasmic-name={"passwordInput"}
            data-plasmic-override={overrides.passwordInput}
            className={classNames("__wab_instance", sty.passwordInput)}
            color={"dark" as const}
            id={"senha" as const}
          />

          <Button
            data-plasmic-name={"logar"}
            data-plasmic-override={overrides.logar}
            className={classNames("__wab_instance", sty.logar)}
            color={"yellow" as const}
          >
            {"Entrar"}
          </Button>

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__mzkfK)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__spqk
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#FFFFFF" }}
                  >
                    {"Ou"}
                  </span>
                </React.Fragment>
              </div>
            </div>
          ) : null}

          <Button
            data-plasmic-name={"logarComGoogle"}
            data-plasmic-override={overrides.logarComGoogle}
            className={classNames("__wab_instance", sty.logarComGoogle)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7N0Ai
              )}
            >
              {"Entre com "}
            </div>

            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"23px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/protect_2_self/images/googleGLogosvgpng.png",
                fullWidth: 768,
                fullHeight: 768,
                aspectRatio: undefined
              }}
            />
          </Button>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qsgD
            )}
          >
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ color: "#FFFFFF" }}
              >
                {"Ainda não tem conta? Registre-se "}
              </span>
              <React.Fragment>{""}</React.Fragment>
              {
                <p.PlasmicLink
                  data-plasmic-name={"link"}
                  data-plasmic-override={overrides.link}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    projectcss.plasmic_default__inline,
                    sty.link
                  )}
                  component={Link}
                  href={`/criar-conta`}
                  platform={"nextjs"}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#00B5FF" }}
                    >
                      {"aqui"}
                    </span>
                  </React.Fragment>
                </p.PlasmicLink>
              }
              <React.Fragment>{""}</React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ color: "#FFFFFF" }}
              >
                {"!"}
              </span>
            </React.Fragment>
          </div>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "textInput",
    "textbox",
    "passwordInput",
    "logar",
    "logarComGoogle",
    "img",
    "link"
  ],
  textInput: ["textInput", "textbox"],
  passwordInput: ["passwordInput"],
  logar: ["logar"],
  logarComGoogle: ["logarComGoogle", "img"],
  img: ["img"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textInput: typeof TextInput;
  passwordInput: typeof PasswordInput;
  logar: typeof Button;
  logarComGoogle: typeof Button;
  img: typeof p.PlasmicImg;
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogin__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogin__VariantsArgs;
    args?: PlasmicLogin__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLogin__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLogin__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicLogin__ArgProps,
          internalVariantPropNames: PlasmicLogin__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogin";
  } else {
    func.displayName = `PlasmicLogin.${nodeName}`;
  }
  return func;
}

export const PlasmicLogin = Object.assign(
  // Top-level PlasmicLogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    passwordInput: makeNodeComponent("passwordInput"),
    logar: makeNodeComponent("logar"),
    logarComGoogle: makeNodeComponent("logarComGoogle"),
    img: makeNodeComponent("img"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicLogin
    internalVariantProps: PlasmicLogin__VariantProps,
    internalArgProps: PlasmicLogin__ArgProps
  }
);

export default PlasmicLogin;
/* prettier-ignore-end */
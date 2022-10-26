// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: _P_S6-TKUW2
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import * as pp from "@plasmicapp/react-web";
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
import MiniMenuPerfil__Overlay from "../../MiniMenuPerfil__Overlay"; // plasmic-import: pmNlnD93qv-/component
import MiniMenuPerfil__Option from "../../MiniMenuPerfil__Option"; // plasmic-import: AKl1yzKVuPF/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicMiniMenuPerfil.module.css"; // plasmic-import: _P_S6-TKUW2/css

import ChevronDownsvgIcon from "./icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: jEerZVGrA2K/icon
import ChevronUpsvgIcon from "./icons/PlasmicIcon__ChevronUpsvg"; // plasmic-import: 9a8VZ70rIzk/icon

export type PlasmicMiniMenuPerfil__VariantMembers = {
  showPlaceholder: "showPlaceholder";
  isOpen: "isOpen";
  isDisabled: "isDisabled";
};

export type PlasmicMiniMenuPerfil__VariantsArgs = {
  showPlaceholder?: SingleBooleanChoiceArg<"showPlaceholder">;
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
};

type VariantPropType = keyof PlasmicMiniMenuPerfil__VariantsArgs;
export const PlasmicMiniMenuPerfil__VariantProps = new Array<VariantPropType>(
  "showPlaceholder",
  "isOpen",
  "isDisabled"
);

export type PlasmicMiniMenuPerfil__ArgsType = {
  selectedContent?: React.ReactNode;
  placeholder?: React.ReactNode;
  children?: React.ReactNode;
  value?: string;
  name?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicMiniMenuPerfil__ArgsType;
export const PlasmicMiniMenuPerfil__ArgProps = new Array<ArgPropType>(
  "selectedContent",
  "placeholder",
  "children",
  "value",
  "name",
  "aria-label",
  "aria-labelledby",
  "slot"
);

export type PlasmicMiniMenuPerfil__OverridesType = {
  root?: p.Flex<"div">;
  trigger?: p.Flex<"button">;
  contentContainer?: p.Flex<"div">;
  dropdownIcon?: p.Flex<"svg">;
  overlay?: p.Flex<typeof MiniMenuPerfil__Overlay>;
  optionsContainer?: p.Flex<"div">;
};

export interface DefaultMiniMenuPerfilProps extends pp.BaseSelectProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  slot?: React.ReactNode;
}

const PlasmicMiniMenuPerfilContext = React.createContext<
  | undefined
  | {
      variants: PlasmicMiniMenuPerfil__VariantsArgs;
      args: PlasmicMiniMenuPerfil__ArgsType;
    }
>(undefined);

function PlasmicMiniMenuPerfil__RenderFunc(props: {
  variants: PlasmicMiniMenuPerfil__VariantsArgs;
  args: PlasmicMiniMenuPerfil__ArgsType;
  overrides: PlasmicMiniMenuPerfil__OverridesType;

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

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <PlasmicMiniMenuPerfilContext.Provider value={{ variants, args }}>
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
            [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.rootisOpen]: hasVariant(variants, "isOpen", "isOpen")
          }
        )}
        data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
      >
        <button
          data-plasmic-name={"trigger"}
          data-plasmic-override={overrides.trigger}
          className={classNames(
            projectcss.all,
            projectcss.button,
            sty.trigger,
            {
              [sty.trigger___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.triggerisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
              [sty.triggerisOpen]: hasVariant(variants, "isOpen", "isOpen")
            }
          )}
          disabled={
            hasVariant(variants, "isDisabled", "isDisabled") ? true : undefined
          }
        >
          <div
            data-plasmic-name={"contentContainer"}
            data-plasmic-override={overrides.contentContainer}
            className={classNames(projectcss.all, sty.contentContainer, {
              [sty.contentContainerisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
              [sty.contentContainershowPlaceholder]: hasVariant(
                variants,
                "showPlaceholder",
                "showPlaceholder"
              )
            })}
          >
            {(
              hasVariant(variants, "showPlaceholder", "showPlaceholder")
                ? false
                : false
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "Selected",
                  value: args.selectedContent,
                  className: classNames(sty.slotTargetSelectedContent, {
                    [sty.slotTargetSelectedContentisDisabled]: hasVariant(
                      variants,
                      "isDisabled",
                      "isDisabled"
                    ),
                    [sty.slotTargetSelectedContentisOpen]: hasVariant(
                      variants,
                      "isOpen",
                      "isOpen"
                    ),
                    [sty.slotTargetSelectedContentshowPlaceholder]: hasVariant(
                      variants,
                      "showPlaceholder",
                      "showPlaceholder"
                    )
                  })
                })
              : null}
            {(
              hasVariant(variants, "showPlaceholder", "showPlaceholder")
                ? true
                : false
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "",
                  value: args.placeholder,
                  className: classNames(sty.slotTargetPlaceholder, {
                    [sty.slotTargetPlaceholdershowPlaceholder]: hasVariant(
                      variants,
                      "showPlaceholder",
                      "showPlaceholder"
                    )
                  })
                })
              : null}
          </div>

          <p.PlasmicIcon
            data-plasmic-name={"dropdownIcon"}
            data-plasmic-override={overrides.dropdownIcon}
            PlasmicIconType={
              hasVariant(variants, "isOpen", "isOpen")
                ? ChevronUpsvgIcon
                : ChevronDownsvgIcon
            }
            className={classNames(projectcss.all, sty.dropdownIcon, {
              [sty.dropdownIcon___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.dropdownIconisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
              [sty.dropdownIconisOpen]: hasVariant(variants, "isOpen", "isOpen")
            })}
            role={"img"}
          />

          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__vwQ5H)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"50px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/protect_2_self/images/defaultPfpsvgpng.png",
                  fullWidth: 2048,
                  fullHeight: 2048,
                  aspectRatio: undefined
                }}
              />
            ),

            value: args.slot
          })}
        </button>

        {(hasVariant(variants, "isOpen", "isOpen") ? true : false) ? (
          <MiniMenuPerfil__Overlay
            data-plasmic-name={"overlay"}
            data-plasmic-override={overrides.overlay}
            className={classNames("__wab_instance", sty.overlay, {
              [sty.overlayisOpen]: hasVariant(variants, "isOpen", "isOpen")
            })}
            relativePlacement={"bottom" as const}
          >
            <div
              data-plasmic-name={"optionsContainer"}
              data-plasmic-override={overrides.optionsContainer}
              className={classNames(projectcss.all, sty.optionsContainer, {
                [sty.optionsContainerisOpen]: hasVariant(
                  variants,
                  "isOpen",
                  "isOpen"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <MiniMenuPerfil__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__at7I4
                      )}
                      value={"value1" as const}
                    >
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          sty.link__nQOsO
                        )}
                        component={Link}
                        href={`/perfil`}
                        platform={"nextjs"}
                      >
                        {"Perfil"}
                      </p.PlasmicLink>
                    </MiniMenuPerfil__Option>

                    <MiniMenuPerfil__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__pUu8M
                      )}
                      value={"value2" as const}
                    >
                      {"Configurações"}
                    </MiniMenuPerfil__Option>

                    <MiniMenuPerfil__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option___1X14E
                      )}
                      value={"value3" as const}
                    >
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          sty.link__ru3TT
                        )}
                        component={Link}
                        href={`/`}
                        platform={"nextjs"}
                      >
                        {"Sair"}
                      </p.PlasmicLink>
                    </MiniMenuPerfil__Option>
                  </React.Fragment>
                ),
                value: args.children,
                className: classNames(sty.slotTargetChildren, {
                  [sty.slotTargetChildrenisOpen]: hasVariant(
                    variants,
                    "isOpen",
                    "isOpen"
                  )
                })
              })}
            </div>
          </MiniMenuPerfil__Overlay>
        ) : null}
      </div>
    </PlasmicMiniMenuPerfilContext.Provider>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseSelectProps>(
  props: P,
  ref: pp.SelectRef
) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: (
        <React.Fragment>
          <MiniMenuPerfil__Option
            className={classNames("__wab_instance", sty.option__at7I4)}
            value={"value1" as const}
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__nQOsO
              )}
              component={Link}
              href={`/perfil`}
              platform={"nextjs"}
            >
              {"Perfil"}
            </p.PlasmicLink>
          </MiniMenuPerfil__Option>

          <MiniMenuPerfil__Option
            className={classNames("__wab_instance", sty.option__pUu8M)}
            value={"value2" as const}
          >
            {"Configurações"}
          </MiniMenuPerfil__Option>

          <MiniMenuPerfil__Option
            className={classNames("__wab_instance", sty.option___1X14E)}
            value={"value3" as const}
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__ru3TT
              )}
              component={Link}
              href={`/`}
              platform={"nextjs"}
            >
              {"Sair"}
            </p.PlasmicLink>
          </MiniMenuPerfil__Option>
        </React.Fragment>
      )
    };
  }

  return pp.useSelect(
    PlasmicMiniMenuPerfil,
    props,
    {
      isOpenVariant: { group: "isOpen", variant: "isOpen" },
      placeholderVariant: {
        group: "showPlaceholder",
        variant: "showPlaceholder"
      },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      triggerContentSlot: "selectedContent",
      optionsSlot: "children",
      placeholderSlot: "placeholder",
      root: "root",
      trigger: "trigger",
      overlay: "overlay",
      optionsContainer: "optionsContainer"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "trigger",
    "contentContainer",
    "dropdownIcon",
    "overlay",
    "optionsContainer"
  ],
  trigger: ["trigger", "contentContainer", "dropdownIcon"],
  contentContainer: ["contentContainer"],
  dropdownIcon: ["dropdownIcon"],
  overlay: ["overlay", "optionsContainer"],
  optionsContainer: ["optionsContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  trigger: "button";
  contentContainer: "div";
  dropdownIcon: "svg";
  overlay: typeof MiniMenuPerfil__Overlay;
  optionsContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMiniMenuPerfil__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMiniMenuPerfil__VariantsArgs;
    args?: PlasmicMiniMenuPerfil__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMiniMenuPerfil__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMiniMenuPerfil__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicMiniMenuPerfil__ArgProps,
          internalVariantPropNames: PlasmicMiniMenuPerfil__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMiniMenuPerfil__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMiniMenuPerfil";
  } else {
    func.displayName = `PlasmicMiniMenuPerfil.${nodeName}`;
  }
  return func;
}

export const PlasmicMiniMenuPerfil = Object.assign(
  // Top-level PlasmicMiniMenuPerfil renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    trigger: makeNodeComponent("trigger"),
    contentContainer: makeNodeComponent("contentContainer"),
    dropdownIcon: makeNodeComponent("dropdownIcon"),
    overlay: makeNodeComponent("overlay"),
    optionsContainer: makeNodeComponent("optionsContainer"),

    // Metadata about props expected for PlasmicMiniMenuPerfil
    internalVariantProps: PlasmicMiniMenuPerfil__VariantProps,
    internalArgProps: PlasmicMiniMenuPerfil__ArgProps,

    // Context for sub components
    Context: PlasmicMiniMenuPerfilContext,

    useBehavior
  }
);

export default PlasmicMiniMenuPerfil;
/* prettier-ignore-end */

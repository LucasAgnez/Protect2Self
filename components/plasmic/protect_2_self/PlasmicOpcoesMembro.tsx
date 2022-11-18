// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: _FgEegp8IaS
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
import OpcoesMembro__Overlay from "../../OpcoesMembro__Overlay"; // plasmic-import: BqML-slVbHs/component
import OpcoesMembro__Option from "../../OpcoesMembro__Option"; // plasmic-import: UqHzbATt5ih/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicOpcoesMembro.module.css"; // plasmic-import: _FgEegp8IaS/css

import ChevronDownsvgIcon from "./icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: jEerZVGrA2K/icon
import ChevronUpsvgIcon from "./icons/PlasmicIcon__ChevronUpsvg"; // plasmic-import: 9a8VZ70rIzk/icon

export type PlasmicOpcoesMembro__VariantMembers = {
  showPlaceholder: "showPlaceholder";
  isOpen: "isOpen";
  isDisabled: "isDisabled";
};

export type PlasmicOpcoesMembro__VariantsArgs = {
  showPlaceholder?: SingleBooleanChoiceArg<"showPlaceholder">;
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
};

type VariantPropType = keyof PlasmicOpcoesMembro__VariantsArgs;
export const PlasmicOpcoesMembro__VariantProps = new Array<VariantPropType>(
  "showPlaceholder",
  "isOpen",
  "isDisabled"
);

export type PlasmicOpcoesMembro__ArgsType = {
  selectedContent?: React.ReactNode;
  placeholder?: React.ReactNode;
  children?: React.ReactNode;
  value?: string;
  name?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicOpcoesMembro__ArgsType;
export const PlasmicOpcoesMembro__ArgProps = new Array<ArgPropType>(
  "selectedContent",
  "placeholder",
  "children",
  "value",
  "name",
  "aria-label",
  "aria-labelledby",
  "slot"
);

export type PlasmicOpcoesMembro__OverridesType = {
  root?: p.Flex<"div">;
  trigger?: p.Flex<"button">;
  contentContainer?: p.Flex<"div">;
  dropdownIcon?: p.Flex<"svg">;
  overlay?: p.Flex<typeof OpcoesMembro__Overlay>;
  optionsContainer?: p.Flex<"div">;
};

export interface DefaultOpcoesMembroProps extends pp.BaseSelectProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  slot?: React.ReactNode;
}

const PlasmicOpcoesMembroContext = React.createContext<
  | undefined
  | {
      variants: PlasmicOpcoesMembro__VariantsArgs;
      args: PlasmicOpcoesMembro__ArgsType;
    }
>(undefined);

function PlasmicOpcoesMembro__RenderFunc(props: {
  variants: PlasmicOpcoesMembro__VariantsArgs;
  args: PlasmicOpcoesMembro__ArgsType;
  overrides: PlasmicOpcoesMembro__OverridesType;

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

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "showPlaceholder",
        type: "private",
        initFunc: ($props, $state) => $props["showPlaceholder"]
      },

      {
        path: "isOpen",
        type: "private",
        initFunc: ($props, $state) => $props["isOpen"]
      },

      {
        path: "isDisabled",
        type: "private",
        initFunc: ($props, $state) => $props["isDisabled"]
      }
    ],

    [$props]
  );
  const $state = p.useDollarState(stateSpecs, $props);

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <PlasmicOpcoesMembroContext.Provider value={{ variants, args }}>
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
            [sty.rootisOpen]: hasVariant($state, "isOpen", "isOpen")
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
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.triggerisOpen]: hasVariant($state, "isOpen", "isOpen"),
              [sty.triggershowPlaceholder]: hasVariant(
                $state,
                "showPlaceholder",
                "showPlaceholder"
              )
            }
          )}
          disabled={
            hasVariant($state, "isDisabled", "isDisabled") ? true : undefined
          }
        >
          <div
            data-plasmic-name={"contentContainer"}
            data-plasmic-override={overrides.contentContainer}
            className={classNames(projectcss.all, sty.contentContainer, {
              [sty.contentContainerisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.contentContainershowPlaceholder]: hasVariant(
                $state,
                "showPlaceholder",
                "showPlaceholder"
              )
            })}
          >
            {(
              hasVariant($state, "showPlaceholder", "showPlaceholder")
                ? false
                : false
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "Selected",
                  value: args.selectedContent,
                  className: classNames(sty.slotTargetSelectedContent, {
                    [sty.slotTargetSelectedContentisDisabled]: hasVariant(
                      $state,
                      "isDisabled",
                      "isDisabled"
                    ),
                    [sty.slotTargetSelectedContentisOpen]: hasVariant(
                      $state,
                      "isOpen",
                      "isOpen"
                    ),
                    [sty.slotTargetSelectedContentshowPlaceholder]: hasVariant(
                      $state,
                      "showPlaceholder",
                      "showPlaceholder"
                    )
                  })
                })
              : null}
            {(
              hasVariant($state, "showPlaceholder", "showPlaceholder")
                ? true
                : false
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "",
                  value: args.placeholder,
                  className: classNames(sty.slotTargetPlaceholder, {
                    [sty.slotTargetPlaceholdershowPlaceholder]: hasVariant(
                      $state,
                      "showPlaceholder",
                      "showPlaceholder"
                    )
                  })
                })
              : null}
          </div>

          {(
            hasVariant($state, "showPlaceholder", "showPlaceholder")
              ? true
              : true
          ) ? (
            <p.PlasmicIcon
              data-plasmic-name={"dropdownIcon"}
              data-plasmic-override={overrides.dropdownIcon}
              PlasmicIconType={
                hasVariant($state, "isOpen", "isOpen")
                  ? ChevronUpsvgIcon
                  : ChevronDownsvgIcon
              }
              className={classNames(projectcss.all, sty.dropdownIcon, {
                [sty.dropdownIcon___focusVisibleWithin]:
                  triggers.focusVisibleWithin_root,
                [sty.dropdownIconisDisabled]: hasVariant(
                  $state,
                  "isDisabled",
                  "isDisabled"
                ),
                [sty.dropdownIconisOpen]: hasVariant(
                  $state,
                  "isOpen",
                  "isOpen"
                ),
                [sty.dropdownIconshowPlaceholder]: hasVariant(
                  $state,
                  "showPlaceholder",
                  "showPlaceholder"
                )
              })}
              role={"img"}
            />
          ) : null}
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__iA6Su)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"50px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/protect_2_self/images/image2Png.png",
                  fullWidth: 512,
                  fullHeight: 512,
                  aspectRatio: undefined
                }}
              />
            ),

            value: args.slot
          })}
        </button>

        {(hasVariant($state, "isOpen", "isOpen") ? true : false) ? (
          <OpcoesMembro__Overlay
            data-plasmic-name={"overlay"}
            data-plasmic-override={overrides.overlay}
            className={classNames("__wab_instance", sty.overlay, {
              [sty.overlayisOpen]: hasVariant($state, "isOpen", "isOpen")
            })}
            relativePlacement={"bottom" as const}
          >
            <div
              data-plasmic-name={"optionsContainer"}
              data-plasmic-override={overrides.optionsContainer}
              className={classNames(projectcss.all, sty.optionsContainer, {
                [sty.optionsContainerisOpen]: hasVariant(
                  $state,
                  "isOpen",
                  "isOpen"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <OpcoesMembro__Option
                    className={classNames("__wab_instance", sty.option___62Qq7)}
                    value={"value1" as const}
                  >
                    {"Adicionar Amigo"}
                  </OpcoesMembro__Option>
                ),

                value: args.children,
                className: classNames(sty.slotTargetChildren, {
                  [sty.slotTargetChildrenisOpen]: hasVariant(
                    $state,
                    "isOpen",
                    "isOpen"
                  )
                })
              })}
            </div>
          </OpcoesMembro__Overlay>
        ) : null}
      </div>
    </PlasmicOpcoesMembroContext.Provider>
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
        <OpcoesMembro__Option
          className={classNames("__wab_instance", sty.option___62Qq7)}
          value={"value1" as const}
        >
          {"Adicionar Amigo"}
        </OpcoesMembro__Option>
      )
    };
  }

  return pp.useSelect(
    PlasmicOpcoesMembro,
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
  overlay: typeof OpcoesMembro__Overlay;
  optionsContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOpcoesMembro__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOpcoesMembro__VariantsArgs;
    args?: PlasmicOpcoesMembro__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOpcoesMembro__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOpcoesMembro__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicOpcoesMembro__ArgProps,
          internalVariantPropNames: PlasmicOpcoesMembro__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicOpcoesMembro__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOpcoesMembro";
  } else {
    func.displayName = `PlasmicOpcoesMembro.${nodeName}`;
  }
  return func;
}

export const PlasmicOpcoesMembro = Object.assign(
  // Top-level PlasmicOpcoesMembro renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    trigger: makeNodeComponent("trigger"),
    contentContainer: makeNodeComponent("contentContainer"),
    dropdownIcon: makeNodeComponent("dropdownIcon"),
    overlay: makeNodeComponent("overlay"),
    optionsContainer: makeNodeComponent("optionsContainer"),

    // Metadata about props expected for PlasmicOpcoesMembro
    internalVariantProps: PlasmicOpcoesMembro__VariantProps,
    internalArgProps: PlasmicOpcoesMembro__ArgProps,

    // Context for sub components
    Context: PlasmicOpcoesMembroContext,

    useBehavior
  }
);

export default PlasmicOpcoesMembro;
/* prettier-ignore-end */

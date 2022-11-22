// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8XuJZfnuNd7UvNkkshapC6
// Component: JvLnzcKYZbb
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
import Select__Overlay from "../../Select__Overlay"; // plasmic-import: aKWnxE_fL_n/component
import Select__Option from "../../Select__Option"; // plasmic-import: MXYniCeie3G/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_protect_2_self.module.css"; // plasmic-import: 8XuJZfnuNd7UvNkkshapC6/projectcss
import sty from "./PlasmicSelect.module.css"; // plasmic-import: JvLnzcKYZbb/css

import ChevronDownsvgIcon from "./icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: jEerZVGrA2K/icon
import ChevronUpsvgIcon from "./icons/PlasmicIcon__ChevronUpsvg"; // plasmic-import: 9a8VZ70rIzk/icon

export type PlasmicSelect__VariantMembers = {
  showPlaceholder: "showPlaceholder";
  isOpen: "isOpen";
  isDisabled: "isDisabled";
  color:
    | "softBlue"
    | "softCyan"
    | "softGreen"
    | "softYellow"
    | "softOrange"
    | "softRed"
    | "softPink"
    | "softPurple"
    | "softGray"
    | "clear"
    | "dark";
};

export type PlasmicSelect__VariantsArgs = {
  showPlaceholder?: SingleBooleanChoiceArg<"showPlaceholder">;
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  color?: SingleChoiceArg<
    | "softBlue"
    | "softCyan"
    | "softGreen"
    | "softYellow"
    | "softOrange"
    | "softRed"
    | "softPink"
    | "softPurple"
    | "softGray"
    | "clear"
    | "dark"
  >;
};

type VariantPropType = keyof PlasmicSelect__VariantsArgs;
export const PlasmicSelect__VariantProps = new Array<VariantPropType>(
  "showPlaceholder",
  "isOpen",
  "isDisabled",
  "color"
);

export type PlasmicSelect__ArgsType = {
  selectedContent?: React.ReactNode;
  placeholder?: React.ReactNode;
  children?: React.ReactNode;
  value?: string;
  name?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  id?: string;
};

type ArgPropType = keyof PlasmicSelect__ArgsType;
export const PlasmicSelect__ArgProps = new Array<ArgPropType>(
  "selectedContent",
  "placeholder",
  "children",
  "value",
  "name",
  "aria-label",
  "aria-labelledby",
  "id"
);

export type PlasmicSelect__OverridesType = {
  root?: p.Flex<"div">;
  trigger?: p.Flex<"button">;
  contentContainer?: p.Flex<"div">;
  dropdownIcon?: p.Flex<"svg">;
  overlay?: p.Flex<typeof Select__Overlay>;
  optionsContainer?: p.Flex<"div">;
};

export interface DefaultSelectProps extends pp.BaseSelectProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  id?: string;
  color?: SingleChoiceArg<
    | "softBlue"
    | "softCyan"
    | "softGreen"
    | "softYellow"
    | "softOrange"
    | "softRed"
    | "softPink"
    | "softPurple"
    | "softGray"
    | "clear"
    | "dark"
  >;
}

const PlasmicSelectContext = React.createContext<
  | undefined
  | { variants: PlasmicSelect__VariantsArgs; args: PlasmicSelect__ArgsType }
>(undefined);

function PlasmicSelect__RenderFunc(props: {
  variants: PlasmicSelect__VariantsArgs;
  args: PlasmicSelect__ArgsType;
  overrides: PlasmicSelect__OverridesType;

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
        initFunc: ($props, $state) => $props.showPlaceholder
      },

      {
        path: "isOpen",
        type: "private",
        initFunc: ($props, $state) => $props.isOpen
      },

      {
        path: "isDisabled",
        type: "private",
        initFunc: ($props, $state) => $props.isDisabled
      },

      {
        path: "color",
        type: "private",
        initFunc: ($props, $state) => $props.color
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
    <PlasmicSelectContext.Provider value={{ variants, args }}>
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
            [sty.rootcolor_clear]: hasVariant($state, "color", "clear"),
            [sty.rootcolor_softBlue]: hasVariant($state, "color", "softBlue"),
            [sty.rootcolor_softCyan]: hasVariant($state, "color", "softCyan"),
            [sty.rootcolor_softGreen]: hasVariant($state, "color", "softGreen"),
            [sty.rootcolor_softOrange]: hasVariant(
              $state,
              "color",
              "softOrange"
            ),
            [sty.rootcolor_softPink]: hasVariant($state, "color", "softPink"),
            [sty.rootcolor_softPurple]: hasVariant(
              $state,
              "color",
              "softPurple"
            ),
            [sty.rootcolor_softRed]: hasVariant($state, "color", "softRed"),
            [sty.rootcolor_softYellow]: hasVariant(
              $state,
              "color",
              "softYellow"
            ),
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
              [sty.triggercolor_clear]: hasVariant($state, "color", "clear"),
              [sty.triggercolor_dark]: hasVariant($state, "color", "dark"),
              [sty.triggercolor_dark_isOpen]:
                hasVariant($state, "isOpen", "isOpen") &&
                hasVariant($state, "color", "dark"),
              [sty.triggercolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
              [sty.triggercolor_softCyan]: hasVariant(
                $state,
                "color",
                "softCyan"
              ),
              [sty.triggercolor_softGray]: hasVariant(
                $state,
                "color",
                "softGray"
              ),
              [sty.triggercolor_softGreen]: hasVariant(
                $state,
                "color",
                "softGreen"
              ),
              [sty.triggercolor_softOrange]: hasVariant(
                $state,
                "color",
                "softOrange"
              ),
              [sty.triggercolor_softPink]: hasVariant(
                $state,
                "color",
                "softPink"
              ),
              [sty.triggercolor_softPurple]: hasVariant(
                $state,
                "color",
                "softPurple"
              ),
              [sty.triggercolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),
              [sty.triggercolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),
              [sty.triggerisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.triggerisOpen]: hasVariant($state, "isOpen", "isOpen")
            }
          )}
          disabled={
            hasVariant($state, "isDisabled", "isDisabled") ? true : undefined
          }
          id={args.id}
          value={args.value}
        >
          <div
            data-plasmic-name={"contentContainer"}
            data-plasmic-override={overrides.contentContainer}
            className={classNames(projectcss.all, sty.contentContainer, {
              [sty.contentContainercolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
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
                : true
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "Selected",
                  value: args.selectedContent,
                  className: classNames(sty.slotTargetSelectedContent, {
                    [sty.slotTargetSelectedContentcolor_softBlue]: hasVariant(
                      $state,
                      "color",
                      "softBlue"
                    ),
                    [sty.slotTargetSelectedContentcolor_softCyan]: hasVariant(
                      $state,
                      "color",
                      "softCyan"
                    ),
                    [sty.slotTargetSelectedContentcolor_softGreen]: hasVariant(
                      $state,
                      "color",
                      "softGreen"
                    ),
                    [sty.slotTargetSelectedContentcolor_softOrange]: hasVariant(
                      $state,
                      "color",
                      "softOrange"
                    ),
                    [sty.slotTargetSelectedContentcolor_softPink]: hasVariant(
                      $state,
                      "color",
                      "softPink"
                    ),
                    [sty.slotTargetSelectedContentcolor_softPurple]: hasVariant(
                      $state,
                      "color",
                      "softPurple"
                    ),
                    [sty.slotTargetSelectedContentcolor_softRed]: hasVariant(
                      $state,
                      "color",
                      "softRed"
                    ),
                    [sty.slotTargetSelectedContentcolor_softYellow]: hasVariant(
                      $state,
                      "color",
                      "softYellow"
                    ),
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
                  defaultContents: "Select…",
                  value: args.placeholder,
                  className: classNames(sty.slotTargetPlaceholder, {
                    [sty.slotTargetPlaceholdercolor_dark]: hasVariant(
                      $state,
                      "color",
                      "dark"
                    ),
                    [sty.slotTargetPlaceholdercolor_softBlue]: hasVariant(
                      $state,
                      "color",
                      "softBlue"
                    ),
                    [sty.slotTargetPlaceholdercolor_softYellow_showPlaceholder]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softYellow"),
                    [sty.slotTargetPlaceholdershowPlaceholder]: hasVariant(
                      $state,
                      "showPlaceholder",
                      "showPlaceholder"
                    ),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softBlue]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softBlue"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softCyan]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softCyan"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softGreen]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softGreen"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softOrange]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softOrange"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softPink]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softPink"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softPurple]:
                      hasVariant($state, "color", "softPurple") &&
                      hasVariant($state, "showPlaceholder", "showPlaceholder"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softRed]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softRed")
                  })
                })
              : null}
          </div>

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
              [sty.dropdownIconcolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
              [sty.dropdownIconcolor_softCyan]: hasVariant(
                $state,
                "color",
                "softCyan"
              ),
              [sty.dropdownIconcolor_softGray]: hasVariant(
                $state,
                "color",
                "softGray"
              ),
              [sty.dropdownIconcolor_softGreen]: hasVariant(
                $state,
                "color",
                "softGreen"
              ),
              [sty.dropdownIconcolor_softOrange]: hasVariant(
                $state,
                "color",
                "softOrange"
              ),
              [sty.dropdownIconcolor_softPink]: hasVariant(
                $state,
                "color",
                "softPink"
              ),
              [sty.dropdownIconcolor_softPurple]: hasVariant(
                $state,
                "color",
                "softPurple"
              ),
              [sty.dropdownIconcolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),
              [sty.dropdownIconcolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),
              [sty.dropdownIconisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.dropdownIconisOpen]: hasVariant($state, "isOpen", "isOpen")
            })}
            role={"img"}
          />
        </button>

        {(hasVariant($state, "isOpen", "isOpen") ? true : false) ? (
          <Select__Overlay
            data-plasmic-name={"overlay"}
            data-plasmic-override={overrides.overlay}
            className={classNames("__wab_instance", sty.overlay, {
              [sty.overlaycolor_dark]: hasVariant($state, "color", "dark"),
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
                  <React.Fragment>
                    <Select__Option
                      className={classNames("__wab_instance", sty.option__kNr9)}
                      color={"dark" as const}
                      value={"value1" as const}
                    >
                      {"Option 1"}
                    </Select__Option>

                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option___5Ga6B
                      )}
                      color={"dark" as const}
                      value={"value2" as const}
                    >
                      {"Option 2"}
                    </Select__Option>
                  </React.Fragment>
                ),
                value: args.children
              })}
            </div>
          </Select__Overlay>
        ) : null}
      </div>
    </PlasmicSelectContext.Provider>
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
          <Select__Option
            className={classNames("__wab_instance", sty.option__kNr9)}
            color={"dark" as const}
            value={"value1" as const}
          >
            {"Option 1"}
          </Select__Option>

          <Select__Option
            className={classNames("__wab_instance", sty.option___5Ga6B)}
            color={"dark" as const}
            value={"value2" as const}
          >
            {"Option 2"}
          </Select__Option>
        </React.Fragment>
      )
    };
  }

  return pp.useSelect(
    PlasmicSelect,
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
  overlay: typeof Select__Overlay;
  optionsContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSelect__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSelect__VariantsArgs;
    args?: PlasmicSelect__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSelect__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSelect__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicSelect__ArgProps,
          internalVariantPropNames: PlasmicSelect__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSelect__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect";
  } else {
    func.displayName = `PlasmicSelect.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect = Object.assign(
  // Top-level PlasmicSelect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    trigger: makeNodeComponent("trigger"),
    contentContainer: makeNodeComponent("contentContainer"),
    dropdownIcon: makeNodeComponent("dropdownIcon"),
    overlay: makeNodeComponent("overlay"),
    optionsContainer: makeNodeComponent("optionsContainer"),

    // Metadata about props expected for PlasmicSelect
    internalVariantProps: PlasmicSelect__VariantProps,
    internalArgProps: PlasmicSelect__ArgProps,

    // Context for sub components
    Context: PlasmicSelectContext,

    useBehavior
  }
);

export default PlasmicSelect;
/* prettier-ignore-end */
// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: h7nsvXB4obAB7ugEVRbAmZ
// Component: XhdG6ZUHROpL

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariants_3UkOc2GwR38 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 3UKOc2gwR38_/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: h7nsvXB4obAB7ugEVRbAmZ/projectcss
import sty from "./PlasmicProjectHeader.module.css"; // plasmic-import: XhdG6ZUHROpL/css

createPlasmicElementProxy;

export type PlasmicProjectHeader__VariantMembers = {};
export type PlasmicProjectHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicProjectHeader__VariantsArgs;
export const PlasmicProjectHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicProjectHeader__ArgsType = {
  title?: React.ReactNode;
  role?: React.ReactNode;
  timeline?: React.ReactNode;
};
type ArgPropType = keyof PlasmicProjectHeader__ArgsType;
export const PlasmicProjectHeader__ArgProps = new Array<ArgPropType>(
  "title",
  "role",
  "timeline"
);

export type PlasmicProjectHeader__OverridesType = {
  root?: Flex__<"section">;
  h1?: Flex__<"h1">;
};

export interface DefaultProjectHeaderProps {
  title?: React.ReactNode;
  role?: React.ReactNode;
  timeline?: React.ReactNode;
  className?: string;
}

const $$ = {};

function PlasmicProjectHeader__RenderFunc(props: {
  variants: PlasmicProjectHeader__VariantsArgs;
  args: PlasmicProjectHeader__ArgsType;
  overrides: PlasmicProjectHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_3UkOc2GwR38()
  });

  return (
    <Stack__
      as={"section"}
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
      <div className={classNames(projectcss.all, sty.columns__fNu7)}>
        <div className={classNames(projectcss.all, sty.column__xeIm)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ocoTa
            )}
          >
            {"BRANDING"}
          </div>
          <h1
            data-plasmic-name={"h1"}
            data-plasmic-override={overrides.h1}
            className={classNames(projectcss.all, projectcss.h1, sty.h1)}
          >
            {renderPlasmicSlot({
              defaultContents: "Premium SaaS Design",
              value: args.title,
              className: classNames(sty.slotTargetTitle)
            })}
          </h1>
        </div>
        <div className={classNames(projectcss.all, sty.column__eu7KI)}>
          <div className={classNames(projectcss.all, sty.columns__n3PgE)}>
            <div className={classNames(projectcss.all, sty.column__e5R7L)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rsWjZ
                )}
              >
                {"ROLE"}
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__y70Cq)}>
                {renderPlasmicSlot({
                  defaultContents: "UI/UX Designer",
                  value: args.role,
                  className: classNames(sty.slotTargetRole)
                })}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.column___4MM28)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bMnYh
                )}
              >
                {"TIMELINE"}
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__mc7Vl)}>
                {renderPlasmicSlot({
                  defaultContents: "Sep - Dec 2023",
                  value: args.timeline,
                  className: classNames(sty.slotTargetTimeline)
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "section";
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProjectHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProjectHeader__VariantsArgs;
    args?: PlasmicProjectHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProjectHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProjectHeader__ArgsType,
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProjectHeader__ArgProps,
          internalVariantPropNames: PlasmicProjectHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProjectHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjectHeader";
  } else {
    func.displayName = `PlasmicProjectHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicProjectHeader = Object.assign(
  // Top-level PlasmicProjectHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicProjectHeader
    internalVariantProps: PlasmicProjectHeader__VariantProps,
    internalArgProps: PlasmicProjectHeader__ArgProps
  }
);

export default PlasmicProjectHeader;
/* prettier-ignore-end */

import type {
	ToggleGroupItemProps,
	ToggleGroupItemPropsWithoutHTML,
	ToggleGroupRootPropsWithoutHTML,
} from "../toggle-group/types.js";
import type { Orientation } from "$lib/shared/index.js";
import type {
	PrimitiveAnchorAttributes,
	PrimitiveButtonAttributes,
	PrimitiveDivAttributes,
	WithChild,
	Without,
} from "$lib/internal/types.js";

export type ToolbarRootPropsWithoutHTML = WithChild<{
	/**
	 * The orientation of the toolbar. This determines how keyboard navigation
	 * will work within the toolbar.
	 *
	 * @defaultValue "horizontal"
	 */
	orientation?: Orientation;

	/**
	 * Whether or not to loop through the toolbar items when navigating with the
	 * keyboard.
	 *
	 * @defaultValue true
	 */
	loop?: boolean;
}>;

export type ToolbarRootProps = ToolbarRootPropsWithoutHTML &
	Without<PrimitiveDivAttributes, ToolbarRootPropsWithoutHTML>;

export type ToolbarGroupPropsWithoutHTML = Omit<
	ToggleGroupRootPropsWithoutHTML,
	"orientation" | "loop" | "rovingFocus"
>;

export type ToolbarGroupProps = ToolbarGroupPropsWithoutHTML &
	Without<PrimitiveDivAttributes, ToolbarGroupPropsWithoutHTML>;

export type ToolbarGroupItemPropsWithoutHTML = ToggleGroupItemPropsWithoutHTML;

export type ToolbarGroupItemProps = ToggleGroupItemProps;

export type ToolbarButtonPropsWithoutHTML = WithChild<{
	/**
	 * Whether the button is disabled or not.
	 */
	disabled?: boolean;
}>;

export type ToolbarButtonProps = ToolbarButtonPropsWithoutHTML &
	Without<PrimitiveButtonAttributes, ToolbarButtonPropsWithoutHTML>;

export type ToolbarLinkPropsWithoutHTML = WithChild;

export type ToolbarLinkProps = ToolbarLinkPropsWithoutHTML &
	Without<PrimitiveAnchorAttributes, ToolbarLinkPropsWithoutHTML>;

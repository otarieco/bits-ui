import type { PrimitiveDivAttributes, WithChild, Without } from "$lib/internal/index.js";
import type { Orientation } from "$lib/shared/index.js";

export type SeparatorRootPropsWithoutHTML = WithChild<{
	/**
	 * The orientation of the separator.
	 *
	 * @defaultValue "horizontal"
	 */
	orientation?: Orientation;

	/**
	 * Whether the separator is decorative and should be hidden from assistive technologies.
	 *
	 * @defaultValue false
	 */
	decorative?: boolean;
}>;

export type SeparatorRootProps = SeparatorRootPropsWithoutHTML &
	Without<PrimitiveDivAttributes, SeparatorRootPropsWithoutHTML>;

import type { Class } from "type-fest";

export const assert = <T>(
	value: T | undefined | null,
	ErrorCls?: Class<Error>,
): asserts value is T => {
	if (value === undefined || value === null) {
		throw ErrorCls ? new ErrorCls() : Error();
	}
};

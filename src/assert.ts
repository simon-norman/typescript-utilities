/** throws if value not defined - to narrow types to defined */
export const assertDefined = <T>(
	value: T | undefined | null,
	err: Error,
): asserts value is T => {
	if (value === undefined || value === null) {
		throw err;
	}
};

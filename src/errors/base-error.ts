import captureStackTrace from "capture-stack-trace";

export type ErrParams<T> = {
	message: string;
	/** specific error code, meant to be quite global, should describe exactly what the error is */
	code: string;
	/** putting any kind of data about the error */
	errData: T;
};

export class Err<T extends object> extends Error {
	readonly code: string;
	readonly errData: T;

	constructor(params: ErrParams<T>) {
		super(params.message);
		this.code = params.code;
		this.errData = params.errData;
	}

	public static create<T extends object>(params: ErrParams<T>) {
		const err = new Err(params);
		if (!err.stack) captureStackTrace(err);

		return err;
	}
}

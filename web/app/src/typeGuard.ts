const isPartOf = <V, O extends V[]>(value: V, options: O) => {
	return options.includes(value);
};

const getValidValue = <V>(value: unknown, options: V[]): V => {
	if (isPartOf(value, options)) {
		return value as V;
	}
	// create a specific format for these type guards as I can see them being pretty common
	throw new Error(
		`Value must be one of the following: ${options.join(', ')}`
	);
};

export { getValidValue };

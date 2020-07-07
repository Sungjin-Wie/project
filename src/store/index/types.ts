export type IndexState = {
    value: string;
};

export type InputAction = {
    type: string;
    payload: Record<string, null> | string | undefined;
}

export type IndexAction = InputAction;
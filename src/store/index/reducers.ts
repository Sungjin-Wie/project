import { IndexState, IndexAction } from './types'

export const indexState: IndexState = {
    value: ""
};

export const indexReducer = (state = indexState, action: IndexAction): IndexState => {
    const { type } = action;
    switch (type) {

        default:
            return state;
    }
}

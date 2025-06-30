export function createStore(rootReducer) {
    let state = {}
    const subscribers = []

    return {
        dispatch() {
            // action === {type: 'INCREMENT'}
            dispatch(action) {
                state = rootReducer(state, action)
            }
        },
        subscribe() {
            subscribers.push(callback)
        },
        getState() {
            return state
        }
    }
}
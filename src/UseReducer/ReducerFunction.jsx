export const initalState={count : 0}

export function reducer(state,action){

    switch (action.type) {
        case "incerment":
            return{count : state.count +1};
        case "decrement":
            return{count : state.count -1};
        case "reset":
            return{count:0};

        default:
            throw new Error ('Unkown Action type');
            
    }
}

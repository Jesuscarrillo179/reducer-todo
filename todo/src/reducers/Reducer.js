export const initialState = {
    list: [{
        item: 'clean dishes',
        completed: false,
        id: 1
    },{
        item: 'clean room',
        completed: true,
        id: 2
    }]
}

export function Reducer(state, action){
    switch (action.type) {
        case 'ADD_TODO':
          return {
            list:[...state.list, action.payload]
          };
        case 'TOGGLE_COMPLETE':
            return {
                    ...state,
                    list: state.list.map(item => {
                        if( action.payload === item.id ){
                            return {
                                ...item,
                                completed: !item.completed
                            }
                        }
                        return item;
                    })
            };
        case 'REMOVE_TODO':
          return {
                list: state.list.filter(item => !item.completed)
          };
        default:
          return state;
      }
}
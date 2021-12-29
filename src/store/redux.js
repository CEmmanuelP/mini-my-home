const initialState = {
    RESULT: [],
    list_total_count: "",
    row: [],
};

export const getDataAction = (data) => {
    console.log(data);
    return {
        type: "ADD_DATA",
        data: data,
    };
};

export const getDetailDataAction = (id) => {
    return {
        type: "GET_DETAIL_DATA",
        id: id,
    };
};

const dataReducer = (state = initialState, action) => {
    console.log("dataReducer");
    console.log(action);
    console.log(state);
    switch (action.type) {
        case "ADD_DATA": {
            return {
                ...state,
                RESULT: action.data.RESULT,
                list_total_count: action.data.list_total_count,
                row: action.data.row,
            };
        }
        case "GET_DETAIL_DATA": {
            const detail = state.row.filter(
                (element) => element.SVCID === `${action.id.id}`
            );

            return {
                ...state,
                detail: detail[0],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default dataReducer;

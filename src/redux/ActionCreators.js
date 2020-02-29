import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'

export const fetchKids = () => (dispatch) => {
    dispatch(kidsLoading(true));
    return fetch(baseUrl + 'see-kids-api',{
        method:'GET',
        // body: JSON.stringify(kids),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok){
            console.log('response ok')
            return response;
        }
        else{
            var error = new Error('Error '+ response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
   .then(response => response.json())
   .then(kids => dispatch(showKids(kids)))
   .catch(error => dispatch(kidsFailed(error.message))); 
};

export const kidsLoading = () => ({
   type: ActionTypes.KIDS_LOADING,
});

export const kidsFailed = (errmess) => ({
   type: ActionTypes.KIDS_FAILED,
   payload: errmess
});

export const showKids = (kids) => ({
   type: ActionTypes.SHOW_KIDS,
   payload: kids
});
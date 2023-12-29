// import { configureStore } from 'react-redux'
// import { useDispatch, useSelector} from 'react-redux'

// const dispatch = useDispatch()
// const customers = useSelector(state => state.customers.list)

const addList = list => {
	dispatch({ type: 'ADD_LIST', payload: customers })
}

const getList = list => {
	dispatch({ type: 'GET_LIST', payload: customers })
}

const defaultState = {
   customers: []
}

const customerReducer = (state = defaultState, action) => {
   switch (action.type) {
			case 'ADD_CUSTOMER':
				return { ...state, customers: state.customers + action.payload }
			case 'GET_CUSTOMER':
				return { ...state, customers: state.customers - action.payload }
         default:
            return state
		}
}




// const store = configureStore(customerReducer)

// export default store
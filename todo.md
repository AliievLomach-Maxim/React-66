# React-66

## Module-01

### Less-01

    -   CRA
    -   hierarchy
    -   React.createElement(type,props,children)
    -   ReactDom.createRoot
    -   JSX
    -   work with collection
    -   key
    -   use function
    -   edit function to <Component/>
    -   props
    -   hierarchy components
    -   fragment
    -   conditional rendering

### Less-02

    -   children
    -   devTools

    -   styled
    -   inLine style
    -   vanilla css
    -   module css
        -   composition class
        -   Classnames || clsx
    -   CSS in JS
        -   styled-components
        -   props

## Module 2

### Less 1

-   Class Component

-   Events

    -   Event delegation
    -   inLine clb Function
    -   clb function with context
        -   public values
        -   constructor && prototype
        -   SyntheticEvent Object vs Async

-   State

    -   react flow
    -   update state with setState(update)
    -   prevState
    -   upper state

-   Modal
-   To-Do List

### Less 2

-   onChange vs control form
-   onSubmit
-   class Form
-   form reset
-   radio
    -   checked
    -   value
-   checkBox
-   Register form
-   add todo

## Module 3

### Less 1

-   Mounting
-   Updating
-   Unmounting
-   componentDidMount
-   componentDidUpdate(prevProps, prevState)
-   componentDidUnmount

-   close modal by ESC
-   set data to localStorage

-   shouldComponentUpdate vs PureComponent
-   refactoring

### Less 2

> > feef20bb6ec8430ab253f1d0367f9ccf

-   http how to use
-   architecture
    -   search -> app -> content
    -   validation search with react-hot-toast
    -   componentDidUpdate in content
    -   fetch in content
    -   loading in content
    -   destructuring state
-   http errors
-   pattern stateMachine with status['idle','pending','rejected','resolved']

## Module 4

### Less 1

-   useState
-   useState nothing save state
-   useState one State = one useState
-   useState convert class to hooks

-   useEffect
-   useEffect first render <Modal/>
-   useEffect every render <LoginForm/>
-   useEffect clear after render <Modal/>

-   useEffect first render <ToDo/>
-   useEffect update on any change <ToDo/>
-   refactor with toast <ToDo/>

-   edit class to huk <ContentInfo/>
-   if return <ContentInfo/>
-   batching in React 18

### Less 2

-   useReducer <Counter/>
-   action.type
-   action.payload
-   dispatch

-   useMemo <TestUseMemo/>
-   complexCompute <TestUseMemo/>
-   useEffect vs useMemo <TestUseMemo/>

-   useCallback <TestUseMemo/>

-   Profiler

-   useContext
-   Provider
-   toggleState
-   useAlert

## Module 5

### Less 1

-   BrowserRouter <Index.js/>
-   Routes & Route <App.js/>
-   Link to <Header/>
-   Outlet & nested routes <HomePage/>
-   add <Layout/>
-   use index
-   add Context
-   global save search result <Context/>
-   PageDetails for news & users
-   useParams

### Less 2

-   useSearchParams
-   objectFromEntries
-   BackBtn with useLocation
-   location.state
-   lazy & suspense
-   loginPage
-   PrivateRoute

## Module 6

### Less 1

-   how it works
-   install redux

-   function createStore
-   function reducer
-   reducer default value
-   getState
-   dispatch
-   switch

-   redux connect to react
-   install react-redux
-   Provider

-   useSelector
-   useDispatch
-   set step
-   ...state

-   reducer.js
-   actions.js
-   types.js

-   initialState
-   combineReducer

### Less 2

-   redux-toolkit
-   redux-devtools
-   createAction
-   createReducer
    -   action.toString()
-   configureStore
-   combineReducer not use at the top level
-   selectors

-   redux persist
    -   combineReducer
    -   serializableCheck
    -   create persist for one state
    -   persist back object
    -   whitelist

## Module 7

### Less 1

-   how its work (Async Redux)
-   create custom middleware
-   create fetchNews
-   create getNewsAction
-   create newsReducer
-   create newsSlice
-   createAsyncThunk
-   add extraReducers to newsSlice
-   payloadCreator(arg, thunkAPI)
-   edit ContentInfo with getNewsThunk

# Module 7 > Less 2

-   useSelector problem
-   create selector folder
-   test with local state
-   createSelector (memo)
-   shallowEqual

-   builder

    -   addCase
    -   addMatcher
    -   isAnyOf

-   RTK Query
    -   createApi
    -   query
    -   use...Query
    -   middleware
    -   mutation
    -   use...Mutation
    -   providerTags
    -   invalidatesTags

# Module 8 > Less 1

-   create signIn
-   JSON Web Token
-   authLogin
-   create auth state/slice/thunk
-   header logic
-   global instance axios
-   setAuthToken
-   get profile

# Module 8 > Less 2

-   unwrap()
-   thunkApi
-   publicRoute
-   location
-   auto login
-   private & public Api

-   Framer Motion
-   react-spring

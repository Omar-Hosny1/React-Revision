## React

---

1 - To build a website using Vanilla JS you will follow the imperative approach
2 - To build a website using React JS you will follow the declarative approach (**The Best Approach**)

---

## React Hooks

---

React Hooks => Its a special functions that can only be used in functional component;

useState => Its a special hook that manage state in the functional component;

React hooks can only used inside the root element (the functional component)

useEffect => render after or for every component render cycle.

---

## React Hooks( useReducer )

---

useReducer => its a way to manage the related state
useReducer(reducerFunction, initialState) => it return an array of two elements.

cosnt [ currentState, dispatchFn ] = useReducer(reducerFunction, initialState)

reducerFunction(state, action)

---

## ECMA SCRIPT

---

### Districturing (ARRAY, OBJECT)

### Spread Operator ...

### Arrow Function () => {}

---

## Context Api

---

1 - Create The Auth Folder <br />
2 - Create The Context Using a Function Called => CreateContext(**VALUE**) <br />
3 - Wrap Your Components With Your Context Provider And Define The 'value' Prop <br />
4 - Define Your Logic <br />
5 - Use The useContext Prop to access the values in the context <br />

---

## React Router V6 Instade Of React Router V5

---

**Routes** instade of **Switch** <br />

**Route** has a new prop called element that has the rendering element **As A JSX** <br />

**NavLink** in the className prop you will pass a function with one param and this param has a isActive value (use the ternary operator to define the active class name) <br />

**Navigate** instade of **Redirect** <br />

**useNavigate** instade of **useHistory** navigate("/your-route") || navigate("/your-route", {replace : true}) <br />

---

---

## Arrow Function VS Regular Function

1 - Regular Function (Maybe has name or anonymous) VS Arrow Function are always anonymous. <br />
2 - You can call the Regular Function (With Name) before initialize it but Arrow Function Not. (Hoisting). <br />
3 - 'this' keyword in arrow function refers to the window object. <br />
4 - syntactically Diffrences. <br />

---

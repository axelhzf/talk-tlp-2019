// @ts-check
// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane,
  Layout,
  Fit,
  Fill,
  S
} from 'spectacle';
import createTheme from './theme/index';
import 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-graphql';
import './style.css';
import { colors } from './theme/colors';

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} progress="bar" transition={[]} transitionDuration={0}>
        <Slide>
          <Heading size={2}>
            <S type="bold" textColor={colors.blue.base}>
              Animating React
            </S>
          </Heading>
          <Text margin="40px 0 0 0">
            Axel Hernández Ferrera{' '}
            <Link href="https://twitter.com/axelhzf" title="@axelhzf" />
          </Text>
        </Slide>

        <Slide>
          <Heading size={2}>Agenda</Heading>
          <List>
            <ListItem>Motivations</ListItem>
            <ListItem>What are Hooks?</ListItem>
            <ListItem>Hooks internals</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading fit>I was going to talk about React internals</Heading>
          <List>
            <ListItem>
              Concurrent Mode (previously known as "Async React")
            </ListItem>
            <ListItem>Suspense</ListItem>
            <ListItem>Time slicing</ListItem>
            <ListItem>
              <Link
                title="Brandon Dail - Algebraic effects, Fibers, Coroutines Oh my!"
                href="https://www.youtube.com/watch?v=7GcrT0SBSnI"
              />
            </ListItem>
          </List>
        </Slide>

        <Slide>but...</Slide>

        <Slide>
          <Image
            src={require('./images/hooksIntroduction.webp')}
            height={300}
          />
          <Link
            title="React Today and Tomorrow"
            href="https://www.youtube.com/watch?v=dpw9EHDh2bM"
          />
        </Slide>

        <Slide>
          <Image src={require('./images/whateverAbramov.jpg')} height={500} />
        </Slide>

        <Slide>
          <Heading size={2}>Community response</Heading>
        </Slide>

        <Slide>
          <Heading size={1}>🤯</Heading>
        </Slide>

        <Slide>
          <Image src={require('./images/useWindow.jpg')} height={500} />
        </Slide>

        <Slide>
          <Heading fit>github.com/awesome-react-hooks</Heading>
          <Image src={require('./images/awesomeHooks.png')} height={300} />
        </Slide>

        <Slide>
          <Image src={require('./images/v8.jpg')} height={500} />
        </Slide>

        <Slide>
          <Image src={require('./images/hdd.jpg')} height={500} />
        </Slide>

        <Slide>
          <Text>Hooks are an experimental proposal to React.</Text>
          <Text>You don’t need to learn about them right now.</Text>
        </Slide>

        <Slide>
          <List>
            <ListItem>Completely opt-in</ListItem>
            <ListItem>100% backwards-compatible</ListItem>
            <ListItem>
              They’re currently in React v16.7.0-alpha and being discussed in an
              open RFC.
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Image src={require('./images/rewrite.jpeg')} height={500} />
        </Slide>

        <Slide>
          <Image src={require('./images/cantstopme.jpg')} height={300} />
        </Slide>

        <Slide>
          <Heading size={2}>What are hooks?</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>What problem does it solve?</Heading>
          <List>
            <ListItem>Hard to reuse stateful logic between components</ListItem>
            <ListItem>Complex components become hard to understand</ListItem>
            <ListItem>Classes confuse both people and machines</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>What problem solves?</Heading>
          <List>
            <ListItem>
              <strong>Hard to reuse stateful logic between components</strong>
            </ListItem>
            <ListItem>Complex components become hard to understand</ListItem>
            <ListItem>Classes confuse both people and machines</ListItem>
          </List>
        </Slide>

        <Slide>
          <JsCode>{`
class App extends React.Component {
  state = { width: window.innerWidth };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    return <div>{this.state.width}</div>;
  }
}
          `}</JsCode>
          <Link href="https://codesandbox.io/s/pjl887mpj7" />
        </Slide>

        <Slide>
          <Heading size={2}>What options do we have now?</Heading>
          <List>
            <ListItem>HoC (Higher Order Components)</ListItem>
            <ListItem>Render props</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Higher Order Components</Heading>
        </Slide>

        <Slide>
          <JsCode>{`
function withSize(Component) {
  return class extends React.Component {
    state = {
      width: window.innerWidth
    };
    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }
    handleResize = () => {
      this.setState({ width: window.innerWidth });
    };
    render() {
      return <Component {...this.props} size={this.state.width}/>
    }
  }
}
          `}</JsCode>
        </Slide>

        <Slide>
          <JsCode>{`
const A = withSize(function A({ size }) {
  return <div>A component {size}</div>
});

const B = withSize(function B({ size }) {
  return <div>B component {size}</div>
});
          `}</JsCode>

          <Link href="https://codesandbox.io/s/p9509pmr9q" />
        </Slide>

        <Slide>
          <Heading size={2}>Render props</Heading>
        </Slide>

        <Slide>
          <JsCode>{`
class Size extends React.Component {
  state = {
    width: window.innerWidth
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    return this.props.children({ width: this.state.width });
  }
}
          `}</JsCode>
        </Slide>

        <Slide>
          <JsCode>{`
function A() {
  return (
    <Size>
      {({ width }) => (
        <div>A component {width}</div>
      )}
    </Size>
  );
}
          `}</JsCode>

          <Link href="https://codesandbox.io/s/7kn5xjzl06" />
        </Slide>

        <Slide>
          <Heading>Wrapper hell</Heading>

          <JsCode>{`
 export default compose(
     gqlCompose(graphql(TODOS_QUERY, { name: 'todosData' })),
     createTodoMutation,
     toggleTodoMutation,
     deleteTodoMutation,
     editTodoMutation,
     connect(mapStateToProps, mapDispatchToProps),
     withLoadingContainer,
     withActionHandlers,
     filterTodosMapper,
     withEditState,
     pure
 )(TodoComponent);
          `}</JsCode>
        </Slide>

        <Slide>
          <Heading size={2}>Hooks</Heading>
        </Slide>

        <Slide>
          <JsCode>{`
function useSize() {
  let [width, setWidth] = React.useState(window.innerWidth);
  function handleResize() {
    setWidth(window.innerWidth);
  }
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return width;
}
          `}</JsCode>
        </Slide>

        <Slide>
          <JsCode>{`
function A() {
  const size = useSize();
  return <div>Component A {size}</div>
}

function B() {
  const size = useSize();
  return <div>Component B {size}</div>
}
`}</JsCode>
          <Link href="https://codesandbox.io/s/m525wqvznx" />
        </Slide>

        <Slide>
          <Heading size={3}>
            Hooks allow you to reuse stateful logic without changing your
            component hierarchy
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3}>
            Unlike render props or higher-order components, Hooks don’t create a “false hierarchy” in your render tree
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2}>What problem solves?</Heading>
          <List>
            <ListItem>Hard to reuse stateful logic between components</ListItem>
            <ListItem>
              <strong>Complex components become hard to understand</strong>
            </ListItem>
            <ListItem>Classes confuse both people and machines</ListItem>
          </List>
        </Slide>

        <Slide>
          <Link href="https://codesandbox.io/s/j477j86vk3" />
          <JsCode>{`
class App extends React.Component {

  state = {
    width: window.innerWidth,
    count: 0
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    clearInterval(this.interval);
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    return (
      <div>
        <div>{this.state.width}</div>
        <div>
          Count {this.state.count}
          <button onClick={() => this.setState({ count: 0 })}>reset</button>
        </div>
      </div>
    );
  }
}
          `}</JsCode>
        </Slide>

        <Slide>
          <Heading size={3}>
            Each lifecycle method often contains a mix of unrelated logic
          </Heading>
        </Slide>

        <Slide>
          <JsCode>{`
function useCounter() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => clearInterval(interval);
  }, []);
  return [count, setCount];
}
          `}</JsCode>
        </Slide>

        <Slide>
          <JsCode>{`
function App() {
  const width = useSize();
  const [count, setCount] = useCounter();
  return (
    <div className="App">
      <div>{width}</div>
      <div>
        Count {count}
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </div>
  );
}
`}</JsCode>
          <Link href="https://codesandbox.io/s/5zm345r9ln" />
        </Slide>

        <Slide>
          <Link href="https://twitter.com/jamiebuilds/status/1055988893303037952" />
          <Image src={require('./images/growComplexity.jpg')} height={500} />
        </Slide>

        <Slide>
          <Heading size={3}>
            Hooks let you split one component into smaller functions based on
            what pieces are related
          </Heading>
        </Slide>

        <Slide>
          <Link href="https://twitter.com/prchdk/status/1056960391543062528"/>
          <Image src={require('./images/breakUnits.jpg')} height={500}/>
        </Slide>

        <Slide>
          <Heading size={2}>What problem solves?</Heading>
          <List>
            <ListItem>Hard to reuse stateful logic between components</ListItem>
            <ListItem>Complex components become hard to understand</ListItem>
            <ListItem>
              <strong>Classes confuse both people and machines</strong>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Classes confuse people</Heading>
          <Link href="https://codesandbox.io/s/k52vy881v7" />
        </Slide>

        <Slide>
          <Heading size={2}>Classes confuse machines</Heading>
        </Slide>

        <Slide>
          <Heading size={3}>
            Ahead of time compilation of components has a lot of future
            potential. Especially if it's not limited to templates.
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3}>
            Component folding using{' '}
            <a href="https://prepack.io/repl.html#BQMwrgdgxgLglgewgAmASmQbwFDOeaeJfOAIyQEMoo5gAPDHPPAJwFMYwWU7kAeALzIAjMgD8yXgC4S5CFRr1kAWhEYA1LMrVavVQCY0AblzIAvqYDmAGwSkK1gHS8hIMtsXCADMexm06EZAA">
              Prepack
            </a>
          </Heading>
        </Slide>

        <Slide>
          <Image src={require('./images/prepack-react.jpg')} height={600} />
        </Slide>

        <Slide>
          <Heading size={2}>Classes don't minify very well</Heading>
        </Slide>

        <Slide>
          <Link href="https://twitter.com/jamiebuilds/status/1056015484364087297" />
          <Image src={require('./images/minimize.jpg')} height={600} />
        </Slide>

        <Slide>
          <Heading size={2}>How Hooks works?</Heading>
        </Slide>

        <Slide>
          <JsCode>{`
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
          `}</JsCode>
        </Slide>

        <Slide>
          <Heading size={3}>useState</Heading>
          <List>
            <ListItem>
              Add some local state (Every component has their own state)
            </ListItem>
            <ListItem>
              React will preserve the state between re-renders
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <JsCode>{`
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
          `}</JsCode>
        </Slide>

        <Slide>
          <List>
            <ListItem>
              The property name is not part of the function
            </ListItem>
            <ListItem>
              React assumes that if you call useState many times, you do it in
              the same order during every render
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={3}>🤔</Heading>
        </Slide>

        <Slide>
          <Heading size={3}>First render</Heading>
          <JsCode>{`
// 1. Initialize the age state variable with 42
useState(42)
// 2. Initialize the fruit state variable with 'banana'
useState('banana')
// 3. Initialize the todos state variable with 'learn hooks'
useState([{ text: 'Learn Hooks' }]);
          `}</JsCode>
        </Slide>

        <Slide>
          <Heading size={3}>Second render</Heading>
          <JsCode>{`
// 1. Read the age state variable (argument is ignored)
useState(42)
// 2. Read the fruit state variable (argument is ignored)
useState('banana')
// 3. Read the todos state variable (argument is ignored)
useState([{ text: 'Learn Hooks' }]);
          `}</JsCode>
        </Slide>

        <Slide>
          <Heading size={3}>React hooks are not magic, just arrays</Heading>
        </Slide>

        <Slide>
          <JsCode>{`
let hooks = null;

export function useHook() {
  hooks.push(hookData);
}

function reactInternalRenderAComponentMethod(component) {
  hooks = [];
  component();
  let hooksForThisComponent = hooks;
  hooks = null;
}
          `}</JsCode>
          <Link href="https://gist.github.com/gaearon/62866046e396f4de9b4827eae861ff19" />
        </Slide>

        <Slide>
          <Heading size={3}>❌ Conditional hooks</Heading>
          <JsCode>{`
const [name, setName] = useState('');
if (name !== '') {
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });
}
          `}</JsCode>
        </Slide>

        <Slide>
          <Heading size={3}>Hook rules</Heading>
          <List>
            <ListItem>
              <strong>Only Call Hooks at the Top Level</strong>: Don’t call
              Hooks inside loops, conditions, or nested functions
            </ListItem>
            <ListItem>
              <strong>Only Call Hooks from React Functions:</strong>
              <List>
                <ListItem>Call Hooks from React function components.</ListItem>
                <ListItem>Call Hooks from custom Hooks</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={3}>
            <Link
              href="https://www.npmjs.com/package/eslint-plugin-react-hooks"
              title="eslint-plugin-react-hooks"
            />
          </Heading>
        </Slide>

        <Slide>
          <Heading>Hooks API</Heading>
          <List>
            <ListItem>Basic hooks
              <List>
                <ListItem>useState</ListItem>
                <ListItem>useEffect</ListItem>
                <ListItem>useContext</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Hooks API</Heading>
          <List>
            <ListItem>Additional hooks
              <List>
                <ListItem><strong>useReducer</strong></ListItem>
                <ListItem>useCallback</ListItem>
                <ListItem><strong>useMemo</strong></ListItem>
                <ListItem>useRef</ListItem>
                <ListItem>useImperativeMethods</ListItem>
                <ListItem>useMutationEffect</ListItem>
                <ListItem>useLayoutEffect</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <JsCode>{`
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return {count: action.payload};
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
          `}</JsCode>
        </Slide>

        <Slide>
          <Image src={require('./images/whereToMemo.jpg')} height={500}/>
        </Slide>

        <Slide>
          <Heading size={3}>I encourage you to play with it in practice and see how you feel</Heading>
        </Slide>

        <Slide>
          <Image src={require('./images/newTools1.jpg')} height={500}/>
        </Slide>

        <Slide>
          <Image src={require('./images/newTools2.jpg')} height={500}/>
        </Slide>

        <Slide>
          <Image src={require('./images/newFeatures.jpg')} height={500}/>
        </Slide>

        <Slide>
          <Image src={require('./images/copyReact.jpg')} height={500} />
        </Slide>

        <Slide>
          <Heading>Questions?</Heading>
          <Heading size={5} margin="40px 0 0 0">
            @axelhzf
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

const JsCode = ({ children, ...other }) => (
  <CodePane lang="javascript" source={children} {...other} />
);


const Link = ({ href, title }) => (
  <a href={href} target="_blank">
    {title || href}
  </a>
);

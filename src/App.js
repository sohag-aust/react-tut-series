import './App.css';
import FunctionalProps from './FunctionalProps';
import ClassProps from './ClassProps';
import StateWithClass from './StateWithClass';
import FunctionClick from './FunctionClick';
import ClassClick from './ClassClick';
import ParentComponent from './ParentComponent';
import ConditionalRendering from './ConditionalRendering';
import ListRendering from './ListRendering';
import Form from './Form';
import ComponentDidMount from './ComponentDidMount';
import ComponentDidUpdate from './ComponentDidUpdate';
import Refs from './Refs';
import ErrorHandle from './ErrorHandling/ErrorHandle';
import ClickCounter from './HigherOrderComponent/ClickCounter';
import HoverCount from './HigherOrderComponent/HoverCount';
import ClickCounter2 from './RenderProps/ClickCounter';
import HoverCounter2 from './RenderProps/HoverCounter';
import RenderProp from './RenderProps/RenderProp';
import LiftingStateUp from './CodeStepByStep-Anil/Tut38-PassDataChldToParent/LiftingStateUp';
import ControlledComponent from './CodeStepByStep-Anil/Tut44-ControlledComponent/ControlledComponent';
import UnControlledComponent from './CodeStepByStep-Anil/Tut45-UnControlledComponent/UnControlledComponent';
import StateWithObject from './CodeStepByStep-Anil/Tut58-StateWithObject/StateWithObject';
import PreviousState from './CodeStepByStep-Anil/Tut57-PreviousStateAndProps/PreviousState';
import PreviousPropsParent from './CodeStepByStep-Anil/Tut57-PreviousStateAndProps/PreviousPropsParent';

function App() {
  return (
    <div className="App">
      <FunctionalProps name="Shohag" age={25}/>
      <FunctionalProps name="Ashik" age={19}>
        <p>Hello Vai</p>
      </FunctionalProps>

      <ClassProps name="Shohag2" age={25}/>
      <ClassProps name="Ashik2" age={19}>
        <button>Submit</button>
      </ClassProps>

      <StateWithClass />

      <h1>Event Handler in Functional Component</h1>
      <FunctionClick />

      <h1>Event Handler in Class Component</h1>
      <ClassClick />

      <h2> Method As Props </h2>
      <ParentComponent />

      <h2> Conditional Rendering </h2>
      <ConditionalRendering />

      <h1> List - Rendering </h1>
      <ListRendering />

      <h2> Form-Handling </h2>
      <Form />

      <h2> Component Did-Mount LifeCycle </h2>
      <ComponentDidMount />

      <h1> Component Did-Update LifeCycle </h1>
      <ComponentDidUpdate />

      <h1> Refs </h1>
      <Refs />

      <h1> Error Handling </h1>
      <ErrorHandle />

      <h1> Higher order Component </h1>
      <ClickCounter />
      <HoverCount />

      <h1> Render Props </h1>
      
      <RenderProp render={ (count, incrementer) => 
        <ClickCounter2 count={count} incrementer={incrementer}/>
      }/>

      <RenderProp render={ (count, incrementer) => 
        <HoverCounter2 count={count} incrementer={incrementer}/>
      }/>

      <h1> Lifting State Up </h1>
      <LiftingStateUp />

      <h1> Controlled Component </h1>
      <ControlledComponent />

      <h1> UnControlled Component </h1>
      <UnControlledComponent />

      <h1>State With Object</h1>
      <StateWithObject />

      <h1>Previous State</h1>
      <PreviousState />

      <h1>Previous Props</h1>
      <PreviousPropsParent />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
// import Usecontext from './State/Usecontext/Usecontext';
// import Reducer from './State/UseReducer/Reducer';
// import Reducer1 from './State/UseReducer/Reducer1';
// import Appcontact from './contact-app/Appcontact';
// import './App.css'
// import Birthday from './Birthday/Birthday';
// import Travel from './Tour/Travel';
// import Reviews from './Review/Reviews';
// import Accordian from './Accordian/Accordian';
// import Menu from './Menu/Menu';
// import Tabs from './tabs/Tabs';
// import Slider from './slider/Slider';
// import Lorem from './loremGenerator/Lorem';
import Todo from './Grocerytodo/Todo';
// import Cart from './cart/Cart';
// import Form from './react-hook-form/Form';
// import { AppContext } from './cart/Context';
// import SampleCart from './samplecart/SampleCart'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Cart from './Reduxcart/containers/cart/Cart';
// import Singleitem from './Reduxcart/containers/cart/singleitem/Singleitem';
// import Navbar from './Reduxcart/containers/navbar/Navbar';

// import Products from './Reduxcart/containers/products/Products';

// export const Usercontext = React.createContext()

function App() {
  // const [flag,setFlag] = useState(true)

  return (
    <div className="App">
      {/* <Usestate /> */}
      {/* <div>
        <button onClick={()=>setFlag(!flag)}>Toggle</button>
      </div>
      {flag && <ClasslLife2 />}
       */}
      {/* <Usercontext.Provider value={'hari'}>
       <Usecontext />
       </Usercontext.Provider>
        */}
      {/* <Reducer /> */}
      {/* <Reducer1 /> */}
      {/* <Appcontact /> */}
      {/* <Birthday /> */}
      {/* <Travel /> */}
      {/* <Reviews /> */}
      {/* <Accordian /> */}
      {/* <Menu /> */}
      {/* <Tabs /> */}
      {/* <Slider /> */}
      {/* <Lorem /> */}
      <Todo />
      {/* <Cart />
      {/* <Form /> */}
      {/* <Appcontact /> */}
      {/* <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={Singleitem} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;

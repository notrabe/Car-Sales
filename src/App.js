import React from 'react';
import { connect } from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  // const car = useSelector(state => state.car)
  // const additionalFeatures = useSelector(state => state.additionalFeatures)
  // const additionalPrice = useSelector(state => state.additionalPrice)
  // // useEffect(() => console.log(car), [car])
  // console.log(car)

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    car: state.car, 
    additionalFeatures: state.additionalFeatures, 
    additionalPrice: state.additionalPrice
  };
  };

  export default connect(mapStateToProps,{})(App);

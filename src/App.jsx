// src/App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Profile from './components/Profile';
import BMICalculator from './components/BMI-Calculator/bmi';
import ShoppingList from './components/ShoppingList/ShoppingList';
// import Feedback from './Feedback';
// import MealPlanForm from './components/mealplan-gen/MealPlanForm';
import MealPlanForm from './components/mealplan-gen/MealPlanForm';


const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>Meal Planner</h1>
        <Switch>
          <Route path="/components/auth" component={Auth} />
          <Route path="/profile" component={Profile} />
          <Route path="/mealplan-gen" component={MealPlanForm} />
          <Route path="/bmi-calculator" component={BMICalculator} />
          <Route path="/shopping-list" component={ShoppingList} />
          {/* <Route path="/feedback/:mealId" component={Feedback} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;

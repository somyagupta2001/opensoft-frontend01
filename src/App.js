import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/Electronics">
                <Electronics handlers={[this.addHandler, this.increaseHandler, this.decreaseHandler, this.returnCount]} />
              </Route>
              <Route exact path="/Fashion">
                <Fashion handlers={[this.addHandler, this.increaseHandler, this.decreaseHandler, this.returnCount]} />
              </Route>
              <Route exact path="/Grocery">
                <Grocery handlers={[this.addHandler, this.increaseHandler, this.decreaseHandler, this.returnCount]} />
              </Route>
              <Route exact path="/Cart" >
                <Cart cart={this.state.cart} price={this.state.price}  />
              </Route>
              <Route exact path="/Signin" >
                <Signin />
              </Route>
              <Route exact path="/Signup" >
                <Signup />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;

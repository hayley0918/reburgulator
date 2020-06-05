import React from 'react';
import './App.css';
import Burger from './Burger'
// import currency from 'currency'

function howCheesy(burger){
  let numOfCheese = burger.filter(elem=>elem==='cheese')

  if(numOfCheese.length === 0||numOfCheese.length===1){
    return
  }else if(numOfCheese.length === 2){
    return `double cheese burger`
  }else if(numOfCheese.length === 3){
    return `triple cheese burger`
  }else if(numOfCheese.length === 4){
    return `quadruple cheese burger`
  }else{
    return `maximum cheese burger`
  }
}

class App extends React.Component {

  state = {
    burger: []
  }

  addTopping = topping =>{
    this.setState({
      burger: [topping, ...this.state.burger]
    })
  }

  removeTopping = targetIndex =>{
    const prevBurger = this.state.burger

    this.setState({
      burger: prevBurger.filter((topping, idx)=> idx!==targetIndex)
    })
  }

  createMelbourneTrifecta = () =>{
    this.setState({
      burger: ['bun', 'cheese', 'tomato', 'patty', 'cheese', 'tomato', 'patty', 'cheese', 'tomato', 'patty', 'bun']
    })
  }

  resetState = () =>{
    this.setState({
      burger:[]
    })
  }

  render(){

    // const burger = this.state.burger
    const { burger } = this.state

    return (
      <div className="App">
        <aside>
          <div className="menu-wrapper">
            <h2>menu</h2>
            <div>
              <button onClick={()=>this.addTopping('tomato')}>
                tomato
              </button>
            </div>
            <div>
              <button onClick={()=>this.addTopping('cheese')}>
                cheese
              </button>
            </div>
            <div>
              <button onClick={()=>this.addTopping('lettuce')}>
                lettuce
              </button>
            </div>
            <div>
              <button onClick={()=>this.addTopping('patty')}>
                patty
              </button>
            </div>
            <div>
              <button onClick={()=>this.addTopping('sauce')}>
                sauce
              </button>
            </div>
            <div>
              <button onClick={()=>this.addTopping('bun')}>
                bun
              </button>
            </div>
            <div>
              <button onClick={this.createMelbourneTrifecta}>
                MelbourneTrifecta
              </button>
            </div>
            <div className="reset-btn">
              <button onClick={this.resetState}>Reset</button>
            </div>
          </div>
              <p>{howCheesy(burger)}</p>
        </aside>
        <main className="main-area">
          {/* <p>{howCheesy(burger)}</p> */}
          <section className="burger-wrapper">
            <Burger 
              toppings={burger} 
              onRemove={this.removeTopping}
            />
          </section>
          <div className="plate"></div>
        </main>
      </div>
    );
  }

}

export default App;


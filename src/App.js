import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from "./components/TodoForm";

const items = [
  {
    description: "play guitar",
    id: 2,
    done: false,
  },
  {
    description: "eat food",
    id: 1,
    done: false,
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items
    };
  }

  toggleItem = (itemId) => {
    console.log("Toggling item", itemId);
    this.setState({
      items: this.state.items.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            done: !item.done
          };
        }
        return item;
      })
    });
  };

    clearDone = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      items: this.state.items.filter((item) => !item.done)
    });
  };

  
  addItem = (itemName) => {
    const newItem = {
      description: itemName,
      id: Date.now(),
      done: false
    };
    this.setState({
      ...this.state,
      items: [...this.state.items, newItem]
    });
  };

 render() {
    return (
      <div>
        <TodoForm addItem={this.addItem}/>
        <TodoList toggleItem={this.toggleItem} items={this.state.items} clearDone={this.clearDone}/>
      </div>
    );
  }
}

export default App;

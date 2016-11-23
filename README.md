#[Material-Grid](https://github.com/Cleanshooter/material-grid)

## Installation

Material-Grid is available as an [npm package](https://www.npmjs.org/package/material-grid).

```sh
npm install material-grid
```

## Usage

Here is a quick example to get you started:

**./App.js**
```jsx
import React from 'react';
import Grid from 'material-grid/dist/Grid/Grid';
import Cell from 'material-grid/dist/Grid/Cell';

class App extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={12}><div className="box">12</div></Cell>
        </Grid>
        <Grid>
          <Cell col={4} tablet={2} ><div className="box">4-2</div></Cell>
          <Cell col={8} tablet={6} ><div className="box">8-6</div></Cell>        
        </Grid>
        <Grid>
          <Cell col={1} tablet={8} phone={4}><div className="box">1-8-4</div></Cell>
          <Cell col={1} tablet={8} phone={4}><div className="box">1-8-4</div></Cell>
          <Cell col={1} tablet={4} phone={4}><div className="box">1-8-4</div></Cell>
          <Cell col={1} tablet={4} phone={4}><div className="box">1-8-4</div></Cell>
          <Cell col={1}><div className="box">1</div></Cell>
          <Cell col={1}><div className="box">1</div></Cell>
          <Cell col={1}><div className="box">1</div></Cell>
          <Cell col={1}><div className="box">1</div></Cell>
          <Cell col={1}><div className="box">1</div></Cell>
          <Cell col={1}><div className="box">1</div></Cell>
          <Cell col={1}><div className="box">1</div></Cell>
          <Cell col={1}><div className="box">1</div></Cell>
        </Grid>
      </div>
    )
  }
}

export default App;
```

**./index.js**
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Remmeber to put this in your index.js os the CSS gets loaded.
import 'material-grid/dist/css/material-grid.css';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

## Contribute

I'm new to react and Material Design but I needed something like this so I figured I share what I put together.   Please feel free to contribute by making a pull reqeust.

## Thanks

To all the people at Google who are working on MDL and making the Material Design spec come alive in their own way and time.  And the guys over at CallEmAll for making material-ui which is the sweetest implmentation on Material Design components out there atm.

## License
This project is licensed under the terms of the MIT license
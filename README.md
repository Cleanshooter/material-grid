#[Material-Grid](https://github.com/Cleanshooter/material-grid)

## Installation

Material-Grid is available as an [npm package](https://www.npmjs.org/package/material-grid).

```sh
npm install material-grid
```

##Available Props

### Grid

* noSpacing - Modifies the grid cells to have no margin between them
* customClass - Adds your custom CSS class ot the element

### Cell

* col - Sets the column size for the cell to N
* desktop - Sets the column size for the cell to N in desktop mode only
* tablet - Sets the column size for the cell to N in tablet mode only
* phone - Sets the column size for the cell to N in phone mode only
* offset - Adds N columns of whitespace before the cell
* desktopOffset - Adds N columns of whitespace before the cell in desktop mode
* tabletOffset - Adds N columns of whitespace before the cell in tablet mode
* phoneOffset - Adds N columns of whitespace before the cell in phone mode
* hideDesktop - Hides the cell when in desktop mode
* hideTablet - Hides the cell when in tablet mode
* hidePhone - Hides the cell when in phone mode
* top - Aligns the cell to the top of the parent
* middle - Aligns the cell to the middle of the parent
* bottom - Aligns the cell to the bottom of the parent
* customClass - Adds your custom CSS class ot the element

## Usage

It would be a good idea to [review MDL's Grid documentation](https://getmdl.io/components/index.html#layout-section/grid) to get a good understanding of how their grid is put together.

![Material Design Breakpoints][logo]

This is an example to get you started:

**./App.js**
```jsx
import React from 'react';
import {Grid, Cell} from 'material-grid/dist';

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
## Implmentation

I've stripped out all non-essential CSS from the MDL distribution package so it only includes the CSS necessary to run the Grid. 

Also some of the tags available for the grid are not implmented simply because they didn't appear to be useful like stetch and order. 

## Issues

I'm not perfect so when you find bugs please post them on the [github issue](https://github.com/Cleanshooter/material-grid/issues) tracker.

## Contribute

I'm new to react and Material Design but I needed something like this so I figured I share what I put together.   Please feel free to contribute by making a [pull reqeust](https://github.com/Cleanshooter/material-grid/pulls).

## Thanks

To all the people at Google who are working on MDL and making the Material Design spec come alive in their own way and time.  And the guys over at CallEmAll for making material-ui which is the sweetest implmentation on Material Design components out there atm.

## License
This project is licensed under the terms of the MIT license

[logo]: https://material-design.storage.googleapis.com/publish/material_v_9/0B8olV15J7abPSGFxemFiQVRtb1k/layout_adaptive_breakpoints_01.png
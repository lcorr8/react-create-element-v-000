const title = React.createElement('h1', {}, 'My First React Code');
                                //element or componene, properties, children of the element or component
const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');

const container = React.createElement('div', {}, [title, paragraph]);
ReactDOM.render(
  //thing you want to render
  container,
  //target dom node to render first argument into
  document.getElementById('main')
);


const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { className: 'brown' }, 'Chocolate'),
        React.createElement('li', { className: 'white' }, 'Vanilla'),
        React.createElement('li', { className: 'yellow' }, 'Banana')
      ]
    ));
 
ReactDOM.render(
  list, 
  document.getElementById('main')
  );
import React from 'react';
import {connect} from 'react-redux';


// class CheeseList extends React.Component {
  
//   render() {
//   }
export default function CheeseList(props) {
  console.log(props);
  console.log(props.cheeses);
  const cheeses = props.cheeses.map(cheese =>
      <li>
        {cheese}
      </li>
  );
  
  return (
    <div>
      <ul>
        {cheeses}
      </ul>
    </div>
  )
}

// const mapStateToProps = state => ({
//   cheeses: [
//     'Bath Blue',
//     'Barkham Blue',
//     'Buxton Blue'
//   ]
// });

// export default connect(mapStateToProps)(CheeseList);
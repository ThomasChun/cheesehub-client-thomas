import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses())
  }

  render() {
    const cheeses = this.props.cheeses.map(cheese => <li>{cheese}</li>)
    return (
      <ul>
        {cheeses}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  cheeses: [
    'Bath Blue',
    'Barkham Blue',
    'Buxton Blue'
  ]
});

export default connect(mapStateToProps)(CheeseList);
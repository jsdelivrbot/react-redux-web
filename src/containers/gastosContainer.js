import { connect } from 'react-redux';
import Gastos from '../components/gastos';
import {fetchDebitos} from '../actions';

const mapStateToProps = state => ({
  redux: state.redux,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick:() => {
      dispatch(fetchDebitos())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gastos);

import { connect } from 'react-redux';
import Gastos from '../components/gastos';

const mapStateToProps = state => ({
  redux: state.redux,
});

export default connect(
  mapStateToProps,
)(Gastos);

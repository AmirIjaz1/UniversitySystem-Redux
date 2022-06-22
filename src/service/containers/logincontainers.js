import { connect } from 'react-redux';
import Login from '../../components/authentication/login';
import Signup from '../../components/authentication/signup';
import { loginSuccessAction } from '../actions/actions';

const mapStateToProp=state=>({
    loginData:state
})

const mapDispatchToProps=dispatch=>({
    loginHandeler:data=>dispatch(loginSuccessAction(data))
})

export default connect(mapStateToProp, mapDispatchToProps)(Signup)
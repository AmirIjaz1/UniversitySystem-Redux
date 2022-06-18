import { connect } from 'react-redux';
import Login from '../../components/authentication/login';
import { loginSuccessAction } from '../actions/actions';

const mapStateToProp=state=>({
    loginData:state
})

const mapDispatchToProps=dispatch=>({
    loginHandeler:data=>dispatch(loginSuccessAction(data))
})

export default connect(mapStateToProp, mapDispatchToProps)(Login)
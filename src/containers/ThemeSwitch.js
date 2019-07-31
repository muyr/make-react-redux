import {connect} from "../react-redux";
import ThemeSwitch from '../components/ThemeSwitch'

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({type: 'CHANGE_COLOR', themeColor: color})
        }
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

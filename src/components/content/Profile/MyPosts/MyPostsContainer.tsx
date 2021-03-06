import { connect } from 'react-redux';
import { actions } from '../../../../redux/profileReducer';
import { appStateType } from '../../../../redux/reduxStore';
import MyPosts from './MyPosts';


const AddPost = actions.AddPost

const mapStateToProps = (state:appStateType) => ({
  profilePage: state.profilePage,
});


const MyPostsContainer = connect(mapStateToProps, {AddPost})(MyPosts);
export default MyPostsContainer;

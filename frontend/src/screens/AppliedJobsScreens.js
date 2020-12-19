import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../redux/actions/postActions';



const AppliedJobsScreen = () => {

    const dispatch = useDispatch();
    const postsList = useSelector((state) => state.postsList);
    const { loading, error, posts } = postsList;
    
    console.log(posts.posts)
    useEffect(() => {
    dispatch(listPosts());
	}, [dispatch]);
    return (
      
        loading ? (<p>LOADING ... </p>) : error ? (
            <p>ERROR ....</p>
        ) : (
            <div>
            {/* {posts.map((post) => (
                <div key={ post._id }>
                <Body post={ post }/>
            </div>
            )) } */}
            
            <p>APPLIED JOBS</p>
            </div>
        
        )
           
        )
}


export default AppliedJobsScreen
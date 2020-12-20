import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Body from "../components/Body";
import { listPosts } from "../redux/actions/postActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.postsList);
  const { loading, error, posts } = postsList;

  console.log(posts);
  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);
  return loading ? (
    <div className="bidlist-screen">
      {" "}
      <p>LOADING ... </p>
    </div>
  ) : error ? (
    <div className="bidlist-screen">
      <p>ERROR ....</p>
    </div>
  ) : (
    <div>
      <div className="home-body">
        <h2 className="section-title">Explore The Marketplace</h2>
        {posts.map((post) => (
          <div key={post._id}>
            <Body post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;

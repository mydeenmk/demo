
// import React, { useContext } from 'react';
// import { PostContext } from './PostContext';
// import Post from './Post';
// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles({
//   postList: {
//     listStyleType: 'none',
//     padding: 0,
//     margin: 0,
//   },
//   postCard: {
//     width: '100%',
//     maxWidth: 800,
//     margin: 'auto',
//     marginBottom: 20,
//   },
// });

// function Profile() {
//   const { posts } = useContext(PostContext);
//   const classes = useStyles();

//   return (
//     <div>
//       <h1>My posts</h1>
      
//       <ul className={classes.postList}>
//         {posts &&
//           posts.map((post, index) => (
//             <li className={classes.postCard} key={index}>
//               <Post post={post} />
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

// export default Profile;
import React, { useContext, useState, useEffect } from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';
// import Menu from './Menu';
import { PostContext } from './PostContext';
import Post from './Post';

const useStyles = makeStyles({
  postList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  postCard: {
    width: '100%',
    maxWidth: 800,
    margin: 'auto',
    marginBottom: 20,
  },
  actionButtons: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-between',
  },
});

function Profile() {
  const { posts } = useContext(PostContext);
  const classes = useStyles();
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  
  // Load data from localStorage on component mount
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem('likes')) || {};
    const savedComments = JSON.parse(localStorage.getItem('comments')) || {};
    setLikes(savedLikes);
    setComments(savedComments);
  }, []);

  // Save data to localStorage when likes or comments change
  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  const handleComment = (postId, comment) => {
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), comment],
    }));
  };

  const handleDeleteLike = (postId) => {
    setLikes((prevLikes) => {
      const updatedLikes = { ...prevLikes };
      delete updatedLikes[postId];
      return updatedLikes;
    });
  };

  const handleDeleteComment = (postId, index) => {
    setComments((prevComments) => {
      const updatedComments = { ...prevComments };
      updatedComments[postId].splice(index, 1);
      return updatedComments;
    });
  };

  return (

    <div>
      <Menu/>
      <h1>My posts</h1>
      
      <ul className={classes.postList}>
        {posts &&
          posts.map((post) => (
            <li className={classes.postCard} key={post.id}>
              <post post={post} />
              <div className={classes.actionButtons}>
                <Button onClick={() => handleLike(post.id)}>Like</Button>
                <Button onClick={() => handleComment(post.id, "New comment")}>Comment</Button>
                <Button onClick={() => handleDeleteLike(post.id)}>Delete Like</Button>
                <Button onClick={() => handleDeleteComment(post.id, 0)}>Delete Comment</Button>
                <Typography>Likes: {likes[post.id] || 0}</Typography>
                <Typography>Comments: {comments[post.id] ? comments[post.id].length : 0}</Typography>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Profile;















// Profile.jsx
// import React, { useContext } from 'react';
// import { PostContext } from './PostContext';

// function Profile() {
//   const { posts } = useContext(PostContext);

//   return (
//     <div>
//       <h1>Profile</h1>
//       <ul>
//         {posts.map((post, index) => (
//           <li key={index}>{ }</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Profile;

// Profile.js
import Post from './Post';

export default function Feed({
  posts
} : {
  posts: Array<any>
}) {

  return (
    <div className="feed">
      { 
        posts.map(post => 
          <Post key={post.id} username={post.username} message={post.message} />
        )
      }
    </div>
  );
};
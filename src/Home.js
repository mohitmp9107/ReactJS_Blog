import Feed from "./Feed";

const Home = ({posts,fetchError,isLoading}) => {
    console.log(fetchError,isLoading);
    return (
        <main className="Home">
            {isLoading && <p className="statusMsg">Loading posts ...</p>}
            {!isLoading && fetchError && <p className="statusMsg">Fetch Error</p>}
            {!isLoading && !fetchError && (posts.length ? <Feed posts={posts} /> : <p className="statusMsg">No posts to display.</p>)}
        </main>        
       )
  }
  
  export default Home
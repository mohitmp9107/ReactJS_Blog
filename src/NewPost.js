const NewPost = ({handleSubmit,postTitle,setPostTitle,postBody,setPostBody}) => {
    return (
      <main className="NewPost">
        <h2>New Post</h2>
        <form className="newPostForm" onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Title:</label>
          <input
            id="postTitle"
            required
            type='text'
            value={postTitle}
            onChange={(e)=>setPostTitle(e.target.value)}
          />

          <label htmlFor="postBody">Body:</label>
          <input
            id="postBody"
            required
            type='text'
            value={postBody}
            onChange={(e)=>setPostBody(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    )
  }
  
  export default NewPost
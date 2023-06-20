import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Missing from "./Missing";


const EditPost = ({
    posts,handleEdit,editTitle,setEditTitle,editBody,setEditBody
}) => {
    const {id} = useParams();
    const post = posts.find(post=>(post.id).toString()===id);

    useEffect(()=>{
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    },[post,setEditTitle,setEditBody]);

  return (
    <main className="NewPost">
        {editTitle&&
            <>
                <h2>Edit Post</h2>
                <form className="newPostForm" onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    required
                    type='text'
                    value={editTitle}
                    onChange={(e)=>setEditTitle(e.target.value)}
                />

                <label htmlFor="postBody">Body:</label>
                <input
                    id="postBody"
                    required
                    type='text'
                    value={editBody}
                    onChange={(e)=>setEditBody(e.target.value)}
                />
                <button type="submit" onClick={()=>handleEdit(post.id)}>Submit</button>
                </form>
            </>
        }
        {!editTitle &&
            <>
                <Missing/>
            </>
        }
      </main>
  )
}

export default EditPost
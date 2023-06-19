import { Link } from "react-router-dom";

const Missing = () => {
    return (
      <main className="Missing">
          <h2>Post Not Found</h2>
          <p>Well, checkout our home page.</p>
          <p>
              <Link to='/'>Visit Our Homepage</Link>
          </p>
      </main>
    )
  }
  
  export default Missing
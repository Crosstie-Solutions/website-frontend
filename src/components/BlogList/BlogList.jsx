import { useEffect, useState } from "react";


const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs") // Adjust to your backend URL
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.data); // Assuming your API response structure
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading blogs...</p>;

  return (
    <div>
      <h2>Blog Posts</h2>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px", paddingBottom: "10px" }}>
            <h3>{blog.title}</h3>
            {blog.subHeadings.map((sub, index) => (
              <div key={index}>
                <h4>{sub.heading}</h4>
                <p>{sub.content}</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
















const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A blog post must have a title"],
  },
  subHeadings: [
    {
      heading: { type: String, required: true },
      content: { type: String, required: true },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;






// Create a new blog post
exports.createBlogPost = async (req, res) => {
  try {
    const { title, subHeadings } = req.body;

    const newBlog = await Blog.create({ title, subHeadings });

    res.status(201).json({
      status: "success",
      data: newBlog,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};


//i just created this variable; it was not in the original code
  const post = {
    "title": "How to Learn JavaScript",
    "subTitles": [
      {
        "subHeading": "Introduction",
        "subContent": "JavaScript is a versatile programming language..."
      },
      {
        "subHeading": "Variables and Data Types",
        "subContent": "In JavaScript, variables can be declared using var, let, or const..."
      },
      {
        "subHeading": "Functions and Scope",
        "subContent": "Functions allow code reuse and improve maintainability..."
      }
    ]
  }
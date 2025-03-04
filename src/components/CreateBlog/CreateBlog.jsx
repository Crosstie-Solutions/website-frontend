import { useState } from "react";




const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [subHeadings, setSubHeadings] = useState([{ heading: "", content: "" }]);
  const [loading, setLoading] = useState(false);

  const handleSubHeadingChange = (index, field, value) => {
    const updatedSubHeadings = [...subHeadings];
    updatedSubHeadings[index][field] = value;
    setSubHeadings(updatedSubHeadings);
  };

  const addSubHeading = () => {
    setSubHeadings([...subHeadings, { heading: "", content: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const blogData = { title, subHeadings };

    try {
      const response = await fetch("http://localhost:5000/api/blogs/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      const data = await response.json();
      if (data.status === "success") {
        alert("Blog created successfully!");
        setTitle("");
        setSubHeadings([{ heading: "", content: "" }]);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Something went wrong!");
    }
    
    setLoading(false);
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <input type="date" id="calendar" name="calendar" required />
        <input type="time" id="time" name="time" required />

        <h3>Subheadings</h3>
        {subHeadings.map((sub, index) => (
          <div key={index}>
            <label>Heading:</label>
            <input
              type="text"
              value={sub.heading}
              onChange={(e) => handleSubHeadingChange(index, "heading", e.target.value)}
              required
            />
            <label>Content:</label>
            <textarea
              value={sub.content}
              onChange={(e) => handleSubHeadingChange(index, "content", e.target.value)}
              required
            />
          </div>
        ))}

        <button type="button" onClick={addSubHeading}>
          + Add Subheading
        </button>

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};


export default CreateBlog;
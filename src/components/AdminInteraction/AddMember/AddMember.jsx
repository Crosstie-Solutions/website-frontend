import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { CrossContext } from "../../../Context/CrossContext";

function AddMember() {
  const { baseUrl, setLoading } = useContext(CrossContext);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [tier, setTier] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [bio, setBio] = useState("");
  const [priorityIndex, setPriorityIndex] = useState(null);
  const [memberImage, setMemberImage] = useState(null);

  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    setMemberImage(e.target.files[0]);

    const selectedFile = e.target.files[0];

    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl);
  };

  // to clear fields
  const nameField = document.getElementById("nameField");
  const roleField = document.getElementById("roleField");
  const tierField = document.getElementById("tierField");
  const bioField = document.getElementById("bioField");
  const linkedinUrlField = document.getElementById("linkedinUrlField");
  const memberImageField = document.getElementById("memberImageField");
  const priorityIndexField = document.getElementById("priorityIndexField");

  //partner request
  const [memberErrors, setMemberErrors] = useState({});

  //funtion for signup
  const addMember = async (event) => {
    event.preventDefault();

    const validationErrors = {};

    //To ensure valid inputs
    if (!name.trim()) {
      validationErrors.name = "Full name is required";
    }

    if (name.trim().split(" ").length < 2) {
      validationErrors.name = "Provide first and last name";
    }

    if (!priorityIndex.trim()) {
      validationErrors.priorityIndex = "Set priority index";
    }

    if (!role.trim()) {
      validationErrors.role = "role name is required";
    }

    if (!tier.trim()) {
      validationErrors.tier = "Select tier";
    }

    if (tier !== "Our faculty" && !memberImage) {
      validationErrors.memberImage = "Image is required";
    }

    if (tier !== "Our faculty" && !bio) {
      validationErrors.bio = "Bio is required";
    }

    if (tier !== "Our faculty" && !linkedinUrl) {
      validationErrors.linkedinUrl = "Linkedin URL is required";
    }

    if (tier !== "Our faculty" && !linkedinUrl.includes("linkedin.com")) {
      validationErrors.linkedinUrl = "Provide a valid linkedin URL";
    }

    setMemberErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("tier", tier);
    formData.append("linkedinUrl", linkedinUrl);
    formData.append("bio", bio);
    formData.append("priorityIndex", priorityIndex);
    formData.append("memberImage", memberImage);

    if (noError) {
      try {
        setLoading(true);
        const response = await axios.post(`${baseUrl}/api/member`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status === 201) {
          toast.success(`Member added successfully`);

          nameField.value = "";
          roleField.value = "";
          tierField.value = "";
          bioField.value = "";
          linkedinUrlField.value = "";
          memberImageField.value = "";
          bioField.value = "";
          priorityIndexField.value = "";
          setPreview(null);
        }
      } catch (error) {
        if (error) {
          console.log("Error adding member:", error);
          toast.error(error.response.data.message);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-auto gap-2 py-2 small:px-0 large:px-2 large:w-80 text-15px small:w-90vw">
      <h4 className="font-semibold text-crossLightPurple small:hidden large:flex">
        Add Member
      </h4>

      <div className="flex flex-col items-end gap-2 p-1 bg-white large:p-2 rounded-10 w-100">
        <div className="flex flex-col h-auto w-100">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="nameField"
            placeholder="Enter name of member"
            name="name"
            className="pl-1 border rounded h-40px w-100"
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-vogueRed">{memberErrors && memberErrors.name}</p>
        </div>

        <div className="flex items-center justify-between h-auto w-100">
          <div className="flex flex-col h-auto w-45">
            <label htmlFor="tier">Tier</label>
            <select
              type="text"
              name="tier"
              id="tierField"
              className="pl-1 border rounded cursor-pointer h-40px w-100"
              onChange={(e) => setTier(e.target.value)}
            >
              <option value="">-select tier-</option>
              <option value="Directors">Directors</option>
              <option value="Team members">Team members</option>
              <option value="Board of advisory">Board of advisory</option>
              <option value="Our faculty">Our faculty</option>
            </select>
            <p className="text-vogueRed">{memberErrors && memberErrors.tier}</p>
          </div>

          <div className="flex flex-col h-auto w-45">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              placeholder="Enter role name"
              id="roleField"
              name="role"
              className="pl-1 border rounded h-40px w-100"
              onChange={(e) => setRole(e.target.value)}
            />
            <p className="text-vogueRed">{memberErrors && memberErrors.role}</p>
          </div>
        </div>

        <div className="flex items-center justify-between h-auto w-100">
          <div className="flex flex-col h-auto w-45">
            <label htmlFor="priorityIndex">Priority Index</label>
            <input
              type="number"
              name="priorityIndex"
              id="priorityIndexField"
              className="pl-1 border rounded h-40px w-100"
              placeholder="Enter priority index"
              onChange={(e) => setPriorityIndex(e.target.value)}
            />
            <p className="text-vogueRed">
              {memberErrors && memberErrors.priorityIndex}
            </p>
          </div>

          {tier !== "Our faculty" && (
            <div className="flex flex-col h-auto w-45">
              <label htmlFor="linkedinUrl">Linkedin URL</label>
              <input
                type="text"
                name="linkedinUrl"
                id="linkedinUrlField"
                className="pl-1 border rounded h-40px w-100"
                placeholder="Enter linkedin URL"
                onChange={(e) => setLinkedinUrl(e.target.value)}
              />
              <p className="text-vogueRed">
                {memberErrors && memberErrors.linkedinUrl}
              </p>
            </div>
          )}
        </div>

        {tier !== "Our faculty" && (
          <div className="flex flex-col h-auto w-100">
            <label htmlFor="bio">Bio</label>
            <textarea
              type="text"
              id="bioField"
              placeholder="Enter bio of member"
              name="bio"
              className="p-1 border rounded h-150px w-100"
              onChange={(e) => setBio(e.target.value)}
            />
            <p className="text-vogueRed">{memberErrors && memberErrors.bio}</p>
          </div>
        )}

        {tier !== "Our faculty" && (
          <div className="flex flex-col h-auto w-100">
            <label htmlFor="memberImage">Picture of member</label>
            <input
              type="file"
              name="memberImage"
              id="memberImageField"
              className="pl-1 border rounded h-40px w-100"
              accept="image/*"
              onChange={handleFileChange}
            />

            {preview &&
            <div className="flex flex-wrap items-center justify-start h-auto gap-2 mt-1 w-100">
              <img
                src={preview}
                alt={`image preview`}
                className="w-auto rounded h-50px"
              />
            </div>}

            <p className="text-vogueRed">
              {memberErrors && memberErrors.memberImage}
            </p>
            {/* <p className="text-vogueRed">{imageSizeErrors && imageSizeErrors}</p> */}
          </div>
        )}

        <button
          className="flex items-center justify-center text-white rounded h-40px w-100 bg-crossLightPurple"
          onClick={addMember}
        >
          Add Member
        </button>
      </div>
    </div>
  );
}

export default AddMember;

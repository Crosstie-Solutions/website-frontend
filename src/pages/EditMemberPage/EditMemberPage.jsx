import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { CrossContext } from "../../Context/CrossContext";
import { Link, useParams } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

function EditMemberPage() {
  const { baseUrl, setLoading, me } = useContext(CrossContext);

  const { memberId } = useParams();

  const [member, setMember] = useState(null);

  useEffect(() => {
    // Fetch existing blog post
    const fetchMember = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/member/${memberId}`);
        setMember(response.data.data.data);
      } catch (err) {
        console.log("Error fetching member:", err);
      }
    };
    fetchMember();
  }, [memberId, baseUrl]);

  const [preview, setPreview] = useState(null);

  // const handleFileChange = (e) => {
  //   setMemberImage(e.target.files[0]);

  //   const selectedFile = e.target.files[0];

  //   const previewUrl = URL.createObjectURL(selectedFile);
  //   setPreview(previewUrl);
  // };

  const [formFields, setFormFields] = useState({
    name: "",
    role: "",
    tier: "",
    priorityIndex: null,
    bio: "",
    linkedinUrl: "",
    memberImage: null,
  });

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;

    setFormFields((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));

    if (e.target.files) {
      const selectedFile = e.target.files[0];

      const previewUrl = URL.createObjectURL(selectedFile);
      setPreview(previewUrl);
    }
  };

  // to clear fields
  const nameField = document.getElementById("nameField");
  const roleField = document.getElementById("roleField");
  const tierField = document.getElementById("tierField");
  const bioField = document.getElementById("bioField");
  const linkedinUrlField = document.getElementById("linkedinUrlField");
  const memberImageField = document.getElementById("memberImageField");

  //partner request
  const [memberErrors, setMemberErrors] = useState({});

  const updateMember = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!formFields.tier.trim()) {
      validationErrors.tier = "Select tier";
    }

    setMemberErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    // Build FormData and skip empty fields
    const formData = new FormData();

    for (let key in formFields) {
      const value = formFields[key];

      // Skip empty or undefined fields
      if (value !== "" && value !== null && value !== undefined) {
        // If it's an image file, attach correctly
        if (key === "memberImage" && value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, value);
        }
      }
    }

    if (noError) {
      try {
        setLoading(true);

        const response = await axios.patch(
          `${baseUrl}/api/member/${memberId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          toast.success("Member updated successfully");
        }

        return response.data;
      } catch (error) {
        console.error(error);

        if (error.response?.data?.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Update failed");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-auto gap-2 py-2 small:px-0 large:px-2 large:w-80 text-15px small:w-90vw large:mt-17 small:mt-12">
      <h4 className="font-semibold text-crossLightPurple">
        Update Member Info
      </h4>

      <div className="flex flex-col items-end gap-2 p-1 bg-white large:p-2 rounded-10 w-100">
        {me && me.role !== "user" && (
          <Link
            className="flex items-center self-start justify-center gap-1 border rounded text-crossLightPurple w-200px border-crossLightPurple h-40px"
            to="/admin-dashboard"
          >
            <MdKeyboardBackspace className="text-20px" />
            Back to dashboard
          </Link>
        )}

        <div className="flex flex-col items-end gap-2 p-1 bg-white large:p-2 rounded-10 w-100">
          <div className="flex flex-col h-auto w-100">
            <label htmlFor="name">Full Name</label>
            <input
              defaultValue={member && member.name}
              type="text"
              id="nameField"
              placeholder="Enter name of member"
              name="name"
              className="pl-1 border rounded h-40px w-100"
              onChange={handleChange}
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
                onChange={handleChange}
              >
                <option value="">-select tier-</option>
                <option value="Directors">Directors</option>
                <option value="Team members">Team members</option>
                <option value="Board of ddvisory">Board of advisory</option>
                <option value="Our faculty">Our faculty</option>
              </select>
              <p className="text-vogueRed">
                {memberErrors && memberErrors.tier}
              </p>
            </div>

            <div className="flex flex-col h-auto w-45">
              <label htmlFor="role">Role</label>
              <input
                defaultValue={member && member.role}
                type="text"
                placeholder="Enter role name"
                id="roleField"
                name="role"
                className="pl-1 border rounded h-40px w-100"
                onChange={handleChange}
              />
              <p className="text-vogueRed">
                {memberErrors && memberErrors.role}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between h-auto w-100">
            <div className="flex flex-col h-auto w-45">
              <label htmlFor="priorityIndex">Priority Index</label>
              <input
                defaultValue={member && member.priorityIndex}
                type="number"
                name="priorityIndex"
                id=""
                className="pl-1 border rounded h-40px w-100"
                placeholder="Enter priority index"
                onChange={handleChange}
              />
              <p className="text-vogueRed">
                {memberErrors && memberErrors.priorityIndex}
              </p>
            </div>

            <div className="flex flex-col h-auto w-45">
              <label htmlFor="linkedinUrl">Linkedin URL</label>
              <input
                defaultValue={member && member.linkedinUrl}
                type="text"
                name="linkedinUrl"
                id=""
                className="pl-1 border rounded h-40px w-100"
                placeholder="Enter linkedin URL"
                onChange={handleChange}
              />
              <p className="text-vogueRed">
                {memberErrors && memberErrors.linkedinUrl}
              </p>
            </div>
          </div>

          <div className="flex flex-col h-auto w-100">
            <label htmlFor="bio">Bio</label>
            <textarea
              defaultValue={member && member.bio}
              type="text"
              id="bioField"
              placeholder="Enter bio of member"
              name="bio"
              className="p-1 border rounded h-150px w-100"
              onChange={handleChange}
            />
            <p className="text-vogueRed">{memberErrors && memberErrors.bio}</p>
          </div>

          <div className="flex flex-col h-auto w-100">
            <label htmlFor="memberImage">Picture of member</label>
            <input
              type="file"
              name="memberImage"
              id="memberImageField"
              className="pl-1 border rounded h-40px w-100"
              accept="image/*"
              onChange={handleChange}
            />

            <div className="flex flex-wrap items-center justify-start h-auto gap-2 mt-1 w-100">
              {preview && (
                <img
                  src={preview}
                  alt={`image preview`}
                  className="w-auto rounded h-50px"
                />
              )}

              {member && member.memberImage && !preview ? (
                <img
                  src={
                    member && member.memberImage.url
                      ? member.memberImage.url
                      : ""
                  }
                  alt="member image"
                  className="w-auto rounded h-50px"
                />
              ) : (
                ""
              )}
            </div>

            <p className="text-vogueRed">
              {memberErrors && memberErrors.memberImage}
            </p>
            {/* <p className="text-vogueRed">{imageSizeErrors && imageSizeErrors}</p> */}
          </div>
        </div>

        <button
          className="flex items-center justify-center text-white rounded h-40px w-100 bg-crossLightPurple"
          onClick={updateMember}
        >
          Update Event
        </button>
      </div>
    </div>
  );
}

export default EditMemberPage;

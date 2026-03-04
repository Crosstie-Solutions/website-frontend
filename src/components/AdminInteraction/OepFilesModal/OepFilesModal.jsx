"use client";

import React, { useState } from "react";
import { X, Upload, File, Image } from "lucide-react";
import axios from "axios";
import { useContext } from "react";
import { CrossContext } from "../../../Context/CrossContext";
import { toast } from "react-toastify";


export default function OepFilesModal(props) {
    const { isOpen, onClose} = props;
  const [courseBanner, setCourseBanner] = useState(null);
  const [courseBrochure, setCourseBrochure] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [errors, setErrors] = useState({
    courseBanner: '',
    courseBrochure: '',
    general: ''
  });

  const { baseUrl } = useContext(CrossContext)

  // Handle banner image selection
  const handleBannerChange = (e) => {
    const file = e.target.files?.[0];
    
    if (file) {
      // Validate image type
      if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({ ...prev, courseBanner: "Please select a valid image file" }));
        return;
      }

      setCourseBanner(file);
      setErrors((prev) => ({ ...prev, courseBanner: undefined }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle brochure PDF selection
  const handleBrochureChange = (e) => {
    const file = e.target.files?.[0];
    
    if (file) {
      // Validate PDF type
      if (file.type !== "application/pdf") {
        setErrors((prev) => ({ ...prev, courseBrochure: "Please select a PDF file" }));
        return;
      }

      setCourseBrochure(file);
      setErrors((prev) => ({ ...prev, courseBrochure: undefined }));
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Validate - at least one file must be selected
    if (!courseBanner && !courseBrochure) {
      setErrors({ general: "Please select at least one file to upload" });
      return;
    }

    setIsUploading(true);
    setErrors({});

    try {
      // Create FormData
      const formData = new FormData();
      
      if (courseBanner) {
        formData.append("courseBanner", courseBanner);
      }
      
      if (courseBrochure) {
        formData.append("courseBrochure", courseBrochure);
      }

      // Make API request
      const response = await axios.patch(`${baseUrl}/api/course/67ff9cbca1006d0864edd932`, formData);

      console.log("Upload successful:", response.data);
      if(response.status === 200){
        toast.success(response.data.message)
      }

      // Reset form
      setCourseBanner(null);
      setCourseBrochure(null);
      setBannerPreview(null);
      
      // Close modal
      onClose();
    } catch (error) {
      console.error("Upload error:", error);
      
      if (axios.isAxiosError(error)) {
        setErrors({
          general: error.response?.data?.message || "Failed to upload files. Please try again.",
        });
      } else {
        setErrors({ general: "An unexpected error occurred" });
      }
    } finally {
      setIsUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      
      <div className="flex flex-col justify-center p-3 text-black bg-white rounded-lg w-50vw h-80vh">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Upload Course Files</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 transition-colors hover:bg-[#2A333F] hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-3">
        {/* Course Banner */}
        <div>
            <label className="block mb-2 text-sm font-medium">
            Course Banner
            </label>
            
            <input
            type="file"
            accept="image/*"
            onChange={handleBannerChange}
            className="w-full rounded-lg bg-[#262A2F] text-sm text-white file:mr-4 file:rounded file:border-0 file:bg-crossBlue file:px-4 file:py-1 file:text-sm file:font-medium file:text-white hover:file:bg-[#2563EB] focus:outline-none file:cursor-pointer"
            />

            {courseBanner && (
            <p className="mt-2 text-sm">
                Selected: {courseBanner.name}
            </p>
            )}

            {errors.courseBanner && (
            <p className="mt-1 text-sm text-vogueRed">{errors.courseBanner}</p>
            )}
        </div>

        {/* Course Brochure */}
        <div>
            <label className="block mb-2 text-sm font-medium">
            Course Brochure
            </label>
            
            <input
            type="file"
            accept="application/pdf"
            onChange={handleBrochureChange}
            className="w-full rounded-lg bg-[#262A2F] text-sm text-white file:mr-4 file:rounded file:border-0 file:bg-crossBlue file:px-4 file:py-1 file:text-sm file:font-medium file:text-white hover:file:bg-[#2563EB] focus:outline-none file:cursor-pointer"
            />

            {courseBrochure && (
            <p className="mt-2 text-sm">
                Selected: {courseBrochure.name} ({(courseBrochure.size / 1024 / 1024).toFixed(2)} MB)
            </p>
            )}

            {errors.courseBrochure && (
            <p className="mt-1 text-sm text-vogueRed">{errors.courseBrochure}</p>
            )}
        </div>

        {/* General Error */}
        <p className="text-sm text-vogueRed">{errors.general}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 mt-2">
          <button
            onClick={onClose}
            disabled={isUploading}
            className="rounded-lg border border-[#2A333F] px-2 py-1 text-sm font-medium transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isUploading || (!courseBanner && !courseBrochure)}
            className="flex items-center justify-center px-2 py-1 text-sm font-semibold text-white transition-colors rounded-lg bg-crossLightPurple hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isUploading ? (
              <>
                <span className="ml-2">Uploading...</span>
              </>
            ) : (
              "Upload Files"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
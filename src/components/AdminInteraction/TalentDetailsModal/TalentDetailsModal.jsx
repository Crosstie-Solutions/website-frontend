import React from "react";
import {
  X,
  Download,
  ExternalLink,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
} from "lucide-react";

export default function TalentDetailsModal(props) {
  const { isOpen, onClose, talent } = props;
  if (!isOpen || !talent) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatSalary = (salary) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(salary);
  };

  const getLocation = () => {
    const parts = [talent.city, talent.state, talent.country].filter(Boolean);
    return parts.join(", ") || "N/A";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-lg border border-[#2A333F] bg-white text-black">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#2A333F] bg-transparent px-3 py-1">
          <div className="w-full">
            <h2 className="text-2xl font-semibold">
              {talent.firstName} {talent.lastName}
            </h2>
            <p className="mt-1 text-sm text-[#585b61]">{talent.role}</p>
          </div>
          <button onClick={onClose} className="">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div
          className="p-2 overflow-y-auto"
          style={{ maxHeight: "calc(90vh - 88px)" }}
        >
          {/* Contact Information */}
          <div className="mb-2">
            <div className="flex justify-between w-full mb-2">
              <h3 className="mb-2 text-lg font-semibold">
                Contact Information
              </h3>
              <a
               href={`mailto:${talent.email}`}
              className="flex items-center px-1 text-sm text-white transition-colors rounded-lg bg-crossLightPurple hover:opacity-90">
                Contact Candidate
              </a>
            </div>
            <div className="space-y-3 rounded-lg border border-[#2A333F] p-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Email</span>
                <a
                  href={`mailto:${talent.email}`}
                  className="text-sm text-crossBlue hover:underline"
                >
                  {talent.email}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Phone</span>
                <span className="text-sm">
                  {talent.phone}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Location</span>
                <span className="flex items-center gap-1 text-sm">
                  <MapPin size={14} className="text-vogueRed" />
                  {getLocation()}
                </span>
              </div>
              {talent.address && (
                <div className="flex items-center justify-between">
                  <span className="text-sm">Address</span>
                  <span className="text-sm">{talent.address}</span>
                </div>
              )}
            </div>
          </div>

          {/* Professional Information */}
          <div className="mb-2">
            <h3 className="mb-2 text-lg font-semibold">
              Professional Information
            </h3>
            <div className="space-y-4">
              {/* Department */}
              <div className="rounded-lg border border-[#2A333F] p-1">
                <label className="mb-2 block text-sm font-medium text-[#9CA3AF]">
                  Department
                </label>
                <div className="flex flex-wrap gap-2">
                  {talent.department.map((dept, index) => (
                    <span
                      key={index}
                      className="rounded-md bg-[#2A333F] px-3 py-1 text-sm text-white"
                    >
                      {dept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Job Details */}
              <div className="flex gap-4">
                <div className="flex-1 rounded-lg border border-[#2A333F] p-1">
                  <label className="mb-2 block text-sm font-medium text-[#585b60]">
                    Job Mode
                  </label>
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} />
                    <span className="text-sm">{talent.mode}</span>
                  </div>
                </div>

                <div className="flex-1 rounded-lg border border-[#2A333F] p-1">
                  <label className="mb-2 block text-sm font-medium text-[#585b60]">
                    Job Type
                  </label>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span className="text-sm">{talent.jobType}</span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="rounded-lg border border-[#2A333F] p-1">
                <label className="mb-2 block text-sm font-medium text-[#585b60]">
                  Years of Experience
                </label>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span className="text-sm">
                    {talent.yearsOfExperience} year{talent.yearsOfExperience==='1' ? '' : 's'}
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div className="rounded-lg border border-[#2A333F] p-1">
                <label className="block mb-2 text-sm font-medium">Skills</label>
                <div className="flex flex-wrap gap-1">
                  {talent.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-md bg-[#2A333F] text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Salary Expectations */}
          <div className="mb-2">
            <h3 className="mb-2 text-lg font-semibold">Salary Expectations</h3>
            <div className="flex gap-4">
              <div className="flex-1 rounded-lg border border-[#2A333F] p-1">
                <label className="block mb-2 text-sm font-medium">
                  Current Salary
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    &#8358;{talent.currentSalary.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex-1 rounded-lg border border-[#2A333F] p-1">
                <label className="block mb-2 text-sm font-medium">
                  Expected Salary
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    &#8358;{talent.expectedSalary.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="mb-2">
            <h3 className="mb-2 text-lg font-semibold text-white">Links</h3>
            <div className="space-y-3">
              {/* Resume */}
              <div className="flex items-center justify-between rounded-lg border border-[#2A333F] p-1">
                <span className="text-sm">Resume</span>
                <a
                  href={talent.resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-oculus-primary-6 hover:underline"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-between rounded-lg border border-[#2A333F] p-1">
                <span className="text-sm">LinkedIn</span>
                <a
                  href={talent.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-oculus-primary-6 hover:underline"
                >
                  <ExternalLink size={16} />
                  View Profile
                </a>
              </div>

              {/* Portfolio */}
              {talent.portfolio && (
                <div className="flex items-center justify-between rounded-lg border border-[#2A333F] p-1">
                  <span className="text-sm">Portfolio</span>
                  <a
                    href={talent.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-oculus-primary-6 hover:underline"
                  >
                    <ExternalLink size={16} />
                    View Portfolio
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Summary */}
          {talent.summary && (
            <div className="mb-2">
              <h3 className="mb-2 text-lg font-semibold">
                Professional Summary
              </h3>
              <div className="rounded-lg border border-[#2A333F] p-1">
                <p className="text-sm leading-relaxed">{talent.summary}</p>
              </div>
            </div>
          )}

          {/* Metadata */}
          <div className="rounded-lg border border-[#2A333F] p-1">
            <div className="flex items-center justify-between text-xs">
              <span>Submitted: {formatDate(talent.createdAt)}</span>
              {/* <span>ID: {talent._id}</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useContext, useState } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "react-toastify";
import axios from "axios";
import { CrossContext } from "@/Context/CrossContext";



const jobModes = ["Remote", "Hybrid", "On-site"];
const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];
const experienceLevels = ["1", "2", "3", "4", "5", "6", "7", "8+"];

const skillsList = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "SQL",
  "MongoDB",
  "GraphQL",
  "Git",
  "Agile",
  "Scrum",
  "Project Management",
  "UI/UX Design",
  "Figma",
];


export default function TalentNetworkForm() {
  const { baseUrl, countries, states, cities, setStateCode, departments } = useContext(CrossContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    address: "",
    department: [],
    role: "",
    mode: "",
    jobType: "",
    resume: null,
    currentSalary: "",
    expectedSalary: "",
    yearsOfExperience: "",
    skills: [],
    linkedinUrl: "",
    portfolio: "",
    summary: "",
  });

  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [selectedStateId, setSelectedStateId] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dropdown states
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [isModeOpen, setIsModeOpen] = useState(false);
  const [isJobTypeOpen, setIsJobTypeOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  
  const [wordCount, setWordCount] = useState(0);

  // Show address field only if country is not Nigeria
  const showAddressField = formData.country === '' || formData.country !== "Nigeria";

  // Handle resume file
  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type)) {
        setErrors((prev) => ({ ...prev, resume: "Please upload PDF, DOC, or DOCX file" }));
        return;
      }

      // Check file size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: "File size must be less than 10MB" }));
        return;
      }

      setFormData((prev) => ({ ...prev, resume: file }));
      setErrors((prev) => ({ ...prev, resume: undefined }));
    }
  };

  // Toggle department
  const toggleDepartment = (dept) => {
    setFormData((prev) => ({
      ...prev,
      department: prev.department.includes(dept)
        ? prev.department.filter((d) => d !== dept)
        : [...prev.department, dept],
    }));
  };

  // Toggle skill
  const toggleSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  // Submit
  const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {};

  if (!formData.firstName) newErrors.firstName = "First name is required";
  if (!formData.lastName) newErrors.lastName = "Last name is required";
  if (!formData.email) newErrors.email = "Email is required";
  if (!formData.phone) newErrors.phone = "Phone is required";
  if (!formData.country) newErrors.country = "Country is required";
  if (formData.country==='Nigeria' && !formData.state) newErrors.state = "State is required";
  if (formData.country==='Nigeria' && !formData.city) newErrors.city = "City is required";
  if (showAddressField && !formData.address) newErrors.address = "Address is required";
  if (formData.department.length === 0) newErrors.department = "Select at least one department";
  if (!formData.role) newErrors.role = "Role is required";
  if (!formData.mode) newErrors.mode = "Job mode is required";
  if (!formData.jobType) newErrors.jobType = "Job type is required";
  if (!formData.resume) newErrors.resume = "Resume is required";
  if (!formData.currentSalary) newErrors.currentSalary = "Current salary is required";
  if (!formData.expectedSalary) newErrors.expectedSalary = "Expected salary is required";
  if (!formData.yearsOfExperience) newErrors.yearsOfExperience = "Experience is required";
  if (formData.skills.length === 0) newErrors.skills = "Select at least one skill";
  if (!formData.linkedinUrl) newErrors.linkedinUrl = "LinkedIn URL is required";

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    toast.error("Please fill in all required fields", {
      position: "top-right",
      autoClose: 3000,
    });
    return;
  }

  try {
    setIsSubmitting(true);

    const formDataToSend = new FormData();

    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("country", formData.country);
    formDataToSend.append("state", formData.state);
    formDataToSend.append("city", formData.city);

    if (showAddressField) {
      formDataToSend.append("address", formData.address);
    }

    formData.department.forEach(item => formDataToSend.append("department[]", item));
    formDataToSend.append("role", formData.role);
    formDataToSend.append("mode", formData.mode);
    formDataToSend.append("jobType", formData.jobType);

    if (formData.resume) {
      formDataToSend.append("resume", formData.resume);
    }

    formDataToSend.append("currentSalary", formData.currentSalary);
    formDataToSend.append("expectedSalary", formData.expectedSalary);
    formDataToSend.append("yearsOfExperience", formData.yearsOfExperience);
     formData.skills.forEach(item => formDataToSend.append("skills[]", item));
    formDataToSend.append("linkedinUrl", formData.linkedinUrl);

    if (formData.portfolio) {
      formDataToSend.append("portfolio", formData.portfolio);
    }

    if (formData.summary) {
      formDataToSend.append("summary", formData.summary);
    }

    const res = await axios.post(`${baseUrl}/api/talent`, formDataToSend);

    if(res.status === 201){
      toast.success("Application submitted successfully! We'll be in touch soon.");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        state: "",
        city: "",
        address: "",
        department: [],
        role: "",
        mode: "",
        jobType: "",
        resume: null,
        currentSalary: "",
        expectedSalary: "",
        yearsOfExperience: "",
        skills: [],
        linkedinUrl: "",
        portfolio: "",
        summary: "",
      });

      setSelectedCountryId("");
      setSelectedStateId("");
      setErrors({});
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(
        error.response?.data?.message || "Failed to submit application");
    } else {
      toast.error("An unexpected error occurred");
    }
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="flex items-center justify-center h-auto py-5 mt-20 text-black bg-white rounded-lg shadow-lg large:px-3 large:w-60vw small:w-90vw small:px-1">
      
      <div className="mx-auto w-100">
        {/* Header */}
        <div className="flex flex-col items-center mb-4">
          <h1 className="mb-1 text-3xl font-bold text-center text-crossLightPurple">
            Join Crosstie's Talent Network
          </h1>
          <p className="text-15px text-[#727477] text-center">
            Register for essential career advice, industry insights, and exciting job opportunities.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-2 space-y-2 text-black bg-transparent border rounded-lg">
          {/* Personal Information */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">Personal Information</h2>
            <div className="flex gap-4">
              {/* First Name */}
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium">
                  First Name <span className="text-vogueRed">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 px-1 h-40px text-sm placeholder-[#6B7280] focus:outline-none"
                  placeholder="Enter first name"
                />
                {errors.firstName && <p className="mt-1 text-sm text-vogueRed">{errors.firstName}</p>}
              </div>

              {/* Last Name */}
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium">
                  Last Name <span className="text-vogueRed">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 px-1 h-40px text-sm placeholder-[#6B7280] focus:outline-none"
                  placeholder="Enter last name"
                />
                {errors.lastName && <p className="mt-1 text-sm text-vogueRed">{errors.lastName}</p>}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex gap-4">
            {/* Email */}
            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium">
                Email <span className="text-vogueRed">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-1 h-40px text-sm placeholder-[#6B7280] focus:outline-none"
                placeholder="Enter email"
              />
              {errors.email && <p className="mt-1 text-sm text-vogueRed">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium">
                Phone <span className="text-vogueRed">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-1 h-40px text-sm placeholder-[#6B7280] focus:outline-none"
                placeholder="Enter phone number"
              />
              {errors.phone && <p className="mt-1 text-sm text-vogueRed">{errors.phone}</p>}
            </div>
          </div>

          {/* Location */}
          <div className="">
            <h2 className="mb-4 text-xl font-semibold">Location</h2>
            <div className="flex flex-wrap gap-4">
              {/* Country */}
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium">
                  Country <span className="text-vogueRed">*</span>
                </label>
                <Popover open={isCountryOpen} onOpenChange={setIsCountryOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="justify-between border-gray-300 hover:text-black"
                    >
                      <span className={formData.country ? "text-black" : "text-[#6B7280]"}>
                        {formData.country || "Select country"}
                      </span>
                      <ChevronsUpDown className="ml-2 opacity-50 h-2px w-2px shrink-0" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Command className="">
                      <CommandInput placeholder="Search country..." className="text-black py-0.5" />
                      <CommandList>
                        <CommandEmpty className="py-0.5 text-center text-sm text-[#6B7280]">
                          No country found.
                        </CommandEmpty>
                        
                        <CommandGroup>
                          {countries && countries.map((country) => (
                            <CommandItem
                              key={country.isoCode}
                              value={country.name}
                              onSelect={() => {
                                setFormData((prev) => ({ ...prev, country: country.name, state: "", city: "", address: "" }));
                                setSelectedCountryId(country.isoCode);
                                setSelectedStateId("");
                                setIsCountryOpen(false);
                              }}
                              className="text-black hover:bg-[#2A333F]"
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-2 w-2",
                                  formData.country === country.name ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {country.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                {errors.country && <p className="mt-1 text-sm text-vogueRed">{errors.country}</p>}
              </div>

              {/* State */}
              {!showAddressField &&
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium text-black">
                  State <span className="text-vogueRed">*</span>
                </label>
                <Popover open={isStateOpen} onOpenChange={setIsStateOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      disabled={!selectedCountryId}
                      className="justify-between w-full text-black border-gray-300 disabled:opacity-50"
                    >
                      <span className={formData.state ? "text-black" : "text-[#6B7280]"}>
                        {formData.state || "Select state"}
                      </span>
                      <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command className="">
                      <CommandInput placeholder="Search state..." className="text-black" />
                      <CommandList>
                        <CommandEmpty className="py-6 text-center text-sm text-[#6B7280]">
                          No state found.
                        </CommandEmpty>
                        <CommandGroup>
                          {states && states.map((state) => (
                            <CommandItem
                              key={state.stateCode}
                              value={state.stateName}
                              onSelect={() => {
                                setFormData((prev) => ({ ...prev, state: state.stateName, city: "" }));
                                setSelectedStateId(state.stateCode);
                                setStateCode(state.stateCode);
                                setIsStateOpen(false);
                              }}
                              className="text-black"
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  formData.state === state.stateName ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {state.stateName}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                {errors.state && <p className="mt-1 text-sm text-vogueRed">{errors.state}</p>}
              </div>}

              {/* City */}
              {!showAddressField &&
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium text-black">
                  City <span className="text-vogueRed">*</span>
                </label>
                <Popover open={isCityOpen} onOpenChange={setIsCityOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      disabled={!selectedStateId}
                      className="justify-between w-full text-black border-gray-300 disabled:opacity-50"
                    >
                      <span className={formData.city ? "text-black" : "text-[#6B7280]"}>
                        {formData.city || "Select city"}
                      </span>
                      <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full border-[#2A333F] p-0">
                    <Command className="">
                      <CommandInput placeholder="Search city..." className="text-black" />
                      <CommandList>
                        <CommandEmpty className="py-6 text-center text-sm text-[#6B7280]">
                          No city found.
                        </CommandEmpty>
                        <CommandGroup>
                          {cities.map((city) => (
                            <CommandItem
                              key={city}
                              value={city}
                              onSelect={() => {
                                setFormData((prev) => ({ ...prev, city: city }));
                                setIsCityOpen(false);
                              }}
                              className="text-black"
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  formData.city === city ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {city}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                {errors.city && <p className="mt-1 text-sm text-vogueRed">{errors.city}</p>}
              </div>}
            </div>
          </div>

          {/* Address (Only for non-Nigeria countries) */}
          {showAddressField && (
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Address <span className="text-vogueRed">*</span>
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-1 h-40px text-sm text-black placeholder-[#6B7280] focus:outline-none"
                placeholder="Enter your address"
              />
              {errors.address && <p className="mt-1 text-sm text-vogueRed">{errors.address}</p>}
            </div>
          )}

          {/* Professional Information */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-black">Professional Information</h2>

            {/* Department (Multi-select) */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-black">
                Department <span className="text-vogueRed">*</span>
              </label>
              <Popover open={isDepartmentOpen} onOpenChange={setIsDepartmentOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className="justify-between w-full text-black border-gray-300"
                  >
                    <span className={formData.department.length > 0 ? "text-black" : "text-[#6B7280]"}>
                      {formData.department.length > 0
                        ? `${formData.department.length} department(s) selected`
                        : "Select departments"}
                    </span>
                    <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command className="">
                    <CommandInput placeholder="Search department..." className="text-black" />
                    <CommandList>
                      <CommandEmpty className="py-6 text-center text-sm text-[#6B7280]">
                        No department found.
                      </CommandEmpty>
                      <CommandGroup>
                        {departments.map((dept) => (
                          <CommandItem
                            key={dept}
                            value={dept}
                            onSelect={() => toggleDepartment(dept)}
                            className="text-black"
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                formData.department.includes(dept) ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {dept}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              {formData.department.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.department.map((dept) => (
                    <span
                      key={dept}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs text-black border border-gray-300 rounded-md"
                    >
                      {dept}
                      <button onClick={() => toggleDepartment(dept)} className="hover:text-vogueRed">
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                </div>
              )}
              {errors.department && <p className="mt-1 text-sm text-vogueRed">{errors.department}</p>}
            </div>

            {/* Role */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-black">
                Role <span className="text-vogueRed">*</span>
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-1 h-40px text-sm text-black placeholder-[#6B7280] focus:outline-none"
                placeholder="e.g. Senior Software Engineer"
              />
              {errors.role && <p className="mt-1 text-sm text-vogueRed">{errors.role}</p>}
            </div>

            {/* Mode and Job Type */}
            <div className="flex flex-wrap gap-4">
              {/* Job Mode */}
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium text-black">
                  Job Mode <span className="text-vogueRed">*</span>
                </label>
                <Popover open={isModeOpen} onOpenChange={setIsModeOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="justify-between w-full text-black border-gray-300 hover:text-black"
                    >
                      <span className={formData.mode ? "text-black" : "text-[#6B7280]"}>
                        {formData.mode || "Select mode"}
                      </span>
                      <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0 border-gray-300">
                    <Command className="">
                      <CommandList>
                        <CommandGroup>
                          {jobModes.map((mode) => (
                            <CommandItem
                              key={mode}
                              value={mode}
                              onSelect={() => {
                                setFormData((prev) => ({ ...prev, mode }));
                                setIsModeOpen(false);
                              }}
                              className="text-black"
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  formData.mode === mode ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {mode}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                {errors.mode && <p className="mt-1 text-sm text-vogueRed">{errors.mode}</p>}
              </div>

              {/* Job Type */}
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium text-black">
                  Job Type <span className="text-vogueRed">*</span>
                </label>
                <Popover open={isJobTypeOpen} onOpenChange={setIsJobTypeOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="justify-between w-full text-black border-gray-300"
                    >
                      <span className={formData.jobType ? "text-black" : "text-[#6B7280]"}>
                        {formData.jobType || "Select type"}
                      </span>
                      <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0 border-gray-300">
                    <Command className="">
                      <CommandList>
                        <CommandGroup>
                          {jobTypes.map((type) => (
                            <CommandItem
                              key={type}
                              value={type}
                              onSelect={() => {
                                setFormData((prev) => ({ ...prev, jobType: type }));
                                setIsJobTypeOpen(false);
                              }}
                              className="text-black"
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  formData.jobType === type ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {type}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                {errors.jobType && <p className="mt-1 text-sm text-vogueRed">{errors.jobType}</p>}
              </div>
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block mb-2 text-sm font-medium text-black">
              Resume <span className="text-vogueRed">*</span>
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
              className="w-full rounded-lg border border-gray-300 px-1 h-40px text-sm text-black file:mr-4 file:rounded file:border-0 file:bg-gray-300 file:px-4 file:py-1.5 file:text-sm file:font-medium file:text-black focus:outline-none file:cursor-pointer"
            />
            {formData.resume && (
              <p className="mt-2 text-sm text-[#9CA3AF]">
                Selected: {formData.resume.name} ({(formData.resume.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            )}
            {errors.resume && <p className="mt-1 text-sm text-vogueRed">{errors.resume}</p>}
          </div>

          {/* Salary Information */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-black">Salary Expectations</h2>
            <div className="flex gap-4">
              {/* Current Salary */}
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium text-black">
                  Current Net Salary <span className="text-vogueRed">*</span>
                </label>
                <input
                  type="number"
                  value={formData.currentSalary}
                  onChange={(e) => setFormData((prev) => ({ ...prev, currentSalary: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 px-1 h-40px text-sm text-black placeholder-[#6B7280] focus:outline-none"
                  placeholder="Enter current salary"
                />
                {errors.currentSalary && <p className="mt-1 text-sm text-vogueRed">{errors.currentSalary}</p>}
              </div>

              {/* Expected Salary */}
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium text-black">
                  Expected Salary <span className="text-vogueRed">*</span>
                </label>
                <input
                  type="number"
                  value={formData.expectedSalary}
                  onChange={(e) => setFormData((prev) => ({ ...prev, expectedSalary: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 px-1 h-40px text-sm text-black placeholder-[#6B7280] focus:outline-none"
                  placeholder="Enter expected salary"
                />
                {errors.expectedSalary && <p className="mt-1 text-sm text-vogueRed">{errors.expectedSalary}</p>}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-2 text-sm font-medium text-black">
              Years of Experience <span className="text-vogueRed">*</span>
            </label>
            <Popover open={isExperienceOpen} onOpenChange={setIsExperienceOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="justify-between w-full text-black border-gray-300"
                >
                  <span className={formData.yearsOfExperience ? "text-black" : "text-[#6B7280]"}>
                    {formData.yearsOfExperience || "Select experience"}
                  </span>
                  <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0 border-gray-300">
                <Command className="">
                  <CommandList>
                    <CommandGroup>
                      {experienceLevels.map((exp) => (
                        <CommandItem
                          key={exp}
                          value={exp}
                          onSelect={() => {
                            setFormData((prev) => ({ ...prev, yearsOfExperience: exp }));
                            setIsExperienceOpen(false);
                          }}
                          className="text-black"
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              formData.yearsOfExperience === exp ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {exp}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            {errors.yearsOfExperience && <p className="mt-1 text-sm text-vogueRed">{errors.yearsOfExperience}</p>}
          </div>

          {/* Skills (Multi-select) */}
          <div>
            <label className="block mb-2 text-sm font-medium text-black">
              Skills <span className="text-vogueRed">*</span>
            </label>
            <Popover open={isSkillsOpen} onOpenChange={setIsSkillsOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="justify-between w-full text-black border-gray-300"
                >
                  <span className={formData.skills.length > 0 ? "text-black" : "text-[#6B7280]"}>
                    {formData.skills.length > 0
                      ? `${formData.skills.length} skill(s) selected`
                      : "Select skills"}
                  </span>
                  <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0 border-gray-300">
                <Command className="border-gray-300">
                  <CommandInput placeholder="Search skills..." className="text-black" />
                  <CommandList>
                    <CommandEmpty className="py-2 text-center text-sm text-[#6B7280]">
                      No skill found.
                    </CommandEmpty>
                    <CommandGroup>
                      {skillsList.map((skill) => (
                        <CommandItem
                          key={skill}
                          value={skill}
                          onSelect={() => toggleSkill(skill)}
                          className="text-black"
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              formData.skills.includes(skill) ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {skill}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            {formData.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs text-black border border-gray-300 rounded-md"
                  >
                    {skill}
                    <button onClick={() => toggleSkill(skill)} className="hover:text-vogueRed">
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            )}
            {errors.skills && <p className="mt-1 text-sm text-vogueRed">{errors.skills}</p>}
          </div>

          {/* LinkedIn URL */}
          <div>
            <label className="block mb-2 text-sm font-medium text-black">
              LinkedIn URL <span className="text-vogueRed">*</span>
            </label>
            <input
              type="url"
              value={formData.linkedinUrl}
              onChange={(e) => setFormData((prev) => ({ ...prev, linkedinUrl: e.target.value }))}
              className="w-full rounded-lg border border-gray-300 px-1 h-40px text-sm text-black placeholder-[#6B7280] focus:outline-none"
              placeholder="https://linkedin.com/in/yourprofile"
            />
            {errors.linkedinUrl && <p className="mt-1 text-sm text-vogueRed">{errors.linkedinUrl}</p>}
          </div>

          {/* Portfolio (Optional) */}
          <div>
            <label className="block mb-2 text-sm font-medium text-black">
              Portfolio URL
            </label>
            <input
              type="url"
              value={formData.portfolio}
              onChange={(e) => setFormData((prev) => ({ ...prev, portfolio: e.target.value }))}
              className="w-full rounded-lg border border-gray-300 px-1 h-40px text-sm text-black placeholder-[#6B7280] focus:outline-none"
              placeholder="https://yourportfolio.com"
            />
          </div>

          {/* Summary (Optional) */}
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-black">
              Professional Summary
            </label>
            <textarea
              value={formData.summary}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, summary: e.target.value }));
                setWordCount(e.target.value.length);
              }}
              rows={4}
              maxLength={500}
              className="w-full rounded-lg border border-gray-300 p-2 h-150px text-sm placeholder-[#6B7280] focus:outline-none"
              placeholder="Brief summary of your professional background and career goals..."
            />
            <div className="self-end mt-1 text-gray-500">{wordCount}/500</div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center px-1 py-1 text-sm text-white transition-colors rounded-lg bg-crossLightPurple hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span className="ml-2">Submitting...</span>
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
import { useState } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────
const TABS = ["Compose Email", "Email Templates", "Email History"];
const VARIABLES = [
  "{{first_name}}",
  "{{last_name}}",
  "{{email}}",
  "{{user_category}}",
];
const CATEGORY_COLORS = {
  Onboarding: "bg-blue-100 text-blue-600",
  Marketing: "bg-orange-100 text-orange-500",
  Notifications: "bg-purple-100 text-purple-600",
};
const MOCK_TEMPLATES = [
  {
    id: 1,
    title: "Welcome Email",
    category: "Onboarding",
    subject: "Welcome to Kominiti, {{first_name}}!",
    preview:
      "Hi {{first_name}}, Welcome to Kominiti! We're excited to have you on board as part of our growing community of mentors and mentees.",
    created: "2026-03-20",
    updated: "2026-03-20",
  },
  {
    id: 2,
    title: "Welcome Email",
    category: "Marketing",
    subject: "Welcome to Kominiti, {{first_name}}!",
    preview:
      "Hi {{first_name}}, Welcome to Kominiti! We're excited to have you on board as part of our growing community of mentors and mentees.",
    created: "2026-03-20",
    updated: "2026-03-20",
  },
  {
    id: 3,
    title: "Welcome Email",
    category: "Notifications",
    subject: "Welcome to Kominiti, {{first_name}}!",
    preview:
      "Hi {{first_name}}, Welcome to Kominiti! We're excited to have you on board as part of our growing community of mentors and mentees.",
    created: "2026-03-20",
    updated: "2026-03-20",
  },
  {
    id: 4,
    title: "Welcome Email",
    category: "Notifications",
    subject: "Welcome to Kominiti, {{first_name}}!",
    preview:
      "Hi {{first_name}}, Welcome to Kominiti! We're excited to have you on board as part of our growing community of mentors and mentees.",
    created: "2026-03-20",
    updated: "2026-03-20",
  },
  {
    id: 5,
    title: "Welcome Email",
    category: "Onboarding",
    subject: "Welcome to Kominiti, {{first_name}}!",
    preview:
      "Hi {{first_name}}, Welcome to Kominiti! We're excited to have you on board as part of our growing community of mentors and mentees.",
    created: "2026-03-20",
    updated: "2026-03-20",
  },
  {
    id: 6,
    title: "Welcome Email",
    category: "Marketing",
    subject: "Welcome to Kominiti, {{first_name}}!",
    preview:
      "Hi {{first_name}}, Welcome to Kominiti! We're excited to have you on board as part of our growing community of mentors and mentees.",
    created: "2026-03-20",
    updated: "2026-03-20",
  },
];

// ─── Shared UI Primitives ──────────────────────────────────────────────────────

const TabBar = ({ tabs, active, onChange }) => (
  <div className="flex items-end mb-3 border-b border-gray-200">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => onChange(tab)}
        className={`px-2 py-1 text-sm font-medium mr-1 transition-colors border-b-2 -mb-px ${
          active === tab
            ? "border-[#4895EF] text-[#3E76CD]"
            : "border-transparent text-gray-500 hover:text-gray-700"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
);

const InputField = ({
  label,
  required,
  placeholder,
  value,
  onChange,
  type = "text",
}) => (
  <div className="flex flex-col gap-1">
    {label && (
      <label className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-200 rounded-lg px-1 py-1 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4895EF]/30 focus:border-[#4895EF]"
    />
  </div>
);

const SectionCard = ({ children, className = "" }) => (
  <div
    className={`bg-white border border-gray-200 rounded-xl p-2 ${className}`}
  >
    {children}
  </div>
);

const SectionTitle = ({ children }) => (
  <h3 className="mb-2 text-sm font-semibold text-gray-800">{children}</h3>
);

// ─── Compose Tab Components ────────────────────────────────────────────────────

const TemplateSelector = () => (
  <SectionCard className="mb-2">
    <SectionTitle>Email Template</SectionTitle>
    <div className="relative">
      <select className="w-full border border-gray-200 rounded-lg px-1 py-1 text-sm text-gray-400 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#4895EF]/30 focus:border-[#4895EF]">
        <option value="">Select a template</option>
        <option>Welcome Email</option>
        <option>Newsletter</option>
      </select>
      <span className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2">
        ▾
      </span>
    </div>
  </SectionCard>
);

const EmailDetailsForm = () => {
  const [fromName, setFromName] = useState("Kominiti Team");
  const [fromEmail, setFromEmail] = useState("noreply@kominiti.com");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [bodyMode, setBodyMode] = useState("Plain Text");

  return (
    <SectionCard>
      <SectionTitle>Email Details</SectionTitle>
      <div className="flex flex-col gap-3">
        {/* From row */}
        <div className="flex gap-4">
          <div className="flex-1">
            <InputField
              label="From Name"
              placeholder="Kominiti Team"
              value={fromName}
              onChange={(e) => setFromName(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <InputField
              label="From Email"
              placeholder="noreply@kominiti.com"
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Subject */}
        <InputField
          label="Subject Line"
          required
          placeholder="e.g., Welcome to Kominiti, {{first_name}}!"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        {/* Suggested Variables */}
        <div className="px-2 py-2 border border-blue-100 rounded-lg bg-blue-50">
          <div className="flex items-center gap-1 mb-2">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.95829 9.66423C5.89877 9.43351 5.77851 9.22296 5.61003 9.05448C5.44155 8.886 5.231 8.76575 5.00029 8.70623L0.910286 7.65156C0.840506 7.63176 0.779092 7.58973 0.73536 7.53186C0.691629 7.47399 0.667969 7.40343 0.667969 7.3309C0.667969 7.25836 0.691629 7.1878 0.73536 7.12993C0.779092 7.07206 0.840506 7.03003 0.910286 7.01023L5.00029 5.9549C5.23092 5.89543 5.44141 5.77528 5.60989 5.60692C5.77836 5.43856 5.89866 5.22815 5.95829 4.99756L7.01295 0.907562C7.03256 0.837508 7.07454 0.77579 7.1325 0.731825C7.19046 0.68786 7.26121 0.664062 7.33395 0.664062C7.4067 0.664062 7.47745 0.68786 7.53541 0.731825C7.59336 0.77579 7.63535 0.837508 7.65495 0.907562L8.70895 4.99756C8.76847 5.22828 8.88873 5.43883 9.05721 5.60731C9.22569 5.77579 9.43624 5.89604 9.66695 5.95556L13.757 7.00956C13.8273 7.02896 13.8893 7.0709 13.9335 7.12895C13.9777 7.18699 14.0017 7.25794 14.0017 7.3309C14.0017 7.40385 13.9777 7.4748 13.9335 7.53284C13.8893 7.59089 13.8273 7.63283 13.757 7.65223L9.66695 8.70623C9.43624 8.76575 9.22569 8.886 9.05721 9.05448C8.88873 9.22296 8.76847 9.43351 8.70895 9.66423L7.65429 13.7542C7.63468 13.8243 7.5927 13.886 7.53474 13.93C7.47678 13.9739 7.40603 13.9977 7.33329 13.9977C7.26054 13.9977 7.18979 13.9739 7.13183 13.93C7.07388 13.886 7.03189 13.8243 7.01229 13.7542L5.95829 9.66423Z"
                stroke="#4895EF"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-sm font-medium text-[#3E76CD]">
              Suggested Variables
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {VARIABLES.map((v) => (
              <span
                key={v}
                className="px-2 py-0.5 border border-blue-200 rounded-[5px] text-xs text-[#3E76CD] bg-white cursor-pointer hover:bg-blue-50 transition-colors"
              >
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* Email Body */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Email Body <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              <button
                className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-white rounded-[16px]"
                style={{ background: "#D71B90" }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.95829 9.66423C5.89877 9.43351 5.77851 9.22296 5.61003 9.05448C5.44155 8.886 5.231 8.76575 5.00029 8.70623L0.910286 7.65156C0.840506 7.63176 0.779092 7.58973 0.73536 7.53186C0.691629 7.47399 0.667969 7.40343 0.667969 7.3309C0.667969 7.25836 0.691629 7.1878 0.73536 7.12993C0.779092 7.07206 0.840506 7.03003 0.910286 7.01023L5.00029 5.9549C5.23092 5.89543 5.44141 5.77528 5.60989 5.60692C5.77836 5.43856 5.89866 5.22815 5.95829 4.99756L7.01295 0.907562C7.03256 0.837508 7.07454 0.77579 7.1325 0.731825C7.19046 0.68786 7.26121 0.664062 7.33395 0.664062C7.4067 0.664062 7.47745 0.68786 7.53541 0.731825C7.59336 0.77579 7.63535 0.837508 7.65495 0.907562L8.70895 4.99756C8.76847 5.22828 8.88873 5.43883 9.05721 5.60731C9.22569 5.77579 9.43624 5.89604 9.66695 5.95556L13.757 7.00956C13.8273 7.02896 13.8893 7.0709 13.9335 7.12895C13.9777 7.18699 14.0017 7.25794 14.0017 7.3309C14.0017 7.40385 13.9777 7.4748 13.9335 7.53284C13.8893 7.59089 13.8273 7.63283 13.757 7.65223L9.66695 8.70623C9.43624 8.76575 9.22569 8.886 9.05721 9.05448C8.88873 9.22296 8.76847 9.43351 8.70895 9.66423L7.65429 13.7542C7.63468 13.8243 7.5927 13.886 7.53474 13.93C7.47678 13.9739 7.40603 13.9977 7.33329 13.9977C7.26054 13.9977 7.18979 13.9739 7.13183 13.93C7.07388 13.886 7.03189 13.8243 7.01229 13.7542L5.95829 9.66423Z"
                    stroke="#fff"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                AI Rewrite
              </button>
              {["Plain Text", "Rich Text"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setBodyMode(mode)}
                  className={`px-2 py-1 text-xs rounded-lg font-medium transition-colors ${
                    bodyMode === mode
                      ? "bg-gray-100 text-gray-700"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
          <textarea
            rows={9}
            placeholder="Write your email content here. Use variables like {{first_name}} for personalization."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#4895EF]/30 focus:border-[#4895EF]"
          />
          <p className="text-xs text-gray-400">
            Available variables: {"{first_name}"}, {"{last_name}"}, {"{email}"},{" "}
            {"{user_category}"}
          </p>
        </div>
      </div>
    </SectionCard>
  );
};

// ─── Target Recipients Panel Sub-components ───────────────────────────────────

const RecipientsBadge = ({ count }) => (
  <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
    {count} recipients
  </span>
);

const AudienceDropdown = ({ label = "All Users" }) => (
  <div className="flex items-center justify-between px-2 py-1 transition-colors bg-white border border-gray-200 cursor-pointer rounded-xl hover:border-gray-300">
    <div className="flex items-center gap-2 text-sm text-gray-700">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="flex-shrink-0 text-gray-500"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
      {label}
    </div>
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="flex-shrink-0 text-gray-400"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </div>
);

const ConditionButtons = () => (
  <div className="flex gap-2">
    {["+ Add AND condition", "+ Add OR condition"].map((label) => (
      <button
        key={label}
        className="flex items-center px-2 py-1 text-xs font-medium transition-colors border rounded-full hover:bg-blue-50"
        style={{ color: "#3E76CD", borderColor: "#3E76CD" }}
      >
        {label}
      </button>
    ))}
  </div>
);

const WhoReceivesBox = ({ audience = "All Users" }) => (
  <div className="p-2 border border-gray-100 rounded-xl bg-gray-50">
    <div className="flex items-center gap-1.5 mb-1">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="flex-shrink-0 text-gray-400"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <span className="text-xs font-semibold text-gray-700">
        Who Will Receive This
      </span>
    </div>
    <p className="text-xs text-gray-500 mb-2.5">
      This email will be sent to users who match:
    </p>
    <span className="inline-flex items-center gap-1.5 px-2 py-1 border border-gray-200 rounded-lg text-xs text-gray-600 bg-white">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="flex-shrink-0 text-gray-500"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
      {audience}
    </span>
  </div>
);

const SendTestEmailBox = () => (
  <div
    className="p-2 border border-blue-100 rounded-2xl"
    style={{ background: "#EFF6FF" }}
  >
    <p className="mb-3 text-sm font-semibold" style={{ color: "#3E76CD" }}>
      Send Test Email
    </p>
    <input
      type="email"
      placeholder="your.email@example.com"
      className="w-full border border-gray-200 rounded-xl px-2 py-1 text-sm bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4895EF]/30 focus:border-[#4895EF] mb-3"
    />
    <button
      className="w-full py-1 text-sm font-semibold text-white transition-opacity rounded-[16px] hover:opacity-90"
      style={{ background: "#4895EF" }}
    >
      Send Test
    </button>
  </div>
);

const TargetRecipientsPanel = () => (
  <div className="flex flex-col gap-4">
    <SectionCard className="flex flex-col gap-3 p-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-gray-900">
          Target Recipients
        </span>
        <RecipientsBadge count={42} />
      </div>
      <AudienceDropdown />
      <ConditionButtons />
      <WhoReceivesBox />
    </SectionCard>
    <SendTestEmailBox />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────

const ComposeFooter = () => (
  <div className="flex items-center justify-start gap-3 pt-4 pb-2 mt-0 border-t border-gray-100">
    <button className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 transition-colors border border-gray-200 rounded-full hover:bg-gray-50">
      <span>👁</span> Preview Email
    </button>
    <button className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 transition-colors border border-gray-200 rounded-full hover:bg-gray-50">
      <span>▾</span> Save as
    </button>
    <button
      className="flex items-center gap-2 px-2 py-1 text-sm font-semibold text-white transition-opacity rounded-full hover:opacity-90"
      style={{ background: "#4895EF" }}
    >
      <span>▾</span> Send to 42 users
    </button>
  </div>
);

const ComposeTab = () => (
  <div className="flex flex-col gap-0">
    <div className="flex items-start gap-5">
      {/* Left column */}
      <div className="flex flex-col flex-1 min-w-0 gap-0">
        <TemplateSelector />
        <EmailDetailsForm />
        <ComposeFooter />
      </div>
      {/* Right panel */}
      <div className="flex-shrink-0 w-[250px">
        <TargetRecipientsPanel />
      </div>
    </div>
  </div>
);

// ─── Templates Tab Components ──────────────────────────────────────────────────

const CategoryBadge = ({ category }) => (
  <span
    className={`px-2.5 py-0.5 rounded-full text-xs w-max font-medium ${CATEGORY_COLORS[category] ?? "bg-gray-100 text-gray-600"}`}
  >
    {category}
  </span>
);

const TemplateCard = ({ template }) => (
  <div className="flex flex-col gap-3 p-1 transition-shadow bg-white border border-gray-200 rounded-xl hover:shadow-sm w-">
    
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-bold text-gray-900 w-max">{template.title}</span>
      <CategoryBadge category={template.category} />
    </div>

    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
        Subject
      </span>
      <div className="px-2 py-1 text-xs text-gray-700 border border-gray-100 rounded-lg bg-gray-50">
        {template.subject}
      </div>
    </div>

    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
        Preview
      </span>
      <p className="text-xs leading-relaxed text-gray-600 line-clamp-4">
        {template.preview}
      </p>
    </div>

    <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1 border-t border-gray-100">
      <span>Created {template.created}</span>
      <span>Updated {template.updated}</span>
    </div>

    <div className="flex items-center gap-2 pt-1">
      
      <button className="flex items-center gap-1.5 px-1 py-1 border border-gray-200 rounded-full text-xs text-gray-600 hover:bg-gray-50 transition-colors">
        <span>👁</span> Preview
      </button>
      {[
        { icon: "✏️", label: "Edit" },
        { icon: "📋", label: "Copy" },
        { icon: "🗑", label: "Delete", danger: true },
      ].map(({ icon, label, danger }) => (
        <button
          key={label}
          title={label}
          className={`w-50px h-30px flex items-center justify-center border rounded-[16px] text-sm transition-colors ${
            danger
              ? "border-red-200 text-red-400 hover:bg-red-50"
              : "border-gray-200 text-gray-500 hover:bg-gray-50"
          }`}
        >
          {icon}
        </button>
      ))}
    </div>
  </div>
);

const TemplatesToolbar = ({ search, onSearch }) => (
  <div className="flex items-center gap-3 mb-2">
    <div className="flex items-center flex-1 gap-2 px-2 py-1 bg-white border border-gray-200 rounded-lg">
      <svg
        width="14"
        height="14"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.2495 17.25L13.3833 13.3836M15.4714 8.36124C15.4714 9.76771 15.0544 11.1426 14.2731 12.312C13.4917 13.4815 12.3812 14.3929 11.0819 14.9312C9.78256 15.4694 8.35283 15.6102 6.97349 15.3358C5.59414 15.0614 4.32714 14.3842 3.33268 13.3896C2.33823 12.3951 1.661 11.128 1.38663 9.74857C1.11227 8.36912 1.25308 6.93929 1.79127 5.63988C2.32947 4.34048 3.24087 3.22985 4.41022 2.44846C5.57957 1.66707 6.95435 1.25 8.36072 1.25C10.2466 1.25 12.0552 1.99922 13.3888 3.33283C14.7223 4.66645 15.4714 6.47522 15.4714 8.36124Z"
          stroke="#3C3C3C"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <input
        className="flex-1 text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
    <button className="flex items-center gap-1.5 px-2 py-1 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 bg-white transition-colors">
      <span>▼</span> Filter
    </button>
    <button className="flex items-center gap-1.5 px-2 py-1 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 bg-white transition-colors">
      <span>▾</span> All Categories
    </button>
    <button
      className="flex items-center gap-1.5 px-2 py-1 rounded-[10px] text-sm font-semibold text-white transition-opacity hover:opacity-90"
      style={{ background: "#4895EF" }}
    >
      + New Template
    </button>
  </div>
);

const TemplatesTab = () => {
  const [search, setSearch] = useState("");
  const filtered = MOCK_TEMPLATES.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col">
      <TemplatesToolbar search={search} onSearch={setSearch} />
      <div className="flex flex-row flex-wrap justify-start gap-2">
        {filtered.map((t) => (
          <div
            key={t.id}
            className="w-[calc(33.333%-11px)] min-w-[220px] flex-shrink-0"
          >
            <TemplateCard template={t} />
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="flex items-center justify-center flex-1 py-20 text-sm text-gray-400">
            No templates found.
          </div>
        )}
      </div>
    </div>
  );
};

// ─── History Tab (Coming Soon) ────────────────────────────────────────────────

const HistoryTab = () => (
  <div className="flex flex-col items-center justify-center gap-4 py-24">
    <div
      className="flex items-center justify-center w-16 h-16 text-2xl rounded-full"
      style={{ background: "#EFF6FF" }}
    >
      📬
    </div>
    <p className="text-sm font-medium text-gray-500">
      Email History is coming soon.
    </p>
    <p className="text-xs text-gray-400">
      Check back later for a full log of sent campaigns.
    </p>
  </div>
);

export default function MailCenter() {
  const [activeTab, setActiveTab] = useState("Compose Email");

  return (
    <div className="min-h-screen p-3 bg-gray-50 w-80vw">
      <div className="mx-auto w-100">
        <h1 className="mb-2 text-xl font-bold text-gray-900">Mail Center</h1>

        <TabBar tabs={TABS} active={activeTab} onChange={setActiveTab} />

        {activeTab === "Compose Email" && <ComposeTab />}
        {activeTab === "Email Templates" && <TemplatesTab />}
        {activeTab === "Email History" && <HistoryTab />}
      </div>
    </div>
  );
}

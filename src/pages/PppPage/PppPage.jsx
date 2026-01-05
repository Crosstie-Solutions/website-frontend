import React from "react";

function PppPage() {
  return (
    <main className="flex flex-col items-center h-100 large:mt-20 small:mt-12 gap-7 w-100vw font-inter">
      <div className="w-760px bg-white px-2 pt-2 pb-5 flex flex-col items-center gap-3 rounded-lg shadow-lg">
        <h1 className="text-24px font-semibold text-center">
          Operational Reference Frameworks in Management Consulting
        </h1>
        <div className="flex flex-col w-100 h-auto items-center gap-3">
          <div className="flex flex-col w-100 h-auto items-center gap-1">
            <h2 className="font-semibold leading-[1.4] text-18px">
              Section 1: Context
            </h2>
            <p className="text-center leading-normal text-[#222] text-16px">
              Crosstie Solutions is a management consulting firm providing
              advisory services in organizational effectiveness, people
              development, and performance improvement. In the course of its
              consulting engagements, Crosstie applies a range of analytical
              models, diagnostic tools, and reference frameworks to support
              client assessment, decision-making, and implementation planning.
            </p>
          </div>

          <div className="flex flex-col w-100 h-auto items-center gap-1">
            <h2 className="font-semibold leading-[1.4] text-18px">
              Section 2: Use of Reference Frameworks
            </h2>
            <p className="text-center leading-normal text-[#222] text-16px">
              Crosstie maintains an internal repository of reference frameworks
              that may be applied, where relevant, during management consulting
              engagements. The selection and use of any framework is determined
              by the specific context of the client organization, the nature of
              the engagement, and the professional judgment of Crosstie’s
              consulting team.
            </p>
            <p className="text-center leading-normal text-[#222] text-16px">
              No single framework is used exclusively, and the application of
              any reference model does not constitute endorsement,
              certification, or mandated methodology.
            </p>
          </div>

          <div className="flex flex-col w-100 h-auto items-center gap-1">
            <h2 className="font-semibold leading-[1.4] text-18px">
              Section 3: Reference to the Personal Productivity Program (PPP)
            </h2>
            <p className="text-center leading-normal text-[#222] text-16px">
              The Personal Productivity Program (PPP) is one of several
              reference frameworks that has been considered and applied by
              Crosstie Solutions in select consulting engagements where
              individual and team productivity, execution discipline, or
              performance alignment are relevant to the engagement scope.
            </p>

            <p className="text-center leading-normal text-[#222] text-16px">
              Within Crosstie’s consulting practice, PPP is referenced as a
              conceptual and analytical framework to support discussions on
              productivity behaviors, task prioritization logic, and execution
              structure. Its use is non-exclusive and does not replace other
              established management, behavioral, or performance frameworks
              applied by the firm.
            </p>
          </div>

          <div className="flex flex-col w-100 h-auto items-center gap-1">
            <h2 className="font-semibold leading-[1.4] text-18px">
              Section 4: Scope and Independence
            </h2>
            <p className="text-center leading-normal text-[#222] text-16px">
              The application of PPP within Crosstie’s consulting engagements is
              determined independently by the firm. Crosstie is not affiliated
              with, controlled by, or contractually obligated to the originator
              of PPP, and the framework is applied at the discretion of
              Crosstie’s consultants as part of broader advisory work.
            </p>

            <p className="text-center leading-normal text-[#222] text-16px">
              Crosstie’s consulting services are designed and delivered
              independently, and no framework referenced by the firm operates as
              a proprietary requirement or standardized consulting product.
            </p>
          </div>

          <div className="flex flex-col w-100 h-auto items-center gap-1">
            <h2 className="font-semibold leading-[1.4] text-18px">
              Section 5: Internal Practice Note
            </h2>
            <p className="text-center leading-normal text-[#222] text-16px">
              This reference reflects Crosstie’s internal consulting practice
              and does not constitute a training program, certification
              offering, or instructional curriculum. Framework usage may evolve
              over time based on professional evaluation, client needs, and
              consulting best practices.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PppPage;

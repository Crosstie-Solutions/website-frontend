
import ConsultingComponent from "../../components/ConsultingComponent/ConsultingComponent";
import ConsultingHero from "../../components/ConsultingHero/ConsultingHero";
import ConsultingForm from "../../components/ConsultingForm/ConsultingForm"




function BusinessProcessPage() {

  const title='process'

  const tag = " Business Process Documentation and Improvement"

  const cta = `Want to increase efficiency and reduce disruption? Book a process improvement 
session to begin building operational clarity. `

  const intro = `Growth exposes gaps. As organisations expand, informal processes often become 
liabilities. Without clear documentation, even small missteps can lead to inefficiency, 
confusion, or breakdown. New talents, especially, risk disrupting what is already working. 
We bring structure and consistency to workflows to strengthen operations and protect 
business continuity. `


const methodology =[
  'Map existing processes through one-on-one sessions with process owners.',
  'Apply Lean strategies and Six Sigma principles to streamline and improve business processes.',
  'Build SOPs and process maps for clarity and continuity.',
  'Train teams to embed the new processes and ensure team-wide adoption.',
  'Quarterly follow-ups to ensure adoption and capture feedback for continuous improvement.',
]



const output =[
  'Streamlined, documented processes across major functions ',
  'Better role clarity and fewer operational errors. ',
  'Improved efficiency, accountability, and onboarding. ',
  'Reduced operational risk during transitions or talent addition.',
  'A culture of structure, discipline, and continuous improvement.',
]

  
  return (
    <div className="relative flex flex-col items-center justify-start gap-5 py-5 large:mt-12 text-15px large:w-100vw large:h-auto small:w-90vw small:h-auto small:mt-13 small:pt-0">
      
      <ConsultingHero
        tag={tag}
        line1={intro}
        title={title}
      />
      

      
      <ConsultingComponent
      introduction={intro}
      methodology={methodology}
      output={output}
      />

       
      <ConsultingForm
        consultingTitle={tag}
        cta={cta}
      />
    </div>
  );
}

export default BusinessProcessPage;

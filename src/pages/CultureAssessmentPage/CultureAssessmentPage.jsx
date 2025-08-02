
import ConsultingComponent from "../../components/ConsultingComponent/ConsultingComponent";
import ConsultingHero from "../../components/ConsultingHero/ConsultingHero";
import ConsultingForm from "../../components/ConsultingForm/ConsultingForm"


function CultureAssessmentPage() {

  const title='culture'

  const tag = "Culture Assessment & Transformation"

  const cta = 'Not sure where your culture stands? Try our free On-Spot Culture Checker. It is a quick way to see what is working and what might be holding you back.'

  const intro = `Strategy thrives on culture. When the two are not aligned, execution slows and results 
suffer. Whether a company is scaling, restructuring, or reimagining its future, aligning 
culture becomes essential. Our Culture Assessment and Transformation service clarifies 
where culture stands, where it needs to be, and how to bridge the gap clearly and 
measurably.`

const methodology =[
  'Diagnose using our Six-Dimension Culture Framework.',
  'Gather insights via leadership interviews, surveys, and diagnostics.',
  'Deliver a Culture Report with a clear current vs. ideal comparison.',
  'Co-design initiatives to align behavior with strategy.',
  'Provide monthly sessions to sustain momentum and accountability.',
]


const output =[
  'A clear, visual Culture Assessment Report highlighting current culture vs optimal culture',
  'A tailored roadmap of initiatives to build a stronger, more aligned culture',
  'Increased team alignment, accountability, and ownership.',
  'Less resistance, and fewer "we have always done it this way" moments that slows down execution.',
  'Long-term cultural transformation with ongoing support and guidance.',
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

export default CultureAssessmentPage;

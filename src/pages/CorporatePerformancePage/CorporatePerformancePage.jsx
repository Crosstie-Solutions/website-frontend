
import ConsultingComponent from "../../components/ConsultingComponent/ConsultingComponent";
import ConsultingHero from "../../components/ConsultingHero/ConsultingHero";
import ConsultingForm from "../../components/ConsultingForm/ConsultingForm"




function CorporatePerformancePage() {

  const title='performance'

  const tag = "Corporate Performance Management "

  const cta = `Is your team busy but the business stagnant? Book a session with us to begin building a 
more effective performance system`

  const intro = `Strong strategy does not always translate into results. 
One common gap is that performance at the individual level does not always align with 
business priorities. Closing that gap ensures that as individuals grow, so does the business. 
Regardless of the framework; OKRs, Balanced Scorecard, or MB&O, we translate strategic 
priorities into department, team, and individual goals to strengthens alignment and drives 
execution. Our holistic approach integrates performance training, promotion criteria, and 
competency frameworks to support long-term growth.`


const methodology =[
  'Clarify your strategic priorities. ',
  'Assess your current performance frameworks',
  'Cascade goals from executives to employees ',
  'Build tools (dashboards, trackers) to track and visualize impact. ',
  'Provide performance training and develop competency and career growth frameworks to support execution.',
]



const output =[
  'A performance management system tied directly to strategic goals.',
  'Clear link between employee performance and business performance.',
  'Tools to support accountability and performance tracking.',
  'Team clarity on goals, metrics, and growth paths.',
  'A culture of accountability, alignment, and development.',
]

  const special = true;
  
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
      special={special}
      />

       
      <ConsultingForm
        consultingTitle={tag}
        cta={cta}
      />
    </div>
  );
}

export default CorporatePerformancePage;

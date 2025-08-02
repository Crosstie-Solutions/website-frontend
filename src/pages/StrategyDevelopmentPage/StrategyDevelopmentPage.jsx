
import ConsultingComponent from "../../components/ConsultingComponent/ConsultingComponent";
import ConsultingHero from "../../components/ConsultingHero/ConsultingHero";
import ConsultingForm from "../../components/ConsultingForm/ConsultingForm"


function StrategyDevelopmentPage() {

  const title = "strategy"
  
  const tag = "Strategy Development and Execution"

  const cta = `To build a responsive strategy system that stays relevant, book a collaborative session 
to get started.`

  const intro = `Strategy cannot be something you write once and forget. The old five-year plans don’t work 
anymore, not when markets shift, customers evolve, and uncertainty is the norm (VUCA 
world). We help you build a strategy that is alive, adapts, and keeps everyone rowing in the 
same direction.`

const approach =[
  'Run diagnostic sessions to surface friction points.',
  'Host strategy workshops to define priorities.',
  'Craft a clear, custom Strategy Document.',
  'Create a live dashboard for tracking initiatives and outcomes.',
  'Hold monthly review sessions to ensure agility and traction.',
]

const methodology =[
  'Conduct diagnostic sessions with stakeholders to surface friction points.',
  'Host strategy workshops to define priorities.',
  'Craft a clear, custom Strategy Document.',
  'Build an Interactive Strategic Dashboard for tracking initiatives and outcomes.',
  'Hold monthly review sessions to ensure agility and traction.',
]



const output =[
  'A cohesive, actionable strategic plan',
  'A live dashboard linking strategy to execution',
  'Agile, informed decision-making',
  'Stronger alignment across teams',
  'A strategy system that evolves with the environment. ',
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
      approach={approach}
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

export default StrategyDevelopmentPage;

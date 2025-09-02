import ecdProgram from '@/assets/ecd-program.jpg';
import studentParents from '@/assets/student-parents.jpg';
import teacherTraining from '@/assets/teacher-training.jpg';
import twoGenApproach from '@/assets/two-gen-approach.jpg';
import ecdPro from '@/assets/ecd-pro.jpg';
import sParent from '@/assets/sparent.jpeg';
import generation from '@/assets/generation.jpeg';
import twoGen from '@/assets/two-gen.png';
import cpd from '@/assets/cpd.png';
import gen from '@/assets/2gen.png';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Early Childhood Development (ECD)",
      description: "Building strong foundations for lifelong learning through nurturing, play-based environments that give every child the opportunity to learn, grow, and thrive.",
      image: ecdPro,
      details: "We work closely with government institutions, donors, and development partners to strengthen ECD services, focusing on building caregiver capacity to deliver structured early learning activities."
    },
    {
      title: "Student Parents & Out of School Youth Education",
      description: "Giving teen mothers a second chance at education and a brighter future through comprehensive support and alternative pathways.",
      image: sParent,
      details: "We remove barriers by providing school fees, materials, psychosocial counseling, and mentoring, creating safe spaces where young mothers can rebuild confidence and imagine new possibilities."
    },
    {
      title: "Teachers & Caregivers Professional Development",
      description: "Empowering educators with modern, inclusive, and evidence-based teaching practices that combine technical expertise with innovative training approaches.",
      image: cpd,
      details: "Our programs include Continuous Professional Development (CPD), play-based learning, inclusive education practices, and ICT-enhanced learning methodologies."
    },
    {
      title: "The 2Gen Approach",
      description: "Our signature Two-Generation approach addresses the interconnected needs of parents and children simultaneously, creating lasting change for entire families.",
      image: gen,
      details: "When parents thrive, children thrive. We engage families as partners in shaping holistic, inclusive, and sustainable support that benefits entire communities."
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-deep mb-4 sm:mb-6">What We Do</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-navy-medium max-w-3xl mx-auto">
              At WFI Rwanda, our work is driven by the belief that the next generation must be better than today's. 
              We design and implement holistic, family-centered interventions that strengthen education, improve family well-being, and empower communities.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {programs.map((program, index) => (
              <div 
                key={program.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-slide-up ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-medium hover-lift"
                  />
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} mt-8 lg:mt-0`}>
                  <div className="bg-navy-light rounded-xl p-6 sm:p-8 shadow-soft hover-lift">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-deep mb-3 sm:mb-4">{program.title}</h3>
                    <p className="text-base sm:text-lg text-navy-medium mb-4 sm:mb-6 leading-relaxed">{program.description}</p>
                    <p className="text-sm sm:text-base text-navy-medium leading-relaxed">{program.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

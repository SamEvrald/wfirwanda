import { Users, GraduationCap, Droplets, HandHeart } from 'lucide-react';

const ImpactSection = () => {
  const impacts = [
    {
      icon: Users,
      number: "1,500+",
      title: "Children Reached",
      description: "Children aged 2–6 years across 39 ECD centers in Gakenke district with age-appropriate play and learning materials, safe spaces, and trained caregivers."
    },
    {
      icon: GraduationCap,
      number: "100%",
      title: "Teen Mother Support",
      description: "Supported teen mothers to return to secondary school by covering their school fees and basic needs, giving them a second chance to continue their education."
    },
    {
      icon: Droplets,
      number: "30+",
      title: "Access to Clean Water",
      description: "Children at Nyamabuye ECD center now have access to clean water, benefiting their health, learning, and surrounding community."
    },
    {
      icon: HandHeart,
      number: "Strong",
      title: "Community Partnerships",
      description: "Worked closely with Gakenke District and JADF members to align with national priorities and build sustainable systems."
    }
  ];

  return (
    <section id="impact" className="py-20 bg-navy-deep text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Impact</h2>
            <div className="w-20 sm:w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              WFI Rwanda has made significant progress in transforming the lives of children, families, 
              and communities through our holistic, family-centered approach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {impacts.map((impact, index) => {
              const IconComponent = impact.icon;
              return (
                <div 
                  key={impact.title}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 hover-lift">
                    <IconComponent size={24} className="text-white sm:w-8 sm:h-8" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2 gradient-text">{impact.number}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{impact.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm sm:text-base">{impact.description}</p>
                </div>
              );
            })}
          </div>

          {/* Additional Impact Details */}
          <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/10 rounded-xl p-4 sm:p-6 hover-lift animate-slide-up">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Early Childhood Development</h4>
              <p className="text-white/90 text-sm sm:text-base">
                For the first time, many caregivers received structured professional development in 
                play-based learning, enabling them to stimulate early literacy, numeracy, and creativity.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-4 sm:p-6 hover-lift animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Youth Empowerment</h4>
              <p className="text-white/90 text-sm sm:text-base">
                Breaking cycles of exclusion and stigma, demonstrating that education is a right for 
                every child and young person, regardless of circumstance.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-4 sm:p-6 hover-lift animate-slide-up sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">WASH Impact</h4>
              <p className="text-white/90 text-sm sm:text-base">
                Children now practice handwashing before meals, centers maintain kitchen gardens, 
                and clean water has become a cornerstone of better health and learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
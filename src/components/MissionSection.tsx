import { Shield, Users, Heart, Target, Eye } from 'lucide-react';

const MissionSection = () => {
  const values = [
    {
      icon: Target,
      title: "Accountability",
      description: "We are committed to transparency and accountability in all aspects of our work. Clear procedures and guidelines govern our critical processes."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Concern for the well-being of the communities we serve lies at the heart of WFI Rwanda. We uphold honesty and fairness in all our relationships."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "We believe that true impact is achieved when people work together. Our staff and volunteers collaborate across teams and programs."
    },
    {
      icon: Eye,
      title: "Respect for Others",
      description: "WFI Rwanda upholds the principles of the United Nations Universal Declaration of Human Rights."
    },
    {
      icon: Shield,
      title: "Child Safeguarding",
      description: "Protecting children is central to our mission. WFI Rwanda strictly adheres to local and international child protection laws and standards."
    }
  ];

  return (
    <section id="mission" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-deep mb-4 sm:mb-6">Our Mission & Values</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8"></div>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 shadow-medium hover-lift animate-slide-up">
            <h3 className="text-2xl sm:text-3xl font-semibold text-navy-deep mb-4 sm:mb-6 text-center">Our Mission</h3>
            <p className="text-lg sm:text-xl text-navy-medium text-center leading-relaxed">
              Our mission is to break the cycle of poverty through programs that strengthen family well-being.
            </p>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-navy-deep mb-8 sm:mb-12 text-center">Our Core Values</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={value.title}
                    className="bg-white rounded-xl p-6 shadow-soft hover-lift animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-navy-deep mb-3">{value.title}</h4>
                    <p className="text-navy-medium leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
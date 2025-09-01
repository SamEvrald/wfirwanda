const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-deep mb-4 sm:mb-6">Who We Are</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-slide-up">
              <p className="text-base sm:text-lg text-navy-medium leading-relaxed mb-4 sm:mb-6">
                Whole Family Initiative Rwanda (WFI Rwanda) is a registered Rwandan non-governmental 
                organization (NGO) established in 2019. Our mission is to break the cycle of 
                intergenerational poverty by promoting holistic family well-being.
              </p>
              
              <p className="text-base sm:text-lg text-navy-medium leading-relaxed mb-4 sm:mb-6">
                WFI Rwanda is the first and only organization in Rwanda to apply the Two-Generation 
                (2Gen approach), which addresses the needs of both children and their parents 
                simultaneously.
              </p>
              
              <p className="text-base sm:text-lg text-navy-medium leading-relaxed">
                By engaging families in co-designing programs, we create integrated, equity-focused, 
                and sustainable solutions that strengthen households and communities alike.
              </p>
            </div>
            
            <div className="animate-scale-in mt-8 md:mt-0">
              <div className="bg-navy-light rounded-2xl p-6 sm:p-8 shadow-medium hover-lift">
                <h3 className="text-xl sm:text-2xl font-semibold text-navy-deep mb-4 sm:mb-6">Our Strategic Objectives</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-sm sm:text-base text-navy-medium">Improving early childhood development and education</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-sm sm:text-base text-navy-medium">Enhancing the well-being of vulnerable families through health services, food security, and socio-economic support</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-sm sm:text-base text-navy-medium">Promoting youth self-employment through technical and vocational training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
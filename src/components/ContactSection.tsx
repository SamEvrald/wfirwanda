import { Mail, Twitter, Facebook, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';
      
      // Template parameters for EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: 'rwandawfi@gmail.com', // Your email where you want to receive messages
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      
      // Fallback to mailto if EmailJS fails
      const mailtoLink = `mailto:rwandawfi@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      toast({
        title: "Opening email client",
        description: "We couldn't send the email directly, but we've opened your email client with the message ready.",
        variant: "destructive",
      });
    }
  };
  return (
    <section id="contact" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-navy-deep mb-6">Contact Us</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-navy-medium">
              Ready to partner with us in breaking the cycle of poverty? Get in touch today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-medium hover-lift">
                <h3 className="text-2xl font-semibold text-navy-deep mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-navy-deep">Name *</Label>
                      <Input
                        id="name"
                        {...register('name')}
                        placeholder="Your full name"
                        className="mt-2"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-navy-deep">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="your.email@example.com"
                        className="mt-2"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-navy-deep">Subject *</Label>
                    <Input
                      id="subject"
                      {...register('subject')}
                      placeholder="What's this about?"
                      className="mt-2"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-navy-deep">Message *</Label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="mt-2 resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Get In Touch */}
              <div className="animate-scale-in">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-medium hover-lift">
                  <h3 className="text-2xl font-semibold text-navy-deep mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-navy-medium">Email</p>
                        <a 
                          href="mailto:rwandawfi@gmail.com" 
                          className="text-lg text-navy-deep hover:text-navy-medium transition-colors break-all"
                        >
                          rwandawfi@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-medium hover-lift">
                  <h3 className="text-2xl font-semibold text-navy-deep mb-6">Follow Us</h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://twitter.com/WFIRwanda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-navy-light transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Twitter size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-navy-deep font-medium group-hover:text-navy-medium transition-colors">
                          Twitter
                        </p>
                        <p className="text-sm text-navy-medium">@WFIRwanda</p>
                      </div>
                    </a>

                    <a 
                      href="https://www.facebook.com/profile.php?id=100089740622277&mibextid=ZbWKwL" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-navy-light transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Facebook size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-navy-deep font-medium group-hover:text-navy-medium transition-colors">
                          Facebook
                        </p>
                        <p className="text-sm text-navy-medium">WFI Rwanda</p>
                      </div>
                    </a>

                    <a 
                      href="https://www.linkedin.com/in/wfirwanda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-navy-light transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Linkedin size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-navy-deep font-medium group-hover:text-navy-medium transition-colors">
                          LinkedIn
                        </p>
                        <p className="text-sm text-navy-medium">WFI Rwanda</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-strong">
              <h3 className="text-2xl font-semibold mb-4">Join Our Mission</h3>
              <p className="text-lg mb-6 text-white/90">
                Together, we can break the cycle of poverty and build stronger families and communities.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-navy-deep hover:bg-white/90"
                onClick={() => window.open('mailto:rwandawfi@gmail.com', '_blank')}
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
"use client"

// Helper functions for opening different types of contact forms
export const openStrategyForm = () => {
  (window as any).openLeadForm('strategy', 'Get Your Free Strategy Call', 'Let\'s discuss your business goals and create a custom growth strategy.')
}

export const openQuoteForm = () => {
  (window as any).openLeadForm('quote', 'Get Your Custom Quote', 'Tell us about your project and we\'ll provide a detailed quote within 24 hours.')
}

export const openAuditForm = () => {
  (window as any).openLeadForm('audit', 'Get Your Free SEO Audit', 'We\'ll analyze your website and provide actionable insights to improve your rankings.')
}

export const openConsultationForm = () => {
  (window as any).openLeadForm('consultation', 'Book Your Free Consultation', 'Let\'s discuss how we can help grow your business with our solutions.')
}

export const openChatbotForm = () => {
  (window as any).openLeadForm('consultation', 'Book a Free Chatbot Strategy Call', 'Let\'s discuss how AI chatbots can automate your customer engagement and boost sales.')
}

export const openWebsiteForm = () => {
  (window as any).openLeadForm('quote', 'Get Your Website Quote', 'Tell us about your website needs and we\'ll provide a custom quote.')
}

export const openSEOForm = () => {
  (window as any).openLeadForm('audit', 'Get Your Free SEO Strategy Call', 'We\'ll analyze your current SEO and create a plan to get you found on Google.')
}

export const openCustomDevForm = () => {
  (window as any).openLeadForm('consultation', 'Book Your Free Strategy Call', 'Let\'s discuss your custom development needs and build something amazing.')
}

export const openTechSupportForm = () => {
  (window as any).openLeadForm('consultation', 'Book a Free Discovery Call', 'Let\'s organize your digital systems and get your tech working for you.')
}
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { X, CheckCircle2, ArrowRight } from "lucide-react"
import { useLeadForm } from "@/contexts/LeadFormContext"

interface Web3ContactFormProps {
  formType?: 'strategy' | 'quote' | 'audit' | 'consultation'
  formTitle?: string
  formSubtitle?: string
}

const Web3ContactForm = ({ 
  formType = 'strategy',
  formTitle,
  formSubtitle 
}: Web3ContactFormProps) => {
  const { showLeadForm, closeLeadForm } = useLeadForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    businessType: '',
    phone: '',
    website: '',
    growthGoal: '',
    currentChallenges: '',
    budget: '',
    timeline: ''
  })

  const getFormContent = () => {
    switch (formType) {
      case 'quote':
        return {
          title: formTitle || 'Get Your Custom Quote',
          subtitle: formSubtitle || 'Tell us about your project and we\'ll provide a detailed quote within 24 hours.',
          submitText: 'Get My Custom Quote'
        }
      case 'audit':
        return {
          title: formTitle || 'Get Your Free SEO Audit',
          subtitle: formSubtitle || 'We\'ll analyze your website and provide actionable insights to improve your rankings.',
          submitText: 'Get My Free Audit'
        }
      case 'consultation':
        return {
          title: formTitle || 'Book Your Free Consultation',
          subtitle: formSubtitle || 'Let\'s discuss how we can help grow your business with our solutions.',
          submitText: 'Book My Consultation'
        }
      default:
        return {
          title: formTitle || 'Get Your Free Strategy Call',
          subtitle: formSubtitle || 'Let\'s discuss your business goals and create a custom growth strategy.',
          submitText: 'Book My Strategy Call'
        }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          website: formData.website,
          business_type: formData.businessType,
          growth_goal: formData.growthGoal,
          current_challenges: formData.currentChallenges,
          budget: formData.budget,
          timeline: formData.timeline,
          form_type: formType,
          subject: `New ${formType} request from ${formData.name}`,
          from_name: "Lawson Digital Group Website",
          // Hidden fields for spam protection
          h_captcha_response: "",
          botcheck: ""
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        setIsSubmitted(true)
        // Redirect to calendar booking after 2 seconds
        setTimeout(() => {
          window.open("https://cal.com/adamlawson/15min", "_blank")
          closeLeadForm()
        }, 2000)
      } else {
        throw new Error(result.message || 'Something went wrong')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting the form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const content = getFormContent()

  if (!showLeadForm) return null

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white p-8 rounded-2xl max-w-md w-full shadow-2xl border-2 border-primary text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-neutral-900">
            Thank You!
          </h3>
          <p className="text-neutral-600 mb-6">
            Your request has been submitted successfully. We'll get back to you within 24 hours.
          </p>
          <p className="text-sm text-primary font-semibold">
            Redirecting to calendar booking...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 sm:p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-primary text-black relative">
        <button
          className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700 bg-neutral-100 rounded-full p-2 transition-colors"
          onClick={closeLeadForm}
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-neutral-900">
            {content.title}
          </h3>
          <p className="text-neutral-600">
            {content.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                type="text"
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="border-neutral-300 focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@yourcompany.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="border-neutral-300 focus:border-primary focus:ring-primary"
                required
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                Company Name
              </label>
              <Input
                id="company"
                type="text"
                placeholder="Your Company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="border-neutral-300 focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="border-neutral-300 focus:border-primary focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-neutral-700 mb-2">
                Business Type *
              </label>
              <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                <SelectTrigger className="border-neutral-300 focus:border-primary focus:ring-primary">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecommerce">E-Commerce</SelectItem>
                  <SelectItem value="service">Service Business</SelectItem>
                  <SelectItem value="saas">SaaS / Software</SelectItem>
                  <SelectItem value="local">Local Business</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="real-estate">Real Estate</SelectItem>
                  <SelectItem value="restaurant">Restaurant / Food</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-neutral-700 mb-2">
                Current Website
              </label>
              <Input
                id="website"
                type="url"
                placeholder="https://yourwebsite.com"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="border-neutral-300 focus:border-primary focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="growthGoal" className="block text-sm font-medium text-neutral-700 mb-2">
              What's Your Primary Growth Goal? *
            </label>
            <Textarea
              id="growthGoal"
              placeholder="Tell us about your business growth objectives..."
              value={formData.growthGoal}
              onChange={(e) => handleInputChange('growthGoal', e.target.value)}
              className="border-neutral-300 focus:border-primary focus:ring-primary"
              rows={3}
              required
            />
          </div>

          <div>
            <label htmlFor="currentChallenges" className="block text-sm font-medium text-neutral-700 mb-2">
              What's Your Biggest Challenge Right Now?
            </label>
            <Textarea
              id="currentChallenges"
              placeholder="What's holding your business back from growing faster?"
              value={formData.currentChallenges}
              onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
              className="border-neutral-300 focus:border-primary focus:ring-primary"
              rows={3}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
                Project Budget Range
              </label>
              <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                <SelectTrigger className="border-neutral-300 focus:border-primary focus:ring-primary">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-5k">Under $5,000</SelectItem>
                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                  <SelectItem value="50k-plus">$50,000+</SelectItem>
                  <SelectItem value="not-sure">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700 mb-2">
                Project Timeline
              </label>
              <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                <SelectTrigger className="border-neutral-300 focus:border-primary focus:ring-primary">
                  <SelectValue placeholder="When do you want to start?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP</SelectItem>
                  <SelectItem value="1-month">Within 1 month</SelectItem>
                  <SelectItem value="1-3-months">1-3 months</SelectItem>
                  <SelectItem value="3-6-months">3-6 months</SelectItem>
                  <SelectItem value="6-plus-months">6+ months</SelectItem>
                  <SelectItem value="just-exploring">Just exploring</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 text-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                {content.submitText}
                <ArrowRight className="w-5 h-5" />
              </div>
            )}
          </Button>

          <p className="text-center text-sm text-neutral-500">
            🔒 Your information is secure and will never be shared. We'll respond within 24 hours.
          </p>
        </form>
      </div>
    </div>
  )
}

export default Web3ContactForm
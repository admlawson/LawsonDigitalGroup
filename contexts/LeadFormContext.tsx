"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type FormType = 'strategy' | 'quote' | 'audit' | 'consultation'

type LeadFormContextType = {
  showLeadForm: boolean
  formType: FormType
  formTitle?: string
  formSubtitle?: string
  openLeadForm: (type?: FormType, title?: string, subtitle?: string) => void
  closeLeadForm: () => void
}

const LeadFormContext = createContext<LeadFormContextType | undefined>(undefined)

export const LeadFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [formType, setFormType] = useState<FormType>('strategy')
  const [formTitle, setFormTitle] = useState<string | undefined>()
  const [formSubtitle, setFormSubtitle] = useState<string | undefined>()

  const openLeadForm = (type: FormType = 'strategy', title?: string, subtitle?: string) => {
    setFormType(type)
    setFormTitle(title)
    setFormSubtitle(subtitle)
    setShowLeadForm(true)
  }
  
  const closeLeadForm = () => {
    setShowLeadForm(false)
    // Reset form data after closing
    setTimeout(() => {
      setFormType('strategy')
      setFormTitle(undefined)
      setFormSubtitle(undefined)
    }, 300)
  }

  useEffect(() => {
    const handleOpenLeadForm = (event: any) => {
      const { type, title, subtitle } = event.detail || {}
      openLeadForm(type, title, subtitle)
    }
    
    // Support legacy window.openLeadForm calls
    const handleLegacyOpenLeadForm = () => openLeadForm()
    
    window.addEventListener("openLeadForm", handleLegacyOpenLeadForm)
    window.addEventListener("openLeadFormWithOptions", handleOpenLeadForm)
    
    return () => {
      window.removeEventListener("openLeadForm", handleLegacyOpenLeadForm)
      window.removeEventListener("openLeadFormWithOptions", handleOpenLeadForm)
    }
  }, [])

  return (
    <LeadFormContext.Provider value={{ 
      showLeadForm, 
      formType, 
      formTitle, 
      formSubtitle, 
      openLeadForm, 
      closeLeadForm 
    }}>
      {children}
    </LeadFormContext.Provider>
  )
}

export const useLeadForm = () => {
  const context = useContext(LeadFormContext)
  if (context === undefined) {
    throw new Error("useLeadForm must be used within a LeadFormProvider")
  }
  return context
}
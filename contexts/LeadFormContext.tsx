"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type LeadFormContextType = {
  showLeadForm: boolean
  openLeadForm: () => void
  closeLeadForm: () => void
}

const LeadFormContext = createContext<LeadFormContextType | undefined>(undefined)

export const LeadFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showLeadForm, setShowLeadForm] = useState(false)

  const openLeadForm = () => setShowLeadForm(true)
  const closeLeadForm = () => setShowLeadForm(false)

  useEffect(() => {
    const handleOpenLeadForm = () => openLeadForm()
    window.addEventListener("openLeadForm", handleOpenLeadForm)
    return () => window.removeEventListener("openLeadForm", handleOpenLeadForm)
  }, [openLeadForm]) // Added openLeadForm to dependencies

  return (
    <LeadFormContext.Provider value={{ showLeadForm, openLeadForm, closeLeadForm }}>
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


'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [email, setEmail] = useState('')
  const [question, setQuestion] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you! We will send you a response to ${email}`)
    setEmail('')
    setQuestion('')
  }

  const faqs = [
    {
      question: "What is VelciPet?",
      answer: "VelciPet is a comprehensive platform designed to simplify pet management. We provide tools and services to help you track your pet's health records, appointments, vaccinations, and more."
    },
    {
      question: "How do I get started?",
      answer: "Getting started with VelciPet is easy! Simply create an account and follow our step-by-step setup guide. You'll be able to add your pets, set up their profiles, and start managing their care right away."
    },
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of veterinary services including preventative care, vaccinations, surgery, dental care, emergency services, and routine check-ups. Our team is equipped to handle both routine care and complex medical procedures."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we provide 24/7 emergency veterinary services. If you have an after-hours emergency, please call our emergency hotline immediately for assistance."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment through our online booking system, by calling our office, or by using the VelciPet mobile app. We offer flexible scheduling options to accommodate your needs."
    }
  ]

  return (
    <section id="faq" className="bg-gray-50 py-16 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 font-semibold focus:outline-none hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {faq.question}
                <span className="float-right">{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && (
                <div className="px-6 py-4 bg-white">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Have a Different Question?</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium">Email Address</label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="question" className="block font-medium">Your Question</label>
              <textarea
                id="question"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                placeholder="Type your question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Submit Question
            </Button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Need immediate assistance? Visit our{' '}
            <Link href="/contact" className="text-blue-600 hover:underline">
              contact page
            </Link>{' '}
            or call our hotline.
          </p>
        </div>
      </div>
    </section>
  )
}


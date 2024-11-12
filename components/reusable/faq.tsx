import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function Faq() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg text-blue-500 hover:text-blue-600">
              What is Google Merchant Center?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Google Merchant Center is a platform that allows businesses to upload and manage their product information for use across various Google services, including Shopping ads and free product listings.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg text-blue-500 hover:text-blue-600">
              How much does Merchant Center cost?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Google Merchant Center is free to use. While there may be costs associated with running Shopping ads, the platform itself has no subscription or usage fees.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg text-blue-500 hover:text-blue-600">
              What do I need to create a Merchant Center account?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              To create a Merchant Center account, you need a Google account, a business website or app, and business information including contact details and tax/payment information if you plan to run paid advertisements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg text-blue-500 hover:text-blue-600">
              Where will my products show up on Google?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Your products can appear in Google Shopping search results, Google Search, Google Images, and other Google services. The exact placement depends on your settings and whether you're using free listings or paid Shopping ads.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
  }
import { ChevronDown } from '@gravity-ui/icons';
import { Accordion } from '@heroui/react';
import React from 'react';

const FaqSection = () => {
    const faqs = [
        {
            question: "How does the pet adoption process work on this platform?",
            answer: "Browse our 'All Pets' page, select a pet you love to view their details, and click 'Adopt Now' to submit a request. The pet's owner or shelter will review your request, pickup date, and message to approve or reject the adoption."
        },
        {
            question: "Is there any adoption fee required?",
            answer: "Adoption fees vary depending on the pet and are set by the current owner or shelter to cover past medical expenses, food, and vaccinations. You can view the specific fee on each pet’s detailed profile page."
        },
        {
            question: "Can I list a pet for adoption if I can no longer care for it?",
            answer: "Yes, registered users can easily list pets by visiting the 'Add Pet' section in the Dashboard. You will need to provide details like species, breed, age, health status, and upload an image link."
        },
        {
            question: "What happens if multiple people apply to adopt the same pet?",
            answer: "The pet owner reviews all incoming applications. Once they approve one specific request, the pet's status automatically changes to 'Adopted', and all other pending requests for that pet are automatically declined."
        },
        {
            question: "Can I cancel an adoption request after submitting it?",
            answer: "Yes, you have full control over your applications. Navigate to the 'My Requests' page inside your Dashboard, where you can view the live status of your requests or click 'Cancel' to remove an application completely."
        }
    ];


    return (
        <section className="py-12 bg-gray-50 dark:bg-slate-900">
            <div className=''>
                <h2 className="text-3xl font-extrabold text-center text-slate-800 dark:text-white mb-2">Frequently Asked Questions</h2>
                <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-12">
                    Here are some common questions about pet adoption to help you get started on your journey to finding a new furry friend.
                </p>

                <div className='container mx-auto px-4'>
                    <Accordion className="w-full" variant="surface">
                        {faqs.map((faq, index) => (
                            <Accordion.Item key={index}>
                                <Accordion.Heading>
                                    <Accordion.Trigger>
                                        {faq.icon ? (
                                            <span className="mr-3 size-4 shrink-0 text-muted">{faq.icon}</span>
                                        ) : null}
                                        {faq.question}
                                        <Accordion.Indicator>
                                            <ChevronDown />
                                        </Accordion.Indicator>
                                    </Accordion.Trigger>
                                </Accordion.Heading>
                                <Accordion.Panel>
                                    <Accordion.Body>{faq.answer}</Accordion.Body>
                                </Accordion.Panel>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </div>

        </section>
    );
};

export default FaqSection;
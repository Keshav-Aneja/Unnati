"use client";
const faqData = [
  {
    qID: 1,
    question: "How can i list my products and services on unnati",
    answer:
      "To list your products or services, simply create an account, log in, and follow the step-by-step instructions provided in your dashboard to create a new listing. It's quick and easy!",
  },
  {
    qID: 2,
    question: "is it free to list my  products or services",
    answer:
      "Yes, listing your products or services on Unnati is completely free.",
  },
  {
    qID: 3,
    question: "Can I edit or update my listings after they are published?",
    answer:
      "Absolutely! You can easily edit or update your listings at any time by logging into your account and accessing your dashboard.",
  },
  {
    qID: 4,
    question: "How can I promote my products or services on unnati",
    answer:
      "You can promote your listings by sharing them on social media, encouraging your network to visit your page, and engaging with potential customers through our messaging system.",
  },
  {
    qID: 5,
    question: "Are there any reviews or ratings for products or services?",
    answer:
      "Yes, we have a review and rating system in place. Users can leave feedback and ratings based on their experiences with your products or services.",
  },
];
import FAQList from "@/components/FAQList";
export default function Questionairre() {
  return (
    <div className="questionaire w-[80%] h-[40vh] border-2 border-[#bd7313] rounded-3xl z-50 relative flex justify-center px-4">
      <div className="faq_list w-[100%] h-full flex flex-col justify-around items-center">
        {faqData.map((data) => (
          <FAQList key={data.qID} que={data.question} ans={data.answer} />
        ))}
      </div>
    </div>
  );
}

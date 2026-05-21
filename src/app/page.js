import Counter from "@/components/Counter";
import FaqSection from "@/components/FaqSection";
import FeaturedPets from "@/components/FeaturedPets";
import Hero from "@/components/Hero";
import PetCareTips from "@/components/PetCareTips";
import SuccessStories from "@/components/SuccessStories";
import WhyAdopt from "@/components/WhyAdopt";

export default function Home() {
  return (
    <>
    <Hero/>
    <Counter/>
    <FeaturedPets/>
    <WhyAdopt/>
    <SuccessStories/>
    <PetCareTips/>
    <FaqSection/>
    </>
  );
}

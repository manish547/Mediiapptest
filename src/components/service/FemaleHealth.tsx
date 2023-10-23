import Image from 'next/image'
import React from 'react'

import Hero from "@/components/common/Hero";
import PackagePricingFemale from './PackagePricingFemale';
import AddOnFemale from './AddOnFemale';

const hospitaLogoImages = [
  { index: 0, image: "london-bridge-hospital" },
  { index: 1, image: "imperial-private-healthcare" },
  { index: 2, image: "portland-hospital" },
  { index: 3, image: "moorfields-private-eye-hospital" },
  { index: 4, image: "harley-street-clinic" },
  { index: 5, image: "london-clinic" },
];

const FemaleHealth = () => {
  return (
    <div>
      <div>
        <Hero
          image="hero-poster"
          title="女性健康检查"
          description="专业守护女性健康 成年女性，高龄备孕，妇科疾病隐形人群"
          isNavigator={false}
          isDark={true}
          isPricing={false}
        />
        <div className="container mx-auto my-6 px-3 sm:px-5">
          <PackagePricingFemale />
        </div>
        <div className="container py-6 mx-auto my-6 md:py-0 px-3 sm:px-0">
          <AddOnFemale />
        </div>
        <div className="relative">
          <Image
            src="/images/why-medi-blob.svg"
            height="570"
            width="290"
            alt="blob"
            className="absolute bottom-0 left-0 inline-block -z-20"
          />
          {/* <div className="container mx-auto my-6 px-3 sm:px-0">
            <WhyMedii title="Our Services" description="Why clients choose MEDii" />
          </div> */}
        </div>
        {/* <div className="container mx-auto my-8 px-3 sm:px-0">
          <HealthSteps />
        </div> */}
        {/* <div className="container mx-auto my-8">
          <div className="pt-10 md:pb-6 md:pt-20">
            <div className="z-50 flex flex-col items-center justify-center w-full sm:mt-auto">
              <span className="text-sm font-bold text-yellow_light font-Quicksand">
                Our Services
              </span>
              <h1 className="text-[42px] leading-[70px] font-bold text-primary text-center md:text-start">
                Officially Appointed by
              </h1>
            </div>
          </div>
        </div> */}
        {/* <div className="bg-[#E4EFE1] py-6  mb-11 ">
          <div className="container mx-auto">
            <HospitalImageSlider imageData={hospitaLogoImages} />
          </div>
        </div>
        <div className="container mx-auto my-8">
          <ContactSection />
        </div> */}
      </div>
    </div>
  )
}

export default FemaleHealth
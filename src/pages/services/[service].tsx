import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import IndividualServicePage from "@/components/service";
import FemaleHealth from "@/components/service/FemaleHealth";
import MalesHealth from "@/components/service/MalesHealth";
import MenWomenhealth from "@/components/service/MenWomenhealth";
import EnrolmentHealth from "@/components/service/EnrolmentHealth";
import HealthCheck from "@/components/service/HealthCheck";
import CancerScreening from "@/components/service/CancerScreening";

interface Props {
  serviceName: string;
}

function ServicePage({ serviceName }: Props) {
  return (
    <main>
      { serviceName === "female-health-check"  ? <FemaleHealth /> : 
      serviceName === "mens-health-check" ? <MalesHealth /> : 
      serviceName === "men-women-health-check" ? <MenWomenhealth /> : 
      serviceName === "enrolment-health-check" ? <EnrolmentHealth />: 
      serviceName === "health-check" ? <HealthCheck /> : serviceName === "cancer-screening" ? <CancerScreening /> : <IndividualServicePage /> }
    </main>
  );
}

export default ServicePage;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;

  /* getFilteredData */
  const mainCategory: string = params?.service as string;

  return {
    props: {
      serviceName: mainCategory,
    },
  };
};

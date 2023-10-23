import Image from 'next/image';
import React, { useState } from 'react'
import PackageCompareMaleWomen from './PackageCompareMaleWomen';

const planData = [
    {
        index: 0,
        name: "传染病筛查A套餐",
        description:
            "脉德两性传染病健康检查，专业守护您的健康。适合人群：亲密关系确定前、高危性行为后以及有疑似症状群体.",
        price: "£159",
        features: [
            "身体指征；",
            "显微镜观察；",
            "显微镜培养；",
            "沙眼衣原体检查；",
            "英文报告，中文总结；"
        ],
        isMostPopuler: false,
    },
    {
        index: 1,
        name: "传染病筛查B套餐",
        description:
            "脉德两性传染病健康检查，专业守护您的健康。适合人群：亲密关系确定前、高危性行为后以及有疑似症状群体.",
        price: "£269",
        features: [
            "身体指征",
            "显微镜观察；",
            "显微镜培养；",
            "部分生化检查；",
            "沙眼衣原体检查；",
            "专家门诊预约"
        ],
        isMostPopuler: false,
    },
];

const planCfeatures = [
    "B套餐的全部项目;",
    "全部生化项目检查；",
    "聚合酶链式反应/PCR;",
    "结果分析;",
    "全套后续服务"
];

const PackagePricingMaleWomen = () => {
    const [isPackageSelected, setisPackageSelected] = useState(true);
    return (
        <div className="md:py-9">
            <div className="z-50 flex flex-col items-center justify-center w-full sm:mt-auto">
                <span className="text-sm font-bold text-yellow_light font-Quicksand">
                    脉德两性传染病健康检查
                </span>
                <h1 className="text-5xl leading-[70px] font-bold text-primary text-center font-Nunito md:text-start">
                    专业守护您的健康
                </h1>
                <span className="block max-w-md text-base font-medium text-center text-secondary font-Quicksand">
                    适合人群：亲密关系确定前、高危性行为后以及有疑似症状群体
                </span>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full gap-8 mt-5 md:gap-16 font-Nunito ">
                <div className="bg-[#E4EFE1] w-full max-w-[220px] h-[44px] rounded-[22px] flex items-center text-base font-bold">
                    <button
                        onClick={() => setisPackageSelected(true)}
                        className={`capitalize rounded-[22px] h-full transition-all duration-200 w-full flex justify-center items-center hover:cursor-pointer ${isPackageSelected
                            ? "text-[#EBB817] bg-[#3A7065]"
                            : "text-[#3A7065]"
                            }`}
                    >
                        套餐选择
                    </button>
                    <button
                        onClick={() => setisPackageSelected(false)}
                        className={`capitalize h-full w-full flex transition-all duration-200 justify-center items-center  hover:cursor-pointer rounded-[22px] ${isPackageSelected
                            ? "text-[#3A7065]"
                            : "text-[#EBB817] bg-[#3A7065]"
                            }`}
                    >
                        套餐对比
                    </button>
                </div>
                {isPackageSelected ? (
                    <>
                        <div className="bg-gradient-to-b from-[#E4EFE1] to-transparent pt-10 md:py-10 md:px-16 w-full h-full max-w-[970px] flex-wrap md:flex-nowrap gap-10 rounded-[26px] flex justify-between items-center md:items-stretch font-Nunito relative">
                            {planData.map((plan, index) => {
                                const { name, description, price, features, isMostPopuler } =
                                    plan;
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-between w-full gap-10 md:items-baseline"
                                    >
                                        <div>
                                            <h2 className="text-[28px] leading-[39px] font-bold text-[#004A42] uppercase">
                                                {name}
                                            </h2>
                                            <span className="block text-[15px] leading-5 text-[#848199] max-w-[235px] py-2.5">
                                                {description ?? ""}
                                            </span>
                                            <h3 className="text-3xl text-[#004A42]">{price ?? ""}</h3>
                                            <div className="flex flex-col gap-3 py-4">
                                                {features.map((feature, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            className="flex gap-[10px] items-center"
                                                        >
                                                            <Image
                                                                src="/images/icons/right-icon.svg"
                                                                height="20"
                                                                width="20"
                                                                alt="right-icon"
                                                            />
                                                            <span className="block text-[#848199] text-xs">
                                                                {feature ?? ""}
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <button className="flex gap-3 max-w-[207px] whitespace-nowrap justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow font-Quicksand ">
                                            选择此套餐
                                        </button>
                                    </div>
                                );
                            })}
                            <div className="hidden md:block md:w-full"></div>
                            <div className="relative px-5 mt-6 md:mt-0 items-center md:items-baseline flex flex-col justify-between gap-10 w-full bg-gradient-to-b from-[#004A42] to-[#419886]  md:absolute md:right-0 lg:right-20  md:max-w-[280px] md:gap-8  md:-translate-y-24 md:translate-x-8 p-8 md:p-[2.50rem] rounded-[20px] shadow-[0px_42px_34px_0px_#ABAFC799]">
                                <div className="absolute left-0 flex items-center justify-center w-full -top-4">
                                    <button className="flex gap-3 max-w-[207px] whitespace-nowrap justify-center items-center border-none py-2 px-11 rounded-full text-[10px] font-bold text-[#004A42] bg-[#EBB817] capitalize shadow-btn-shadow font-Quicksand  md:left-[22%]">
                                        最受欢迎
                                    </button>
                                </div>
                                <div>
                                    <h2 className="text-[28px] leading-[39px] font-bold text-white uppercase">
                                        {"传染病筛查C套餐"}
                                    </h2>
                                    <span className="block text-[15px] leading-5 text-white max-w-[235px] py-2.5">
                                        {
                                            "脉德两性传染病健康检查，专业守护您的健康。适合人群：亲密关系确定前、高危性行为后以及有疑似症状群体."
                                        }
                                    </span>
                                    <h3 className="text-3xl text-white">{"£399"}</h3>
                                    <div className="flex flex-col gap-3 pt-4 md:pt-0">
                                        {planCfeatures.map((feature, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="flex gap-[10px] items-center"
                                                >
                                                    <Image
                                                        src="/images/icons/right-icon.svg"
                                                        height="20"
                                                        width="20"
                                                        alt="right-icon"
                                                    />
                                                    <span className="block text-xs text-white">
                                                        {feature ?? ""}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <button className="flex gap-3 max-w-[207px] whitespace-nowrap justify-center items-center border-none py-2 px-11 rounded-full text-[16px] font-bold text-[#004A42] bg-[#EBB817] capitalize shadow-btn-shadow font-Quicksand ">
                                    选择此套餐
                                </button>
                            </div>
                        </div>
                        {/* <div className="flex justify-center">
              <span className="text-base font-Quicksand text-center text-[#70798B] md:max-w-5xl block w-full">
                Please note that physical examination/disease screening cannot
                replace doctor's diagnosis and treatment, and is only used as a
                means to deepen understanding of one's own health status and
                assist medical judgment. A normal physical examination result
                only means that the detected items have no obvious disease point
                at the time of detection. If the test results are abnormal,
                please seek medical treatment in time.
              </span>
            </div> */}
                    </>
                ) : (
                    <PackageCompareMaleWomen />
                )}
            </div>
        </div>
    );
}

export default PackagePricingMaleWomen
import Image from 'next/image';
import React, { useState } from 'react'
import PackageCompareEnrolment from './PackageCompareEnrolment';

const planData = [
    {
        index: 0,
        name: "白领A套餐",
        description:
            "脉德入职体检与企业服务，提供精准医疗，量身定制体检项目守护您的健康。.",
        price: "£199",
        features: [

            "部分生化检查",
            "部分医生门诊检查;",
            "英文报告;",
            "+£150 医生意见信;"
        ],
        isMostPopuler: false,
    },
    {
        index: 1,
        name: "白领B套餐",
        description:
            "脉德入职体检与企业服务，提供精准医疗，量身定制体检项目守护您的健康。.",
        price: "£565",
        features: [
            "部分生化检查",
            "部分医生门诊检查",
            "部分影像检测",
            "包含医生意见信",
            "专家门诊预约"
        ],
        isMostPopuler: false,
    },
];

const planCfeatures = [
    "全套生化检查;",
    "全套医生门诊检查;",
    "全部影像检测;",
    "心脏功能筛查;",
    "英文报告+医生意见信;",
    "全套后续服务;",
];


const PackagePricingEnrolment = () => {
    const [isPackageSelected, setisPackageSelected] = useState(true);
    return (
        <div className="md:py-9">
            <div className="z-50 flex flex-col items-center justify-center w-full sm:mt-auto">
                <span className="text-sm font-bold text-yellow_light font-Quicksand">
                    我们的服务
                </span>
                <h1 className="text-5xl leading-[70px] font-bold text-primary text-center font-Nunito md:text-start">
                    脉德入职体检与企业服务

                </h1>
                <span className="block max-w-md text-base font-medium text-center text-secondary font-Quicksand">
                    精准医疗，量身定制体检项目守护您的健康
                    适合人群：新员工入职，新生入校，企业年度体检

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
                                        {"白领C套餐"}
                                    </h2>
                                    <span className="block text-[15px] leading-5 text-white max-w-[235px] py-2.5">
                                        {
                                            "脉德入职体检与企业服务，提供精准医疗，量身定制体检项目守护您的健康。."
                                        }
                                    </span>
                                    <h3 className="text-3xl text-white">{"£840"}</h3>
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
                    </>
                ) : (
                    <PackageCompareEnrolment />
                )}
            </div>
        </div>
    );
}

export default PackagePricingEnrolment
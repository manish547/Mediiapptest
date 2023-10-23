import Image from 'next/image';
import React, { useState } from 'react'
import GreenSwitch from '../common/GreenSwitch';

const AddOnData = [
    {
      index: 0,
      title: "Septina-9",
      description:
        "肠癌筛查 （5-7天）",
      status: false,
    },
    {
      index: 1,
      title: "基因检测筛查（唾液）",
      description: "分析个体的60个基因，可以确认10中癌症风险，30种心脏功能基因，以及2种药物遗传学基因。（7-10天）",
      status: false,
    },
    {
      index: 2,
      title: "睾丸肿瘤指标 （1-2天）",
      status: false,
    },
    {
      index: 3,
      title: "丙酮酸激酶（M2-PK）",
      description: "大肠癌筛查 （5-7天）",
      status: false,
    },
    {
      index: 4,
      title: "主动脉瘤（AAA）筛查",
      description: "今早发现动脉瘤，对其进行监控或治疗 （1个工作日）",
      status: false,
    },
    {
      index: 5,
      title: "胸部B超（女）单边 ",
      description: "检查乳房健康情况（1个工作日）",
      status: false,
    },
    {
      index: 6,
      title: "MRI核磁共振（单个区域）",
      description: "2个及以上部位请联系客服 （1-2个工作日）",
      status: false,
    },
    {
      index: 7,
      title: "腹部与腹部核磁共振",
      description: "核磁共振，价差重要器官病变 （1-2个工作日）",
      status: false,
    },
    {
      index: 8,
      title: "多参数前列腺核磁共振",
      description: "疑似局灶前列腺癌一线筛查 （1-2个工作日）",
      status: false,
    }
  ];


const AddOnCancerScreening = () => {
    const [showAll, setShowAll] = useState(false);
    const itemsToShow = showAll ? AddOnData.length : 4;
    const [selectedSwitches, setSelectedSwitches] = useState(AddOnData);
  
    /* handle when click on show-more */
    const handleShowMore = () => {
      setShowAll(true);
    };
  
    /* handleWhwn click on show less */
    const handleShowLess = () => {
      setShowAll(false);
    };
  
    /* handle switch data */
    const handleSwitchChange = (index: number, isSelected: boolean) => {
      setSelectedSwitches((prevState: any) => {
        const newState = [...prevState];
        newState[index].status = isSelected;
        return newState;
      });
    };
    return (
      <div className="md:py-5">
        <div className="z-50 flex flex-col items-center justify-center w-full sm:mt-auto">
          <span className="text-sm font-bold text-yellow_light font-Quicksand">
          我们的服务
          </span>
          <h1 className="text-4xl leading-[65px] sm:text-5xl md:leading-[70px] font-bold text-primary text-center md:text-start font-Nunito ">
          其他附加项目
          </h1>
          <span className="block max-w-[450px] text-base font-medium text-center text-secondary font-Quicksand">
          可单独选择以下单个/多个服务，也可以与以上的套餐叠加选择
          </span>
        </div>
        <div className="flex justify-center w-full h-full ">
          <div className="my-7 flex flex-col w-full justify-center items-center bg-[#FAFAFA] max-w-5xl rounded-[20px] h-full">
            {AddOnData.slice(0, itemsToShow).map((item, index) => {
              const { title, description, status } = item;
              return (
                <div
                  key={index}
                  className={`relative w-full h-full py-3 px-5 pr-11 md:px-11 ${
                    index % 2 !== 0 && "bg-[#E4EFE1]"
                  }
                      ${index + 1 === itemsToShow && "rounded-b-[20px]"}`}
                >
                  <div className="flex flex-col items-center justify-between h-full sm:flex-row">
                    <div>
                      <h3 className="text-[22px]  font-bold font-Quicksand text-[#004A42]">
                        {title ?? ""}
                      </h3>
                      <span className="block pt-2 font-Nunito text-base font-medium text-[#70798B] max-w-[537px]">
                        {description ?? ""}
                      </span>
                    </div>
                    <div className="absolute right-2 md:static md:block">
                      <GreenSwitch
                        index={index}
                        onColor="bg-[#3A7065]"
                        closeColor="bg-[#bbbbbb]"
                        onChange={handleSwitchChange}
                        isSelected={status}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {!showAll && (
          <button
            className="text-[#3A7065] text-sm font-bold font-Quicksand w-full flex justify-center items-center gap-5"
            onClick={handleShowMore}
          >
            <Image
              src="/images/icons/chevron-right.svg"
              height="6"
              width="8"
              alt="chevron-right"
              className="flex-shrink h-6 rotate-90"
            />
            展示更多
          </button>
        )}
        {showAll && (
          <button
            className="text-[#3A7065] text-sm font-bold font-Quicksand w-full flex justify-center items-center gap-5"
            onClick={handleShowLess}
          >
            <Image
              src="/images/icons/chevron-right.svg"
              height="6"
              width="8"
              alt="chevron-right"
              className="flex-shrink h-6 -rotate-90"
            />
           显示较少
          </button>
        )}
  
        <div className="flex justify-center pt-8">
          <button className="flex gap-3 shrink-0 justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow font-Quicksand">
          下一步
          </button>
        </div>
      </div>
    );
}

export default AddOnCancerScreening
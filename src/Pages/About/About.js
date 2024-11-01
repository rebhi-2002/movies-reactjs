import React, { useState } from "react";
import FilterMenu from "../../components/About/Portfolio/FilterMenu/FilterMenu";
import PortfolioGrid from "../../components/About/Portfolio/PortfolioGrid/PortfolioGrid";
import AboutComponent from "../../components/About/About";
import classes from "./About.module.css";

import portfoliodetails_04_1 from "../../assets/portfolio/portfolio-details-04-1.png";
import portfoliodetails_05_1 from "../../assets/portfolio/portfolio-details-05-1.png";
import portfoliodetails_05_2 from "../../assets/portfolio/portfolio-details-05-2.png";
import portfoliodetails_05_3 from "../../assets/portfolio/portfolio-details-05-3.png";
import portfoliodetails_05_4 from "../../assets/portfolio/portfolio-details-05-4.png";
import portfoliodetails_08_1 from "../../assets/portfolio/portfolio-details-08-1.png";
import portfoliodetails_08_2 from "../../assets/portfolio/portfolio-details-08-2.png";
import portfoliodetails_10_1 from "../../assets/portfolio/portfolio-details-10-1.png";
import portfoliodetails_11_1 from "../../assets/portfolio/portfolio-details-11-1.png";
import portfoliodetails_12_1 from "../../assets/portfolio/portfolio-details-12-1.png";
import portfoliodetails_12_2 from "../../assets/portfolio/portfolio-details-12-2.png";
import portfoliodetails_13_1 from "../../assets/portfolio/portfolio-details-13-1.png";
import portfoliodetails_15_1 from "../../assets/portfolio/portfolio-details-15-1.png";
import portfoliodetails_19_1 from "../../assets/portfolio/portfolio-details-19-1.png";
import portfoliodetails_20_1 from "../../assets/portfolio/portfolio-details-20-1.png";
import portfoliodetails_20_2 from "../../assets/portfolio/portfolio-details-20-2.png";
import portfoliodetails_22_1 from "../../assets/portfolio/portfolio-details-22-1.png";
import portfoliodetails_24_1 from "../../assets/portfolio/portfolio-details-24-1.png";
import portfoliodetails_25_1 from "../../assets/portfolio/portfolio-details-25-1.png";
import portfoliodetails_25_2 from "../../assets/portfolio/portfolio-details-25-2.png";
import portfoliodetails_26_1 from "../../assets/portfolio/portfolio-details-26-1.png";
import portfoliodetails_26_2 from "../../assets/portfolio/portfolio-details-26-2.png";
import portfoliodetails_26_3 from "../../assets/portfolio/portfolio-details-26-3.png";
import portfoliodetails_27_1 from "../../assets/portfolio/portfolio-details-27-1.png";
import portfoliodetails_27_2 from "../../assets/portfolio/portfolio-details-27-2.png";
import portfoliodetails_27_3 from "../../assets/portfolio/portfolio-details-27-3.png";
import portfoliodetails_27_4 from "../../assets/portfolio/portfolio-details-27-4.png";
import portfoliodetails_27_5 from "../../assets/portfolio/portfolio-details-27-5.png";
import portfoliodetails_27_6 from "../../assets/portfolio/portfolio-details-27-6.png";
import portfoliodetails_27_7 from "../../assets/portfolio/portfolio-details-27-7.png";
import portfoliodetails_27_8 from "../../assets/portfolio/portfolio-details-27-8.png";
import portfoliodetails_27_9 from "../../assets/portfolio/portfolio-details-27-9.png";
import portfoliodetails_28_1 from "../../assets/portfolio/portfolio-details-28-1.png";
import portfoliodetails_28_2 from "../../assets/portfolio/portfolio-details-28-2.png";
import portfoliodetails_28_3 from "../../assets/portfolio/portfolio-details-28-3.png";
import portfoliodetails_28_4 from "../../assets/portfolio/portfolio-details-28-4.png";
import portfoliodetails_28_5 from "../../assets/portfolio/portfolio-details-28-5.png";
import portfoliodetails_28_6 from "../../assets/portfolio/portfolio-details-28-6.png";
import portfoliodetails_28_7 from "../../assets/portfolio/portfolio-details-28-7.png";

import portfoliodetails_29_1 from "../../assets/portfolio/portfolio-details-29-1.png";
import portfoliodetails_29_2 from "../../assets/portfolio/portfolio-details-29-2.png";
import portfoliodetails_29_3 from "../../assets/portfolio/portfolio-details-29-3.png";
import portfoliodetails_29_4 from "../../assets/portfolio/portfolio-details-29-4.png";
import portfoliodetails_29_5 from "../../assets/portfolio/portfolio-details-29-5.png";
import portfoliodetails_29_6 from "../../assets/portfolio/portfolio-details-29-6.png";
import portfoliodetails_29_7 from "../../assets/portfolio/portfolio-details-29-7.png";
import portfoliodetails_29_8 from "../../assets/portfolio/portfolio-details-29-8.png";
import portfoliodetails_29_9 from "../../assets/portfolio/portfolio-details-29-9.png";

import portfoliodetails_30_01 from "../../assets/portfolio/portfolio-details-30-01.png";
import portfoliodetails_30_02 from "../../assets/portfolio/portfolio-details-30-02.png";
import portfoliodetails_30_03 from "../../assets/portfolio/portfolio-details-30-03.png";
import portfoliodetails_30_04 from "../../assets/portfolio/portfolio-details-30-04.png";
import portfoliodetails_30_05 from "../../assets/portfolio/portfolio-details-30-05.png";
import portfoliodetails_30_06 from "../../assets/portfolio/portfolio-details-30-06.png";
import portfoliodetails_30_07 from "../../assets/portfolio/portfolio-details-30-07.png";
import portfoliodetails_30_08 from "../../assets/portfolio/portfolio-details-30-08.png";
import portfoliodetails_30_09 from "../../assets/portfolio/portfolio-details-30-09.png";
import portfoliodetails_30_10 from "../../assets/portfolio/portfolio-details-30-10.png";
import portfoliodetails_30_11 from "../../assets/portfolio/portfolio-details-30-11.png";
import portfoliodetails_30_12 from "../../assets/portfolio/portfolio-details-30-12.png";
import portfoliodetails_30_13 from "../../assets/portfolio/portfolio-details-30-13.png";
import portfoliodetails_30_14 from "../../assets/portfolio/portfolio-details-30-14.png";
import portfoliodetails_30_15 from "../../assets/portfolio/portfolio-details-30-15.png";
import portfoliodetails_30_16 from "../../assets/portfolio/portfolio-details-30-16.png";
import portfoliodetails_30_17 from "../../assets/portfolio/portfolio-details-30-17.png";
import portfoliodetails_30_18 from "../../assets/portfolio/portfolio-details-30-18.png";
import portfoliodetails_30_19 from "../../assets/portfolio/portfolio-details-30-19.png";
import portfoliodetails_30_20 from "../../assets/portfolio/portfolio-details-30-20.png";
import portfoliodetails_30_21 from "../../assets/portfolio/portfolio-details-30-21.png";
import portfoliodetails_30_22 from "../../assets/portfolio/portfolio-details-30-22.png";
import portfoliodetails_30_23 from "../../assets/portfolio/portfolio-details-30-23.png";
import portfoliodetails_30_24 from "../../assets/portfolio/portfolio-details-30-24.png";
import portfoliodetails_30_25 from "../../assets/portfolio/portfolio-details-30-25.png";
import portfoliodetails_30_26 from "../../assets/portfolio/portfolio-details-30-26.png";
import portfoliodetails_30_27 from "../../assets/portfolio/portfolio-details-30-27.png";
import portfoliodetails_30_28 from "../../assets/portfolio/portfolio-details-30-28.png";
import portfoliodetails_30_29 from "../../assets/portfolio/portfolio-details-30-29.png";
import portfoliodetails_30_30 from "../../assets/portfolio/portfolio-details-30-30.png";
import portfoliodetails_30_31 from "../../assets/portfolio/portfolio-details-30-31.png";
import portfoliodetails_30_32 from "../../assets/portfolio/portfolio-details-30-32.png";
import portfoliodetails_30_33 from "../../assets/portfolio/portfolio-details-30-33.png";
import portfoliodetails_30_34 from "../../assets/portfolio/portfolio-details-30-34.png";
import portfoliodetails_30_35 from "../../assets/portfolio/portfolio-details-30-35.png";
import portfoliodetails_30_36 from "../../assets/portfolio/portfolio-details-30-36.png";
import portfoliodetails_30_37 from "../../assets/portfolio/portfolio-details-30-37.png";
import portfoliodetails_30_38 from "../../assets/portfolio/portfolio-details-30-38.png";
import portfoliodetails_30_39 from "../../assets/portfolio/portfolio-details-30-39.png";
import portfoliodetails_30_40 from "../../assets/portfolio/portfolio-details-30-40.png";
import portfoliodetails_30_41 from "../../assets/portfolio/portfolio-details-30-41.png";
import portfoliodetails_30_42 from "../../assets/portfolio/portfolio-details-30-42.png";
import portfoliodetails_30_43 from "../../assets/portfolio/portfolio-details-30-43.png";
import portfoliodetails_30_44 from "../../assets/portfolio/portfolio-details-30-44.png";
import portfoliodetails_30_45 from "../../assets/portfolio/portfolio-details-30-45.png";
import portfoliodetails_30_46 from "../../assets/portfolio/portfolio-details-30-46.png";

import portfoliodetails_31_1 from "../../assets/portfolio/portfolio-details-31-1.png";

import portfoliodetails_32_1 from "../../assets/portfolio/portfolio-details-32-1.png";
import portfoliodetails_32_2 from "../../assets/portfolio/portfolio-details-32-2.png";

import portfoliodetails_33_1 from "../../assets/portfolio/portfolio-details-33-1.png";
import portfoliodetails_33_2 from "../../assets/portfolio/portfolio-details-33-2.png";
import portfoliodetails_33_3 from "../../assets/portfolio/portfolio-details-33-3.png";
import portfoliodetails_33_4 from "../../assets/portfolio/portfolio-details-33-4.png";
import portfoliodetails_33_5 from "../../assets/portfolio/portfolio-details-33-5.png";
import portfoliodetails_33_6 from "../../assets/portfolio/portfolio-details-33-6.png";

import portfoliodetails_34_1 from "../../assets/portfolio/portfolio-details-34-1.png";
import portfoliodetails_34_2 from "../../assets/portfolio/portfolio-details-34-2.png";
import portfoliodetails_34_3 from "../../assets/portfolio/portfolio-details-34-3.png";
import portfoliodetails_34_4 from "../../assets/portfolio/portfolio-details-34-4.png";
import portfoliodetails_34_5 from "../../assets/portfolio/portfolio-details-34-5.png";

import portfoliodetails_35_01 from "../../assets/portfolio/portfolio-details-35-01.png";
import portfoliodetails_35_02 from "../../assets/portfolio/portfolio-details-35-02.png";
import portfoliodetails_35_03 from "../../assets/portfolio/portfolio-details-35-03.png";
import portfoliodetails_35_04 from "../../assets/portfolio/portfolio-details-35-04.png";
import portfoliodetails_35_05 from "../../assets/portfolio/portfolio-details-35-05.png";
import portfoliodetails_35_06 from "../../assets/portfolio/portfolio-details-35-06.png";
import portfoliodetails_35_07 from "../../assets/portfolio/portfolio-details-35-07.png";
import portfoliodetails_35_08 from "../../assets/portfolio/portfolio-details-35-08.png";
import portfoliodetails_35_09 from "../../assets/portfolio/portfolio-details-35-09.png";
import portfoliodetails_35_10 from "../../assets/portfolio/portfolio-details-35-10.png";
import portfoliodetails_35_11 from "../../assets/portfolio/portfolio-details-35-11.png";
import portfoliodetails_35_12 from "../../assets/portfolio/portfolio-details-35-12.png";
import portfoliodetails_35_13 from "../../assets/portfolio/portfolio-details-35-13.png";
import portfoliodetails_35_14 from "../../assets/portfolio/portfolio-details-35-14.png";
import portfoliodetails_35_15 from "../../assets/portfolio/portfolio-details-35-15.png";
import portfoliodetails_35_16 from "../../assets/portfolio/portfolio-details-35-16.png";
import portfoliodetails_35_17 from "../../assets/portfolio/portfolio-details-35-17.png";
import portfoliodetails_35_18 from "../../assets/portfolio/portfolio-details-35-18.png";
import portfoliodetails_35_19 from "../../assets/portfolio/portfolio-details-35-19.png";
import portfoliodetails_35_20 from "../../assets/portfolio/portfolio-details-35-20.png";
import portfoliodetails_35_21 from "../../assets/portfolio/portfolio-details-35-21.png";
import portfoliodetails_35_22 from "../../assets/portfolio/portfolio-details-35-22.png";
import portfoliodetails_35_23 from "../../assets/portfolio/portfolio-details-35-23.png";
import portfoliodetails_35_24 from "../../assets/portfolio/portfolio-details-35-24.png";
import portfoliodetails_35_25 from "../../assets/portfolio/portfolio-details-35-25.png";
import portfoliodetails_35_26 from "../../assets/portfolio/portfolio-details-35-26.png";
import portfoliodetails_35_27 from "../../assets/portfolio/portfolio-details-35-27.png";
import portfoliodetails_35_28 from "../../assets/portfolio/portfolio-details-35-28.png";
import portfoliodetails_35_29 from "../../assets/portfolio/portfolio-details-35-29.png";
import portfoliodetails_35_30 from "../../assets/portfolio/portfolio-details-35-30.png";
import portfoliodetails_35_31 from "../../assets/portfolio/portfolio-details-35-31.png";
import portfoliodetails_35_32 from "../../assets/portfolio/portfolio-details-35-32.png";
import portfoliodetails_35_33 from "../../assets/portfolio/portfolio-details-35-33.png";
import portfoliodetails_35_34 from "../../assets/portfolio/portfolio-details-35-34.png";
import portfoliodetails_35_35 from "../../assets/portfolio/portfolio-details-35-35.png";
import portfoliodetails_35_36 from "../../assets/portfolio/portfolio-details-35-36.png";
import portfoliodetails_35_37 from "../../assets/portfolio/portfolio-details-35-37.png";
import portfoliodetails_35_38 from "../../assets/portfolio/portfolio-details-35-38.png";
import portfoliodetails_35_39 from "../../assets/portfolio/portfolio-details-35-39.png";
import portfoliodetails_35_40 from "../../assets/portfolio/portfolio-details-35-40.png";
import portfoliodetails_35_41 from "../../assets/portfolio/portfolio-details-35-41.png";
import portfoliodetails_35_42 from "../../assets/portfolio/portfolio-details-35-42.png";
import portfoliodetails_35_43 from "../../assets/portfolio/portfolio-details-35-43.png";
import portfoliodetails_35_44 from "../../assets/portfolio/portfolio-details-35-44.png";
import portfoliodetails_35_45 from "../../assets/portfolio/portfolio-details-35-45.png";
import portfoliodetails_35_46 from "../../assets/portfolio/portfolio-details-35-46.png";
import portfoliodetails_35_47 from "../../assets/portfolio/portfolio-details-35-47.png";
import portfoliodetails_35_48 from "../../assets/portfolio/portfolio-details-35-48.png";
import portfoliodetails_35_49 from "../../assets/portfolio/portfolio-details-35-49.png";

import portfoliodetails_36_01 from "../../assets/portfolio/portfolio-details-36-01.png";
import portfoliodetails_36_02 from "../../assets/portfolio/portfolio-details-36-02.png";
import portfoliodetails_36_03 from "../../assets/portfolio/portfolio-details-36-03.png";
import portfoliodetails_36_04 from "../../assets/portfolio/portfolio-details-36-04.png";
import portfoliodetails_36_05 from "../../assets/portfolio/portfolio-details-36-05.png";
import portfoliodetails_36_06 from "../../assets/portfolio/portfolio-details-36-06.png";
import portfoliodetails_36_07 from "../../assets/portfolio/portfolio-details-36-07.png";
import portfoliodetails_36_08 from "../../assets/portfolio/portfolio-details-36-08.png";
import portfoliodetails_36_09 from "../../assets/portfolio/portfolio-details-36-09.png";
import portfoliodetails_36_10 from "../../assets/portfolio/portfolio-details-36-10.png";
import portfoliodetails_36_11 from "../../assets/portfolio/portfolio-details-36-11.png";
import portfoliodetails_36_12 from "../../assets/portfolio/portfolio-details-36-12.png";
import portfoliodetails_36_13 from "../../assets/portfolio/portfolio-details-36-13.png";
import portfoliodetails_36_14 from "../../assets/portfolio/portfolio-details-36-14.png";
import portfoliodetails_36_15 from "../../assets/portfolio/portfolio-details-36-15.png";
import portfoliodetails_36_16 from "../../assets/portfolio/portfolio-details-36-16.png";
import portfoliodetails_36_17 from "../../assets/portfolio/portfolio-details-36-17.png";
import portfoliodetails_36_18 from "../../assets/portfolio/portfolio-details-36-18.png";
import portfoliodetails_36_19 from "../../assets/portfolio/portfolio-details-36-19.png";
import portfoliodetails_36_20 from "../../assets/portfolio/portfolio-details-36-20.png";
import portfoliodetails_36_21 from "../../assets/portfolio/portfolio-details-36-21.png";
import portfoliodetails_36_22 from "../../assets/portfolio/portfolio-details-36-22.png";
import portfoliodetails_36_23 from "../../assets/portfolio/portfolio-details-36-23.png";
import portfoliodetails_36_24 from "../../assets/portfolio/portfolio-details-36-24.png";
import portfoliodetails_36_25 from "../../assets/portfolio/portfolio-details-36-25.png";
import portfoliodetails_36_26 from "../../assets/portfolio/portfolio-details-36-26.png";
import portfoliodetails_36_27 from "../../assets/portfolio/portfolio-details-36-27.png";
import portfoliodetails_36_28 from "../../assets/portfolio/portfolio-details-36-28.png";
import portfoliodetails_36_29 from "../../assets/portfolio/portfolio-details-36-29.png";
import portfoliodetails_36_30 from "../../assets/portfolio/portfolio-details-36-30.png";
import portfoliodetails_36_31 from "../../assets/portfolio/portfolio-details-36-31.png";
import portfoliodetails_36_32 from "../../assets/portfolio/portfolio-details-36-32.png";
import portfoliodetails_36_33 from "../../assets/portfolio/portfolio-details-36-33.png";
import portfoliodetails_36_34 from "../../assets/portfolio/portfolio-details-36-34.png";
import portfoliodetails_36_35 from "../../assets/portfolio/portfolio-details-36-35.png";
import portfoliodetails_36_36 from "../../assets/portfolio/portfolio-details-36-36.png";
import portfoliodetails_36_37 from "../../assets/portfolio/portfolio-details-36-37.png";
import portfoliodetails_36_38 from "../../assets/portfolio/portfolio-details-36-38.png";

import portfoliodetails_38_01 from "../../assets/portfolio/portfolio-details-38-01.png";
import portfoliodetails_38_02 from "../../assets/portfolio/portfolio-details-38-02.png";
import portfoliodetails_38_03 from "../../assets/portfolio/portfolio-details-38-03.png";
import portfoliodetails_38_04 from "../../assets/portfolio/portfolio-details-38-04.png";
import portfoliodetails_38_05 from "../../assets/portfolio/portfolio-details-38-05.png";
import portfoliodetails_38_06 from "../../assets/portfolio/portfolio-details-38-06.png";
import portfoliodetails_38_07 from "../../assets/portfolio/portfolio-details-38-07.png";
import portfoliodetails_38_08 from "../../assets/portfolio/portfolio-details-38-08.png";
import portfoliodetails_38_09 from "../../assets/portfolio/portfolio-details-38-09.png";
import portfoliodetails_38_10 from "../../assets/portfolio/portfolio-details-38-10.png";
import portfoliodetails_38_11 from "../../assets/portfolio/portfolio-details-38-11.png";
import portfoliodetails_38_12 from "../../assets/portfolio/portfolio-details-38-12.png";
import portfoliodetails_38_13 from "../../assets/portfolio/portfolio-details-38-13.png";
import portfoliodetails_38_14 from "../../assets/portfolio/portfolio-details-38-14.png";
import portfoliodetails_38_15 from "../../assets/portfolio/portfolio-details-38-15.png";
import portfoliodetails_38_16 from "../../assets/portfolio/portfolio-details-38-16.png";
import portfoliodetails_38_17 from "../../assets/portfolio/portfolio-details-38-17.png";
import portfoliodetails_38_18 from "../../assets/portfolio/portfolio-details-38-18.png";
import portfoliodetails_38_19 from "../../assets/portfolio/portfolio-details-38-19.png";
import portfoliodetails_38_20 from "../../assets/portfolio/portfolio-details-38-20.png";
import portfoliodetails_38_21 from "../../assets/portfolio/portfolio-details-38-21.png";
import portfoliodetails_38_22 from "../../assets/portfolio/portfolio-details-38-22.png";
import portfoliodetails_38_23 from "../../assets/portfolio/portfolio-details-38-23.png";
import portfoliodetails_38_24 from "../../assets/portfolio/portfolio-details-38-24.png";
import portfoliodetails_38_25 from "../../assets/portfolio/portfolio-details-38-25.png";
import portfoliodetails_38_26 from "../../assets/portfolio/portfolio-details-38-26.png";
import portfoliodetails_38_27 from "../../assets/portfolio/portfolio-details-38-27.png";
import portfoliodetails_38_28 from "../../assets/portfolio/portfolio-details-38-28.png";
import portfoliodetails_38_29 from "../../assets/portfolio/portfolio-details-38-29.png";
import portfoliodetails_38_30 from "../../assets/portfolio/portfolio-details-38-30.png";
import portfoliodetails_38_31 from "../../assets/portfolio/portfolio-details-38-31.png";
import portfoliodetails_38_32 from "../../assets/portfolio/portfolio-details-38-32.png";
import portfoliodetails_38_33 from "../../assets/portfolio/portfolio-details-38-33.png";
import portfoliodetails_38_34 from "../../assets/portfolio/portfolio-details-38-34.png";
import portfoliodetails_38_35 from "../../assets/portfolio/portfolio-details-38-35.png";
import portfoliodetails_38_36 from "../../assets/portfolio/portfolio-details-38-36.png";
import portfoliodetails_38_37 from "../../assets/portfolio/portfolio-details-38-37.png";
import portfoliodetails_38_38 from "../../assets/portfolio/portfolio-details-38-38.png";
import portfoliodetails_38_39 from "../../assets/portfolio/portfolio-details-38-39.png";
import portfoliodetails_38_40 from "../../assets/portfolio/portfolio-details-38-40.png";
import portfoliodetails_38_41 from "../../assets/portfolio/portfolio-details-38-41.png";
import portfoliodetails_38_42 from "../../assets/portfolio/portfolio-details-38-42.png";
import portfoliodetails_38_43 from "../../assets/portfolio/portfolio-details-38-43.png";
import portfoliodetails_38_44 from "../../assets/portfolio/portfolio-details-38-44.png";
import portfoliodetails_38_45 from "../../assets/portfolio/portfolio-details-38-45.png";
import portfoliodetails_38_46 from "../../assets/portfolio/portfolio-details-38-46.png";
import portfoliodetails_38_47 from "../../assets/portfolio/portfolio-details-38-47.png";
import portfoliodetails_38_48 from "../../assets/portfolio/portfolio-details-38-48.png";
import portfoliodetails_38_49 from "../../assets/portfolio/portfolio-details-38-49.png";

import work_5_1 from "../../assets/portfolio/work-05-1.png";

const selectedImages30 = [
  portfoliodetails_30_01,
  portfoliodetails_30_02,
  portfoliodetails_30_03,
  portfoliodetails_30_04,
  portfoliodetails_30_05,
  portfoliodetails_30_06,
  portfoliodetails_30_07,
  portfoliodetails_30_08,
  portfoliodetails_30_09,
  portfoliodetails_30_10,
  portfoliodetails_30_11,
  portfoliodetails_30_12,
  portfoliodetails_30_13,
  portfoliodetails_30_14,
  portfoliodetails_30_15,
  portfoliodetails_30_16,
  portfoliodetails_30_17,
  portfoliodetails_30_18,
  portfoliodetails_30_19,
  portfoliodetails_30_20,
  portfoliodetails_30_21,
  portfoliodetails_30_22,
  portfoliodetails_30_23,
  portfoliodetails_30_24,
  portfoliodetails_30_25,
  portfoliodetails_30_26,
  portfoliodetails_30_27,
  portfoliodetails_30_28,
  portfoliodetails_30_29,
  portfoliodetails_30_30,
  portfoliodetails_30_31,
  portfoliodetails_30_32,
  portfoliodetails_30_33,
  portfoliodetails_30_34,
  portfoliodetails_30_35,
  portfoliodetails_30_36,
  portfoliodetails_30_37,
  portfoliodetails_30_38,
  portfoliodetails_30_39,
  portfoliodetails_30_40,
  portfoliodetails_30_41,
  portfoliodetails_30_42,
  portfoliodetails_30_43,
  portfoliodetails_30_44,
  portfoliodetails_30_45,
  portfoliodetails_30_46,
];
const selectedImages35 = [
  portfoliodetails_35_01,
  portfoliodetails_35_02,
  portfoliodetails_35_03,
  portfoliodetails_35_04,
  portfoliodetails_35_05,
  portfoliodetails_35_06,
  portfoliodetails_35_07,
  portfoliodetails_35_08,
  portfoliodetails_35_09,
  portfoliodetails_35_10,
  portfoliodetails_35_11,
  portfoliodetails_35_12,
  portfoliodetails_35_13,
  portfoliodetails_35_14,
  portfoliodetails_35_15,
  portfoliodetails_35_16,
  portfoliodetails_35_17,
  portfoliodetails_35_18,
  portfoliodetails_35_19,
  portfoliodetails_35_20,
  portfoliodetails_35_21,
  portfoliodetails_35_22,
  portfoliodetails_35_23,
  portfoliodetails_35_24,
  portfoliodetails_35_25,
  portfoliodetails_35_26,
  portfoliodetails_35_27,
  portfoliodetails_35_28,
  portfoliodetails_35_29,
  portfoliodetails_35_30,
  portfoliodetails_35_31,
  portfoliodetails_35_32,
  portfoliodetails_35_33,
  portfoliodetails_35_34,
  portfoliodetails_35_35,
  portfoliodetails_35_36,
  portfoliodetails_35_37,
  portfoliodetails_35_38,
  portfoliodetails_35_39,
  portfoliodetails_35_40,
  portfoliodetails_35_41,
  portfoliodetails_35_42,
  portfoliodetails_35_43,
  portfoliodetails_35_44,
  portfoliodetails_35_45,
  portfoliodetails_35_46,
  portfoliodetails_35_47,
  portfoliodetails_35_48,
  portfoliodetails_35_49,
];
const selectedImages36 = [
  portfoliodetails_36_01,
  portfoliodetails_36_02,
  portfoliodetails_36_03,
  portfoliodetails_36_04,
  portfoliodetails_36_05,
  portfoliodetails_36_06,
  portfoliodetails_36_07,
  portfoliodetails_36_08,
  portfoliodetails_36_09,
  portfoliodetails_36_10,
  portfoliodetails_36_11,
  portfoliodetails_36_12,
  portfoliodetails_36_13,
  portfoliodetails_36_14,
  portfoliodetails_36_15,
  portfoliodetails_36_16,
  portfoliodetails_36_17,
  portfoliodetails_36_18,
  portfoliodetails_36_19,
  portfoliodetails_36_20,
  portfoliodetails_36_21,
  portfoliodetails_36_22,
  portfoliodetails_36_23,
  portfoliodetails_36_24,
  portfoliodetails_36_25,
  portfoliodetails_36_26,
  portfoliodetails_36_27,
  portfoliodetails_36_28,
  portfoliodetails_36_29,
  portfoliodetails_36_30,
  portfoliodetails_36_31,
  portfoliodetails_36_32,
  portfoliodetails_36_33,
  portfoliodetails_36_34,
  portfoliodetails_36_35,
  portfoliodetails_36_36,
  portfoliodetails_36_37,
  portfoliodetails_36_38,
];
const selectedImages38 = [
  portfoliodetails_38_01,
  portfoliodetails_38_02,
  portfoliodetails_38_03,
  portfoliodetails_38_04,
  portfoliodetails_38_05,
  portfoliodetails_38_06,
  portfoliodetails_38_07,
  portfoliodetails_38_08,
  portfoliodetails_38_09,
  portfoliodetails_38_10,
  portfoliodetails_38_11,
  portfoliodetails_38_12,
  portfoliodetails_38_13,
  portfoliodetails_38_14,
  portfoliodetails_38_15,
  portfoliodetails_38_16,
  portfoliodetails_38_17,
  portfoliodetails_38_18,
  portfoliodetails_38_19,
  portfoliodetails_38_20,
  portfoliodetails_38_21,
  portfoliodetails_38_22,
  portfoliodetails_38_23,
  portfoliodetails_38_24,
  portfoliodetails_38_25,
  portfoliodetails_38_26,
  portfoliodetails_38_27,
  portfoliodetails_38_28,
  portfoliodetails_38_29,
  portfoliodetails_38_30,
  portfoliodetails_38_31,
  portfoliodetails_38_32,
  portfoliodetails_38_33,
  portfoliodetails_38_34,
  portfoliodetails_38_35,
  portfoliodetails_38_36,
  portfoliodetails_38_37,
  portfoliodetails_38_38,
  portfoliodetails_38_39,
  portfoliodetails_38_40,
  portfoliodetails_38_41,
  portfoliodetails_38_42,
  portfoliodetails_38_43,
  portfoliodetails_38_44,
  portfoliodetails_38_45,
  portfoliodetails_38_46,
  portfoliodetails_38_47,
  portfoliodetails_38_48,
  portfoliodetails_38_49,
];

const portfolioImages = [];
const portfolioDetailsImages = [];
const portfolioWorksImages = [];

const noImg = 38; // no. of project

// Load portfolio images
for (let i = 1; i <= noImg; i++) {
  portfolioImages.push(
    require(`../../assets/portfolio/portfolio-${i
      .toString()
      .padStart(2, "0")}.png`)
  );
}
// Load portfolio details images
for (let i = 1; i <= noImg; i++) {
  portfolioDetailsImages.push(
    require(`../../assets/portfolio/portfolio-details-${i
      .toString()
      .padStart(2, "0")}.png`)
  );
}
// Load portfolio work images
for (let i = 1; i <= noImg; i++) {
  portfolioWorksImages.push(
    require(`../../assets/portfolio/work-${i.toString().padStart(2, "0")}.png`)
  );
}

// Access images
// console.log(portfolioImages[0]); // First portfolio image
// console.log(portfolioDetailsImages[0]); // First portfolio details image

// data.js
export const portfolioItems = [
  {
    id: 1,
    title: "HTML_And_CSS_Template_One",
    category: "html-css",
    projectType: "Web",
    // imageUrl: `${portfolio_01}`,
    imageUrl: `${portfolioImages[0]}`,
    workPage: [portfolioWorksImages[0]],
    detailsUrl: "/about/portfolio/details/1",
    details: {
      title: "Clean HTML and CSS Template",
      // images: [portfoliodetails_01],
      images: [portfolioDetailsImages[0]],
      info: {
        category: "Web design",
        client: "ASU Company",
        date: "24 August, 2021",
        url: "https://rebhi-2002.github.io/HTML_And_CSS_Template_One",
      },
      description: `This project is a static website template created using HTML and CSS. The template features a clean and professional layout with multiple sections such as a hero section, services, portfolio, and contact form. It is fully responsive, making it suitable for both desktop and mobile views. The design is ideal for businesses, portfolios, or personal websites. The project demonstrates strong knowledge of HTML structure and CSS styling, including the use of Flexbox for layout, media queries for responsiveness, and transitions for smooth animations.`,
    },
  },
  {
    id: 2,
    title: "HTML_And_CSS_Template_Two",
    category: "html-css",
    projectType: "Web",
    // imageUrl: `${portfolio_02}`,
    imageUrl: `${portfolioImages[1]}`,
    workPage: [portfolioWorksImages[1]],
    detailsUrl: "/about/portfolio/details/2",
    details: {
      title: "Modern Responsive Website Template",
      // images: [portfoliodetails_02],
      images: [portfolioDetailsImages[1]],
      info: {
        category: "Web design",
        client: "ASU Company",
        date: "06 October, 2021",
        url: "https://rebhi-2002.github.io/HTML_And_CSS_Template_Two",
      },
      description: `This project is a modern and responsive website template built using HTML and CSS. The template includes a well-structured layout with sections such as an about section, services, a portfolio gallery, and a contact form. The use of CSS animations and hover effects enhances the user experience, giving it a polished and professional look. The template is designed with flexibility in mind, allowing it to be customized for personal portfolios, business websites, or agency pages. It showcases proficiency in responsive design, typography, and layout techniques.`,
    },
  },
  {
    id: 3,
    title: "Seven_Template",
    category: "html-css",
    projectType: "Web",
    // imageUrl: `${portfolio_03}`,
    imageUrl: `${portfolioImages[2]}`,
    workPage: [portfolioWorksImages[2]],
    detailsUrl: "/about/portfolio/details/3",
    details: {
      title: "Minimalistic Seven Template Design",
      // images: [portfoliodetails_03],
      images: [portfolioDetailsImages[2]],
      info: {
        category: "Web design",
        client: "ASU Company",
        date: "29 November, 2021",
        url: "https://rebhi-2002.github.io/Seven_Template",
      },
      description: `Seven Template is a clean, modern, and responsive web template designed using HTML and CSS. It features a minimalistic design with a focus on typography and white space, making it suitable for showcasing portfolios, creative agencies, or personal projects. The template includes well-organized sections such as a hero banner, services, portfolio gallery, and contact form. CSS3 is used for hover effects and transitions, enhancing the user interaction and providing a smooth browsing experience. It's optimized for mobile devices and supports various screen sizes.`,
    },
  },
  {
    id: 4,
    title: "HTML_And_CSS_Template_Three",
    category: "html-css",
    projectType: "Web",
    // imageUrl: `${portfolio_04}`,
    imageUrl: `${portfolioImages[3]}`,
    workPage: [portfolioWorksImages[3]],
    detailsUrl: "/about/portfolio/details/4",
    details: {
      title: "Versatile HTML and CSS Template Three",
      // images: [portfoliodetails_04, portfoliodetails_04_1],
      images: [portfolioDetailsImages[3], portfoliodetails_04_1],
      info: {
        category: "Web design",
        client: "ASU Company",
        date: "20 December, 2022",
        url: "https://rebhi-2002.github.io/HTML_And_CSS_Template_Three",
      },
      description: `HTML And CSS Template Three is a responsive and visually appealing web template designed to showcase a variety of content types. With a modern grid layout, it offers sections for featured projects, services, and a contact form. The template utilizes HTML5 for structure and CSS3 for styling, including hover effects and transitions for a smooth user experience. Ideal for portfolio websites or business showcases, this template adapts seamlessly to different screen sizes and devices, ensuring accessibility and a pleasant browsing experience.`,
    },
  },
  {
    id: 5,
    title: "Rebhe-Portfolio",
    category: "html-css",
    projectType: "My_Site",
    imageUrl: `${portfolioImages[4]}`,
    workPage: [portfolioWorksImages[4], work_5_1],
    detailsUrl: "/about/portfolio/details/5",
    details: {
      title: "Personal Portfolio Showcase - Rebhe",
      images: [
        portfolioDetailsImages[4],
        portfoliodetails_05_1,
        portfoliodetails_05_2,
        portfoliodetails_05_3,
        portfoliodetails_05_4,
      ],
      info: {
        category: "Web design",
        client: "ASU Company",
        date: "10 October, 2022",
        url: "https://rebhi-2002.github.io/Rebhe-Portfolio",
      },
      description: `Rebhe-Portfolio is a personal portfolio website designed to showcase my skills, projects, and achievements. Built with HTML5 and CSS3, the site offers a clean, modern design with smooth animations and transitions. The website features sections for project displays, contact information, and a blog, all tailored to provide a professional overview of my work. The responsive design ensures compatibility across devices, making it easy for potential clients or employers to explore the content from any screen size. A focus on usability and aesthetic appeal makes this portfolio a strong reflection of my web development capabilities.`,
    },
  },
  {
    id: 6,
    title: "Preview2HtmlLv2",
    category: "js",
    projectType: "Web",
    imageUrl: `${portfolioImages[5]}`,
    workPage: [portfolioWorksImages[5]],
    detailsUrl: "/about/portfolio/details/6",
    details: {
      title: "Real-time HTML Preview Tool - Version 2",
      images: [portfolioDetailsImages[5]],
      info: {
        category: "Web design",
        client: "ASU Company",
        date: "19 February, 2022",
        url: "https://rebhi-2002.github.io/Preview2HtmlLv2",
      },
      description: `Preview2HtmlLv2 is a web project designed to showcase HTML content in real-time, allowing users to preview their edits instantly. Utilizing JavaScript, it enhances user experience by providing an intuitive interface where users can input their code and see it rendered immediately. The project aims to facilitate learning and understanding of HTML and CSS elements, making it an ideal tool for beginners and developers alike. The site features an attractive and responsive design, ensuring accessibility from any device.`,
    },
  },
  {
    id: 7,
    title: "Preview2HtmlLv3",
    category: "js",
    projectType: "Web",
    imageUrl: `${portfolioImages[6]}`,
    workPage: [portfolioWorksImages[6]],
    detailsUrl: "/about/portfolio/details/7",
    details: {
      title: "Advanced HTML Preview Application - Version 3",
      images: [portfolioDetailsImages[6]],
      info: {
        category: "Web design",
        client: "ASU Company",
        date: "23 September, 2022",
        url: "https://rebhi-2002.github.io/Preview2HtmlLv3",
      },
      description: `Preview2HtmlLv3 is an advanced web application that builds upon the concepts introduced in its predecessor, providing users with an enhanced experience for real-time HTML editing. This project allows users to input HTML code and immediately see the rendered output, making it a powerful learning tool for web development. With added features and a user-friendly interface, it aims to improve accessibility and usability for both beginners and experienced developers. The responsive design ensures compatibility across various devices, providing an optimal viewing experience.`,
    },
  },
  {
    id: 8,
    title: "webdesign-finishingourhomepage",
    category: "xd",
    projectType: "Design",
    imageUrl: `${portfolioImages[7]}`,
    workPage: [portfolioWorksImages[7]],
    detailsUrl: "/about/portfolio/details/8",
    details: {
      title: "Homepage Design Enhancement with Adobe XD",
      images: [
        portfolioDetailsImages[7],
        portfoliodetails_08_1,
        portfoliodetails_08_2,
      ],
      info: {
        category: "Design",
        client: "ASU Company",
        date: "04 December, 2022",
        url: "",
      },
      description: `The 'Finishing Our Homepage' project focuses on creating a visually appealing and user-friendly design for a website. Using Adobe XD, this design aims to enhance the user experience by employing modern design principles and practices. The project incorporates responsive design elements to ensure compatibility across devices while maintaining an attractive aesthetic. Each component of the design is crafted to provide clarity and accessibility, allowing users to navigate the homepage effortlessly. This project reflects a commitment to high-quality web design and attention to detail.`,
    },
  },
  {
    id: 9,
    title: "Special_Design_One",
    category: "js",
    projectType: "Web",
    imageUrl: `${portfolioImages[8]}`,
    workPage: [portfolioWorksImages[8]],
    detailsUrl: "/about/portfolio/details/9",
    details: {
      title: "Innovative Web Design Showcase - Special Design One",
      images: [portfolioDetailsImages[8]],
      info: {
        category: "Web design",
        client: "ASU Company",
        date: "18 December, 2022",
        url: "https://rebhi-2002.github.io/Special_Design_One",
      },
      description: `The 'Special Design One' project showcases an innovative web design that combines functionality with an eye-catching aesthetic. Built using modern web technologies, this design emphasizes usability and visual appeal. The project features a responsive layout that adapts seamlessly across different devices, ensuring a consistent user experience. Attention to detail is evident in every aspect, from the color scheme to the typography. Users can navigate easily through the site's features, making it both engaging and user-friendly. This project exemplifies a creative approach to web design, prioritizing both form and function.`,
    },
  },
  {
    id: 10,
    title: "Food",
    category: "html-css",
    projectType: "Web",
    imageUrl: `${portfolioImages[9]}`,
    workPage: [portfolioWorksImages[9]],
    detailsUrl: "/about/portfolio/details/10",
    details: {
      title: "Complete Responsive Food Website",
      images: [portfolioDetailsImages[9], portfoliodetails_10_1],
      info: {
        category: "Web design",
        client: "ASU Company",
        date: "22 January, 2023",
        url: "https://rebhi-2002.github.io/Complete-Responsive-Website-from-Scratch",
      },
      description: `The 'Food' project is a complete responsive website built from scratch, focusing on showcasing culinary delights. This web design incorporates a vibrant and inviting layout that enhances the user experience. Users can explore various sections, including menus, recipes, and food articles, all designed with a clean and modern aesthetic. The responsive design ensures accessibility on all devices, from desktops to mobile phones. Each element is crafted to engage users visually and functionally, making it a perfect example of contemporary web design tailored for food enthusiasts.`,
    },
  },
  {
    id: 11,
    title: "Page Scroll",
    category: "js",
    projectType: "Web",
    imageUrl: `${portfolioImages[10]}`,
    workPage: [portfolioWorksImages[10]],
    detailsUrl: "/about/portfolio/details/11",
    details: {
      title: "Page Scroll Project Details",
      images: [portfolioDetailsImages[10], portfoliodetails_11_1],
      info: {
        category: "Web design",
        client: "Tech Innovations",
        date: "23 January, 2023",
        url: "https://rebhi-2002.github.io/Animation-On-Page-Scroll",
      },
      description: `The 'Page Scroll' project showcases smooth scrolling animations that enhance the user experience on web pages. It features a modern design where elements elegantly fade in and out as the user scrolls, creating an engaging visual flow. This project demonstrates the effective use of JavaScript to manipulate page elements dynamically, making it ideal for portfolios or websites looking to add a touch of interactivity. With a focus on user engagement, it exemplifies how thoughtful animation can transform static content into a lively experience.`,
    },
  },
  {
    id: 12,
    title: "Bootstrap 3 Design One",
    category: "bootstrap",
    projectType: "Web",
    imageUrl: portfolioImages[11],
    workPage: [portfolioWorksImages[11]],
    detailsUrl: "/about/portfolio/details/12",
    details: {
      title: "Bootstrap 3 Design One Project Details",
      images: [
        portfolioDetailsImages[11],
        portfoliodetails_12_1,
        portfoliodetails_12_2,
      ],
      info: {
        category: "Web design",
        client: "Design Studio",
        date: "25 January, 2023",
        url: "https://rebhi-2002.github.io/Bootstrap-3-Design-One",
      },
      description: `The 'Bootstrap 3 Design One' project highlights the power of Bootstrap in creating responsive and visually appealing web designs. This project utilizes the Bootstrap framework to ensure a seamless experience across various devices and screen sizes. It features a clean and modern layout, complete with intuitive navigation and stylish components. The design emphasizes usability and aesthetics, making it suitable for portfolios, business websites, or personal projects. Through effective use of Bootstrap’s grid system and pre-built components, this project showcases how to rapidly develop elegant web pages while maintaining responsiveness.`,
    },
  },
  {
    id: 13,
    title: "Personal Portfolio Website Design",
    category: "js",
    projectType: "Web",
    imageUrl: `${portfolioImages[12]}`,
    workPage: [portfolioWorksImages[12]],
    detailsUrl: "/about/portfolio/details/13",
    details: {
      title: "Personal Portfolio Website Design Project Details",
      images: [portfolioDetailsImages[12], portfoliodetails_13_1],
      info: {
        category: "Web design",
        client: "Personal Project",
        date: "25 January, 2023",
        url: "https://rebhi-2002.github.io/Responsive-Personal-Portfolio-Website-Design",
      },
      description: `The 'Personal Portfolio Website Design' project is a showcase of creativity and individuality, designed to highlight personal achievements and skills effectively. This responsive website features a modern aesthetic with clean lines and intuitive navigation, making it easy for visitors to explore. Each section is thoughtfully crafted to present projects, experience, and contact information clearly and engagingly. Utilizing the latest web design trends and techniques, this project demonstrates how to create a professional online presence that reflects personal branding while being user-friendly and visually appealing.`,
    },
  },
  {
    id: 14,
    title: "Bootstrap 3 Design Two",
    category: "bootstrap",
    projectType: "Web",
    imageUrl: `${portfolioImages[13]}`,
    workPage: [portfolioWorksImages[13]],
    detailsUrl: "/about/portfolio/details/14",
    details: {
      title: "Bootstrap 3 Design Two Project Details",
      images: [portfolioDetailsImages[13]],
      info: {
        category: "Web design",
        client: "Creative Agency",
        date: "27 January, 2023",
        url: "https://rebhi-2002.github.io/Bootstrap-3-Design-Two",
      },
      description: `The 'Bootstrap 3 Design Two' project exemplifies modern web design principles, utilizing the Bootstrap framework to create a responsive and visually striking website. This design features a harmonious blend of colors and layouts that enhance user experience while maintaining functionality. With a focus on clean aesthetics, the project showcases various components such as navigation bars, cards, and forms, all crafted to ensure easy interaction. Tailored for a creative agency, this portfolio demonstrates how Bootstrap can be leveraged to build professional-grade websites that adapt seamlessly across devices, emphasizing the importance of both form and function in web design.`,
    },
  },
  {
    id: 15,
    title: "Chart JS Integration And Graphs - Responsive Admin Dashboard",
    category: "js",
    projectType: "Web",
    imageUrl: `${portfolioImages[14]}`,
    workPage: [portfolioWorksImages[14]],
    detailsUrl: "/about/portfolio/details/15",
    details: {
      title:
        "Chart JS Integration And Graphs - Responsive Admin Dashboard Project Details",
      images: [portfolioDetailsImages[14], portfoliodetails_15_1],
      info: {
        category: "Web design",
        client: "Data Analytics Firm",
        date: "11 February, 2023",
        url: "https://rebhi-2002.github.io/Chart-JS-Integration-And-Graphs---Responsive-Admin-Dashboard",
      },
      description: `The 'Chart JS Integration And Graphs - Responsive Admin Dashboard' project showcases a fully responsive web dashboard designed for data analytics. Leveraging the power of Chart.js, this project enables dynamic data visualization through interactive graphs and charts that adapt seamlessly to different screen sizes. The design emphasizes clarity and usability, ensuring that complex data sets are presented in an easily digestible format. This dashboard is tailored for a data analytics firm, demonstrating the ability to transform raw data into insightful visual narratives, thus enhancing decision-making processes. The combination of functionality and aesthetic appeal makes this project a valuable tool for any organization focused on data-driven insights.`,
    },
  },
  {
    id: 16,
    title: "Bootstrap 4 - Responsive Web Design",
    category: "bootstrap",
    projectType: "Web",
    imageUrl: `${portfolioImages[15]}`,
    workPage: [portfolioWorksImages[15]],
    detailsUrl: "/about/portfolio/details/16",
    details: {
      title: "Bootstrap 4 - Responsive Web Design Project Details",
      images: [portfolioDetailsImages[15]],
      info: {
        category: "Web Development",
        client: "Creative Agency",
        date: "31 January, 2023",
        url: "https://rebhi-2002.github.io/Bootstrap-4",
      },
      description: `The 'Bootstrap 4 - Responsive Web Design' project exemplifies modern web development practices using Bootstrap 4 to create a fully responsive and visually appealing website. This project demonstrates the flexibility and power of the Bootstrap framework, ensuring optimal display on a variety of devices, from mobile phones to desktop computers. With a clean and intuitive design, users can navigate effortlessly while experiencing a cohesive interface. The project is tailored for a creative agency, highlighting key features such as grid layouts, responsive images, and interactive components. This makes it a perfect example of how to leverage Bootstrap 4 for efficient and effective web design.`,
    },
  },
  {
    id: 17,
    title: "Bootstrap 5 - Modern Web Interface",
    category: "bootstrap",
    imageUrl: `${portfolioImages[16]}`,
    workPage: [portfolioWorksImages[16]],
    projectType: "Web",
    detailsUrl: "/about/portfolio/details/17",
    details: {
      title: "Details of the Bootstrap 5 - Modern Web Interface Project",
      images: [portfolioDetailsImages[16]],
      info: {
        category: "Web Design",
        client: "Tech Solutions",
        date: "02 February, 2023",
        url: "https://rebhi-2002.github.io/Bootstrap-5",
      },
      description: `The 'Bootstrap 5 - Modern Web Interface' project showcases the latest features of Bootstrap 5 to create a sleek and responsive web design. This project emphasizes user experience with its clean layout and intuitive navigation, ensuring visitors can easily access content across all devices. Key components such as cards, modals, and forms are designed for modern aesthetics and functionality, making the interface not only visually appealing but also highly interactive. Developed for Tech Solutions, this project exemplifies the powerful capabilities of Bootstrap 5 in crafting dynamic and engaging web applications.`,
    },
  },
  {
    id: 18,
    title: "Portfolio Showcase - Creative Designs",
    category: "html-css",
    imageUrl: `${portfolioImages[17]}`,
    workPage: [portfolioWorksImages[17]],
    projectType: "Web",
    detailsUrl: "/about/portfolio/details/18",
    details: {
      title: "Details of the Portfolio Showcase - Creative Designs Project",
      images: [portfolioDetailsImages[17]],
      info: {
        category: "Graphic Design",
        client: "Design Studio",
        date: "27 January, 2023",
        url: "https://rebhi-2002.github.io/Complete-Responsive-Personal-Portfolio-Website-from-Scratch",
      },
      description: `The 'Portfolio Showcase - Creative Designs' project highlights a sophisticated approach to graphic design, tailored for a seamless user experience. This project features a clean and elegant layout that showcases creative works effectively, emphasizing visual storytelling. Each section is thoughtfully crafted to reflect the unique style of the Design Studio, with a responsive design that adapts beautifully across devices. Users can explore a variety of design projects, offering insight into the studio's creative capabilities. The website not only serves as a portfolio but also as a testament to modern design principles and aesthetics.`,
    },
  },
  {
    id: 19,
    title: "Coming Soon",
    category: "landing-page",
    projectType: "Landing Page",
    imageUrl: `${portfolioImages[18]}`,
    workPage: [portfolioWorksImages[18]],
    detailsUrl: "/about/portfolio/details/19",
    details: {
      title: "Details of the Coming Soon Landing Page Project",
      images: [portfolioDetailsImages[18], portfoliodetails_19_1],
      info: {
        category: "Landing Page",
        client: "Startup Company",
        date: "07 September, 2022",
        url: "https://rebhi-2002.github.io/Coming_Soon",
      },
      description: `The 'Coming Soon' landing page is designed to create anticipation and excitement for an upcoming project. Featuring a modern and minimalist layout, this page effectively captures the essence of your brand while engaging visitors. The use of clean lines and appealing typography ensures that the message is clear and inviting. A countdown timer and subscription form encourage visitors to stay connected, allowing them to receive updates about the launch. This design not only builds curiosity but also establishes a professional online presence for the Startup Company, setting the stage for a successful debut.`,
    },
  },
  {
    id: 20,
    title: "Starbucks Website",
    category: "landing-page",
    projectType: "Landing Page",
    imageUrl: `${portfolioImages[19]}`,
    workPage: [portfolioWorksImages[19]],
    detailsUrl: "/about/portfolio/details/20",
    details: {
      title: "Details of the Starbucks Website Landing Page Project",
      images: [
        portfolioDetailsImages[19],
        portfoliodetails_20_1,
        portfoliodetails_20_2,
      ],
      info: {
        category: "Landing Page",
        client: "Starbucks",
        date: "16 September, 2022",
        url: "https://rebhi-2002.github.io/Starbucks_Website_Landing_Page",
      },
      description: `Step into the delightful world of Starbucks with this elegantly designed landing page. This layout beautifully showcases the rich menu, highlighting signature drinks and seasonal offerings, while effectively communicating the brand's essence. Eye-catching visuals and smooth navigation enhance user engagement, inviting visitors to explore the latest promotions and coffee experiences. Whether you're a loyal customer or a newcomer, this landing page serves as a gateway to the vibrant Starbucks community, creating an inviting atmosphere that celebrates the joy of coffee and connection.`,
    },
  },
  {
    id: 21,
    title: "Glassmorphism Website",
    category: "landing-page",
    projectType: "Landing Page",
    imageUrl: `${portfolioImages[20]}`,
    workPage: [portfolioWorksImages[20]],
    detailsUrl: "/about/portfolio/details/21",
    details: {
      title: "Details of the Glassmorphism Style Landing Page Project",
      images: [portfolioDetailsImages[20]],
      info: {
        category: "Landing Page",
        client: "Modern Web Agency",
        date: "08 September, 2022",
        url: "https://rebhi-2002.github.io/Glassmorphism_Website",
      },
      description: `Utilizing glassmorphism design principles, this landing page creates a unique and immersive user experience. 
    Perfect for modern brands looking to stand out.`,
    },
  },
  {
    id: 22,
    title: "Netflix",
    category: "landing-page",
    projectType: "Landing Page",
    imageUrl: `${portfolioImages[21]}`,
    workPage: [portfolioWorksImages[21]],
    detailsUrl: "/about/portfolio/details/22",
    details: {
      title: "Exploring the Netflix Landing Page: A Modern Design Overview",
      images: [portfolioDetailsImages[21], portfoliodetails_22_1],
      info: {
        category: "Landing Page",
        client: "Netflix",
        date: "09 September, 2022",
        url: "https://rebhi-2002.github.io/Netflix_Landing_Page",
      },
      description: `This landing page leverages the modern glassmorphism design trend, combining transparency, blur effects, and vibrant accents to create a visually stunning and immersive user experience. Ideal for innovative brands, the design adds depth and elegance, offering a sleek, futuristic feel. With smooth transitions and intuitive navigation, this layout is perfect for capturing attention and elevating brand identity, making it stand out in a crowded digital landscape.`,
    },
  },
  {
    id: 23,
    title: "Travel Website Header Design",
    category: "landing-page",
    projectType: "Landing Page",
    imageUrl: `${portfolioImages[22]}`,
    workPage: [portfolioWorksImages[22]],
    detailsUrl: "/about/portfolio/details/23",
    details: {
      title: "Dive into the Beautiful Travel Website Header Design",
      images: [portfolioDetailsImages[22]],
      info: {
        category: "Landing Page",
        client: "Travel Agency",
        date: "09 September, 2022",
        url: "https://rebhi-2002.github.io/Travel_Website_Header_Design",
      },
      description: `This captivating header design for a travel website embodies the essence of adventure and exploration. With vibrant visuals and an engaging layout, it invites users to discover enticing destinations and the services offered by the travel agency. The design seamlessly combines aesthetics with functionality, ensuring an intuitive navigation experience that sparks wanderlust and encourages visitors to delve deeper into the travel options available. Perfect for travel agencies aiming to make a memorable first impression!`,
    },
  },
  {
    id: 24,
    title: "My Blog",
    category: "html-css",
    projectType: "Web",
    imageUrl: `${portfolioImages[23]}`,
    workPage: [portfolioWorksImages[23]],
    detailsUrl: "/about/portfolio/details/24",
    details: {
      title: "Unveiling the Personal Blog Design: A Minimalist Approach",
      images: [portfolioDetailsImages[23], portfoliodetails_24_1],
      info: {
        category: "Web",
        client: "Personal Project",
        date: "21 March, 2023",
        url: "https://rebhi-2002.github.io/Complete-Responsive-Blog-Website-Design",
      },
      description: `Experience a sleek and minimalistic design crafted for a personal blog. This layout prioritizes readability and user-friendly navigation, allowing visitors to effortlessly explore thoughts, stories, and insights. With its elegant aesthetics and clean lines, this blog design creates a serene environment that encourages readers to engage with the content. Ideal for those looking to share their experiences, ideas, and creativity with the world!`,
    },
  },
  {
    id: 25,
    title: "Composition Website",
    category: "scss",
    projectType: "Web",
    imageUrl: `${portfolioImages[24]}`,
    workPage: [portfolioWorksImages[24]],
    detailsUrl: "/about/portfolio/details/25",
    details: {
      title: "Discover the Artistry Behind the Composition Website Design",
      images: [
        portfolioDetailsImages[24],
        portfoliodetails_25_1,
        portfoliodetails_25_2,
      ],
      info: {
        category: "Web",
        client: "Design Studio",
        date: "15 May, 2023",
        url: "https://rebhi-2002.github.io/SASS-SCSS-/",
      },
      description: `Discover a modern and innovative website design dedicated to the exploration of composition in art and music. This layout beautifully integrates striking visuals with rich content, captivating art enthusiasts and students alike. With its user-friendly navigation and engaging aesthetic, the site serves as a vibrant platform for sharing ideas, inspirations, and techniques in the world of creative composition. Perfect for anyone looking to delve into the artistry of sound and visual harmony!`,
    },
  },
  {
    id: 26,
    title: "Dates Reminder",
    category: "react",
    projectType: "Web",
    imageUrl: `${portfolioImages[25]}`,
    workPage: [portfolioWorksImages[25]],
    detailsUrl: "/about/portfolio/details/26",
    details: {
      title: "Personal Dates Reminder App / Event Management Reminder Tool",
      images: [
        portfolioDetailsImages[25],
        portfoliodetails_26_1,
        portfoliodetails_26_2,
        portfoliodetails_26_3,
      ],
      info: {
        category: "Web",
        client: "Self Project",
        date: "2023/08/29",
        url: "https://github.com/rebhi-2002/ReactJS/tree/main/02-Dates%20Reminder",
      },
      description: `
        The Dates Reminder application is a practical tool designed to help users manage important dates and events efficiently. Built using React, this web app provides an intuitive interface for setting reminders and ensuring users never miss significant moments.
        ### Key Features:
        - **Event Scheduling**: Users can add, edit, and delete important dates, ensuring they stay organized.
        - **Reminder Notifications**: The app sends notifications to remind users of upcoming events, enhancing time management.
        - **User-Friendly Interface**: The design is straightforward and easy to navigate, making it accessible for all users.
        ### How It Works:
        - Users input their important dates through a simple form.
        - The application displays a list of upcoming events with options to modify or delete entries.
        ### Technical Stack:
        - **React**: Utilized for building a responsive and interactive user interface.
        - **CSS**: Ensures the application is visually appealing and user-friendly.
      `,
    },
  },
  {
    id: 27,
    title: "Question & Answer App",
    category: "react",
    projectType: "Web",
    imageUrl: `${portfolioImages[26]}`,
    workPage: [portfolioWorksImages[26]],
    detailsUrl: "/about/portfolio/details/27",
    details: {
      title: "Interactive Q&A Platform",
      images: [
        portfolioDetailsImages[26],
        portfoliodetails_27_1,
        portfoliodetails_27_2,
        portfoliodetails_27_3,
        portfoliodetails_27_4,
        portfoliodetails_27_5,
        portfoliodetails_27_6,
        portfoliodetails_27_7,
        portfoliodetails_27_8,
        portfoliodetails_27_9,
      ],
      info: {
        category: "Web",
        client: "Self Project",
        date: "2023/08/30",
        url: "https://github.com/rebhi-2002/ReactJS/tree/main/03-QA",
      },
      description: `
        This Q&A app is designed to offer an interactive platform for users to ask and answer questions on various topics. Built using React, the application enables real-time engagement through an intuitive interface, making it an ideal learning and discussion tool.
        ### Key Features:
        - **Dynamic Question Posting**: Users can submit questions and have them displayed instantly.
        - **Answer Submission**: Users can provide answers to posted questions.
        - **Interactive Voting**: Questions and answers can be upvoted or downvoted by the community.
        ### How It Works:
        - Users submit questions through a form.
        - Submitted questions appear in a list format with options to answer or vote on them.
        - Answers are displayed beneath each question, creating a threaded discussion environment.
        ### Technical Stack:
        - **React**: Provides a dynamic and responsive interface.
        - **CSS**: Ensures that the application is fully responsive and user-friendly.
      `,
    },
  },
  {
    id: 28,
    title: "Menu",
    category: "react",
    projectType: "Web",
    imageUrl: `${portfolioImages[27]}`,
    workPage: [portfolioWorksImages[27]],
    detailsUrl: "/about/portfolio/details/28",
    details: {
      title: "Dynamic Menu with Filters for Restaurants",
      images: [
        portfolioDetailsImages[27],
        portfoliodetails_28_1,
        portfoliodetails_28_2,
        portfoliodetails_28_3,
        portfoliodetails_28_4,
        portfoliodetails_28_5,
        portfoliodetails_28_6,
        portfoliodetails_28_7,
      ],
      info: {
        category: "Web",
        client: "Self Project",
        date: "2023/09/01",
        url: "https://github.com/rebhi-2002/ReactJS/tree/main/04-Menu",
      },
      description: `
        This interactive menu application provides a sleek and responsive solution for restaurants or cafes looking to showcase their offerings digitally. It allows users to browse through categories of meals in an intuitive and visually appealing interface. Built using React, the app ensures a smooth and dynamic user experience across devices.
        ### Key Features:
        - **Dynamic Menu Display**: Displays meals categorized by types like appetizers, main dishes, and desserts, allowing users to explore the menu effortlessly.
        - **Category Filtering**: Users can filter menu items by categories such as 'All', 'Breakfast', 'Lunch', and 'Snack Meal', enabling easy navigation based on preferences.
        - **Responsive Design**: The application works seamlessly on both desktop and mobile devices, ensuring optimal user experience regardless of screen size.
        - **Real-time Rendering**: The interface dynamically updates without requiring a page refresh, providing a smooth user interaction.
        ### How It Works:
        - Users can browse meals and filter them by selecting categories.
        - Menu items, including images, titles, and descriptions, are displayed dynamically based on the selected filter.
        ### Technical Stack:
        - **React**: Powers the dynamic rendering and component-based structure, ensuring an efficient and interactive user experience.
        - **CSS**: Ensures responsive and visually appealing styling, delivering a clean and modern interface.
      `,
    },
  },
  {
    id: 29,
    title: "Movies DB",
    category: "react",
    projectType: "Web",
    imageUrl: `${portfolioImages[28]}`,
    workPage: [portfolioWorksImages[28]],
    detailsUrl: "/about/portfolio/details/29",
    details: {
      title: "Movies Database: A Dynamic Film Search Platform",
      images: [
        portfolioDetailsImages[28],
        portfoliodetails_29_1,
        portfoliodetails_29_2,
        portfoliodetails_29_3,
        portfoliodetails_29_4,
        portfoliodetails_29_5,
        portfoliodetails_29_6,
        portfoliodetails_29_7,
        portfoliodetails_29_8,
        portfoliodetails_29_9,
      ],
      info: {
        category: "Web",
        client: "Self Project",
        date: "2023/09/06",
        url: "https://github.com/rebhi-2002/ReactJS/tree/main/05-Movies%20DB",
      },
      description: `
        This project is a fully functional Movies Database application built using React. It allows users to search and browse a collection of films with key features like sorting and filtering. The project showcases an interactive and dynamic user experience for movie enthusiasts, focusing on responsive design and efficient state management.
        ### Key Features:
        - Search Functionality: Users can search for movies by title and filter results by genres, ratings, and release dates.
        - Detailed Movie Pages: Each movie has a dedicated page displaying detailed information such as synopsis, cast, release date, and ratings.
        - Pagination: The platform implements pagination, ensuring smooth navigation through a large list of films.
        - Responsive Design: The interface is optimized for all device sizes, ensuring a seamless experience on mobile and desktop.
        ### How It Works:
        - Users can type in a movie name in the search bar to retrieve relevant results from the database.
        - Clicking on a movie leads to a detailed view with in-depth information and related films.
        ### Technical Stack:
        - React: For building the dynamic interface.
        - Axios: To fetch data from the movie API.
        - CSS: For responsive design and styling.
        - React Router: For navigation between pages.
      `,
    },
  },
  {
    id: 30,
    title: "E-commerce",
    category: "react",
    projectType: "Web",
    imageUrl: `${portfolioImages[29]}`,
    workPage: [portfolioWorksImages[29]],
    detailsUrl: "/about/portfolio/details/30",
    details: {
      title: "React E-commerce Platform: Product Catalog and Responsive Design",
      // images: [portfolioDetailsImages[29]],
      images: [
        portfolioDetailsImages[29], // صورة ثابتة
        ...selectedImages30,
      ],
      info: {
        category: "Web",
        client: "Self Project",
        date: "2023/10/09",
        url: "https://github.com/rebhi-2002/ReactJS/tree/main/Start%20E-commerce%20WebSite%20(Design%20Only)",
      },
      description: `
        This project is a React-based E-commerce platform focused on displaying a product catalog with a fully responsive design. The application showcases key elements of a typical E-commerce website, emphasizing user interface design and mobile responsiveness.
        ### Key Features:
        - Product Display: Users can browse through a visually appealing list of products.
        - Product Details: Each product has a detailed view displaying its description, price, and image.
        - Responsive Design: The layout is designed to work seamlessly on both desktop and mobile devices, ensuring a smooth user experience across different screen sizes.
        ### How It Works:
        - Users can scroll through the product catalog and click on individual items to view detailed information.
        - The project is primarily focused on the design and layout of the E-commerce platform, without backend integration for checkout or payments.
        ### Technical Stack:
        - React: Used for building the dynamic user interface.
        - CSS: For styling components and making the design fully responsive.
        - JavaScript: To handle interactivity and component behavior.
      `,
    },
  },
  {
    id: 31,
    title: "Add Items/Events",
    category: "react",
    projectType: "Web",
    imageUrl: `${portfolioImages[30]}`,
    workPage: [portfolioWorksImages[30]],
    detailsUrl: "/about/portfolio/details/31",
    details: {
      title: "React Project: Add Items and Events",
      images: [portfolioDetailsImages[30], portfoliodetails_31_1],
      info: {
        category: "Web",
        client: "Self Project",
        date: "2024/08/04",
        url: "https://github.com/rebhi-2002/React-Complete-Guide-2024/tree/main/Code/05%20-%20Rendering%20Lists%20And%20Conditional%20Content",
      },
      description: `
      This project focuses on rendering lists and handling conditional content within a React application. It allows users to dynamically add items and events to a list. 
      The application demonstrates key concepts in React such as component re-rendering, managing state with hooks, and rendering JSX based on conditional logic.

      ### Key Features:
      - Dynamic addition of list items (events) based on user input.
      - Real-time rendering and conditional content display.
      - Fully functional form for adding new events with validations.
      - Utilizes React's \`useState\` for state management.
      - Example of handling lists and rendering them efficiently in React.
      ### How It Works:
      - The user is prompted to enter an item or event in the form.
      - Once submitted, the new item is added to the rendered list dynamically.
      - Conditional rendering ensures that the list is updated only when valid input is provided, and appropriate error messages are shown otherwise.
      ### Technical Stack:
      - React for front-end development.
      - JavaScript for logic handling and form validation.
      - CSS for basic styling.

      The project provides an in-depth look into how to render dynamic content efficiently in React, and how to manage the complexity of lists and conditionally rendered content.
    `,
    },
  },
  {
    id: 32,
    title: "Todo List",
    category: "react",
    projectType: "Web",
    imageUrl: `${portfolioImages[31]}`,
    workPage: [portfolioWorksImages[31]],
    detailsUrl: "/about/portfolio/details/32",
    details: {
      title: "Todo List Application",
      images: [
        portfolioDetailsImages[31],
        portfoliodetails_32_1,
        portfoliodetails_32_2,
      ],
      info: {
        category: "Web",
        client: "Self Project",
        date: "2024/08/18",
        url: "https://github.com/rebhi-2002/React-Complete-Guide-2024/tree/main/Code/06%20-%20Styling%20React%20Components",
      },
      description: `
        This Todo List application allows users to manage their tasks effectively. Users can add, edit, and delete tasks seamlessly, making it a perfect tool for productivity. The application showcases how to style React components effectively and implement responsive design.

        ### Key Features:
        - User-friendly interface for adding and managing tasks.
        - Users can add new todo items with a simple input form.
        - Ability to mark tasks as completed, allowing for task management.
        - Users can edit existing todo items to modify their titles.
        - The application persists data in the local storage, so tasks are saved even after refreshing the page.
        - Fully responsive design that works well on both desktop and mobile devices.

        ### How It Works:
        - The user can enter a task in the input field and submit it to add it to the list.
        - Each task is displayed with options to mark it as completed or delete it.
        - Upon marking a task as completed, it gets visually distinguished from other tasks.
        - The data is stored in local storage using the browser's local storage API, ensuring that the todos are saved across sessions.

        ### Technical Stack:
        - Built with React for building the user interface.
        - CSS for styling components and responsive design.
        - Local storage for data persistence.

        This project serves as an excellent example of how to manage state and props in React, along with best practices for component styling and responsive design.
      `,
    },
  },
  {
    id: 33,
    title: "Login/Logout Page",
    category: "react",
    projectType: "Web",
    imageUrl: `${portfolioImages[32]}`,
    workPage: [portfolioWorksImages[32]],
    detailsUrl: "/about/portfolio/details/33",
    details: {
      title: "Secure Authentication Flow in React",
      images: [
        portfolioDetailsImages[32],
        portfoliodetails_33_1,
        portfoliodetails_33_2,
        portfoliodetails_33_3,
        portfoliodetails_33_4,
        portfoliodetails_33_5,
        portfoliodetails_33_6,
      ],
      info: {
        category: "Web",
        client: "Self Project",
        date: "2024/08/27",
        url: "https://github.com/rebhi-2002/React-Complete-Guide-2024/tree/main/Code/10%20-%20Advanced%20Handling%20Side%20Effects%2C%20Using%20Reducers%20And%20Using%20the%20Context/react-the-complete-guide",
      },
      description: `
        This project is a Login/Logout page implemented using React, designed to provide a user-friendly authentication experience. The application demonstrates how to manage user sessions and handle side effects effectively.

        ### Key Features:
        - User can log in using a simple and intuitive form.
        - Implemented validation to ensure that user inputs meet the necessary criteria.
        - Allows users to log out, securely ending their session.
        - Utilizes React's context API for managing global state related to authentication.
        - Provides feedback to users during the login/logout process through error messages and loading indicators.
        ### How It Works:
        - Users can enter their credentials in the login form.
        - Upon submission, the application checks the validity of the inputs and communicates with an authentication service.
        - If the credentials are correct, the user is redirected to a dashboard or home page.
        - Users can also log out, which clears their session and returns them to the login page.
        ### Technical Stack:
        - Built with React for a dynamic user interface.
        - Utilizes context API for state management.
        - CSS for styling components and creating a responsive design.

        This project serves as an excellent example of handling user authentication and session management in React applications, along with best practices for handling side effects.
      `,
    },
  },
  {
    id: 34,
    title: "Building a Food Order App",
    category: "react",
    projectType: "Web",
    imageUrl: `${portfolioImages[33]}`,
    workPage: [portfolioWorksImages[33]],
    detailsUrl: "/about/portfolio/details/34",
    details: {
      title: "React Food Order App: Dynamic Cart and Seamless Checkout",
      images: [
        portfolioDetailsImages[33],
        portfoliodetails_34_1,
        portfoliodetails_34_2,
        portfoliodetails_34_3,
        portfoliodetails_34_4,
        portfoliodetails_34_5,
      ],
      info: {
        category: "Web",
        client: "Self Project",
        date: "2024/08/31",
        url: "https://github.com/rebhi-2002/React-Complete-Guide-2024/tree/main/Code/11%20-%20Practice%20Project%20Building%20a%20Food%20Order%20App",
      },
      description: `
        This project is a fully functional Food Order application built using React.
        It enables users to browse through various food items, add them to their cart, and proceed with the ordering process seamlessly.
        The application emphasizes user experience with a visually appealing design and easy navigation.
        ### Key Features:
        - Users can view a list of available food items along with their details.
        - Dynamic cart functionality allows users to add or remove items easily.
        - Order summary page that displays selected items and total cost before checkout.
        - Responsive design ensuring a great experience on both mobile and desktop devices.
        - Local storage for cart persistence, allowing users to revisit their selections later.
        ### How It Works:
        - Users can explore food categories and select items to view more details.
        - Once items are added to the cart, users can navigate to the cart page to review their selections.
        - The checkout process guides users through confirming their order, ensuring a smooth transaction.
        ### Technical Stack:
        - React for building interactive user interfaces.
        - CSS for styling and ensuring responsiveness.
        - Local storage for saving user selections across sessions.

        This project serves as a practical application of state management in React and demonstrates how to create an engaging and user-friendly web application for food ordering.
      `,
    },
  },
  {
    id: 35,
    title: "Computer Programming languages 2 / GUI",
    category: "univ",
    projectType: "JAVA",
    imageUrl: `${portfolioImages[34]}`,
    workPage: [portfolioWorksImages[34]],
    detailsUrl: "/about/portfolio/details/35",
    details: {
      title: "Computer Programming 2 - GUI Assignment",
      images: [portfolioDetailsImages[34], ...selectedImages35],
      info: {
        category: "Assignment/HW./Lab",
        client: "Self Project",
        date: "2022/05",
        url: "",
      },
      description: `This project focuses on building graphical user interfaces (GUIs) in Java as part of a Computer Programming 2 course. The assignment involves designing a user-friendly interface for interacting with backend logic, reinforcing object-oriented programming concepts in a practical context. The key features include a menu-driven system, input validation, and responsive GUI components.`,
    },
  },
  {
    id: 36,
    title: "Computer Graphics",
    category: "univ",
    projectType: "JAVA",
    imageUrl: `${portfolioImages[35]}`,
    workPage: [portfolioWorksImages[35]],
    detailsUrl: "/about/portfolio/details/36",
    details: {
      title: "Computer Graphics: Creating 2D and 3D Visuals",
      images: [portfolioDetailsImages[35], ...selectedImages36],
      info: {
        category: "Assignment/HW.",
        client: "Self Project",
        date: "2023/05",
        url: "https://github.com/rebhi-2002/Computer_Graphics",
      },
      description: `This project focuses on the fundamentals of computer graphics, including rendering techniques, 2D/3D modeling, and transformations. The main objectives were to develop a graphical application using Java that showcases various graphics concepts such as:

    - Drawing geometric shapes
    - Applying color and textures
    - Implementing transformations (translation, rotation, scaling)
    - Rendering 3D objects and using lighting effects

    The application provides an interactive user interface that allows users to create and manipulate graphical objects. The code is organized for easy understanding and modification, making it a valuable resource for learning computer graphics concepts.`,
    },
  },
  {
    id: 37,
    title: "Books Store",
    category: "univ",
    projectType: "PHP",
    imageUrl: `${portfolioImages[36]}`,
    workPage: [portfolioWorksImages[36]],
    detailsUrl: "/about/portfolio/details/37",
    details: {
      title: "Books Store: An Online Bookstore Platform",
      images: [portfolioDetailsImages[36]],
      info: {
        category: "E-commerce",
        client: "Self Project",
        date: "2023/05",
        url: "https://github.com/rebhi-2002/Books_Store",
      },
      description: `This project is an online bookstore developed using PHP, HTML, CSS, and JavaScript. The aim was to create a user-friendly platform for book lovers to browse, search, and purchase books online. Key features include:

    - **User Registration & Login**: Secure user authentication system.
    - **Book Catalog**: Display a wide range of books with images, descriptions, and prices.
    - **Search Functionality**: Users can search for books by title, author, or genre.
    - **Shopping Cart**: Add books to the cart and proceed to checkout.
    - **Admin Panel**: Manage books, orders, and user accounts.

    The project demonstrates practical use of PHP for server-side scripting and database management, making it a valuable learning resource for aspiring web developers.`,
    },
  },
  {
    id: 38,
    title: "Co-op Training || فترة التدريب الميداني || Internship Management",
    category: "univ",
    projectType: "PHP",
    imageUrl: `${portfolioImages[37]}`,
    workPage: [portfolioWorksImages[37]],
    detailsUrl: "/about/portfolio/details/38",
    details: {
      title: "GoHub: Co-op Training Management System",
      images: [portfolioDetailsImages[37], ...selectedImages38],
      info: {
        category: "Web Application (Final Project)",
        client: "Self Project",
        date: "2023/05",
        url: "https://github.com/rebhi-2002/GoHub",
      },
      description: `This project is a Co-op Training Management System developed using PHP and MySQL. It aims to streamline the registration, tracking, and supervision of student internships. Key features include:

    - **Registration System**: Allows students to register and input their personal information.
    - **Training Management**: Enables instructors to monitor students' performance and add notes.
    - **Periodic Reports**: Generates reports on student progress during their internship.
    - **User-Friendly Interface**: Designed with a simple interface to facilitate interaction with the system.

    This project serves as a practical example of how to use PHP to create comprehensive web applications with a database, making it a valuable resource for students in web development.`,
    },
  },
];

const categories = [
  "All",
  "landing-page",
  "html-css",
  "js",
  "bootstrap",
  "scss",
  "xd",
  "react",
  "react-native",
  "univ",
];

const About = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const isDarkMode = document.body.getAttribute("data-theme") === "dark";

  return (
    <div className={`container-fluid py-4 ${classes.about__page}`}>
      <div className="AboutMe">
        <AboutComponent></AboutComponent>
      </div>
      <div
        id="portfolio-items"
        className="Portfolio"
        style={{
          padding: "40px 20px",
          backgroundColor: isDarkMode ? "rgb(20, 25, 40)" : "#f8f9fa",
        }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center m-auto">
          <h2
            className={`${
              isDarkMode ? "text-light" : "text-primary-emphasis"
            } ${classes["portfolio-title"]} mb-4 w-75`}
          >
            My Professional Portfolio: Showcasing My Best Work
          </h2>
          <p
            className={`${classes.paragraph} text-center mt-2 px-5 mx-5`}
            style={{
              fontSize: "18px",
              color: isDarkMode ? "#e0e0e0" : "#777",
              transition: "color 0.3s ease",
            }}
          >
            Explore my diverse range of projects, including{" "}
            <strong>web development</strong>, <strong>UI/UX design</strong>, and
            more. Each piece reflects my skills and creativity in delivering
            impactful solutions for clients.
          </p>
          <p
            className={`${classes.paragraph} text-center mt-2 px-5 mx-5`}
            style={{
              fontSize: "18px",
              color: isDarkMode ? "#e0e0e0" : "#777",
              transition: "color 0.3s ease",
            }}
          >
            With over 10 projects completed, including e-commerce sites and
            mobile applications, I utilize technologies like React, Bootstrap,
            and more to bring ideas to life.
          </p>
          <a href="#portfolio-items" className="btn btn-primary my-2 p-2">
            View My Projects
          </a>
        </div>

        <FilterMenu
          categories={categories}
          onFilterSelect={setActiveCategory}
          activeCategory={activeCategory}
        />
        <PortfolioGrid items={filteredItems} />
        <div className={classes["wave-container"]}>
          <svg
            viewBox="0 0 120 28"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10 Q 30 20 60 10 T 120 10 V 30 H 0 Z"
              fill="#0056B3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;

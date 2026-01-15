//this code is bad

const { default: Title } = require("../parts/1-title/title");
const { default: Finitude } = require("../parts/10-finitude/finitude");
const { default: Scratch } = require("../parts/11-scratch/scratch");
const { default: Python } = require("../parts/12-python/python");
const { default: Desktop } = require("../parts/13-desktop/desktop");
const { default: Unreal } = require("../parts/14-unreal/unreal");
const { default: Javascript } = require("../parts/15-javascript/javascript");
const { default: OutroQuote } = require("../parts/16-outroQuote/outroQuote");
const { default: HireMe } = require("../parts/17-hireMe/hireMe");
const { default: Description } = require("../parts/2-description/description");
const { default: IntroQuote } = require("../parts/3-introQuote/introQuote");
const { default: TimeBorn } = require("../parts/4-timeBorn/timeBorn");
const { default: TravelToChina } = require("../parts/5-travelToChina/travelToChina");
const { default: LivingInTianjin } = require("../parts/6-livingInTianjin/livingInTianjin");
const { default: Skillsets } = require("../parts/7-skillsets/skillsets");
const { default: Transportation } = require("../parts/8-transportation/transportation");
const { default: MovingToAmerica } = require("../parts/9-movingToAmerica/movingToAmerica");

const pages = [
    {
      component: <Title />,
      contentStart: 0,
      contentEnd: 1,
    },
    {
      component: <Description />,
      contentStart: 1,
      contentEnd: 1.5,
    },
    {
      component: <IntroQuote />,
      contentStart: 1.5,
      contentEnd: 3,
    },
    {
      component: <TimeBorn />,
      contentStart: 3,
      contentEnd: 4.5,
    },
    {
      component: <TravelToChina />,
      contentStart: 4.5,
      contentEnd: 6,
    },
    {
      component: <LivingInTianjin />,
      contentStart: 6,
      contentEnd: 7.7,
    },
    {
      component: <Skillsets />,
      contentStart: 7.7,
      contentEnd: 9.5,
    },
    {
      component: <Transportation />,
      contentStart: 9.5,
      contentEnd: 12.5,
    },
    {
      component: <MovingToAmerica />,
      contentStart: 12.5,
      contentEnd: 15,
    },
    {
      component: <Finitude />,
      contentStart: 15,
      contentEnd: 17,
    },
    {
      component: <Scratch />,
      contentStart: 17,
      contentEnd: 20,
    },
    {
      component: <Python />,
      contentStart: 20,
      contentEnd: 24,
    },
    {
      component: <Desktop />,
      contentStart: 24,
      contentEnd: 28,
    },
    {
      component: <Unreal />,
      contentStart: 28,
      contentEnd: 30,
    },
    {
      component: <Javascript />,
      contentStart: 30,
      contentEnd: 32.25,
    },
    {
      component: <OutroQuote />,
      contentStart: 32.25,
      contentEnd: 34,
    },
    {
      component: <HireMe />,
      contentStart: 34,
      contentEnd: 100,
    },
  ]
  
  export default pages
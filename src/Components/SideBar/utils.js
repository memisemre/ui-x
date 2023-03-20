import { GoHome } from "react-icons/go";
import { AiOutlineFontSize } from "react-icons/ai";
import { BiColorFill } from "react-icons/bi";
import { BsGrid1X2 } from "react-icons/bs";
import { CiPickerHalf , CiPalette } from "react-icons/ci";
import { GiPowerGenerator, GiGlassBall } from "react-icons/gi";
import { RiGradienterLine } from "react-icons/ri";
import { SiConvertio } from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import { TbInnerShadowBottomLeft , TbArrowsDoubleNeSw } from "react-icons/tb";
export const Categories = [
    {
        "categoryName": "Picker",
        "icon": <CiPickerHalf />,
        "link": "/",
        "key": Math.random()
    },
    {
        "categoryName": "Fonts",
        "icon": <AiOutlineFontSize />,
        "link": "/fonts",
        "key": Math.random()
    },
    {
        "categoryName": "Colors",
        "icon": <BiColorFill />,
        "link": "/colors",
        "key": Math.random()
    },
    {
        "categoryName": "Color Palettes",
        "icon": <CiPalette />,
        "link": "/",
        "key": Math.random()
    },
    {
        "categoryName": "Generators",
        "icon": <GiPowerGenerator />,
        "key": Math.random(),
        "subCategories": [
            {
                "categoryName": "Box Shadow",
                "icon": <TbInnerShadowBottomLeft />,
                "link": "/",
                "key": Math.random(),
            },
            {
                "categoryName": "Grid Template",
                "icon": <BsGrid1X2 />,
                "link": "/",
                "key": Math.random(),
            },
            {
                "categoryName": "Gradient",
                "icon": <RiGradienterLine />,
                "link": "/",
                "key": Math.random(),
            },
            {
                "categoryName": "Css Animation",
                "icon": <MdAnimation />,
                "link": "/",
                "key": Math.random(),
            },
            {
                "categoryName": "GlassMorphism",
                "icon": <GiGlassBall />,
                "link": "/",
                "key": Math.random(),
            }
        ]
    },
    {
        "categoryName": "Convert Tools",
        "icon": <TbArrowsDoubleNeSw />,
        "key": Math.random(),
        "subCategories": [
            {
                "categoryName": "HEX to RGB",
                "icon": <SiConvertio />,
                "link": "/",
                "key": Math.random(),
            },
            {
                "categoryName": "RGB to HEX",
                "icon": <SiConvertio />,
                "link": "/",
                "key": Math.random(),
            }
        ]
    }
]

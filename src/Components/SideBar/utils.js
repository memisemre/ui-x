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
        "icon": <CiPickerHalf />
    },
    {
        "categoryName": "Fonts",
        "icon": <AiOutlineFontSize />
    },
    {
        "categoryName": "Colors",
        "icon": <BiColorFill />
    },
    {
        "categoryName": "Color Palettes",
        "icon": <CiPalette />
    },
    {
        "categoryName": "Generators",
        "icon": <GiPowerGenerator />,
        "subCategories": [
            {
                "categoryName": "Box Shadow Generator",
                "icon": <TbInnerShadowBottomLeft />
            },
            {
                "categoryName": "Grid Template Generator",
                "icon": <BsGrid1X2 />
            },
            {
                "categoryName": "Gradient Generator",
                "icon": <RiGradienterLine />
            },
            {
                "categoryName": "Css Animation Generator",
                "icon": <MdAnimation />
            },
            {
                "categoryName": "GlassMorphism Generator",
                "icon": <GiGlassBall />
            }
        ]
    },
    {
        "categoryName": "Convert Tools",
        "icon": <TbArrowsDoubleNeSw />,
        "subCategories": [
            {
                "categoryName": "HEX to RGB",
                "icon": <SiConvertio />
            },
            {
                "categoryName": "RGB to HEX",
                "icon": <SiConvertio />
            }
        ]
    }
]

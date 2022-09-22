import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { DiNodejs, DiAndroid } from "react-icons/di";
import { FaGithub, FaLinkedin, FaNodeJs, FaReact, FaSearch } from 'react-icons/fa';
import { ImCamera } from "react-icons/im";
import { SiGmail, SiMongodb, SiPostman, SiSocketdotio, SiMaterialui } from "react-icons/si";
import { TbSend } from "react-icons/tb";
import { RiMenu2Line, RiCloseCircleFill } from "react-icons/ri";
import { BsMenuAppFill, BsApple, BsChevronDown } from "react-icons/bs"
import { AiOutlineSketch } from "react-icons/ai"



const ICONS = {
    OPEN_EYE_ICON : Visibility,
    CLOSE_EYE_ICON : VisibilityOff,
    NODE:FaNodeJs,
    NODEJS:DiNodejs,
    GITHUB:FaGithub,
    MONGO_DB:SiMongodb,
    CAMERA:ImCamera,
    REACT:FaReact,
    SOCKETIO:SiSocketdotio,
    POSTMAN:SiPostman,
    GMAIL:SiGmail,
    LINKED_IN:FaLinkedin,
    SEARCH:FaSearch,
    SEND_MESSAGE:TbSend,
    MENU_ONE:RiMenu2Line,
    CHAT_MENU:BsMenuAppFill,
    MATERIAL_UI:SiMaterialui,
    ANDROID:DiAndroid,
    APPLE:BsApple,
    CLOSE:RiCloseCircleFill,
    DOWN:BsChevronDown,
    SKETCH:AiOutlineSketch,
}

export default ICONS;
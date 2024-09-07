import ServicesLayout from "../ServicesLayout"
import MyServicesTitle from "./MyServicesTitle"
import { MdOutlineComputer } from "react-icons/md";
import { FaRegFileVideo } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { GiPhotoCamera } from "react-icons/gi";
import { MdAppShortcut } from "react-icons/md";
import { SiFreelancer } from "react-icons/si";
const MyService = () => {
    return (
        <>
            <MyServicesTitle />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 columns-3 box-border">
                <ServicesLayout title="Freelancing" icon={<SiFreelancer size={35}/> } description="I'm a Freelancr. You Can hire me for thumbnail designing, video editing, Web Develompnet, Graphics Designing"/>
                <ServicesLayout title="Web Development" icon= {<MdOutlineComputer size={35} />} description="I'm a Web Developer. You Can Hire me for Developing Website"/>
                <ServicesLayout title="Video Editing" icon={<FaRegFileVideo size={35}/>}description="I'm a Video Editor you can hire me for edit your vides. Software use CapCut, PrimimunPro"/>
                <ServicesLayout title="Graphic design" icon={<FaPaintBrush size={35}/>}description="I'm a Graphics Desiner you can hire me for Designing. Software use Photoshope"/>
                <ServicesLayout title="PhotoGraphy" icon={<GiPhotoCamera size={35}/>}description="I'm a natural Photograpohy."/>
                <ServicesLayout title="App Development" icon={<MdAppShortcut size={35}/>}description="I'm a Mobile App Developer you can hire me for Develop your Apps."/>
            </div>
        </>

    )
}

export default MyService

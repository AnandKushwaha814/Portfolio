import ServicesLayout from "../ServicesLayout";
import MyServicesTitle from "./MyServicesTitle";
import { MdOutlineComputer, MdAppShortcut } from "react-icons/md";
import { FaRegFileVideo, FaPaintBrush } from "react-icons/fa";
import { GiPhotoCamera } from "react-icons/gi";
import { SiFreelancer } from "react-icons/si";

const MyService = () => {
  return (
    <>
      <MyServicesTitle />
      <div className="p-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ServicesLayout
            title="Freelancing"
            icon={<SiFreelancer size={40} />}
            description="I'm a Freelancer. You can hire me for thumbnail designing, video editing, web development, and graphic design."
          />
          <ServicesLayout
            title="Web Development"
            icon={<MdOutlineComputer size={40} />}
            description="I'm a Web Developer. You can hire me for developing websites."
          />
          <ServicesLayout
            title="Video Editing"
            icon={<FaRegFileVideo size={40} />}
            description="I'm a Video Editor. You can hire me for editing your videos. Software used: CapCut, Premiere Pro."
          />
          <ServicesLayout
            title="Graphic Design"
            icon={<FaPaintBrush size={40} />}
            description="I'm a Graphic Designer. You can hire me for designing. Software used: Photoshop."
          />
          <ServicesLayout
            title="Photography"
            icon={<GiPhotoCamera size={40} />}
            description="I'm a natural photographer."
          />
          <ServicesLayout
            title="App Development"
            icon={<MdAppShortcut size={40} />}
            description="I'm a Mobile App Developer. You can hire me for developing your apps."
          />
        </div>
      </div>
    </>
  );
};

export default MyService;

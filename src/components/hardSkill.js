import { AiOutlinePython, AiOutlineHtml5, AiOutlineJavaScript } from "react-icons/ai";
import { TbBrandTypescript, TbBrandNextjs, TbBrandTailwind   } from "react-icons/tb";
import { IoLogoCss3, IoLogoAngular } from "react-icons/io";
import { FaReact, FaBootstrap, FaLaravel, FaPhp } from "react-icons/fa6";
import { DiPostgresql } from "react-icons/di";
import { SiMysql } from "react-icons/si";

export default function HardSkill({ hardSkillRef }) {
  return (
    <div ref={hardSkillRef} className="bg-blue-950 min-h-80 p-8 ">
      <div className="text-3xl font-bold text-center text-white p-4">
          Experiencia en las siguientes Tecnologias: 
      </div>

      <div className="grid grid-cols-12 grid-rows-2 gap-4">
        <FaPhp size={80} color="#ffffff" />
        <AiOutlineJavaScript size={80} color="#ffffff" />
        <TbBrandTypescript size={80} color="#ffffff" />
        <AiOutlinePython size={80} color="#ffffff" />
        <FaLaravel size={80} color="#ffffff" />
        <TbBrandNextjs size={80} color="#ffffff" />
        <FaReact size={80} color="#ffffff" />
        <IoLogoAngular size={80} color="#ffffff" />
        <AiOutlineHtml5 size={80} color="#ffffff" />
        <FaBootstrap size={80} color="#ffffff" />
        <TbBrandTailwind size={80} color="#ffffff" />
        <SiMysql size={80} color="#ffffff" />

        <p className="text-center text-white">PHP</p>
        <p className="text-center text-white">JavaScript</p>
        <p className="text-center text-white">TypeScript</p>
        <p className="text-center text-white">Python</p>
        <p className="text-center text-white">Laravel</p>
        <p className="text-center text-white">Next.js</p>
        <p className="text-center text-white">React</p>
        <p className="text-center text-white">Angular</p>
        <p className="text-center text-white">HTML</p>
        <p className="text-center text-white">Bootstrap</p>
        <p className="text-center text-white">Tailwind CSS</p>
        <p className="text-center text-white">MySQL</p>

      </div>
 
      <div className="flex space-x-4">

      </div>
    </div>
  );
}

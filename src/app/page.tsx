"use client"
import { useState } from "react";
import { TbArrowBigRight } from "react-icons/tb";
import { BiSushi } from "react-icons/bi";
import { BiSolidSushi } from "react-icons/bi";
import { GiSushis } from "react-icons/gi";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FaPython, FaAws, FaGit, FaDatabase, FaReact, FaNodeJs } from "react-icons/fa";
import { SiPostgresql, SiFlask, SiPandas, SiGooglebigquery, SiApacheairflow, SiTeradata, SiNextdotjs, SiJavascript, SiGnubash, SiDocker, SiPolars } from "react-icons/si";

const techIcons: { [key: string]: JSX.Element } = {
  "Python": <FaPython />,
  "AWS": <FaAws />,
  "Git": <FaGit />,
  "SQL": <FaDatabase />,
  "Postgresql": <SiPostgresql />,
  "React.js": <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <FaNodeJs />,
  "Bash": <SiGnubash />,
  "Flask": <SiFlask />,
  "Pandas": <SiPandas />,
  "BigQuery": <SiGooglebigquery />,
  "Airflow": <SiApacheairflow />,
  "Teradata": <SiTeradata />,
  "Javascript": <SiJavascript />,
  "Docker": <SiDocker/>,
  "Polars": <SiPolars/>
};

const texto = {
  "navegacion": {
    "ingles": ['Home', 'Work / projects', 'About me', 'Contact'],
    "español": ['Inicio', 'Trabajo / proyectos', 'Sobre mi', 'Contacto']
  },
  "titulo": {
    "ingles": "Hello, I'm Lisandro, software developer.",
    "español": "Hola, soy Lisandro, desarrollador de software."
  },
  "sobre_mi_titulo": {
    "ingles": "About me",
    "español": "Sobre mi"
  },
  "sobre_mi": {
    "ingles": [
      "I love sports. I train calisthenics and play padel, but I've also done football, rugby, and various other types of training.",
      "Every now and then, I need to disappear and go on a hike. I've done the Inca Trail to Machu Picchu, climbed Mount Lanin, Cerro Tres Picos, Ciudad Perdida in Colombia, Bariloche treks, among others.",
      "I'm quite meticulous about food. I associate it a lot with my well-being and athletic performance.",
      "I really enjoy logical and mathematical challenges. During high school, I competed in math olympiads. I represented my country internationally on several occasions.",
      "I love diving into the depths of Reddit.",
      "I eat sushi with a lot of wasabi, and soy sauce of course."
    ],
    "español": [
      "Me encanta el deporte. Entreno calistenia y juego al padel, pero pasé también por el fútbol, rugby, y entrenamientos varios.",
      "Cada cierto tiempo necesito desconectar y hacer un sendero. Hice el camino del inca a Machu Picchu, subí el volcán Lanin, el cerro Tres Picos, llegue a Ciudad Perdida en Colombia, hice refugios de Bariloche, entre otros.",
      "Soy bastante meticuloso con la comida. Lo asocio mucho a mi bienestar y rendimiento deportivo.",
      "Me gustan mucho los desafíos lógico-matemáticos. Durante la secundaria competí en olimpiadas de matemática. Representé al país internacionalmente en reiteradas ocasiones.",
      "Me encanta meterme en las profundidades de Reddit.",
      "Como el sushi con mucho wasabi, y salsa de soja por supuesto."
    ]
  },
  "cv": {
    'ingles': 'Resume',
    'español': 'CV'
  },
  'Mantika': {
    'ingles': {
      'tipo': 'Full time',
      'fecha': 'Jan 2021 - Feb 2022',
      'rol': 'Data scientist / Data engineer',
      'tech': ['Python', 'SQL', 'Bash', 'Pandas', 'Teradata', 'BigQuery', 'Git', 'Docker']
    },
    'español': {
      'tipo': 'Full time',
      'fecha': 'Ene 2021 - Feb 2022',
      'rol': 'Data scientist / Data engineer',
      'tech': ['Python', 'SQL', 'Bash', 'Pandas', 'Teradata', 'BigQuery', 'Git', 'Docker']
    },
  },
  'Logicly (Vettafi - TMX)': {
    'ingles': {
      'tipo': 'Full time',
      'fecha': 'Feb 2022 - May 2024',
      'rol': 'Backend developer / Data engineer',
      'tech': ['Python', 'AWS', 'Flask', 'SQL', 'Postgresql', 'Polars', 'Airflow', 'Bash', 'Git']

    },
    'español': {
      'tipo': 'Full time',
      'fecha': 'Feb 2022 - May 2024',
      'rol': 'Backend developer / Data engineer',
      'tech': ['Python', 'AWS', 'Flask', 'SQL', 'Postgresql', 'Polars', 'Airflow', 'Bash', 'Git']
    },
  },
  'Cabo Frio': {
    'ingles': {
      'tipo': 'Contract - Freelance',
      'fecha': 'May 2024 - Oct 2024',
      'rol': 'Full-stack developer',
      'tech': ['Javascript', 'React.js', 'Next.js', 'Node.js', 'Postgresql', 'Bash', 'Git']
    },
    'español': {
      'tipo': 'Contrato - Freelance',
      'fecha': 'May 2024 - Oct 2024',
      'rol': 'Full-stack developer',
      'tech': ['Javascript', 'React.js', 'Next.js', 'Node.js', 'Postgresql', 'Bash', 'Git']
    },
  },
  'Forms Consulting': {
    'ingles': {
      'tipo': 'Contract - Freelance',
      'fecha': 'Oct 2024 - Present',
      'rol': 'Full-stack developer',
      'tech': ['Javascript', 'React.js', 'Next.js', 'Node.js', 'Postgresql', 'Bash', 'Git']
    },
    'español': {
      'tipo': 'Contrato - Freelance',
      'fecha': 'Oct 2024 - Presente',
      'rol': 'Full-stack developer',
      'tech': ['Javascript', 'React.js', 'Next.js', 'Node.js', 'Postgresql', 'Bash', 'Git']
    },
  }
};

const tarjetasTrabajo = {
  'Mantika': {
    'photos': ['mantika1.png', 'mantika2.png'],
  },
  'Logicly (Vettafi - TMX)': {
    'photos': ['logicly1.png', 'logicly2.png'],
  },
  'Cabo Frio': {
    'photos': ['cabofrio1.png', 'cabofrio2.png'],
  },
  'Forms Consulting': {
    'photos': ['forms1.png', 'forms2.png'],
  }
}

export default function Landing() {
  const [language, setLanguage] = useState<'español' | 'ingles'>('español');

  return (
    <div className={`left-line right-line`}>

      {/* Language switch */}
      <div onClick={() => { language === 'español' ? setLanguage('ingles') : setLanguage('español') }} className={`rounded-lg shadow-lg p-3 fixed bottom-8 right-8 bg-white hover:bg-gray-100 font-medium border-[1px]`}>
        {language === 'español' ? 'EN' : 'ES'}
      </div>

      {/* Navegacion */}
      <div className="sticky top-0 z-50 shadow-md flex justify-left gap-2 h-14 pl-16 pr-16 p-2 text-sm">
        <div className="flex gap-4 items-center">
          {texto['navegacion'][language].map((item, index) => (
            <a key={index + item} href={`#${item.replaceAll(' ', '')}`} className="hover:bg-gray-100 px-4 py-2 rounded-lg">{item}</a>
          ))}
        </div>
      </div>

      {/* Inicio */}
      <div className="flex justify-center items-center gap-16 min-h-[calc(100vh-56px)] overflow-hidden" id="inicio">
        <div className="h-[55vh] w-[55vh] rounded-full overflow-hidden">
          <img src="foto_machu_picchu.jpeg" alt="Foto de Lisandro en el Machu Picchu"
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110" />
        </div>
        <div className="w-96 text-5xl font-medium">
          <h1>{texto['titulo'][language]}</h1>
        </div>
      </div>

      {/* Carousel Trabajos / Proyectos */}
      <div className="px-32 py-16">
        <div className="flex justify-center pb-6">
          <h1 className="text-3xl">Trabajos / Proyectos</h1>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {Object.keys(tarjetasTrabajo).map((key: string, index) => (
              <CarouselItem key={index} className="2xl:basis-1/3 lg:basis-1/2">
                <div className="p-1">
                  <Card className="shadow-lg rounded-lg border-2">
                    <CardContent className="flex flex-col">
                      <div className="relative w-5/6 p-4">
                        <img className='border-2 rounded-lg shadow-lg absolute top-0 left-[50px] top-[50px] hover:z-10' src={tarjetasTrabajo[key]['photos'][0]}></img>
                        <img className='border-2 rounded-lg shadow-lg relative' src={tarjetasTrabajo[key]['photos'][1]}></img>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex flex-col items-center">
                          <h1 className="text-xl pt-16">{key}</h1>
                          <h2 className="text-gray-400">({texto[key][language]['tipo']})</h2>
                        </div>
                      </div>
                      <div className="flex flex-col mt-10">
                        {/* <div className="p-2 rounded-lg shadow-md">
                          <h2 className="">{texto[key][language]['tipo']}</h2>
                        </div> */}
                        <div className="text-blue-500 flex justify-center">
                          <h2 className="font-semibold"> {texto[key][language]['rol']}</h2>
                        </div>
                        <div className="justify-center flex">
                          <h2 className="text-xs">{texto[key][language]['fecha']}</h2>
                        </div>
                      </div>
                      <div className="flex flex-col mt-10 gap-4">
                        <div className="p-2 text-gray-600 flex flex-wrap gap-2">
                          {texto[key][language].tech.map((tech:string, index:number) => (
                            <div key={index} className="flex items-center gap-1 p-1 border rounded-md shadow-sm bg-white">
                              {techIcons[tech] || null} {/* Muestra el icono si existe */}
                              <span>{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Sobre mi */}
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] overflow-hidden px-32 pt-16" id="hola">
        <div className="flex flex-col gap-4 shadow-lg rounded-lg border-2 p-16">
          <h1 className="text-4xl">{texto['sobre_mi_titulo'][language]}</h1>
          {texto['sobre_mi'][language].map((parrafo, index) => (
            <p key={index}>{""}{parrafo}
              {(parrafo.includes('math') || parrafo.includes('matemática')) && <a href="https://www.imo-official.org/participant_r.aspx?id=26042&column=year&order=desc&language=en" target="_blank">
                <TbArrowBigRight className="inline text-2xl ml-1"></TbArrowBigRight>
              </a>}
              {parrafo.includes('sushi') &&
                <div className="inline">
                  <BiSushi className="inline text-xl ml-1 hover:text-gray-500"></BiSushi>
                  <BiSolidSushi className="inline text-xl ml-1 hover:text-gray-500"></BiSolidSushi>
                  <GiSushis className="inline text-xl ml-1 hover:text-gray-500"></GiSushis>
                </div>}
            </p>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-2 justify-left p-10 min-h-24 bg-gray-100">
        <a href="https://www.linkedin.com/in/lisandro-filloy/" target="_blank" className="flex gap-2">
          <FaLinkedin className="text-2xl"></FaLinkedin>
        </a>
        <a href="https://drive.google.com/file/d/1bDTRBy1Ygt-XsakhSvxnKeUc0pSXuszs/view?usp=drive_link" target="_blank">
          <div className="flex gap-2">
            <IoDocumentTextOutline className="text-2xl"></IoDocumentTextOutline>
            <h1>{texto['cv'][language]}</h1>
          </div>
        </a>
        <div className="flex gap-2">
          <IoMailOutline className="text-2xl"></IoMailOutline>
          <h1>lisandrofilloy@gmail.com</h1>
        </div>

      </div>
    </div>

  );
};

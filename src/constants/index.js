import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Desenvolvedor Web",
    icon: web,
  },
  {
    title: "Desenvolvedor React Native",
    icon: mobile,
  },
  {
    title: "Desenvolvedor Backend",
    icon: backend,
  },
  {
    title: "Desenvolvedor 3d",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [

  {
    title: "Desenvolvedor Web",
    company_name: "Deny Tênis",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2013 - Feb 2023",
    points: [
      "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade.",
      "Implementar design responsivo e garantir compatibilidade entre navegadores.",
      "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
    ],
  },
  {
    title: "Desenvolvedor web",
    company_name: "Freelancer",
    icon: shopify,
    iconBg: "#383E56",
    date: "Fev 2023 - Atual",
    points: [
      "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade.",
      "Implementar design responsivo e garantir compatibilidade entre navegadores.",
      "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
    ],
  },
  {
    title: "Estágio",
    company_name: "LG Lugar de Gente",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Suporte de validação",
      "Validador responsável.",
      "Auxílio e treinamento a novos colaboradores.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Achei que era impossível fazer um site tão bonito quanto o nosso produto, mas Caique provou que eu estava errada.",
    name: "Mayara",
    designation: "CEO",
    company: "Valen",
    image: "https://randomuser.me/api/portraits/women/84.jpg",
  },
  {
    testimonial:
      "Nunca conheci um desenvolvedor web que realmente se preocupasse com o sucesso de seus clientes como Caique.",
    name: "Antonio",
    designation: "CEO",
    company: "Deny Frei Caneca",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    testimonial:
      "Depois que Caique otimizou nosso site, nosso tráfego aumentou 50%. Não podemos agradecê-los o suficiente!",
    name: "Gabriela",
    designation: "CEO",
    company: "Endócrino Lab",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Desenvolvimento do meu portfolio para demonstrar a minha expêriencia em codificação front-end trazendo a prespectiva em 3d e utilizando blibiotecas para um scroll suave e interativo.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "WE CARE",
    description:
      "Na We Care entendemos que o seu animal de estimação é um membro querido da sua família e acreditamos que ele merece o melhor cuidado possível.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/caiqueborghese",
  },
  {
    name: "Decodificador de Texto",
    description:
      "Decodificador de texto, utilizado para criptografar e descriptografar mensagens fazendo com que suas senhas e seus textos tornem ainda mais seguros.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://caiqueborghese.github.io/CHALLENGER-ORACLE-ALURA/",
  },
];

export { services, technologies, experiences, testimonials, projects };
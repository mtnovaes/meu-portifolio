



function renderTechs(){

const skills = [
  {
    title: "HTML5",
    desc: "Estrutura Semântica",
    iconColor: "text-orange-500",
    icon: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>`,
  },
  {
    title: "Tailwind CSS",
    desc: "Estilização Rápida",
    iconColor: "text-cyan-400",
    icon: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>`,
  },
  {
    title: "JavaScript",
    desc: "Interatividade",
    iconColor: "text-yellow-400",
    icon: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
  },
  {
    title: "Mobile First",
    desc: "Responsividade",
    iconColor: "text-purple-400",
    icon: `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>`,
  },
];



const containerSkills = document.querySelector('#tech-grid')


containerSkills.innerHTML = skills.map(skill=>{
  return `
  <div class= " card p-6 flex gap-4 border-2 border-white/10 bg-white/5 hover:border-purple-500/50  hover:shadow-500/20 transition-all duration-300 hover:translate-y-2 group: rounded-2xl cursor-pointer items-center ">
  <div class="${skill.iconColor}">
  ${skill.icon}
  </div>
  <div>
  <h3 class=" text-xl font-semibold text-white">${skill.title}</h3>
  <p class=" text-gray-200"> ${skill.desc} </p>
  </div>
  </div>
  `;
}).join('');

}

renderTechs();





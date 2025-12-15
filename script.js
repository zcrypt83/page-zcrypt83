/* =========================================
   AREA DE DATOS - ACTUALIZADO CON CERTIFICACIONES CISCO Y SKILLS DETALLADOS
   ========================================= */
const linkedInData = {
    profile: {
        name: "Ivan Zarate soncco",
        headline: "Desarrollador de sistemas front-end y back-end (idat) & Seguridad Informática (autodidacta) | Networking (CCNA) | Administracion de Negocios Internacionales (utp)",
        location: "Perú",
        email: "zcrypt83@duck.com",
        linkedinUrl: "https://www.linkedin.com/in/ivan-zarate-a75112230",
        githubUrl: "https://github.com/zcrypt83",
        avatarUrl: "https://ui-avatars.com/api/?name=Ivan+Zarate&background=0055a5&color=fff&size=150&font-size=0.4"
    },
    about: {
        title: "Perfil Profesional",
        description: `Profesional en formación con un perfil multidisciplinario único que integra la ingeniería de sistemas y la gestión empresarial. 
                      Especializado en el desarrollo de sistemas de seguridad Front-end y Back-end, con sólidas competencias en programación (Python, JS, SQL) 
                      y hacking ético. Complemento mi perfil técnico con una visión estratégica de negocios internacionales, administración logística y análisis financiero.`
    },
    // Habilidades extraídas directamente de tu lista de "Conocimientos y Aptitudes" y Certificaciones Cisco.
    skills: [
        "Networking (CCNA)", "Python", "JavaScript", "SQL", "Bash / Shell", 
        "Peritaje Informático", "Seguridad de Redes", "Hacking Ético", "Auditoría Informática",
        "Soporte TI (IT Essentials)", 
        "Gestión Empresarial", "Administración Logística", "Análisis Financiero", "Finanzas",
        "Análisis de Datos", "Gestión de Proyectos", "Ingeniería"
    ],
    experience: [
        {
            position: "Desarrollador de Sistemas (Freelance / Académico)",
            company: "Proyectos Personales",
            period: "sep 2025 - Presente",
            description: [
                "Desarrollo de aplicaciones web seguras aplicando principios de hacking ético.",
                "Automatización de tareas mediante scripts en Bash y Python.",
                "Diseño de bases de datos relacionales SQL para gestión de información."
            ]
        },
        // Proyecto de Desarrollo
        {
            position: "Proyecto Académico: Sistema de Gestión de Inventario Seguro (Full Stack)",
            company: "Idat (Seguridad y Desarrollo)",
            period: "Mayo 2025 - Agos 2025",
            description: [
                "Diseño e implementación de una aplicación Full Stack (MERN/MEAN Stack) con autenticación basada en tokens.",
                "Aplicación de prácticas de seguridad (OWASP Top 10) para prevenir inyecciones SQL y ataques XSS.",
                "Creación de interfaces responsivas y dinámicas enfocadas en la usabilidad y la accesibilidad."
            ]
        },
        // Proyecto de Administración/Negocios
        {
            position: "Análisis y Plan de Expansión para PyME Exportadora",
            company: "UTP (Administración de Negocios Internacionales)",
            period: "Mar 2024 - Jul 2024",
            description: [
                "Elaboración de un estudio de mercado para identificar oportunidades de exportación en el sector textil en LATAM.",
                "Creación de un modelo financiero para evaluar la viabilidad de la inversión y la cadena logística internacional.",
                "Diseño de un plan de gestión empresarial enfocado en la optimización de costos logísticos y aduaneros, reduciendo gastos proyectados en un 15%."
            ]
        }
    ],
    education: [
        {
            degree: "Administración de Negocios Internacionales",
            school: "UTP Universidad Tecnológica del Perú",
            period: "2022 - 2027",
            description: ["Aptitudes: Gestión empresarial, Administración logística, Finanzas, Análisis financiero."]
        },
        {
            degree: "Desarrollo de Sistemas de Seguridad Front-end y Back-end",
            school: "Idat",
            period: "En curso",
            description: ["Aptitudes: Ingeniería, Python, JavaScript, Bash, SQL, Seguridad de redes, Hacking ético."]
        }
    ],
    // DATOS DE CERTIFICACIONES ACTUALIZADOS
// DATOS DE CERTIFICACIONES ACTUALIZADOS CON ESPACIO PARA URL
    certifications: [
        {
            name: "CCNAv7: Introducción a Redes",
            issuer: "Cisco Networking Academy / IDAT", 
            date: "21/12/2023",
            // *** PEGA AQUÍ LA RUTA O URL DEL CERTIFICADO CCNA ***
            credentialUrl: "cnna.jpg"
        },
        {
            name: "IT Essentials",
            issuer: "Cisco Networking Academy / IDAT", 
            date: "22/12/2023",
            // *** PEGA AQUÍ LA RUTA O URL DEL CERTIFICADO IT ESSENTIALS ***
            credentialUrl: "ess.jpg" 
        
        }
    ]

};

/* =========================================
   LÓGICA DE RENDERIZADO (INCLUYE NUEVA SECCIÓN)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    initThemeToggle();
});

function renderProfile() {
    // 1. Render Header (Sin Cambios)
    const headerHTML = `
        <div class="profile-img-container">
            <img src="${linkedInData.profile.avatarUrl}" alt="${linkedInData.profile.name}" class="profile-img">
        </div>
        <div class="profile-info">
            <h1>${linkedInData.profile.name}</h1>
            <h2>${linkedInData.profile.headline}</h2>
            <p><i class="fas fa-map-marker-alt"></i> ${linkedInData.profile.location}</p>
        </div>
    `;
    document.getElementById('profile-header').innerHTML = headerHTML;

    // 2. Render Contact (Sin Cambios)
    const contactHTML = `
        <h3><i class="fas fa-address-card"></i> Contacto</h3>
        <ul class="contact-list">
            <li>
                <a href="mailto:${linkedInData.profile.email}">
                    <i class="fas fa-envelope"></i> ${linkedInData.profile.email}
                </a>
            </li>
            <li>
                <a href="${linkedInData.profile.linkedinUrl}" target="_blank">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
            </li>
            <li>
                <a href="${linkedInData.profile.githubUrl}" target="_blank">
                    <i class="fab fa-github"></i> GitHub
                </a>
            </li>
        </ul>
    `;
    document.getElementById('contact-section').innerHTML = contactHTML;

    // 3. Render Skills (Sin Cambios)
    const skillsHTML = `
        <h3><i class="fas fa-code"></i> Habilidades</h3>
        <div class="skills-wrapper">
            ${linkedInData.skills.map(skill => `<span class="skill-pill">${skill}</span>`).join('')}
        </div>
    `;
    document.getElementById('skills-section').innerHTML = skillsHTML;

    // 4. Render About (Sin Cambios)
    const aboutHTML = `
        <h3><i class="fas fa-user"></i> ${linkedInData.about.title}</h3>
        <p>${linkedInData.about.description}</p>
    `;
    document.getElementById('about-section').innerHTML = aboutHTML;

    // 5. Render Experience (Sin Cambios)
    const expHTML = `
        <h3><i class="fas fa-briefcase"></i> Experiencia y Proyectos</h3>
        <div class="timeline">
            ${linkedInData.experience.map(job => `
                <div class="timeline-item">
                    <h4>${job.position}</h4>
                    <span class="company-name">${job.company}</span>
                    <span class="period">${job.period}</span>
                    <ul>
                        ${job.description.map(desc => `<li>${desc}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    `;
    document.getElementById('experience-section').innerHTML = expHTML;

    // 6. Render Education (Sin Cambios)
    const eduHTML = `
        <h3><i class="fas fa-graduation-cap"></i> Educación</h3>
        ${linkedInData.education.map(edu => `
            <div class="education-item">
                <h4>${edu.degree}</h4>
                <p class="company-name">${edu.school}</p>
                <span class="period">${edu.period}</span>
                ${edu.description ? `<p class="edu-desc"><small>${edu.description}</small></p>` : ''}
            </div>
        `).join('')}
    `;
    document.getElementById('education-section').innerHTML = eduHTML;

    // 7. Render Certifications (FUNCIÓN ACTUALIZADA PARA SOPORTAR URLS)
    const certHTML = `
        <h3><i class="fas fa-certificate"></i> Credenciales</h3>
        <div class="certifications-list">
            ${linkedInData.certifications.map(cert => {
                // Si existe una URL, hacemos el título un enlace
                const title = cert.credentialUrl 
                    ? `<a href="${cert.credentialUrl}" target="_blank" class="cert-link"><h4>${cert.name} <i class="fas fa-external-link-alt"></i></h4></a>`
                    : `<h4>${cert.name}</h4>`;

                return `
                    <div class="certification-item">
                        ${title}
                        <p class="company-name">${cert.issuer}</p>
                        <span class="period">${cert.date}</span>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    document.getElementById('certifications-section').innerHTML = certHTML;

}

function initThemeToggle() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    toggleSwitch.addEventListener('change', function(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}

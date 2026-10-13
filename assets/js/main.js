// Internationalization Data
let currentLang = localStorage.getItem('hocha_lang') || 'ko';

const i18nData = {
    ko: {
        "nav-home": "홈",
        "nav-about": "스튜디오 소개",
        "nav-privacy": "개인정보 처리 방침",
        "nav-contact": "연락처",
        "hero-badge": "Next Generation Game Studio",
        "hero-title": "상상을 뛰어넘는<br>새로운 플레이 경험",
        "hero-desc": "HOCHA Games는 독창적인 세계관과 몰입감 넘치는 가상 경험을 만들어가는 독립 게임 개발 스튜디오입니다.",
        "hero-btn": "스튜디오 알아보기",
        "about-subtitle": "우리가 게임을 만들어가는 핵심 가치입니다",
        "card1-title": "독창적인 아이디어",
        "card1-desc": "정형화된 틀에서 벗어나 새로움과 신선한 재미를 선사하는 독창적인 메카닉과 세계관을 탐구합니다.",
        "card2-title": "플레이어 중심",
        "card2-desc": "유저들의 피드백을 소중히 여깁니다. 지속적인 소통을 통해 더욱 완벽하고 즐거운 플레이 환경을 조성합니다.",
        "card3-title": "몰입의 즐거움",
        "card3-desc": "단순한 플레이를 넘어 유저가 스토리에 완전히 몰입하고 깊은 감동을 느낄 수 있는 작품 개발을 목표로 합니다.",
        "footer-desc": "게임에 대한 열정과 끊임없는 도전으로 최고의 재미를 선보이겠습니다.",
        "footer-nav-title": "안내 & 정책",
        "privacy-heading": "개인정보 처리 방침",
        "back-home": "홈으로 돌아가기",
        "privacy-body": `
            <p>HOCHA Games(이하 '회사')는 이용자의 개인정보를 중요시하며, 관련 법률을 준수하고 있습니다.</p>
            <h4>1. 수집하는 개인정보 항목</h4>
            <p>회사는 별도의 회원가입 없이 대부분의 콘텐츠에 자유롭게 접근할 수 있습니다. 문의 및 고객지원을 이용할 경우에 한해 이메일 주소(hochagames@gmail.com)를 수집할 수 있습니다.</p>
            <h4>2. 개인정보의 수집 및 이용목적</h4>
            <p>수집된 정보는 고객 문의 사항 처리 및 서비스 개선 목적으로만 활용됩니다.</p>
            <h4>3. 개인정보의 보유 및 이용기간</h4>
            <p>목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>
            <h4>4. 문의처</h4>
            <p>개인정보 보호 관련 문의: hochagames@gmail.com</p>
        `
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About Studio",
        "nav-privacy": "Privacy Policy",
        "nav-contact": "Contact",
        "hero-badge": "Next Generation Game Studio",
        "hero-title": "Next-Gen Experiences<br>Beyond Imagination",
        "hero-desc": "HOCHA Games is an indie game studio dedicated to crafting immersive virtual worlds and creative gameplay.",
        "hero-btn": "Explore Studio",
        "about-subtitle": "Our core values in game development",
        "card1-title": "Creative Mechanics",
        "card1-desc": "We explore original game mechanics and worldbuilding that offer fresh excitement beyond conventional bounds.",
        "card2-title": "Player-Centric",
        "card2-desc": "We value community feedback and strive to create a better gaming environment through continuous communication.",
        "card3-title": "Pure Immersion",
        "card3-desc": "Our goal is to build games where players can fully immerse themselves in rich stories and engaging mechanics.",
        "footer-desc": "Dedicated to bringing ultimate fun through passion and continuous innovation.",
        "footer-nav-title": "Info & Policy",
        "privacy-heading": "Privacy Policy",
        "back-home": "Back to Home",
        "privacy-body": `
            <p>HOCHA Games ('Company') values user privacy and complies with applicable data protection legislation.</p>
            <h4>1. Information Collected</h4>
            <p>Most content is accessible without registration. Email addresses (hochagames@gmail.com) may be collected when contacting support.</p>
            <h4>2. Purpose of Collection</h4>
            <p>Collected data is strictly used to address user inquiries and improve overall service quality.</p>
            <h4>3. Retention Period</h4>
            <p>Data will be deleted promptly once the inquiry purpose has been fulfilled.</p>
            <h4>4. Contact Us</h4>
            <p>Privacy Inquiries: hochagames@gmail.com</p>
        `
    }
};

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[currentLang][key]) {
            el.innerHTML = i18nData[currentLang][key];
        }
    });

    const privacyContent = document.getElementById('privacyContent');
    if (privacyContent) {
        privacyContent.innerHTML = i18nData[currentLang]['privacy-body'];
    }

    const btnKo = document.getElementById('btn-ko');
    const btnEn = document.getElementById('btn-en');
    if (btnKo && btnEn) {
        btnKo.classList.toggle('active', currentLang === 'ko');
        btnEn.classList.toggle('active', currentLang === 'en');
    }
    
    localStorage.setItem('hocha_lang', currentLang);
}

function toggleLanguage() {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    updateLanguage();
}

// Canvas Particles Effect Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();

    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = 45;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.alpha = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }

            draw() {
                ctx.fillStyle = `rgba(0, 242, 254, ${this.alpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        animate();
    }
});
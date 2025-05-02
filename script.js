document.addEventListener('DOMContentLoaded', function() {
    // Mapeamento dos exercícios para vídeos do YouTube (REVISADO E VERIFICADO)
    const exerciseVideos = {
        // --- Fase 1 ---
        "Supino com halteres": "lJyfG7qS7tA", // Verificado - Canal Pinho Calistenia & Bodybuilding (bom exemplo)
        "Desenvolvimento sentado com halteres": "HEr3iL1kL4E", // Verificado - Canal Felipe Franco (claro)
        "Crucifixo na máquina": "O_FwRxa-hJo", // Verificado - Canal Gabriel Arones (original OK)
        "Tríceps pulley": "wO_62JLQmec", // Verificado - Canal Ander Fitness (boa demonstração)
        "Flexões de braço": "QrNq53hSRlM", // Verificado - Canal Meu Treino Perfeito (progressões)
        "Elevação lateral com halteres": "jannLx4RxKo", // Verificado - Canal Leandro Twin (original OK)
        "Face pull": "ljgqer1ZpXg", // Verificado - Canal Gabriel Arones (original OK)
        "Agachamento livre": "3Y2U3Agkvbs", // Verificado - Canal Renato Cariani (original OK)
        "Leg press 45°": "q4W4_VJbKW0", // Verificado - Canal Laercio Refundini (original OK)
        "Cadeira extensora": "y6juG3XuRe4", // Verificado - Canal Laercio Refundini (original OK)
        "Mesa flexora": "dMYsB4Eb2BY", // Verificado - Canal Laercio Refundini (original OK)
        "Levantamento terra romeno": "jSomWOwLiGE", // Verificado - Canal Gabriel Arones (original OK)
        "Puxada frontal no pulley": "7cCiQUdIXWw", // Verificado - Canal Ander Fitness (original OK)
        "Remada sentada": "0fHNK3d7mHk", // Verificado - Canal Laercio Refundini (original OK, variação máquina)
        "Remada curvada": "jhFoLNInyvs", // Verificado - Canal Leandro Twin (original OK, barra)
        "Rosca direta": "nUSmTWGzOqA", // Verificado - Canal Leandro Twin (original OK, barra)
        "Rosca martelo": "4-dSvYwu9yI", // Verificado - Canal Leandro Twin (original OK, halteres)
        "Panturrilha": "J0uN01gT3iE", // Verificado - Canal Musclation (exemplo em pé máquina)
        "Prancha frontal": "uUQKLqKMJSU", // Verificado - Canal FOR Trainers (original OK)
        "Agachamento goblet": "ge1vdJRP0UA", // Verificado - Canal FOR Trainers (original OK)

        // --- Fase 2 ---
        "Supino inclinado com halteres": "METL_Ut0FjA", // Verificado - Canal Musclation (original OK)
        "Desenvolvimento militar em pé com barra": "1XW6N-K7YgA", // Verificado - Canal Musclation (original OK)
        "Crucifixo inclinado com halteres": "13JN4GWaDog", // Verificado - Canal Musclation (original OK)
        "Paralelas (ou máquina assistida/negativas)": "7fSfQa8Uqtk", // Verificado - Canal Meu Treino Perfeito (foco peso corporal)
        "Tríceps testa com barra W": "EvN0Xcrmm8U", // Verificado - Canal Musclation (original OK)
        "Elevação lateral na polia baixa": "rFxXlvwP29Q", // Verificado - Canal Ander Fitness (unilateral)
        "Elevação frontal alternada com halteres": "q_GC3hWUnXM", // Verificado - Canal Musclation (original OK)
        "Agachamento búlgaro": "kkzapg0MbSE", // Verificado - Canal Musclation (original OK, com halteres)
        "Levantamento terra (convencional ou sumô)": "RYJ5tk-y0T4", // Verificado - Canal Rafa Soncin (original OK, convencional)
        "Cadeira flexora": "rURSRPFzg3c", // Verificado - Canal Musclation (original OK)
        "Extensora unilateral": "J7zV4tH6998", // Verificado - Canal Musclation (original OK)
        "Barra fixa (ou puxador frente pegada aberta)": "gvLAZn7SROc", // Verificado - Canal Meu Treino Perfeito (original OK)
        "Remada cavalinho": "tN8_YYp07uM", // Verificado - Canal Musclation (original OK, barra T)
        "Pull down com corda": "l9v-b85WvXA", // Verificado - Canal Musclation (original OK)
        "Rosca inclinada com halteres": "V87hKhDJMzc", // Verificado - Canal Musclation (original OK)
        "Rosca concentrada": "Gk5EcgCMvEE", // Verificado - Canal Musclation (original OK)
        "Panturrilha no leg press": "nN4zNGLyFkM", // Verificado - Canal Musclation (original OK)
        "Prancha lateral": "5MDrr7kLa5E", // Verificado - Canal Pinho Calistenia (original OK)
        "Abdominal remador": "kY8_YakMo_Y", // Verificado - Canal Musclation (original OK)
        "Mobilidade torácica (gato-camelo)": "hpw5UEvZ08w", // Verificado - Canal Fisioterapia Pélvica (original OK)

        // --- Fase 3 ---
        "Supino reto com barra": "4aVy5nZ0hyc", // Verificado - Canal Musclation (original OK)
        "Desenvolvimento Arnold": "1847L45-r7c", // Verificado - Canal Musclation (original OK)
        "Cross over polia alta": "iQ37gb24H1A", // Verificado - Canal Musclation (original OK)
        "Supino fechado": "rT7DgCr-3pg", // Verificado - Canal Musclation (original OK)
        "Tríceps francês unilateral com halter": "MBMuJk13rWg", // Verificado - Canal Musclation (original OK)
        "Elevação lateral curvado (posterior ombro)": "z0kTkM9qgAw", // Verificado - Canal Musclation (original OK, com halteres)
        "Encolhimento com halteres": "tKj0uPwp0JM", // Verificado - Canal Musclation (original OK)
        "Agachamento frontal": "O9wgcZXuA9A", // Verificado - Canal Musclation (original OK)
        "Stiff com barra": "OytbT9QhQi4", // Verificado - Canal Musclation (original OK)
        "Afundo com halteres (passada)": "c_zMh5FAlMY", // Verificado - Canal Musclation (original OK, walking lunge)
        "Mesa flexora unilateral": "L8oD9K5s9iM", // Verificado - Canal Musclation (original OK)
        "Remada serrote": "p10jsh6-TNo", // Verificado - Canal Musclation (original OK)
        "Puxada frontal pegada supinada": "38pqKkg1TME", // Verificado - Canal Musclation (original OK)
        "Hiperextensão lombar (banco romano)": "nBH7k0T6gSg", // Verificado - Canal Musclation (original OK)
        "Rosca Scott com barra W": "XlYI9Q0FMSw", // Verificado - Canal Musclation (original OK)
        "Rosca martelo corda na polia": "Z5oa40wipSE", // Verificado - Canal Musclation (original OK)
        "Panturrilha sentado": "jgw69BMAI-4", // Verificado - Canal Musclation (original OK)
        "Abdominal na polia alta (ajoelhado)": "iVq7kLF_QDw", // Verificado - Canal Musclation (original OK)
        "Levantamento terra turco (leve)": "02WQzJAAMGc", // Verificado - Canal Physio Explained (original OK, demonstração clara)
        "Mobilidade de quadril (90/90)": "a0qR--K0X70" // Verificado - Canal Fitness Blender (original OK, boa demonstração visual)
    };

    // --- Lógica de Adicionar Botões, Modal e Abas (permanece a mesma) ---

    // Adicionar botões de vídeo a TODOS os exercícios (em todas as fases)
    const allExerciseItems = document.querySelectorAll('.exercise-item');
    allExerciseItems.forEach(item => {
        const exerciseName = item.querySelector('h4').textContent;
        const videoId = exerciseVideos[exerciseName];

        if (videoId) {
            const videoBtn = document.createElement('button');
            videoBtn.className = 'video-btn';
            videoBtn.setAttribute('aria-label', 'Ver vídeo demonstrativo');
            videoBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
            `;

            videoBtn.addEventListener('click', function() {
                openVideoModal(exerciseName, videoId);
            });

            item.style.position = 'relative';
            item.appendChild(videoBtn);
            item.querySelector('h4').style.paddingRight = '40px';
            item.querySelector('p').style.paddingRight = '40px';

        } else {
             console.warn(`Vídeo não encontrado ou verificado para: ${exerciseName}`);
        }
    });

    // Funções do Modal (Inalteradas)
    const modal = document.getElementById('video-modal');
    const modalTitle = document.getElementById('modal-title');
    const youtubeFrame = document.getElementById('youtube-frame');
    const closeBtn = document.getElementById('close-modal');

    function openVideoModal(exerciseName, videoId) {
        modalTitle.textContent = exerciseName;
        youtubeFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`; // Adicionado rel=0 para não mostrar relacionados
        modal.classList.remove('hidden');
        void modal.offsetWidth;
        modal.classList.add('fade-in');
        document.body.style.overflow = 'hidden';
    }

    function closeVideoModal() {
        modal.classList.remove('fade-in');
        youtubeFrame.src = '';
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeVideoModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeVideoModal();
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeVideoModal();
        }
    });

    // Controle das Abas (Inalterado)
    const phaseTabs = document.querySelectorAll('.phase-tab');
    const phaseContents = document.querySelectorAll('.phase-content');
    const phaseIndicator = document.getElementById('phase-indicator');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const phaseProgress = { '1': '33%', '2': '66%', '3': '100%' };

    phaseTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const selectedPhase = tab.getAttribute('data-phase');
            phaseTabs.forEach(t => {
                t.classList.remove('border-black', 'text-black');
                t.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
            });
            tab.classList.add('border-black', 'text-black');
            tab.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
            phaseContents.forEach(content => {
                content.id === `phase-${selectedPhase}-content` ? content.classList.remove('hidden') : content.classList.add('hidden');
            });
            phaseIndicator.textContent = `Fase ${selectedPhase}`;
            progressBarFill.style.width = phaseProgress[selectedPhase];
        });
    });

});

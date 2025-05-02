document.addEventListener('DOMContentLoaded', function() {
    // Mapeamento dos exercícios para vídeos do YouTube (ATUALIZADO COM FASES 2 e 3)
    const exerciseVideos = {
        // --- Fase 1 ---
        "Supino com halteres": "jrT3xWa0U9M",
        "Desenvolvimento sentado com halteres": "V7rw4dRMw2M",
        "Crucifixo na máquina": "O_FwRxa-hJo",
        "Tríceps pulley": "5qJnirlDtwk",
        "Flexões de braço": "GOj4TMPVuZg",
        "Elevação lateral com halteres": "jannLx4RxKo",
        "Face pull": "ljgqer1ZpXg",
        "Agachamento livre": "3Y2U3Agkvbs",
        "Leg press 45°": "q4W4_VJbKW0",
        "Cadeira extensora": "y6juG3XuRe4",
        "Mesa flexora": "dMYsB4Eb2BY",
        "Levantamento terra romeno": "jSomWOwLiGE",
        "Puxada frontal no pulley": "7cCiQUdIXWw",
        "Remada sentada": "0fHNK3d7mHk",
        "Remada curvada": "jhFoLNInyvs",
        "Rosca direta": "nUSmTWGzOqA",
        "Rosca martelo": "4-dSvYwu9yI",
        "Panturrilha": "h7bZ4XbuZLg", // Exemplo genérico, usar específico do aparelho (em pé)
        "Prancha frontal": "uUQKLqKMJSU",
        "Agachamento goblet": "ge1vdJRP0UA",

        // --- Fase 2 ---
        "Supino inclinado com halteres": "METL_Ut0FjA",
        "Desenvolvimento militar em pé com barra": "1XW6N-K7YgA", // Exemplo, pode variar execução
        "Crucifixo inclinado com halteres": "13JN4GWaDog",
        "Paralelas (ou máquina assistida/negativas)": "r324v3zxc50", // Exemplo para assistida/peso corporal
        "Tríceps testa com barra W": "EvN0Xcrmm8U",
        "Elevação lateral na polia baixa": "kue7k2sb99o", // Exemplo, pode ser unilateral
        "Elevação frontal alternada com halteres": "q_GC3hWUnXM",
        "Agachamento búlgaro": "kkzapg0MbSE", // Com halteres
        "Levantamento terra (convencional ou sumô)": "RYJ5tk-y0T4", // Convencional
        "Cadeira flexora": "rURSRPFzg3c", // Igual mesa flexora, mas sentado
        "Extensora unilateral": "J7zV4tH6998", // Fazer uma perna de cada vez
        "Barra fixa (ou puxador frente pegada aberta)": "gvLAZn7SROc", // Barra Fixa
        "Remada cavalinho": "tN8_YYp07uM", // Exemplo com barra T
        "Pull down com corda": "l9v-b85WvXA",
        "Rosca inclinada com halteres": "V87hKhDJMzc",
        "Rosca concentrada": "Gk5EcgCMvEE",
        "Panturrilha no leg press": "nN4zNGLyFkM",
        "Prancha lateral": "5MDrr7kLa5E",
        "Abdominal remador": "kY8_YakMo_Y",
        "Mobilidade torácica (gato-camelo)": "hpw5UEvZ08w",

        // --- Fase 3 ---
        "Supino reto com barra": "4aVy5nZ0hyc",
        "Desenvolvimento Arnold": "1847L45-r7c",
        "Cross over polia alta": "iQ37gb24H1A",
        "Supino fechado": "rT7DgCr-3pg",
        "Tríceps francês unilateral com halter": "MBMuJk13rWg", // Exemplo, pode ser feito em pé ou sentado
        "Elevação lateral curvado (posterior ombro)": "z0kTkM9qgAw", // Com Halteres
        "Encolhimento com halteres": "tKj0uPwp0JM",
        "Agachamento frontal": "O9wgcZXuA9A",
        "Stiff com barra": "OytbT9QhQi4",
        "Afundo com halteres (passada)": "c_zMh5FAlMY", // Walking Lunges
        "Mesa flexora unilateral": "L8oD9K5s9iM", // Fazer uma perna de cada vez
        "Remada serrote": "p10jsh6-TNo",
        "Puxada frontal pegada supinada": "38pqKkg1TME",
        "Hiperextensão lombar (banco romano)": "nBH7k0T6gSg",
        "Rosca Scott com barra W": "XlYI9Q0FMSw",
        "Rosca martelo corda na polia": "Z5oa40wipSE",
        "Panturrilha sentado": "jgw69BMAI-4",
        "Abdominal na polia alta (ajoelhado)": "iVq7kLF_QDw",
        "Levantamento terra turco (leve)": "02WQzJAAMGc", // Turkish Get-Up (usar kettlebell ou halter leve)
        "Mobilidade de quadril (90/90)": "a0qR--K0X70" // Exemplo
    };

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

            // Adiciona o botão dentro do H4 para melhor posicionamento relativo ou ao lado dele
            item.style.position = 'relative'; // Garante contexto de posicionamento
            item.appendChild(videoBtn);
             // Ajuste para que o texto não sobreponha o botão
             item.querySelector('h4').style.paddingRight = '40px';
             item.querySelector('p').style.paddingRight = '40px';

        } else {
            // Opcional: Logar exercícios sem vídeo para facilitar a busca posterior
             console.warn(`Vídeo não encontrado para: ${exerciseName}`);
        }
    });

    // --- Controle do Modal de Vídeo (Inalterado, mas funções globais) ---
    const modal = document.getElementById('video-modal');
    const modalTitle = document.getElementById('modal-title');
    const youtubeFrame = document.getElementById('youtube-frame');
    const closeBtn = document.getElementById('close-modal');

    function openVideoModal(exerciseName, videoId) {
        modalTitle.textContent = exerciseName;
        youtubeFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`; // Adicionado autoplay
        modal.classList.remove('hidden');
        // Força reflow para garantir que a transição ocorra
        void modal.offsetWidth;
        modal.classList.add('fade-in');
        document.body.style.overflow = 'hidden'; // Impede scroll do body
    }

    function closeVideoModal() {
        modal.classList.remove('fade-in');
        // Opcional: Adicionar classe fade-out se definida no CSS para animação de saída
        // modal.classList.add('fade-out');
        youtubeFrame.src = ''; // Interrompe o vídeo
        // Espera a transição antes de esconder (se houver animação de saída)
        // setTimeout(() => {
             modal.classList.add('hidden');
            // modal.classList.remove('fade-out');
        // }, 300); // Ajuste o tempo para corresponder à sua transição CSS
         document.body.style.overflow = ''; // Restaura scroll do body
    }

    closeBtn.addEventListener('click', closeVideoModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) { // Fecha se clicar no fundo escuro
            closeVideoModal();
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeVideoModal();
        }
    });

    // --- Controle das Abas de Fase ---
    const phaseTabs = document.querySelectorAll('.phase-tab');
    const phaseContents = document.querySelectorAll('.phase-content');
    const phaseIndicator = document.getElementById('phase-indicator');
    const progressBarFill = document.getElementById('progress-bar-fill');

    const phaseProgress = {
        '1': '33%',
        '2': '66%',
        '3': '100%'
    };

    phaseTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const selectedPhase = tab.getAttribute('data-phase');

            // Atualiza Estilo das Abas
            phaseTabs.forEach(t => {
                t.classList.remove('border-black', 'text-black');
                t.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
            });
            tab.classList.add('border-black', 'text-black');
            tab.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');

            // Mostra/Esconde Conteúdo da Fase
            phaseContents.forEach(content => {
                if (content.id === `phase-${selectedPhase}-content`) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });

            // Atualiza Indicador de Fase e Barra de Progresso
            phaseIndicator.textContent = `Fase ${selectedPhase}`;
            progressBarFill.style.width = phaseProgress[selectedPhase];
        });
    });

});

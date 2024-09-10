const qnaList = [
    {
        q: '친구들과 모임에서 당신은 어떤 역할을 맡고 있나요?',
        a: [
            { answer: '모든 사람들을 챙기고 편안하게 만들어줘요', type: ['쏙쏙티'] },
            { answer: '활기를 불어넣으며 분위기를 띄워요', type: ['밤비티'] },
            { answer: '차분하고 현실적인 조언을 해줘요', type: ['콩콩티'] },
            { answer: '따뜻한 마음으로 사람들을 배려해요', type: ['대추생강차'] }
        ]
    },
    {
        q: '당신의 이상적인 휴가 계획은 어떤가요?',
        a: [
            { answer: '조용하고 균형 잡힌 일정으로 쉬고 싶어요', type: ['ABC 티'] },
            { answer: '짧고 상쾌하게 떠나 재충전하고 싶어요', type: ['진저레몬티'] },
            { answer: '가족이나 친구들과 함께 편안한 시간을 보내고 싶어요', type: ['호박차'] },
            { answer: '에너지가 넘치고 활동적인 여행을 가고 싶어요', type: ['생강차'] }
        ]
    },
    {
        q: '아침을 어떻게 시작하고 싶나요?',
        a: [
            { answer: '달콤하고 부드럽게 하루를 시작하고 싶어요', type: ['쏙쏙티'] },
            { answer: '상쾌하고 활기차게 하루를 열고 싶어요', type: ['밤비티'] },
            { answer: '고소하고 든든한 맛으로 하루를 채우고 싶어요', type: ['콩콩티'] },
            { answer: '강한 맛으로 에너지를 충전하고 싶어요', type: ['생강차'] }
        ]
    },
    {
        q: '당신이 바쁜 하루를 보낼 때, 어떻게 대처하나요?',
        a: [
            { answer: '차분하게 계획적으로 해결해요', type: ['호박차'] },
            { answer: '균형 잡힌 사고로 여유롭게 처리해요', type: ['ABC 티'] },
            { answer: '빠르고 효율적으로 해결해요', type: ['진저레몬티'] },
            { answer: '강렬하게 집중하여 빠르게 처리해요', type: ['생강차'] }
        ]
    },
    {
        q: '스트레스가 많을 때 당신은 어떻게 이겨내나요?',
        a: [
            { answer: '차분한 환경에서 천천히 마음을 다스려요', type: ['호박차'] },
            { answer: '상쾌한 기운을 느끼며 기운을 차려요', type: ['진저레몬티'] },
            { answer: '균형 잡힌 사고로 문제를 해결해요', type: ['ABC 티'] },
            { answer: '강한 자극으로 정신을 확 깨워요', type: ['생강차'] }
        ]
    },
    {
        q: '친구들과 함께 있을 때 당신은 어떤 타입인가요?',
        a: [
            { answer: '차분하고 안정감을 주는 타입', type: ['호박차'] },
            { answer: '활기차고 에너지를 주는 타입', type: ['밤비티'] },
            { answer: '실용적이고 든든한 친구', type: ['콩콩티'] },
            { answer: '따뜻하고 배려심 깊은 타입', type: ['대추생강차'] }
        ]
    },
    {
        q: '당신의 이상적인 휴식 시간은 어떻게 보내고 싶나요?',
        a: [
            { answer: '달콤하고 부드러운 차와 함께 편안하게 쉬어요', type: ['쏙쏙티'] },
            { answer: '상쾌하고 기분 좋은 분위기에서 휴식해요', type: ['밤비티'] },
            { answer: '고소하고 든든한 맛을 즐기며 여유를 가져요', type: ['콩콩티'] },
            { answer: '매콤한 차로 몸과 마음을 따뜻하게 하며 쉬어요', type: ['대추생강차'] }
        ]
    },
    {
        q: '평소 생활에서 당신이 가장 중시하는 가치는 무엇인가요?',
        a: [
            { answer: '달콤한 안정감과 일관성', type: ['쏙쏙티'] },
            { answer: '활기차고 긍정적인 에너지', type: ['밤비티'] },
            { answer: '실용적이고 실속 있는 선택', type: ['콩콩티'] },
            { answer: '따뜻하고 균형 잡힌 삶', type: ['ABC 티'] }
        ]
    }
];

let currentQuestion = 0;
let scores = {
    '쏙쏙티': 0,
    '밤비티': 0,
    '콩콩티': 0,
    '대추생강차': 0,
    'ABC 티': 0,
    '진저레몬티': 0,
    '호박차': 0,
    '생강차': 0
};

const totalQuestions = qnaList.length; // 총 질문 수

// 퀴즈 시작
function startQuiz() {
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('quiz-page').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const currentQnA = qnaList[currentQuestion];
    document.getElementById('question').innerText = currentQnA.q;
    const answerBox = document.getElementById('answer-box');
    answerBox.innerHTML = '';

    currentQnA.a.forEach(answerObj => {
        const btn = document.createElement('button');
        btn.innerText = answerObj.answer;
        btn.onclick = function () {
            answerObj.type.forEach(function(teaType) {
                scores[teaType] += 1;
            });
            nextQuestion(); // 답을 누르면 바로 다음 질문으로 넘어가도록 변경
        };
        answerBox.appendChild(btn);
    });

    updateProgressBar(); // 질문이 로드될 때마다 진행 바 업데이트
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < qnaList.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const result = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    document.getElementById('result').innerText = result;

    const resultImage = document.getElementById('result-image');
    const resultDescription = document.getElementById('result-description'); // 설명을 넣을 요소
    switch(result) {
        case '쏙쏙티':
            resultImage.src = '/image/쏙쏙티.png';
            resultDescription.innerText = "당신은 달콤하고 부드러운 성격입니다. 안정적이고 꾸준한 것을 선호하며, 쏙쏙티처럼 사람들에게 편안함을 줍니다.";
            break;
        case '밤비티':
            resultImage.src = '/image/밤비티.png';
            resultDescription.innerText = "당신은 상쾌하고 활기찬 성격입니다. 주변에 긍정적인 에너지를 주며, 밤비티처럼 새콤하고 상쾌한 매력을 가지고 있습니다.";
            break;
        case '콩콩티':
            resultImage.src = '/image/콩콩티.png';
            resultDescription.innerText = "당신은 실용적이고 차분한 성격입니다. 콩콩티처럼 고소하고 든든한 성격으로, 주변 사람들에게 안정감을 주는 존재입니다.";
            break;
        case '대추생강차':
            resultImage.src = '/image/대추생강차.png';
            resultDescription.innerText = "당신은 따뜻하고 배려심이 깊은 성격입니다. 대추생강차처럼 은은한 달콤함과 깊은 따뜻함을 가지고 있어 주변에 온기를 전달합니다.";
            break;
        case 'ABC 티':
            resultImage.src = '/image/ABC주스티.png';
            resultDescription.innerText = "당신은 균형 잡히고 조화로운 성격입니다. 다양한 요소를 잘 조화시키며, ABC 티처럼 모든 면에서 균형을 잘 맞추는 사람입니다.";
            break;
        case '진저레몬티':
            resultImage.src = '/image/진저레몬티.png';
            resultDescription.innerText = "당신은 깔끔하고 상쾌한 성격입니다. 진저레몬티처럼 신선한 기운을 가지고 있으며, 활기찬 하루를 선호합니다.";
            break;
        case '호박차':
            resultImage.src = '/image/호박차.png';
            resultDescription.innerText = "당신은 달콤하고 따뜻한 성격입니다. 호박차처럼 포근하고 배려심이 많아, 다른 사람들에게 안정감을 제공합니다.";
            break;
        case '생강차':
            resultImage.src = '/image/생강차.png';
            resultDescription.innerText = "당신은 강렬하고 에너지 넘치는 성격입니다. 생강차처럼 강한 맛과 함께 활기차게 문제를 해결하며, 빠르게 움직이는 성향이 있습니다.";
            break;
        default:
            resultImage.src = '';
            resultDescription.innerText = '';
            break;
    }

    document.getElementById('quiz-page').classList.add('hidden');
    document.getElementById('result-page').classList.remove('hidden');
}


function restartQuiz() {
    currentQuestion = 0;
    scores = {
        '쏙쏙티': 0,
        '밤비티': 0,
        '콩콩티': 0,
        '대추생강차': 0,
        'ABC 티': 0,
        '진저레몬티': 0,
        '호박차': 0,
        '생강차': 0
    };

    document.getElementById('result-page').classList.add('hidden');
    document.getElementById('start-page').classList.remove('hidden');
}


const qnaList = [
    {
        q: '친구들과 모임에서 당신의 역할은 무엇인가요?',
        a: [
            {
                answer: '사람들이 자연스럽게 어울릴 수 있도록 분위기를 조성해요',
                type: { '쏙쏙티': 1, '호박차': 1 }
            },
            {
                answer: '활기를 불어넣으며 분위기를 띄워요',
                type: { '밤비티': 1, '진저레몬티': 1 }
            },
            {
                answer: '필요할 때 조언을 제공하고, 주변을 잘 살펴요',
                type: { '콩콩티': 1, '대추생강차': 1 }
            },
            {
                answer: '사람들을 따뜻하게 맞이하고 배려해요',
                type: { '대추생강차': 1, 'ABC티': 1 }
            }
        ]
    },
    {
        q: '휴가를 떠날 때, 당신의 선택은?',
        a: [
            {
                answer: '여유롭게 책이나 음악을 즐기며 조용한 휴식을 취해요',
                type: { 'ABC티': 1, '쏙쏙티': 1 }
            },
            {
                answer: '자연 속에서 새로운 환경을 경험해보고 싶어요',
                type: { '진저레몬티': 1, '밤비티': 1 }
            },
            {
                answer: '가족이나 친구들과 함께 시간을 보내며 힐링해요',
                type: { '호박차': 1, '대추생강차': 1 }
            },
            {
                answer: '액티비티와 모험이 가득한 활동적인 휴가를 원해요',
                type: { '생강차': 1, '콩콩티': 1 }
            }
        ]
    },
    {
        q: '아침을 시작할 때 당신의 기분은 어떤가요?',
        a: [
            {
                answer: '조용하고 차분한 마음으로 하루를 시작해요',
                type: { '쏙쏙티': 1, '호박차': 1 }
            },
            {
                answer: '활기차고 신선한 에너지를 얻고 싶어요',
                type: { '밤비티': 1, '진저레몬티': 1 }
            },
            {
                answer: '든든한 마음으로 천천히 하루를 준비해요',
                type: { '콩콩티': 1, '대추생강차': 1 }
            },
            {
                answer: '강렬한 느낌으로 정신을 깨우고 싶어요',
                type: { '생강차': 1, '진저레몬티': 1 }
            }
        ]
    },
    {
        q: '바쁜 날이 예상될 때, 어떻게 준비하나요?',
        a: [
            {
                answer: '차분하게 일의 우선순위를 정하고 계획을 세워요',
                type: { '호박차': 1, '콩콩티': 1 }
            },
            {
                answer: '균형 잡힌 일정을 세우고, 중간중간 쉬는 시간을 가져요',
                type: { 'ABC티': 1, '쏙쏙티': 1 }
            },
            {
                answer: '빠르게 처리하고, 효율적으로 시간 관리를 해요',
                type: { '진저레몬티': 1, '밤비티': 1 }
            },
            {
                answer: '집중해서 일에 몰두하며 빨리 끝내려고 노력해요',
                type: { '생강차': 1, '대추생강차': 1 }
            }
        ]
    },
    {
        q: '스트레스가 많은 상황에서 당신은 어떻게 반응하나요?',
        a: [
            {
                answer: '조용한 시간을 가지며 내면을 다스려요',
                type: { '호박차': 1, '쏙쏙티': 1 }
            },
            {
                answer: '리프레시할 수 있는 활동을 하며 기분을 전환해요',
                type: { '진저레몬티': 1, '밤비티': 1 }
            },
            {
                answer: '객관적으로 문제를 분석하고 해결 방법을 찾아요',
                type: { 'ABC티': 1, '콩콩티': 1 }
            },
            {
                answer: '강한 자극이나 활동으로 스트레스를 풀어요',
                type: { '생강차': 1, '대추생강차': 1 }
            }
        ]
    },
    {
        q: '당신은 대체로 어떤 스타일의 친구인가요?',
        a: [
            {
                answer: '편안한 분위기를 만들어주는 친구',
                type: { '호박차': 1, '쏙쏙티': 1 }
            },
            {
                answer: '활발하고 분위기를 주도하는 친구',
                type: { '밤비티': 1, '진저레몬티': 1 }
            },
            {
                answer: '실용적이고 조언을 아끼지 않는 친구',
                type: { '콩콩티': 1, '대추생강차': 1 }
            },
            {
                answer: '따뜻하고 배려심이 깊은 친구',
                type: { '대추생강차': 1, 'ABC티': 1 }
            }
        ]
    },
    {
        q: '휴식을 취할 때, 당신이 가장 즐기는 방법은?',
        a: [
            {
                answer: '달콤한 음료나 간식을 즐기며 휴식을 취해요',
                type: { '쏙쏙티': 1, '호박차': 1 }
            },
            {
                answer: '상쾌한 공기를 마시며 가벼운 산책을 해요',
                type: { '밤비티': 1, '진저레몬티': 1 }
            },
            {
                answer: '느긋하게 휴식을 취하며 몸과 마음을 안정시켜요',
                type: { '콩콩티': 1, 'ABC티': 1 }
            },
            {
                answer: '따뜻한 차를 마시며 편안한 시간을 가져요',
                type: { '대추생강차': 1, '호박차': 1 }
            }
        ]
    },
    {
        q: '일상에서 가장 중요하게 생각하는 가치는 무엇인가요?',
        a: [
            {
                answer: '안정감과 조화로운 삶',
                type: { '쏙쏙티': 1, '호박차': 1 }
            },
            {
                answer: '새로운 경험과 긍정적인 에너지',
                type: { '밤비티': 1, '진저레몬티': 1 }
            },
            {
                answer: '실용성과 효율성',
                type: { '콩콩티': 1, 'ABC티': 1 }
            },
            {
                answer: '따뜻함과 배려',
                type: { '대추생강차': 1, 'ABC티': 1 }
            }
        ]
    }
];


let currentQuestion = 0;
let scores = {
    '쏙쏙티': 0,
    '밤비티': 0,
    '콩콩티': 0,
    '대추생강차': 0,
    'ABC티': 0,
    '진저레몬티': 0,
    '호박차': 0,
    '생강차': 0
};

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
            Object.keys(answerObj.type).forEach(teaType => {
                if (scores.hasOwnProperty(teaType)) {
                    scores[teaType] += answerObj.type[teaType];
                } else {
                    console.warn(`키 ${teaType}가 scores에 존재하지 않습니다.`);
                }
            });
            nextQuestion();
        };
        answerBox.appendChild(btn);
    });
}

// 다음 질문으로 이동
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < qnaList.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const maxScore = Math.max(...Object.values(scores));
    const topResults = Object.keys(scores).filter(teaType => scores[teaType] === maxScore);
    const result = topResults[Math.floor(Math.random() * topResults.length)];
    document.getElementById('result').innerText = result;

    const resultImage = document.getElementById('result-image');
    const resultDescription = document.getElementById('result-description');
    const purchaseButton = document.getElementById('purchase-button');

    let purchaseLink = "";
    let buttonColor = ""; // 버튼의 배경색을 저장할 변수
    let textColor = ""; // 버튼의 글자색을 저장할 변수
    switch(result) {
        case '쏙쏙티':
            resultImage.src = './image/ss.png';
            resultDescription.innerText = "당신은 달콤하고 부드러운 성격입니다. 안정적이고 꾸준한 것을 선호하며, 쏙쏙티처럼 사람들에게 편안함을 줍니다.";
            purchaseLink = 'https://smartstore.naver.com/morningful/products/4633964340';
            break;
        case '밤비티':
            resultImage.src = './image/bb.png';
            resultDescription.innerText = "당신은 상쾌하고 활기찬 성격입니다. 주변에 긍정적인 에너지를 주며, 밤비티처럼 새콤하고 상쾌한 매력을 가지고 있습니다.";
            purchaseLink = 'https://smartstore.naver.com/morningful/products/4718198243';
            break;
        case '콩콩티':
            resultImage.src = './image/kk.png';
            resultDescription.innerText = "당신은 실용적이고 차분한 성격입니다. 콩콩티처럼 고소하고 든든한 성격으로, 주변 사람들에게 안정감을 주는 존재입니다.";
            purchaseLink = 'https://smartstore.naver.com/morningful/products/4718154303';
            break;
        case '대추생강차':
            resultImage.src = './image/ds.png';
            resultDescription.innerText = "당신은 따뜻하고 배려심이 깊은 성격입니다. 대추생강차처럼 은은한 달콤함과 깊은 따뜻함을 가지고 있어 주변에 온기를 전달합니다.";
            purchaseLink = 'https://smartstore.naver.com/morningful/products/4850368790';
            break;
        case 'ABC티':
            resultImage.src = './image/abc.png';
            resultDescription.innerText = "당신은 균형 잡히고 조화로운 성격입니다. 다양한 요소를 잘 조화시키며, ABC티처럼 모든 면에서 균형을 잘 맞추는 사람입니다.";
            purchaseLink = 'https://smartstore.naver.com/morningful/products/5733938166';
            break;
        case '진저레몬티':
            resultImage.src = './image/jl.png';
            resultDescription.innerText = "당신은 깔끔하고 상쾌한 성격입니다. 진저레몬티처럼 신선한 기운을 가지고 있으며, 활기찬 하루를 선호합니다.";
            purchaseLink = 'https://smartstore.naver.com/morningful/products/5751742638';
            break;
        case '호박차':
            resultImage.src = './image/hb.png';
            resultDescription.innerText = "당신은 달콤하고 따뜻한 성격입니다. 호박차처럼 포근하고 배려심이 많아, 다른 사람들에게 안정감을 제공합니다.";
            purchaseLink = 'https://smartstore.naver.com/morningful/products/8925054549';
            break;
        case '생강차':
            resultImage.src = './image/sg.png';
            resultDescription.innerText = "당신은 강렬하고 에너지 넘치는 성격입니다. 생강차처럼 강한 맛과 함께 활기차게 문제를 해결하며, 빠르게 움직이는 성향이 있습니다.";
            purchaseLink = 'https://smartstore.naver.com/morningful/products/4718198243';
            break;
        default:
            resultImage.src = '';
            resultDescription.innerText = '';
            break;
    }

    // 버튼의 링크를 업데이트하고, 버튼을 보여줍니다.
    purchaseButton.innerText = `${result} 구매하러 가기`;
    purchaseButton.href = purchaseLink;
    purchaseButton.classList.remove('hidden');

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
        'ABC티': 0,
        '진저레몬티': 0,
        '호박차': 0,
        '생강차': 0
    };

    document.getElementById('result-page').classList.add('hidden');
    document.getElementById('start-page').classList.remove('hidden');
}


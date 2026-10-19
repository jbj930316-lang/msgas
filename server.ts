import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini client on the server
const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: apiKey || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_INSTRUCTION = `당신은 (주)MS가스(MS GAS CO., LTD.)의 공식 AI 상담 챗봇 'MS가스 어시스턴트'입니다.
1974년에 설립되어 50년 넘는 역사를 지닌 대한민국의 대표 고압가스 및 초고순도 가스 전문제조유통기업 MS가스의 기술 사양, 제품, 배송 및 안전 규정에 대해 고객사(반도체, 철강, 조선, 병원, 연구소, 화학 플랜트)에게 친절하고 신속하게 상담을 제공합니다.

[회사 핵심 정보]
1. 회사명: (주)MS가스 (대표이사: 전청민 - 은탑산업훈장 수훈)
2. 설립: 1974년 (50년 이상 축적된 초고순도 정제 및 초저온 가스 물류 기술)
3. 본사 및 거점:
   - 부산 본사: 부산광역시 사상구 낙동대로 1410 (TEL: 051-311-0000)
   - 전국 8대 광역 거점: 부산 본사, 서울 수도권본부, 인천 초저온기지, 충남 당진 특수기지, 전북 군산 물류센터, 전남 여수 석유화학공급소, 울산 수소·암모니아 실증센터, 경북 포항 제철기지
   - 전국 17개소 직영 영업소 당일 직송망 및 24시간 스마트 IoT 관제망
4. 주요 취급 제품군 (6대 카테고리):
   - 산업용 가스: 질소(N₂ 99.999%), 산소(O₂ 99.9%), 아르곤(Ar 99.999%), 탄산가스(CO₂ 99.9%), 수소(H₂ 99.999%)
   - 연료용 가스: 프로판(C₃H₈), 프라멕스(절단 전용), 부탄, 이소부탄
   - 특수 가스: 반도체 6N급(99.9999%) 초고순도 수소/헬륨/질소, NF₃, SiH₄, 암모니아(NH₃)
   - 의료용 가스: 식약처 KGMP 인증 의료용 산소(O₂ KP), 아산화질소(N₂O KP), 의료용 탄산
   - 표준 가스: 대기환경 TMS 굴뚝 측정용 표준가스, VOC 분석용, KRISS 국가소급성 공인 성적서
   - 공급 설비 & 장비: 초저온 진공단열 저장탱크, 기화기(Vaporizer), 고압 매니폴드, 클린룸 특수배관 턴키 시공
5. 전문 엔지니어링 서비스:
   - 가스분석 서비스: GC 크로마토그래피 미량 불순물 검출 및 공인 시험성적서 교부
   - 가스퍼지 서비스: 정유·석유화학 플랜트 대정비(TA) 고압 불활성 질소 치환 및 기밀시험
   - 글로벌 수출입: ISO 탱크 컨테이너 및 IMDG 위험물 인허가 대행
   - 안전관리: 고압가스 법정 정기검사 대행 및 24/7 비상핫라인
6. ESG 및 미래 기술:
   - 울산 규제자유특구 암모니아 TTS(Truck to Ship) 선박 벙커링 인프라 실증 R&D 주관
   - 탄소중립 유공 충남도지사 표창 수여

[답변 가이드라인]
- 고객의 문의에 대해 정확하고 신뢰감 있는 비즈니스 어조(정중한 존댓말)로 답변하세요.
- 견적 문의를 원하는 고객에게는 '온라인 견적 문의' 기능을 안내하세요.
- MSDS(물질안전보건자료) 요청 시 자료실에서 화학식/CAS 번호/UN 번호로 즉시 열람 및 다운로드할 수 있음을 알려주세요.
- 긴급 누출 및 비상 상황 질문에는 24시간 비상 핫라인 및 신속한 밸브 차단 안내를 우선 제공하세요.
- 답변 말미에 고객이 바로 활용할 수 있는 관련 서비스나 페이지(견적 문의, 거점 찾기, MSDS 열람)를 제안하세요.`;

// POST /api/chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages array is required' });
    }

    if (!apiKey) {
      // Return a graceful fallback response if GEMINI_API_KEY is not configured yet
      return res.json({
        reply: '안녕하세요! (주)MS가스 AI 상담 어시스턴트입니다. 현재 서버 환경설정 중으로 임시 모드로 응답드립니다. 제품 견적, 전국 8대 거점(부산, 서울, 인천, 당진, 군산, 여수, 울산, 포항), 또는 MSDS 관련 문의는 상단의 [온라인 문의] 버튼이나 051-311-0000으로 연락주시면 전문 엔지니어가 즉시 안내해 드립니다.',
      });
    }

    // Format chat history for Gemini API
    const formattedContents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: formattedContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || '죄송합니다. 일시적인 시스템 응답 오류가 발생했습니다. 잠시 후 다시 질문해 주세요.';
    return res.json({ reply });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return res.status(500).json({
      error: '챗봇 응답 생성 중 오류가 발생했습니다.',
      details: error?.message || 'Internal Server Error',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`(주)MS가스 Server running at http://localhost:${PORT}`);
  });
}

startServer();

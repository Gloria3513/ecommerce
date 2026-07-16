import { NextResponse } from "next/server";

// Mock Data for fallback when Behold.so API is not set up
const MOCK_INSTAGRAM_FEEDS = [
  {
    id: "mock_feed_1",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&auto=format&fit=crop&q=80",
    permalink: "https://instagram.com",
    caption: "오늘 갓 제작된 달콤한 향의 핸드메이드 소이 캔들이에요! 🕯️ 방 안 가득 은은한 로즈 향을 느껴보세요. #소품샵 #핸드메이드 #캔들 #Lody샵",
    timestamp: "2026-07-15T09:00:00Z"
  },
  {
    id: "mock_feed_2",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1584992236310-6edddc085ff6?w=600&auto=format&fit=crop&q=80",
    permalink: "https://instagram.com",
    caption: "포근포근한 크로셰 미니 파우치 한정 수량 입고 완료! 🧶 귀여운 Smart-ro가 품질 검사를 마쳤답니다. #뜨개질 #핸드메이드 #파우치 #로봇도반함",
    timestamp: "2026-07-14T08:30:00Z"
  },
  {
    id: "mock_feed_3",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80",
    permalink: "https://instagram.com",
    caption: "Lody가 가장 좋아하는 방구석 힐링 코너 ☕ 따뜻한 우드 감성 소품들로 나만의 힐링 공간을 꾸며보세요. #방꾸미기 #감성소품 #인테리어 #늘보의휴식",
    timestamp: "2026-07-13T12:00:00Z"
  },
  {
    id: "mock_feed_4",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=80",
    permalink: "https://instagram.com",
    caption: "매일매일 기록하고 싶은 다꾸 스티커 세트 🎨 다이어리 꾸미기에 진심인 분들을 위해 직접 드로잉한 스티커랍니다. #다꾸 #스티커 #문구덕후 #Smartro추천",
    timestamp: "2026-07-12T04:15:00Z"
  },
  {
    id: "mock_feed_5",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1576016770956-debb63d90029?w=600&auto=format&fit=crop&q=80",
    permalink: "https://instagram.com",
    caption: "오묘한 마블링이 들어간 도자기 컵 🥛 수작업으로 빚어내어 세상에 단 하나뿐인 디자인이에요. #도자기 #핸드메이드식기 #홈카페 #소품샵",
    timestamp: "2026-07-11T15:20:00Z"
  },
  {
    id: "mock_feed_6",
    media_type: "IMAGE",
    media_url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80",
    permalink: "https://instagram.com",
    caption: "실버 체인과 천연 원석의 영롱한 조화 ✨ 여름철 가볍게 포인트 주기 좋은 핸드메이드 팔찌입니다. #수공예주얼리 #핸드메이드악세사리 #선물추천",
    timestamp: "2026-07-10T10:00:00Z"
  }
];

export async function GET() {
  const BEHOLD_API_URL = process.env.BEHOLD_API_URL;

  if (!BEHOLD_API_URL) {
    // Return mock data with a header indicating it is simulated
    return NextResponse.json(MOCK_INSTAGRAM_FEEDS, {
      headers: {
        "X-Data-Source": "Mocked-Fallback"
      }
    });
  }

  try {
    const response = await fetch(BEHOLD_API_URL, {
      next: { revalidate: 86400 } // Cache for 24 hours (1 day)
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from Behold.so: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Instagram feed from Behold.so:", error);
    // On error, gracefully fallback to mock data rather than crashing
    return NextResponse.json(MOCK_INSTAGRAM_FEEDS, {
      headers: {
        "X-Data-Source": "Mocked-Error-Fallback"
      }
    });
  }
}

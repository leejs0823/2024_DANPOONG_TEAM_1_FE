const colors = {
  // 기타 디자인 주요 색상 설정
  primary1: '#27104E',
  primary2: '#9A50F1',
  primary3: '#F9F7FE',
  skyBlue: '#5098F1',
  deepBlue: '#3883E0',
  white: '#FFFFFF',
  black: '#000000',
  gray1: '#f7f7f7',
  gray2: '#f4f4f4',
  gray3: '#dbdbdb',
  gray4: '#b0b0b0',
  gray5: '#878787',
  gray6: '#5a5a5a',
  gray7: '#393939',
  gray8: '#202020',
  gray9: '#121212',
};

function FONT({ weight, size, lineHeight }) {
  return `
    font-family: "Pretendard";
    font-weight : ${weight};
    font-size : ${size}px;
    line-height : ${lineHeight}px;
    `;
}

const fonts = {
  extra_bold: FONT({ weight: 800, size: 20, lineHeight: 32 }),
  bold: FONT({ weight: 700, size: 16, lineHeight: 19 }),
  medium: FONT({ weight: 500, size: 16, lineHeight: 19 }),
  regular: FONT({ weight: 400, size: 16, lineHeight: 19 }),
  nav: FONT({ weight: 600, size: 18, lineHeight: 29 }),
  tutorial_head: FONT({ weight: 700, size: 24, lineHeight: 24 }),
  tutorial_strong: FONT({ weight: 700, size: 20, lineHeight: 20 }),
  tutorial_sub: FONT({ weight: 500, size: 18, lineHeight: 18 }),
  tutorial_text: FONT({ weight: 500, size: 13, lineHeight: 20 }),
  category_strong: FONT({ weight: 800, size: 20, lineHeight: 28 }),
  category_sub: FONT({ weight: 500, size: 20, lineHeight: 28 }),
  option_content: FONT({ weight: 500, size: 13, lineHeight: 13 }),
  user: FONT({ weight: 500, size: 18, lineHeight: 18 }),
  // 디자인 통일 폰트 설정 및 폰트 스타일 정의
};

export const theme = {
  colors,
  fonts,
};

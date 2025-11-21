import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // 환경 변수를 로드합니다.
  // mode 값은 'development' (dev 서버) 또는 'production' (빌드 시)이 됩니다.

  // 1. 배포 환경(production)일 경우에만 base 경로를 저장소 이름으로 설정합니다.
  const base = mode === 'production'
    ? '/portfolio/' // 실제 저장소 이름으로 변경하세요!
    : '/'; // 로컬 개발(development)에서는 루트 경로 '/'를 사용합니다.

  return {
    base,
    plugins: [react()],
  };
})

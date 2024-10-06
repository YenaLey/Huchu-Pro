const express = require("express");
const app = express();
const itemRoutes = require("./routes/itemRoutes");

// 미들웨어
app.use(express.json()); // JSON 데이터 파싱

// 라우트 연결
app.use("/api", itemRoutes); // /api 경로에 라우트 연결

// 서버 실행
const port = 8080;
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});

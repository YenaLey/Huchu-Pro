const mysql = require("mysql2");

// MySQL 연결 설정
const db = mysql.createConnection({
  host: "localhost", // DB 서버 주소
  user: "root", // DB 사용자 이름
  password: "password", // DB 비밀번호
  database: "mydatabase", // 사용할 데이터베이스 이름
});

// 연결
db.connect((err) => {
  if (err) {
    console.error("DB 연결 실패:", err);
  } else {
    console.log("MySQL에 연결 성공");
  }
});

module.exports = db;

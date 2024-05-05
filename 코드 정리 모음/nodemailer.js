const nodemailer = require('nodemailer');
const userData = require('./config.json').naver;
const mailConfig = {
  service: 'Naver',
  host: 'smtp.naver.com',
  port: 587,
  auth: {
    user: '유저아이디',
    pass: '유저 비번',
  },
};
let transporter = nodemailer.createTransport(mailConfig);
function test(_email, _idx) {
  return new Promise(function (resolve, reject) {
    console.log(`${_idx}번째`);
    let message = {
      from: 'Myro <받을 사람>',
      to: _email,
      subject: '이메일 인증 요청 메일입니다.',
      html: '<p> 여기에 인증번호나 token 검증 URL 붙이시면 됩니다! </p>',
    };

    transporter.sendMail(message, function (err, info) {
      //   console.log(1111111111, err);
      //   console.log(2222222222, info);
      if (err) {
        reject(err);
      } else {
        setTimeout(() => {
          resolve(info);
        }, 300);
      }
    });
  });
}

(async function () {
  for (let i = 0; i < 10; i++) {
    await test(userData.test, i);
  }
})();

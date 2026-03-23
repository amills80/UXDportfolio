const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const filePath = path.join(__dirname, '../../public/resume.pdf');
  const fileBuffer = fs.readFileSync(filePath);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Alan-Mills-Resume.pdf"',
    },
    body: fileBuffer.toString('base64'),
    isBase64Encoded: true,
  };
};

const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const candidatePaths = [
    path.join(process.cwd(), 'public', 'resume.pdf'),
    path.join(__dirname, '../../public/resume.pdf'),
    path.join(__dirname, '../../../public/resume.pdf'),
  ];
  const filePath = candidatePaths.find((p) => fs.existsSync(p));

  try {
    if (!filePath) {
      return {
        statusCode: 404,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Resume file not found.' }),
      };
    }

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
  } catch (error) {
    console.error('download-resume function failed:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Unable to download resume right now.' }),
    };
  }
};

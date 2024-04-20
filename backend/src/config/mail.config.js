import mailjet from 'node-mailjet';

export function getClient() {
  const mailjetClient = mailjet.connect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_API_SECRET
  );

  return mailjetClient;
}

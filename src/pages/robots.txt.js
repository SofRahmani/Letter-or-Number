export async function getServerSideProps({ res }) {
  const robotsContent = `
  User-agent: *
  Disallow: /secret-page
  `;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsContent);
  res.end();

  return {
    props: {},
  };
}

const Robots = () => {
  
};

export default Robots;

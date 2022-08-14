export default (req, res) => {
  res.status(200).json({
    id: 1,
    firstName: 'Brendon',
    lastName: 'Freston',
    email: 'this@that.com',
    profileImage: 'https://avatars.githubusercontent.com/u/18052365?v=4',
  });
};

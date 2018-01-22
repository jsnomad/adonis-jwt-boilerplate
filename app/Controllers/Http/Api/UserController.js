class UserController {
  async getUser({ response, auth }) {
    try {
      const { email, username } = await auth.getUser();
      return { email, username };
    } catch (error) {
      response.send('Missing or invalid jwt token');
    }
  }
}
module.exports = UserController;

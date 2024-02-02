exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/highlight`,
    toPath: `https://docs.google.com/forms/d/e/1FAIpQLScuZM7H0AbcYEx2f4Nbyol46tobRUrzx5PXgQcy720ynd_RYw/viewform`,
  });
};

exports.createPages = async (param) => {
  const { createRedirect } = param.actions

  createRedirect({
    fromPath: `/`,
    toPath: `/en/`,
    conditions: {
      language: [`en`],
    },
  })
}
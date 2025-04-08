function status(request, response) {
  response.status(200).json({
    status:
      "Em quem buscaremos socorro a não ser em alguém mais forte do que nós?",
  });
}

export default status;

function status(request, response) {
  response.status(200).json({
    Nome: "Gabriel Henrique Nierich",
  });
}

export default status;

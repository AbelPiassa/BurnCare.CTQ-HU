
exports.index = (req, res) => {
  res.render('home', {
    titulo: 'BurnCare',
    mensagem: 'Sistema de Gestão de Malhas Compressivas'
  });
};

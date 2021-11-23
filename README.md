### Essa é uma API que pega os dados de alguma API, manda para uma fila no redis, e salva os dados em um banco local, fiz usando de exemplo a api de HarryPotter.
Para funcionar em alguma outra API,basta criar uma @Entity com os dados que quer salvar, além typar a resposta que ela manda, e passar os objetos para fila. Assim que chegar na fila já vai ser processado pelo @Process, e salvo no banco

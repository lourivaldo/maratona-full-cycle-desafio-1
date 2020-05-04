<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="http://maratona.fullcycle.com.br/public/img/logo-maratona.png"/></a>
</p>

# Desafio 1

## Instalação e preparação do ambiente

O primeiro passo para que você consiga acompanhar muito bem a Maratona é ter o seu ambiente de desenvolvimento pronto para conseguir simular tudo que te apresentaremos nos próximos vídeos. Nesse ponto o que você deve fazer como desafio será:

-[x] 1\. Instalar o Node.js em seu computador
-[x] 2\. Criar um webserver que escuta na porta 3000
-[x] 3\. Ao acessar o webserver, a seguinte mensagem deverá aparecer: "Maratona Full Cycle 2.0"
-[x] 4\. Instalar o Docker em seu computador
-[x] 5\. Gerar uma imagem Docker dessa aplicação a partir da imagem node:14.1-alpine.
-[x] 6\. Publicar a imagem no Dockerhub
-[x] 7\. Quando executarmos: docker run -p 3000:3000 seu-login-docker/nome-da-sua-imagem deveremos ver a mensagem na porta 3000 de nosso browser
-[x] 8\. Postar nos comentários do vídeo a URL da sua imagem para que possamos executar

> Dica Importante: Desenvolvemos um Guia Rápido de Docker. Ele está no [Canal do Telegram](https://t.me/devfullcycle). Para acessar e baixar, [clique aqui](https://t.me/devfullcycle)

### Resposta

##### Imagem disponível em [lourivaldo/maratona-full-cycle-desafio-1](https://hub.docker.com/r/lourivaldo/maratona-full-cycle-desafio-1])

```
sudo docker build -t lourivaldo/maratona-full-cycle-desafio-1 .
sudo docker run -d --name maratona-full-cycle-desafio-1 -p 3000:3000 lourivaldo/maratona-full-cycle-desafio-1
sudo docker rm -f maratona-full-cycle-desafio-1
sudo docker push lourivaldo/maratona-full-cycle-desafio-1
sudo docker rmi -f lourivaldo/maratona-full-cycle-desafio-1 
sudo docker run -d --name maratona-full-cycle-desafio-1 -p 3000:3000 lourivaldo/maratona-full-cycle-desafio-1
```

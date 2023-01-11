# Instruções para rodar o Docker

Na diretório do projeto, rode o comando:

    $ docker build -t ps-container:dev .

Com o container criado, rode os seguintes comandos:

    $ docker run -it --rm \

    -v ${PWD}:/app \

    -v /app/node_modules \

    -p 3001:3000 \

    -e CHOKIDAR_USEPOLLING=true \

    ps-container:dev

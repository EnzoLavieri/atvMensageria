para rodar a aplicacao siga os seguintes passos:

-inicie o RabbitMQ com o comando Docker
docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 -p 15672:15672 rabbitmq:3-management

-inicie o produtores
node producer.js

-inicie o consumidor
node consumer.js





Conceitos de Mensageria para estudar amanha na viagem

1. Filas: Armazenam mensagens até que sejam processadas por um consumidor.
2. Produtores: Enviam mensagens para uma fila.
3. Consumidores: Processam mensagens da fila.
4. RabbitMQ: Uma plataforma de mensageria popular que permite a comunicação assíncrona.
5. Mensagens: Dados enviados pelos produtores e consumidos pelos consumidores, usados para processar tarefas.

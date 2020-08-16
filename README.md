## prova-fullstack-php-react

```
    Esse projeto é uma aplicação feita por mim para participação de um processo seletivo.
    Se assemelha com uma landing page personalizada com cadastro e listagem de pessoas. 
    Utiliza React.js no frontend e Php com Laravel no Backend. 
```

## Tecnologias utilizadas
- Node.js v10.16.0
- Php 7.2.24
- Laravel 3.2
- MySQL 5.7
- Composer 1.10.10

## Estrutura do projeto

```
    ├── client                              # Código Frontend (React.js)
    ├── server                              # Código Backend (Php e Laravel)
    ├── arrays.php                          # Exercício/desafio php - Arrays
    ├── object-oriented.php                 # Exercício/desafio php - Orientação a objeto
    ├── programming-logic.php               # Exercício/desafio php - Lógica de programação
    ├── prova-php.postman_collection.json   # Coleção dos endpoints da API exportada do Postman
    ├── README.md                           # Arquivo markdown com o texto aqui descrito
    ├── recursive-function.php              # Exercício/desafio php - Função recursiva
    └── ...
```

## Start da API:
1 Navegue ate o diretório server/api;  
2 Copie o arquivo `.env.staging` para um arquivo `.env`, onde ficará as variáveis de ambiente.  
3 Substitua as variáveis de conexão ao banco MySQL em que deseja persistir os dados no arquivo `.env` Ex:  

    DB_CONNECTION=mysql  
    DB_HOST=127.0.0.1  
    DB_PORT=3306  
    DB_DATABASE=exam  
    DB_USERNAME=root  
    DB_PASSWORD=root  
    
4 Execute o comando `composer install` para instalação das dependências;      
5 Execute o comando `php artisan migrate` para geração das tabelas;  
6 Execute o comando `php artisan serve`;  
O servidor ser iniciado no http://localhost:8000/ ou no endereço e porta configurados;  

## Start da Aplicaço frontend:
1 Navegue at o diretório client/app;  
2 Execute o comando `npm install`;  
3 Execute o comando `npm start`;  
A aplicaço ser iniciada no endereço http://localhost:3000/ ou no endereço e porta configurados;  


## Autor

    Guilherme Corintho Pereira Araujo
    guilhermecorintho@gmail.com
    
![image](https://drive.google.com/uc?export=view&id=1By1vd3I5HTT94ZRxNBUSW05MqkW_iUgv)  

## Video demonstrativo:

[![Video](https://img.youtube.com/vi/iMz8NmgB-_U/0.jpg)](https://www.youtube.com/watch?v=iMz8NmgB-_U)
